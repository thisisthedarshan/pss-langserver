/*
 * Copyright (C) 2025 Darshan(@thisisthedarshan)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
  TextEdit,
  Connection,
  DidChangeConfigurationParams,
  ParameterInformation,
  SignatureInformation,
  SignatureHelpParams,
  SignatureHelp,
  SemanticTokensLegend,
  SemanticTokensParams,
  DefinitionParams,
  Location,
  LocationLink
} from 'vscode-languageserver/node';

import {
  TextDocument
} from 'vscode-languageserver-textdocument';
import { formatDocument } from './providers/formattingProvider';
import { buildAutocompletionBlock, buildAutocompletionBuiltinsBlock, fullRange, generateSemanticTokens, getGoToDefinition, scanDirectory, updateAST, updateASTMeta, updateStringArray } from './helper_functions';
import fs from 'fs-extra';
import { builtInSignatures } from './definitions/builtinFunctions';
import { metaData, PSS_Config, semanticTokensLegend } from './definitions/dataTypes';

/* Support all connection types - ipc, stdio, tcp */
const connection = createConnection(ProposedFeatures.all);

/* Documents manager */
const documents = new TextDocuments(TextDocument);

var globalAST: metaData[] = []; /* Holds all metaData on all files */
var builtInCompletions: CompletionItem[]; /* Holds all autocompletion items */
var isFirst = true;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = true;
let hasDiagnosticRelatedInformationCapability = false;

/* Setup initialization */
connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;
  const workspaceFolders = params.workspaceFolders || [];
  const pssFiles: string[] = [];

  /* Start by creating an auto-completion suggestions for built-in functionality */
  builtInCompletions = buildAutocompletionBuiltinsBlock();
  connection.console.log("PSS Language Server Started");
  for (const folder of workspaceFolders) {
    scanDirectory(folder.uri.replace('file://', ''), pssFiles);
  }

  // Process found files
  for (const file of pssFiles) {
    const content: string = fs.readFileSync(file, 'utf8');
    const fileURI: string = "file://" + file;
    // Process file content here
    updateAST(fileURI, content).then(vars => {
      globalAST = updateASTMeta(globalAST, vars);
    });
  }

  /* Does the client support the `workspace/configuration` request? */
  /* If not, we fall back using global settings. */
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      /* Antlr just generates AST (not CST) so incremental sync isn't a good idea */
      textDocumentSync: TextDocumentSyncKind.Full,
      /* Tell the client that this server supports code completion. */
      completionProvider: {
        resolveProvider: true
      },
      /* Our language has inter-file dependencies */
      /* For now, we will not support diagnostics */
      diagnosticProvider: undefined,
      /*{
        interFileDependencies: true,
        workspaceDiagnostics: false
      },*/
      documentFormattingProvider: true,
      signatureHelpProvider: {
        triggerCharacters: ['(', ',']
      },
      semanticTokensProvider: {
        legend: semanticTokensLegend,
        range: true,
        full: true
      },
      definitionProvider: true,
      declarationProvider: false,
      /* End Capabilities */
    }
  };
  /* Supports workspace */
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true
      }
    };
  }
  return result;
});

/* Completed initialization */
connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
});

/* Default settings - in case config not supported */
const defaultSettings: PSS_Config = { tabspaces: 4, fileAuthor: "" };
let globalSettings: PSS_Config = defaultSettings;

/* Cache the settings of all open documents */
const documentSettings = new Map<string, Thenable<PSS_Config>>();

/* When connection/config change */
connection.onDidChangeConfiguration((change: DidChangeConfigurationParams) => {
  documentSettings.clear();
  if (!hasConfigurationCapability) {
    globalSettings = change.settings.PSS || defaultSettings;
  }
  /*connection.languages.diagnostics.refresh();*/
});

/* For future use - with diagnostics */
/*connection.sendDiagnostics({ uri: "", diagnostics: [] });*/

