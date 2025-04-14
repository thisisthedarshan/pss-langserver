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

import { Location, Position, Range } from "vscode-languageserver/node";
import { metaData, objType } from "../definitions/dataTypes";
import { PSSLangObjects } from "../definitions/dataStructures";
import { collectAllPSSNodes, getNodeFromNameArray } from "../parser/helpers";

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

export function getGoToDefinitionAdvanced(document: string, pos: number, ast: PSSLangObjects[]): Location | null {
  const keyword = wordAt(document, pos);
  let location: Location | null = null;
  if (keyword === null) {
    return null;
  }

  const node = getNodeFromNameArray(ast, keyword, objType.ASSIGNMENT);
  if (node) {
    if (node.definedOn) {
      let start_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber)
      let end_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber + keyword.length)
      location = Location.create(
        node.definedOn.file,
        Range.create(start_range, end_range)
      );
    }
  }

  return location;
}

export function getGoToDeclarationsAdvanced(document: string, pos: number, ast: PSSLangObjects[]): Location[] | null {
  let definitions: Location[] = [];
  const keyword = wordAt(document, pos);

  if (keyword === null) {
    return null;
  }

  const items = collectAllPSSNodes(ast, { name: keyword });
  items.forEach(node => {
    let start_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber)
    let end_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber + keyword.length)
    definitions.push(Location.create(
      node.definedOn.file,
      Range.create(start_range, end_range)
    ));
  });
  return definitions.length > 0 ? definitions : null;
}

export function getReferencesAdvanced(document: string, pos: number, ast: PSSLangObjects[]): Location[] | null | undefined {
  let references: Location[] = [];
  const keyword = wordAt(document, pos);

  if (keyword === null) {
    return undefined;
  }

  const items = collectAllPSSNodes(ast, { name: keyword }, { skipType: objType.INSTANCE });

  items.forEach(node => {
    let start_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber)
    let end_range = Position.create(node.definedOn.lineNumber - 1, node.definedOn.columnNumber + keyword.length)
    references.push(Location.create(
      node.definedOn.file,
      Range.create(start_range, end_range)
    ));
  });

  return references;
}

export function wordAt(text: string, offset: number): string | null {
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