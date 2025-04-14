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
  SemanticTokensParams,
  DefinitionParams,
  Definition,
  SemanticTokens,
  HoverParams,
  Hover,
  DeclarationParams,
  Declaration,
  ReferenceParams,
  Location,
} from 'vscode-languageserver/node';

import {
  TextDocument
} from 'vscode-languageserver-textdocument';
import { formatDocument } from './providers/formattingProvider';
import { builtInSignatures } from './definitions/builtinFunctions';
import { DoxygenGenerationRequest, DoxygenGenerationResponse, PSS_Config, RequestDoxygenGeneration, semanticTokensLegend } from './definitions/dataTypes';
import { version } from './version';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { buildASTForFiles, notify } from './helpers';
import { buildMarkdownComment, fullRange, getNodeFromNameArray, scanDirectory, updateAST, updateASTMeta, updateASTNew, updateASTNewMeta } from './parser/helpers';
import { buildAutocompletions, buildAutocompletionBuiltinsBlock } from './providers/autoCompletionProvider';
import { createSemanticTokensFor, generateSemanticTokensAdvanced } from './providers/semanticTokenProvider';
import { getGoToDeclarationsAdvanced, getGoToDefinitionAdvanced, getReferencesAdvanced } from './providers/gotoProvider';
import { buildHoverItems, createBuiltinHoverCache, getHoverFor } from './providers/hoverProvider';
import { FunctionNode, PSSLangObjects } from './definitions/dataStructures';
import debounce from 'lodash.debounce';
import { keywords } from './definitions/keywords';
import { createCommentsFromNode } from './providers/objectCommentsProvider';

/* To make the process act like an actual executable */
const args = process.argv.slice(2);
if (args.includes('--version') || args.includes('-v')) {
  /* Show build information */
  version();
  process.exit(0);
}

/* Support all connection types - ipc, stdio, tcp */
const connection = createConnection(ProposedFeatures.all);

/* Documents manager */
const documents = new TextDocuments(TextDocument);

/* Boolean to track the first scan of files. */
var isFirst = true; /* To check if an ast has already been built or not */

/* Caches */
/*var globalAST: metaData[] = []; /* Holds all metaData on all files */
var pssAST: PSSLangObjects[] = [];
var autoCompletions: CompletionItem[] = [];
var hoverCache: Record<string, Hover>[] = [];

/* Caches for built-in objects - like keywords and functions */
var hoverCacheBuiltin: Record<string, Hover>[] = [];
var builtInCompletions: CompletionItem[]; /* Holds all autocompletion items */
var semanticTokenCache: SemanticTokens | undefined = undefined;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = true;
let hasDiagnosticRelatedInformationCapability = false;

/* Setup initialization */
connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;
  const workspaceFolders = params.workspaceFolders || [];
  const pssFiles: string[] = [];

  for (const folder of workspaceFolders) {
    let dir = decodeURIComponent(folder.uri.replace('file://', ''));
    scanDirectory(dir, pssFiles);
  }

  /* Process found files */
  pssAST = buildASTForFiles(pssFiles);
  if (pssAST.length > 0) {
    isFirst = false;
    autoCompletions = buildAutocompletions(pssAST);
    hoverCache = buildHoverItems(pssAST);
    semanticTokenCache = generateSemanticTokensAdvanced(pssAST);
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
        resolveProvider: true,
        triggerCharacters: ['.', ':', ' '],
      },
      /* Our language has inter-file dependencies */
      /* For now, we will not support diagnostics */
      diagnosticProvider: undefined,
      /*{
        interFileDependencies: true,
        workspaceDiagnostics: false
      },*/
      /* Our LSP Supports workspace by default - necessary */
      workspace: {
        workspaceFolders: {
          supported: true
        }
      },
      documentFormattingProvider: true,
      signatureHelpProvider: {
        triggerCharacters: ['(', ',']
      },
      semanticTokensProvider: {
        legend: semanticTokensLegend,
        range: false,
        full: {
          delta: false
        },
      },
      definitionProvider: true,
      declarationProvider: true,
      referencesProvider: true,
      hoverProvider: true,
      /* End Capabilities */
    }
  };

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

  /* Build Caches for hover and auto-completions to speed-up the delivery */
  hoverCacheBuiltin = createBuiltinHoverCache();
  builtInCompletions = buildAutocompletionBuiltinsBlock();

  notify(connection, "PSS Language Server Started :D");

  /* Ask the client to get new sematic tokens */
  connection.languages.semanticTokens.refresh();
});

