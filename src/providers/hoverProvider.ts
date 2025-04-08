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
import { buildMarkdownComment, getNodeFromNameArray } from "../parser/helpers";

export function getHoverFor(ast: PSSLangObjects[], content: string, pos: number): Hover | null {
  const keyword = wordAt(content, pos);
  if (keyword == null) {
    return null;
  }
  interface FunctionInfo {
    signature: string;
    documentation: string;
    parameters: {
      label: string;
      documentation: string;
    }[];
    package: string;
  }

  const funcInfo = builtInSignatures[keyword];
  if (funcInfo) {
    let documentation: string =
      "```pss\n"+funcInfo.signature+"\n```\n";

    documentation += `*${keyword}* is a part of the **${funcInfo.package}**\n`;
    documentation += `#### Parameters\n`;
    funcInfo.parameters.forEach(param => {
      documentation += `- **${param.label}**: ${param.documentation}\n`;
    });
    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: documentation
      }
    };
  }

  const index = keywords.list.findIndex(item => item === keyword);
  if (index != -1) {
    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: `\`${keyword}\`\n${keywords.descriptions[index]}`
      }
    }
  }

  const nodeInfo = getNodeFromNameArray(ast, keyword);
  if (nodeInfo) {
    const comments = (typeof nodeInfo.comments === 'string') ? nodeInfo.comments : buildMarkdownComment(nodeInfo.comments);
    if (comments.length == 0) {
      return null;
    }
    return {
      contents: {
        kind: MarkupKind.Markdown,
        value: comments
      }
    };
  }
  return null;
}