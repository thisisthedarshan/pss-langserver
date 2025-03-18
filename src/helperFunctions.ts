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

import { TextDocument } from "vscode-languageserver-textdocument";
import {
  Range, Position, CompletionItem, CompletionItemKind, integer, SemanticTokenTypes, SemanticTokens, SemanticTokenModifiers, TextDocumentIdentifier, Location, _Connection, SemanticTokensBuilder
} from "vscode-languageserver/node";
import { getAutoCompleteItemsFromFile } from "./parser/ast";
import { KeywordInfo, metaData, objType, SemanticToken, semanticTokensLegend } from "./definitions/dataTypes";
import { builtInSignatures } from "./definitions/builtinFunctions";
import { keywords } from "./definitions/keywords";
import { semanticTokensBuiltin, semanticTokenTypes } from "./definitions/semanticTokenDefinitions";
import { mapTokenModifiers, mapTokenTypes } from "./parser/helpers";
const fs = require('fs-extra')
const path = require('path')

export function fullRange(document: TextDocument): Range {
  const lastLine = document.lineCount - 1;
  const lastChar = document.getText().split("\n")[lastLine]?.length || 0;

  return Range.create(
    Position.create(0, 0), // Start position at first character
    Position.create(lastLine, lastChar) // End position at last character
  );
}

export async function updateAST(fileURI: string, documentText: string): Promise<metaData[]> {
  var items = getAutoCompleteItemsFromFile(fileURI, documentText);
  return items;
}

export function updateStringArray(array1: string[], array2: string[]): string[] {
  const set = new Set(array1); // Use a Set for quick lookups

  array2.forEach(item => {
    if (!set.has(item)) {
      array1.push(item);
      set.add(item); // Add to Set for faster checks
    }
  });

  return array1;
}

