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

/**
 * @brief This file contains the core logic to parse a given line and return appropriate auto-completion suggestions
 */

import { CompletionItem, TextDocumentPositionParams } from "vscode-languageserver";
import { isInsideMultilineComment, getDotNotationChain, getFunctionContext, getCommentCompletions, getCompletionsForChain, getCompletionsForFunction } from "./autoCompletionHelpers";
import { PSSLangObjects } from "../definitions/dataStructures";

function getSmartAutocompletions(params: TextDocumentPositionParams, content: string, ast: PSSLangObjects[], autoCompletions: CompletionItem[], builtInCompletions: CompletionItem[]): CompletionItem[] {
  const uri = params.textDocument.uri;
  const position = params.position;
  const text = content;

  if (content.length > 0) {
    // 1. Inside multiline comment
    if (isInsideMultilineComment(text, position)) {
      return getCommentCompletions();
    }

    // 2 & 3. Dot notation (abc. or abc.def.)
    const chain = getDotNotationChain(text, position);
    if (chain) {
      return getCompletionsForChain(chain, ast);
    }

    // 4. Inside function call
    const funcContext = getFunctionContext(text, position);
    if (funcContext) {
      const completions = getCompletionsForFunction(funcContext.functionName, funcContext.parameterIndex, ast);
      if (completions.length === 0) {
        return [...builtInCompletions, ...autoCompletions];
      }
      return completions;
    }
  }

  // Default case
  return [...builtInCompletions, ...autoCompletions];
}


export { getSmartAutocompletions };