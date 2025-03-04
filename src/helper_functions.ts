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
import { Range, Position, CompletionItem, CompletionItemKind, integer, SemanticTokenTypes, SemanticTokens, SemanticTokenModifiers } from "vscode-languageserver/node";
import { getAutoCompleteItemsFromFile } from "./parser/ast";
import { KeywordInfo, metaData, objType, SemanticToken } from "./definitions/dataTypes";
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
  // Decode the URI-encoded path
  const decodedPath = decodeURIComponent(dirPath);

  try {
    const entries = fs.readdirSync(decodedPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(decodedPath, entry.name);

      if (entry.isDirectory()) {
        await scanDirectory(fullPath, files);
      } else if (entry.isFile() && entry.name.endsWith('.pss')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory: ${decodedPath}`, error);
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
  let items: CompletionItem[];
  items = ast.map(astObject => {
    return {
      label: astObject.keyword,
      kind: getCompletionKind(astObject.info.objectType),
      documentation: {
        kind: 'markdown',
        value: astObject.info.documentation || ""
      }
    }
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
export function generateSemanticTokens(file: string, ast: metaData[]): number[] {
  let semTokenFromFile: SemanticToken[] = findSemanticTokens(file, semanticTokensBuiltin);
  let semTokensFromMeta: SemanticToken[] = ast.flatMap(astObject => {
    let modifiers: number = 0;
    let objectType: objType = astObject.info.objectType;
    let semanticTokensForAstObj: KeywordInfo = semanticTokenTypes[objType[objectType]];

    if (Array.isArray(semanticTokensForAstObj.tokenModifiers)) {
      semanticTokensForAstObj.tokenModifiers.forEach(token => {
        modifiers += mapTokenModifiers(token.toString())
      });
    }

    return [{
      line: astObject.info.onLine.lineNumber,
      startChar: astObject.info.onLine.columnNumber,
      length: astObject.keyword.length,
      tokenType: typeof semanticTokensForAstObj.tokenType !== "number" ? mapTokenTypes(semanticTokensForAstObj.tokenType.toString()) : semanticTokensForAstObj.tokenType,
      tokenModifiers: Array.isArray(semanticTokensForAstObj.tokenModifiers) ? modifiers : typeof semanticTokensForAstObj.tokenModifiers !== "number" ? mapTokenModifiers(semanticTokensForAstObj.tokenModifiers.toString()) : semanticTokensForAstObj.tokenModifiers,
    }
    ]
  });

  return encodeSemanticTokens([...semTokenFromFile, ...semTokensFromMeta])
}

function findSemanticTokens(text: string, keywordArray: Record<string, KeywordInfo>): SemanticToken[] {
  const lines = text.split('\n');
  const tokens: SemanticToken[] = [];

  /* Process each line */
  lines.forEach((line, lineIndex) => {
    /* Check each keyword */
    for (const [keyword, info] of Object.entries(keywordArray)) {
      let startIndex = 0;

      /* Find all occurrences of the keyword in the line */
      while (startIndex < line.length) {
        const keywordIndex = line.indexOf(keyword, startIndex);
        let modifiers: number = 0;
        if (keywordIndex === -1) {
          break; /* No more occurrences */
        }

        /* Check for word boundaries to avoid partial matches */
        const beforeChar = keywordIndex > 0 ? line[keywordIndex - 1] : ' ';
        const afterChar = keywordIndex + keyword.length < line.length ?
          line[keywordIndex + keyword.length] : ' ';

        const isWordBoundaryBefore = /\W/.test(beforeChar);
        const isWordBoundaryAfter = /\W/.test(afterChar);

        if (Array.isArray(info.tokenModifiers)) {
          info.tokenModifiers.forEach(token => {
            modifiers += mapTokenModifiers(token.toString())
          });
        }

        if (isWordBoundaryBefore && isWordBoundaryAfter) {
          /* Add token */
          tokens.push({
            line: lineIndex,
            startChar: keywordIndex,
            length: keyword.length,
            tokenType: typeof info.tokenType !== "number" ? mapTokenTypes(info.tokenType.toString()) : info.tokenType,
            tokenModifiers: Array.isArray(info.tokenModifiers) ? modifiers : typeof info.tokenModifiers !== "number" ? mapTokenModifiers(info.tokenModifiers.toString()) : info.tokenModifiers,
          });
        }

        /* Move to the next position */
        startIndex = keywordIndex + keyword.length;
      }
    }
  });

  /* Sort tokens by line and position */
  return tokens.sort((a, b) =>
    a.line !== b.line ? a.line - b.line : a.startChar - b.startChar
  );
}
