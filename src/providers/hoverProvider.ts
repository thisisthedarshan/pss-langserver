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

import { Hover, MarkupKind } from "vscode-languageserver/node";
import { wordAt } from "./gotoProvider";
import { PSSLangObjects } from "../definitions/dataStructures";
import { keywords } from "../definitions/keywords";
import { builtInSignatures } from "../definitions/builtinFunctions";
import { buildMarkdownComment } from "../parser/helpers";
import { createCommentsFromNode } from "./objectCommentsProvider";
import { objType } from "../definitions/dataTypes";

function getHoverFor(hoverRecords: Record<string, Hover>[], content: string, pos: number): Hover | null {
  const key = wordAt(content, pos);
  if (key == null) {
    return null;
  }
  const hover = hoverRecords.find(record => key in record)?.[key] ?? null;
  return hover;
}

function getHoverData(item: PSSLangObjects): Record<string, Hover>[] {
  let hoverInfo: Record<string, Hover>[] = [];
  const comments = (typeof item.comments === 'string') ? item.comments : buildMarkdownComment(item.comments);
  if (comments.length != 0) {
    const hoverData: Hover = {
      contents: {
        kind: MarkupKind.Markdown,
        value: comments
      }
    }
    hoverInfo.push({ [item.name]: hoverData });
  } else {
    /* This new logic just shows hover info for basic items */
    let itemComment = createCommentsFromNode(item);
    var comment = "";
    comment += `## ${item.type.toLowerCase()} **${item.name}**\n`;
    comment += itemComment;
    const hoverData: Hover = {
      contents: {
        kind: MarkupKind.Markdown,
        value: comment
      }
    }
    hoverInfo.push({ [item.name]: hoverData });
  }
  item.children.forEach(child => {
    hoverInfo = [...hoverInfo, ...getHoverData(child)];
  });
  return hoverInfo
}

function buildHoverItems(ast: PSSLangObjects[]): Record<string, Hover>[] {
  let hoverRecords: Record<string, Hover>[] = [];
  ast.forEach(object => {
    const existingItem = hoverRecords.some(record => object.name in record);
    if (!existingItem) {
      hoverRecords = [...hoverRecords, ...getHoverData(object)];
    }
  });
  return hoverRecords;
}

function createBuiltinHoverCache(): Record<string, Hover>[] {
  let hoverRecords: Record<string, Hover>[] = [];
  keywords.list.forEach((key, index) => {
    const hoverData: Hover = {
      contents: {
        kind: MarkupKind.Markdown,
        value: `*${key}*\n${keywords.descriptions[index]}`
      }
    }
    hoverRecords.push({ [key]: hoverData });
  });

  for (const [keyword, funcInfo] of Object.entries(builtInSignatures)) {
    let documentation: string =
      "```pss\n" + funcInfo.signature + "\n```\n";

    documentation += `*${keyword}* is a part of the **${funcInfo.package}**\n`;
    documentation += `#### Parameters\n`;
    funcInfo.parameters.forEach(param => {
      documentation += `- **${param.label}**: ${param.documentation}\n`;
    });

    const hoverData: Hover = {
      contents: {
        kind: MarkupKind.Markdown,
        value: documentation
      }
    };

    const index = hoverRecords.findIndex(record => keyword in record);
    if (index >= 0) hoverRecords[index][keyword] = hoverData; /* Overwrite */
    else hoverRecords.push({ [keyword]: hoverData }); /* Add new */
  }

  return hoverRecords;
}

export {
  getHoverFor,
  buildHoverItems,
  createBuiltinHoverCache,
};