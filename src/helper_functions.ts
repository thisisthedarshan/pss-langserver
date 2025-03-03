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
import { Range, Position } from "vscode-languageserver/node";
import { getAutoCompleteItemsFromFile } from "./parser/ast";
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

export async function updateAST(fileURI: string, documentText: string): Promise<string[]> {
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