/* Default settings - in case config not supported */
const defaultSettings: PSS_Config = { tabspaces: 4, fileAuthor: "", formatPatterns: ["=", "//"], autoFormatHeader: false };
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
      connection.workspace.getConfiguration({ scopeUri: resource, section: 'PSS.fileAuthor' }),
      connection.workspace.getConfiguration({ scopeUri: resource, section: 'PSS.formatPatterns' }),
      connection.workspace.getConfiguration({ scopeUri: resource, section: 'PSS.autoFormatHeader' })
    ]).then(([tabspaces, fileAuthor, formatPatterns, autoFormatHeader]) => {
      // Validate tabspaces
      const validatedTabspaces = Math.min(Math.max(tabspaces ?? defaultSettings.tabspaces, 1), 9);
      return {
        tabspaces: validatedTabspaces,
        fileAuthor: fileAuthor ?? defaultSettings.fileAuthor,
        formatPatterns: formatPatterns ?? [],
        autoFormatHeader: autoFormatHeader ?? false,
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

connection.onDidOpenTextDocument((params) => {
  if (isFirst) {
    const file = params.textDocument.uri;
    const pssFiles: string[] = [];

    try {
      const filePath = fileURLToPath(file);
      const folderPath = path.dirname(filePath);
      notify(connection, `Scanning local folder (${folderPath}) for pss files`)

      scanDirectory(folderPath, pssFiles);
      pssAST = buildASTForFiles(pssFiles);
      autoCompletions = buildAutocompletions(pssAST);
      hoverCache = buildHoverItems(pssAST);
      semanticTokenCache = generateSemanticTokensAdvanced(pssAST);
      isFirst = false;

      // Continue with the rest of your handler...
    } catch (e) {
      console.error(`Error parsing URI ${file}: ${e}`);
    }

  }
});

/* Handle updating AST using debounce */
const debouncedASTBuilder = debounce((uri: string, content: string) => {
  if (content.length === 0) {
    return;
  }
  updateASTNew(uri, content).then(result => {
    pssAST = updateASTNewMeta(pssAST, result);
    autoCompletions = buildAutocompletions(pssAST);
    hoverCache = buildHoverItems(pssAST);
    semanticTokenCache = generateSemanticTokensAdvanced(pssAST);
  });
}, 1800);

/* Event when a document is changed or first opened */
documents.onDidChangeContent(change => {
  /* Call async file processor */
  // updateAST(change.document.uri.toString(), change.document.getText().toString()).then(result => {
  //   globalAST = updateASTMeta(globalAST, result);
  // });

  /* New function */
  debouncedASTBuilder(change.document.uri.toString(), change.document.getText().toString());
});

/* Refresh semantic tokens on document saves */
connection.onDidSaveTextDocument(save => {
  connection.languages.semanticTokens.refresh();
  debouncedASTBuilder(save.textDocument.uri, save.text || "");
});

/* See if monitored files have changed */
connection.onDidChangeWatchedFiles(_change => {
  connection.console.log('We received a file change event');
});

/* Completions provider */
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // let completions = [...builtInCompletions, ...buildAutocompletionBlock(globalAST)];
    // let completions = [...builtInCompletions, ...buildAutocompletionBlockAdvanced(pssAST)]
    let completions = [...builtInCompletions, ...autoCompletions]
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
    if (!document) { return null; }

    const position = params.position;
    const line = document.getText({
      start: { line: position.line, character: 0 },
      end: position
    });

    // Updated regex to match function name with parameters
    const match = line.match(/(\w+)\((.*)/);
    if (!match) { return null; }

    const funcName = match[1];

    // Count commas to determine active parameter
    var activeParameter = (match[2].match(/,/g) || []).length;

    const refNode = getNodeFromNameArray(pssAST, funcName);
    if (refNode) {
      const functionInfo: FunctionNode = refNode as FunctionNode;

      const parameters = functionInfo.parameters.map(p =>
        ParameterInformation.create(p.paramName, `Function parameter of type ${p.paramType}`)
      );

      if ((parameters[parameters.length - 1].label === "...args" || parameters[parameters.length - 1].label?.toString().includes("...")) && activeParameter > parameters.length - 1) {
        activeParameter = parameters.length - 1;
      }

      const params: string = functionInfo.parameters
        .map(param => `${param.paramType} ${param.paramName}`)
        .join(", ");

      const document: string = (typeof functionInfo.comments === 'string') ? functionInfo.comments : buildMarkdownComment(functionInfo.comments);

      const signature = SignatureInformation.create(
        `${functionInfo.platformQualifier} function ${functionInfo.returnType} ${functionInfo.name} (${params})`,
        document,
        ...parameters
      );

      return {
        signatures: [signature],
        activeSignature: 0,
        activeParameter
      };
    }

    const funcInfo = builtInSignatures[funcName];
    if (!funcInfo) { return null; }

    const parameters = funcInfo.parameters.map(p =>
      ParameterInformation.create(p.label, p.documentation)
    );

    /* This hack simply ensures that the function signature helper respects varargs... */
    if (parameters[parameters.length - 1].label === "...args" && activeParameter > parameters.length - 1) {
      activeParameter = parameters.length - 1;
    }

    const signature = SignatureInformation.create(
      funcInfo.signature,
      funcInfo.documentation + `\nPart of \`${funcInfo.package}\``,
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
connection.languages.semanticTokens.on((params: SemanticTokensParams): SemanticTokens => {
  const uri = params.textDocument.uri;
  const document = documents.get(uri);

  if (!document) { return { data: [] }; }
  let semanticTokens: SemanticTokens = createSemanticTokensFor(document.getText());
  if (semanticTokenCache) {
    semanticTokens.data = [...semanticTokens.data, ...semanticTokenCache.data];
  }
  return semanticTokens;
});


/* Provide formatting */
connection.onDocumentFormatting((params, tokens) => {
  const { textDocument, options } = params;

  const sourceDocument = documents.get(textDocument.uri);
  if (!sourceDocument) { return []; } /* File doesn't exist */

  /* Get contents of the document */
  const documentContents = sourceDocument.getText();

  /* Get the filename */
  const filePath = fileURLToPath(textDocument.uri);
  const filename = path.basename(filePath);


  /* Get settings for author name and tabspaces and return formatted text */
  return getSettings(connection, sourceDocument.uri).then((settings) => {
    const formattedText = formatDocument(filename, documentContents, settings.tabspaces, settings.fileAuthor, settings.formatPatterns, settings.autoFormatHeader);
    return [TextEdit.replace(fullRange(sourceDocument), formattedText)];
  });
});

/* Provide hover features */
connection.onHover(async (params: HoverParams): Promise<Hover | null> => {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return null;
  }
  return getHoverFor([...hoverCacheBuiltin, ...hoverCache], document.getText(), document.offsetAt(params.position));
}
);

/* Provide go-to definitions functionality */
connection.onDefinition((params: DefinitionParams): Definition | null => {
  const { textDocument, position } = params;
  const doc = documents.get(textDocument.uri);
  if (!doc) { return null }
  const content = doc.getText()
  const offset = doc.offsetAt(position);
  // const loc = getGoToDefinition(content, offset, globalAST);
  const loc = getGoToDefinitionAdvanced(content, offset, pssAST);
  return loc;
}
);

/* Provide go-to declarations functionality */
connection.onDeclaration((params: DeclarationParams): Declaration | null => {
  const { textDocument, position } = params;
  const doc = documents.get(textDocument.uri);
  if (!doc) { return null }
  const content = doc.getText()
  const offset = doc.offsetAt(position);
  const loc = getGoToDeclarationsAdvanced(content, offset, pssAST);
  return loc;
});

connection.onReferences((params: ReferenceParams): Location[] | null | undefined => {
  const { textDocument, position } = params;
  const doc = documents.get(textDocument.uri);
  if (!doc) { return null }
  const content = doc.getText()
  const offset = doc.offsetAt(position);
  const loc = getReferencesAdvanced(content, offset, pssAST);
  return loc;
});

/* Handle custom requests */

/* This request is for server to create doxygen comments when requested by server */

connection.onRequest(RequestDoxygenGeneration, async (params: DoxygenGenerationRequest) => {

  const { line, lineNumber, fileURI } = params;

  let response: DoxygenGenerationResponse = {
    content: '',
    keyword: '' /* Default response */
  };

  const words = line.split(/\s+/);

  for (const word of words) {
    const trimmedWord = word.trim();

    /* Check if word is NOT in either keywords.list or builtInSignatures */
    if (!(trimmedWord in keywords.list) && !(trimmedWord in builtInSignatures)) {
      const objNode = getNodeFromNameArray(pssAST, trimmedWord);
      if (objNode) {
        /* We got our result. Update the response and send it */
        response.keyword = objNode.name;
        response.content = createCommentsFromNode(objNode);
        return response;
      }
    }
  }

  return response;
});

/* Prepare to listen */
documents.listen(connection);

/* Start listening */
connection.listen();
