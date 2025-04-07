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

import { CompletionItem, CompletionItemKind } from "vscode-languageserver/node";
import { builtInSignatures } from "../definitions/builtinFunctions";
import { keywords } from "../definitions/keywords";
import { metaData, objType } from "../definitions/dataTypes";
import { getCompletionKind } from "./autoCompletionHelpers";
import { PSSLangObjects } from "../definitions/dataStructures";
import { buildMarkdownComment } from "../parser/helpers";

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

export function buildAutocompletionBlockAdvanced(ast: PSSLangObjects[]):CompletionItem[] {
  let items: CompletionItem[] = [];
  ast.forEach(item => {
    /** Get data from each node */
    items.push({
      label: item.name,
      kind: getCompletionKind(item.type),
      documentation: (typeof item.comments === 'string') ? item.comments :{
        kind: 'markdown',
        value: buildMarkdownComment(item.comments)
      },
      data: item.name
    });
    if (item.children.length > 0){
      const childItems:CompletionItem[] = buildAutocompletionBlockAdvanced(item.children);
      items = [...items, ...childItems];
    }
  });
  return items;
}