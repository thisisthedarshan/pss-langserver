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

import { Position, Range } from "vscode-languageserver/node";
import { commentDocs, metaData, objType, semanticTokensLegend } from "../definitions/dataTypes";
import { getAutoCompleteItemsFromFile } from "./ast";
import { TextDocument } from "vscode-languageserver-textdocument";
const fs = require('fs-extra')
const path = require('path')

export function isWithinCommentBlock(document: { lineAt: (arg0: any) => { (): any; new(): any; text: string; }; }, lineNumber: any) {
  for (let i = lineNumber; i >= 0; i--) {
    const lineText = document.lineAt(i).text.trim();

    if ((lineText.startsWith('/*') || lineText.startsWith("/**")) && !lineText.endsWith('*/')) {
      return true;  // Found the start of an unclosed block comment
    }
    if (lineText.endsWith('*/')) {
      return false;  // Found the end of the block comment
    }
  }
  return false;
}

export function getObjType(str: string): objType {
  switch (str.toLowerCase()) {
    case "component":
      return objType.COMPONENT
      break;
    case "action":
      return objType.ACTION
      break;
    case "function":
      return objType.FUNCTION
      break;
    case "enum":
      return objType.ENUM
      break;
    case "buffer":
      return objType.BUFFER
      break;
    case "struct":
      return objType.STRUCT
      break;
    case "resource":
      return objType.RESOURCE_OBJECT
      break;
    case "package":
      return objType.PACKAGE
      break;
    case "monitor":
      return objType.MONITOR
      break;
    case "chandle":
      return objType.CHANDLE
      break;
    case "bit":
      return objType.BIT
      break;
    case "int":
      return objType.INTEGER
      break;
    case "string":
      return objType.STRING
      break;
    case "bool":
      return objType.BOOL
      break;
    case "float32":
      return objType.FLOAT32
      break;
    case "float64":
      return objType.FLOAT64
      break;
    case "ref":
      return objType.REF
      break;
    case "array":
      return objType.ARRAY
      break;
    case "list":
      return objType.LIST
      break;
    case "map":
      return objType.MAP
      break;
    case "set":
      return objType.SET
      break;
    default:
      return objType.UNKNOWN;
      break;
  }
}

export const mapTokenTypes = ((arr: string[]) => (str: string) => arr.indexOf(str))(semanticTokensLegend.tokenTypes);
export const mapTokenModifiers = ((arr) => (str: string) => str in arr ? 1 << arr.indexOf(str) : 0)(semanticTokensLegend.tokenModifiers);

export function buildMarkdownComment(docComment: commentDocs): string {
  return '';
}

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

export function updateASTMeta(old: metaData[], newData: metaData[]): metaData[] {
  const seenKeys = new Set(newData.flatMap(Object.keys));

  const uniqueArray2 = old.filter(item =>
    Object.keys(item).every(key => !seenKeys.has(key))
  );

  return [...newData, ...uniqueArray2];
}