export async function scanDirectory(dirPath: string, files: string[]): Promise<void> {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await scanDirectory(fullPath, files);
      } else if (entry.isFile() && entry.name.endsWith('.pss')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory: ${dirPath}`, error);
    throw error;
  }
}

function getCompletionKind(type: objType): CompletionItemKind {
  switch (type) {
    case objType.COMPONENT:
      return CompletionItemKind.Class;
      break;
    case objType.ACTION:
      return CompletionItemKind.Module;
      break;
    case objType.FUNCTION:
      return CompletionItemKind.Function;
      break;
    case objType.ENUM:
      return CompletionItemKind.Enum;
      break;
    case objType.BUFFER:
      return CompletionItemKind.Struct;
      break;
    case objType.STRUCT:
      return CompletionItemKind.Struct;
      break;
    case objType.RESOURCE_OBJECT:
      return CompletionItemKind.Module;
      break;
    case objType.PACKAGE:
      return CompletionItemKind.Class;
      break;
    case objType.MONITOR:
      return CompletionItemKind.Interface;
      break;
    case objType.CHANDLE:
      return CompletionItemKind.Variable;
      break;
    case objType.BIT:
    case objType.INTEGER:
    case objType.STRING:
    case objType.BOOL:
    case objType.FLOAT32:
    case objType.FLOAT64:
    case objType.REF:
    case objType.ARRAY:
    case objType.LIST:
    case objType.MAP:
    case objType.SET:
      return CompletionItemKind.Keyword;
      break;
    default:
      return CompletionItemKind.Variable;
      break;
  }
}

export function buildAutocompletionBuiltinsBlock(): CompletionItem[] {
  let items: CompletionItem[] = [];

  /* Build the autocompletions with built-in code */
  keywords.list.forEach((key, idx) => {
    if (!(key in builtInSignatures)) {
      items.push({
        label: key,
        detail: keywords.descriptions[idx],
        kind: CompletionItemKind.Keyword
      });
    }
  });

  /* Add function signatures */
  Object.entries(builtInSignatures).forEach(([name, func]) => {
    items.push({
      label: name,
      kind: CompletionItemKind.Function,
      detail: func.signature,
      documentation: {
        kind: 'markdown',
        value: `${func.documentation}\n\n**Parameters:**\n${func.parameters.map(p => `- \`${p.label}\`: ${p.documentation}`).join('\n')}`
      }
    });
  });

  return items;
}

export function buildAutocompletionBlock(ast: metaData[]): CompletionItem[] {
  let items: CompletionItem[] = [];
  ast.map(astItem => {
    Object.entries(astItem).map(([name, meta]) => {
      items.push({
        label: name,
        kind: getCompletionKind(meta.objectType),
        documentation: (meta.documentation !== undefined) ? (meta.documentation.length > 0) ? {
          kind: 'markdown',
          value: meta.documentation
        } : undefined : undefined
      })
    })
  });

  return items;
}

function getSemanticTokenInfo(type: keyof typeof objType) {
  return semanticTokenTypes[type];
}

function encodeSemanticTokens(tokens: SemanticToken[]): number[] {
  const encodedTokens: number[] = [];
  let prevLine = 0;
  let prevChar = 0;

  for (const token of tokens) {
    const deltaLine = token.line - prevLine;
    const deltaChar = token.line === prevLine
      ? token.startChar - prevChar
      : token.startChar;

    encodedTokens.push(
      deltaLine,
      deltaChar,
      token.length,
      token.tokenType,
      token.tokenModifiers
    );

    prevLine = token.line;
    prevChar = token.startChar;
  }

  return encodedTokens;
}


/* Provides semantic tokens to the client */
export function generateSemanticTokens(file: string, ast: metaData[]): SemanticTokens {
  let semTokensFromMeta = new SemanticTokensBuilder();
  findSemanticTokens(file, semanticTokensBuiltin, semTokensFromMeta);
  ast.flatMap(astObject => {
    Object.entries(astObject).map(([keyword, info]) => {
      let modifiers: number = 0;
      let objectType: objType = info.objectType;
      let semanticTokensForAstObj: KeywordInfo = semanticTokenTypes[objType[objectType]];

      if (Array.isArray(semanticTokensForAstObj.tokenModifiers)) {
        semanticTokensForAstObj.tokenModifiers.forEach(token => {
          modifiers += mapTokenModifiers(token.toString())
        });
      }

      semTokensFromMeta.push(
        info.onLine.lineNumber,
        info.onLine.columnNumber,
        keyword.length,
        typeof semanticTokensForAstObj.tokenType !== "number" ? mapTokenTypes(semanticTokensForAstObj.tokenType.toString()) : semanticTokensForAstObj.tokenType,
        Array.isArray(semanticTokensForAstObj.tokenModifiers) ? modifiers : typeof semanticTokensForAstObj.tokenModifiers !== "number" ? mapTokenModifiers(semanticTokensForAstObj.tokenModifiers.toString()) : semanticTokensForAstObj.tokenModifiers,
      );
    });

  });

  return semTokensFromMeta.build();
}

function findSemanticTokens(text: string, keywordArray: Record<string, KeywordInfo>, tokens: SemanticTokensBuilder): SemanticTokens {
  const lines = text.split('\n');

  /* Track comment state across lines */
  let inMultilineComment = false;

  /* Process each line */
  lines.forEach((line, lineIndex) => {
    let processedLine = line;
    let offsetMap: number[] = [];

    /* Build offset map for original positions */
    for (let i = 0; i < line.length; i++) {
      offsetMap[i] = i;
    }

    /* Handle multiline comments */
    if (inMultilineComment) {
      const endCommentIndex = line.indexOf('*/');
      if (endCommentIndex !== -1) {
        /* End of multiline comment found */
        processedLine = line.substring(endCommentIndex + 2);
        inMultilineComment = false;

        /* Adjust offset map for removed comment part */
        offsetMap = offsetMap.slice(endCommentIndex + 2);
      } else {
        /* Entire line is within a comment */
        return;
      }
    }

    /* Handle single line comments and start of multiline comments */
    let singleLineCommentIndex = processedLine.indexOf('//');
    let multilineCommentStartIndex = processedLine.indexOf('/*');

    /* Handle single line comments */
    if (singleLineCommentIndex !== -1) {
      if (multilineCommentStartIndex === -1 || singleLineCommentIndex < multilineCommentStartIndex) {
        processedLine = processedLine.substring(0, singleLineCommentIndex);
      }
    }

    /* Handle start of multiline comments */
    if (multilineCommentStartIndex !== -1) {
      if (singleLineCommentIndex === -1 || multilineCommentStartIndex < singleLineCommentIndex) {
        const endCommentIndex = processedLine.indexOf('*/', multilineCommentStartIndex + 2);
        if (endCommentIndex !== -1) {
          /* Multiline comment ends on the same line */
          processedLine =
            processedLine.substring(0, multilineCommentStartIndex) +
            processedLine.substring(endCommentIndex + 2);
        } else {
          /* Multiline comment continues to next line */
          processedLine = processedLine.substring(0, multilineCommentStartIndex);
          inMultilineComment = true;
        }
      }
    }

    /* Skip empty lines after comment removal */
    if (processedLine.trim() === '') {
      return;
    }

    /* Check each keyword */
    for (const [keyword, info] of Object.entries(keywordArray)) {
      let startIndex = 0;

      /* Find all occurrences of the keyword in the line */
      while (startIndex < processedLine.length) {
        const keywordIndex = processedLine.indexOf(keyword, startIndex);
        let modifiers: number = 0;
        if (keywordIndex === -1) {
          break; /* No more occurrences */
        }

        /* Check for word boundaries to avoid partial matches */
        const beforeChar = keywordIndex > 0 ? processedLine[keywordIndex - 1] : ' ';
        const afterChar = keywordIndex + keyword.length < processedLine.length ?
          processedLine[keywordIndex + keyword.length] : ' ';

        const isWordBoundaryBefore = /\W/.test(beforeChar);
        const isWordBoundaryAfter = /\W/.test(afterChar);

        if (Array.isArray(info.tokenModifiers)) {
          info.tokenModifiers.forEach(token => {
            modifiers += mapTokenModifiers(token.toString())
          });
        }

        if (isWordBoundaryBefore && isWordBoundaryAfter) {
          /* Map position back to original line using offset map */
          const originalIndex = offsetMap[keywordIndex] || keywordIndex;

          /* Add token */
          tokens.push(
            lineIndex,
            originalIndex,
            keyword.length,
            typeof info.tokenType !== "number" ? mapTokenTypes(info.tokenType.toString()) : info.tokenType,
            Array.isArray(info.tokenModifiers) ? modifiers : typeof info.tokenModifiers !== "number" ? mapTokenModifiers(info.tokenModifiers.toString()) : info.tokenModifiers,
          );
        }

        /* Move to the next position */
        startIndex = keywordIndex + keyword.length;
      }
    }
  });

  return tokens.build();
}

export function getGoToDefinition(document: string, pos: number, ast: metaData[]): Location | null {
  const keyword = wordAt(document, pos);
  let location: Location | null = null;
  if (keyword === null) {
    return null;
  }

  /* Iterate through each metaData object in the array */
  for (const metaInfoObj of ast) {
    /* Check if the searchString matches any key in the current metaData object */
    const matchingKey = Object.keys(metaInfoObj).find(key => key === keyword);
    /* If a match is found, return the location */
    if (matchingKey) {
      const info = metaInfoObj[matchingKey];
      /* Subtracting 1 from line number since Antlr starts line number from 1 and we expect from 0 */
      let start_range = Position.create(info.onLine.lineNumber - 1, info.onLine.columnNumber)
      let end_range = Position.create(info.onLine.lineNumber - 1, info.onLine.columnNumber + keyword.length)
      location = Location.create(
        info.onLine.file,
        Range.create(start_range, end_range)
      );
      return location;
    }
  }

  return location;
}

function wordAt(text: string, offset: number): string | null {
  const wordRegex = /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g;
  let match;

  while ((match = wordRegex.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;

    if (offset >= start && offset <= end) {
      return match[0];  // Return the matched word
    }
  }

  return null;
}

export function updateASTMeta(old: metaData[], newData: metaData[]): metaData[] {
  const seenKeys = new Set(newData.flatMap(Object.keys));

  const uniqueArray2 = old.filter(item =>
    Object.keys(item).every(key => !seenKeys.has(key))
  );

  return [...newData, ...uniqueArray2];
}

export function notify(conn: _Connection, message: string, err: boolean = false) {
  if (err) {
    conn.window.showErrorMessage(message);
  } else {
    conn.window.showInformationMessage(message);
  }
}
