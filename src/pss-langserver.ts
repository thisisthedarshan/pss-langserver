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
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
  DocumentDiagnosticReportKind,
  type DocumentDiagnosticReport,
  TextEdit,
  Connection,
  DidChangeConfigurationParams
} from 'vscode-languageserver/node';

import {
  TextDocument
} from 'vscode-languageserver-textdocument';
import { formatDocument } from './providers/formattingProvider';
import { fullRange, scanDirectory, updateAST, updateStringArray } from './helper_functions';
import { keywords } from './definitions/keywords';
import fs from 'fs-extra'

/* Support all connection types - ipc, stdio, tcp */
const connection = createConnection(ProposedFeatures.all);

/* Documents manager */
const documents = new TextDocuments(TextDocument);

var completionItems: string[] = []; /* Holds all autocompletion items */
var isFirst = true;

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = true;
let hasDiagnosticRelatedInformationCapability = false;

/* Setup initialization */
connection.onInitialize((params: InitializeParams) => {
  const capabilities = params.capabilities;
  const workspaceFolders = params.workspaceFolders || [];
  const pssFiles: string[] = [];

  for (const folder of workspaceFolders) {
    scanDirectory(folder.uri.replace('file://', ''), pssFiles);
  }

  // Process found files
  for (const file of pssFiles) {
    const content: string = fs.readFileSync(file, 'utf8');
    // Process file content here
    updateAST(content).then(vars => {
      completionItems = updateStringArray(completionItems, vars);
    });
  }

  /* Build the autocompletions with built-in code */
  keywords.list.forEach(keyword => {
    completionItems.push(keyword);
  });

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
      /* Antlr just generates AST so incremental sync isn't a good idea */
      textDocumentSync: TextDocumentSyncKind.Full,
      /* Tell the client that this server supports code completion. */
      completionProvider: {
        resolveProvider: true
      },
      /* Our language has inter-file dependencies */
      /* For now, we will not support diagnostics */
      diagnosticProvider: {
        interFileDependencies: true,
        workspaceDiagnostics: false
      },
      documentFormattingProvider: true
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

/* The tool spec config */
interface PSS_Config {
  tabspaces: number,
  fileAuthor: string;
}

/* Default settings - in case config not supported */
const defaultSettings: PSS_Config = { tabspaces: 4, fileAuthor: "" };
let globalSettings: PSS_Config = defaultSettings;

/* Cache the settings of all open documents */
const documentSettings = new Map<string, Thenable<PSS_Config>>();

/* When connection/config change */
connection.onDidChangeConfiguration((change: DidChangeConfigurationParams) => {
  documentSettings.clear();
  if (!hasConfigurationCapability) {
    globalSettings = change.settings.MYLANG || defaultSettings;
  }
  /* For future use - with diagnostics */
  /* connection.languages.diagnostics.refresh(); */
});

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
  updateAST(change.document.getText().toString()).then(result => {
    completionItems = updateStringArray(completionItems, result);
  });

});

/* See if monitored files have changed */
connection.onDidChangeWatchedFiles(_change => {
  connection.console.log('We received a file change event');
});

/* Completions provider */
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    var completions: CompletionItem[] = [];

    completionItems.forEach(item => {
      completions.push(
        {
          label: item,
          kind: CompletionItemKind.Text
        }
      )
    });
    return completions;
  }
);

/* Resolve info about selected item in completion list */
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    /* No plans for now - later we will add comment parsing as well */
    return item;
  }
);

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

/* Prepare to listen */
documents.listen(connection);

/* Start listening */
connection.listen();