function getSettings(connection: Connection, resource: string): Thenable<PSS_Config> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }

  let result = documentSettings.get(resource);
  if (!result) {
    result = Promise.all([
      connection.workspace.getConfiguration({ scopeUri: resource, section: 'PSS.tabspaces' }),
      connection.workspace.getConfiguration({ scopeUri: resource, section: 'PSS.fileAuthor' })
    ]).then(([tabspaces, fileAuthor]) => {
      // Validate tabspaces
      const validatedTabspaces = Math.min(Math.max(tabspaces ?? defaultSettings.tabspaces, 1), 9);
      return {
        tabspaces: validatedTabspaces,
        fileAuthor: fileAuthor ?? defaultSettings.fileAuthor
      };
    });

    documentSettings.set(resource, result);
  }
  return result;
}

/* File has been closed - so drop that config */
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});


/* Event when a document is changed or first opened */
documents.onDidChangeContent(change => {
  /* Call async file processor */
  updateAST(change.document.uri.toString(), change.document.getText().toString()).then(result => {
    globalAST = updateASTMeta(globalAST, result);
  });

});

/* See if monitored files have changed */
connection.onDidChangeWatchedFiles(_change => {
  connection.console.log('We received a file change event');
});

/* Completions provider */
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    let completions = [...builtInCompletions, ...buildAutocompletionBlock(globalAST)]
    return [...new Set(completions)];
  }
);

/* Resolve info about selected item in completion list */
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    /* No plans for now - later we will add comment parsing as well */
    return item;
  }
);

/* Provide function Signatures */
connection.onSignatureHelp(
  (params: SignatureHelpParams): SignatureHelp | null => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;

    const position = params.position;
    const line = document.getText({
      start: { line: position.line, character: 0 },
      end: position
    });

    // Updated regex to match function name with parameters
    const match = line.match(/(\w+)\((.*)/);
    if (!match) return null;

    const funcName = match[1];
    const funcInfo = builtInSignatures[funcName as keyof typeof builtInSignatures];
    if (!funcInfo) return null;

    // Count commas to determine active parameter
    var activeParameter = (match[2].match(/,/g) || []).length;

    const parameters = funcInfo.parameters.map(p =>
      ParameterInformation.create(p.label, p.documentation)
    );

    /* This hack simply ensures that the function signature helper respects varargs... */
    if (parameters[parameters.length - 1].label === "...args" && activeParameter > parameters.length - 1) {
      activeParameter = parameters.length - 1;
    }

    const signature = SignatureInformation.create(
      funcInfo.signature,
      funcInfo.documentation,
      ...parameters
    );

    return {
      signatures: [signature],
      activeSignature: 0,
      activeParameter
    };
  }
);

/* Provide semantic tokens to the client */
connection.languages.semanticTokens.on(async (params: SemanticTokensParams) => {
  const uri = params.textDocument.uri;
  const document = documents.get(uri);

  if (!document) return { data: [] };

  const ast = await updateAST(uri, document.getText());
  return {
    data: generateSemanticTokens(document.getText(), ast)
  };

});

/* Provide formatting */
connection.onDocumentFormatting((params, tokens) => {
  const { textDocument, options } = params;

  const sourceDocument = documents.get(textDocument.uri);
  if (!sourceDocument) return []; /* File doesn't exist */

  /* Get contents of the document */
  const documentContents = sourceDocument.getText();

  /* Get settings for author name and tabspaces and return formatted text */
  return getSettings(connection, sourceDocument.uri).then((settings) => {
    const formattedText = formatDocument(documentContents, settings.tabspaces, settings.fileAuthor);
    return [TextEdit.replace(fullRange(sourceDocument), formattedText)];
  });
});

/* Provide go-to functionality */
connection.onDefinition((params: DefinitionParams): Location | null => {
  const { textDocument, position } = params;
  const doc = documents.get(textDocument.uri);
  if (!doc) { return null }
  const content = doc.getText()
  const offset = doc.offsetAt(position);
  return getGoToDefinition(content, offset, globalAST);
}
);

/* Prepare to listen */
documents.listen(connection);

/* Start listening */
connection.listen();