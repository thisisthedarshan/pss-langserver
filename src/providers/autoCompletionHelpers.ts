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
import { CompletionItem, CompletionItemKind, Position } from "vscode-languageserver/node";
import { objType } from "../definitions/dataTypes";
import { FunctionNode, InstanceNode, PSSLangObjects, StructKindNode } from "../definitions/dataStructures";
import { collectAllInstanceNodes, collectAllPSSNodes, getNodeFromNameArray } from "../parser/helpers";

function getCompletionKind(type: objType): CompletionItemKind {
  switch (type) {
    /* Structural elements */
    case objType.COMPONENT:
      return CompletionItemKind.Class;
    case objType.ACTION:
    case objType.ACTIVITY:
      return CompletionItemKind.Module;
    case objType.PACKAGE:
      return CompletionItemKind.Module;
    case objType.MONITOR:
      return CompletionItemKind.Interface;
    case objType.CONSTRAINT:
      return CompletionItemKind.Event;

    /* Function types */
    case objType.FUNCTION:
    case objType.PROCEDURAL_FUNCTION:
      return CompletionItemKind.Function;
    case objType.ACTION_HANDLE:
      return CompletionItemKind.Method;
    case objType.CALL_SUPER:
      return CompletionItemKind.Method;

    /* Data structures */
    case objType.ENUM:
      return CompletionItemKind.Enum;
    case objType.BUFFER:
    case objType.STRUCT:
      return CompletionItemKind.Struct;
    case objType.STRUCT_ITEM:
      return CompletionItemKind.Field;
    case objType.RESOURCE_OBJECT:
      return CompletionItemKind.Class;

    /* Register types */
    case objType.REGISTER_BODY_ITEM:
      return CompletionItemKind.Field;
    case objType.REGISTER_GROUP:
    case objType.REGISTER_COMP:
    case objType.REGISTER_DEF:
    case objType.REGISTER:
      return CompletionItemKind.Property;

    /* Memory and address elements */
    case objType.MEMORY_SPACE:
    case objType.MEMORY_REGION:
    case objType.MEMORY_CLAIM:
    case objType.ADDRESS_SPACE:
    case objType.ADDRESS_REGION:
    case objType.ADDRESS_CLAIM:
      return CompletionItemKind.Reference;

    /* State and streams */
    case objType.STATE:
      return CompletionItemKind.Variable;
    case objType.STREAM:
    case objType.POOLS:
      return CompletionItemKind.Variable;

    /* Primitive types */
    case objType.CHANDLE:
      return CompletionItemKind.Variable;
    case objType.DATA:
      return CompletionItemKind.Value;
    case objType.TYPEDEF:
      return CompletionItemKind.TypeParameter;
    case objType.INTEGER:
    case objType.BIT:
    case objType.STRING:
    case objType.BOOL:
    case objType.FLOAT32:
    case objType.FLOAT64:
      return CompletionItemKind.Keyword;

    /* Collection types */
    case objType.REF:
      return CompletionItemKind.Reference;
    case objType.ARRAY:
    case objType.LIST:
    case objType.MAP:
    case objType.SET:
    case objType.INSTANCE:
      return CompletionItemKind.Value;

    /* Template and var args */
    case objType.TEMPLATE_ITEM:
      return CompletionItemKind.TypeParameter;
    case objType.VARARGS:
      return CompletionItemKind.Variable;

    /* Executable blocks */
    case objType.EXEC_PRESOLVE:
    case objType.EXEC_POSTSOLVE:
    case objType.EXEC_PREBODY:
    case objType.EXEC_BODY:
    case objType.EXEC_HEADER:
    case objType.EXEC_DECLARATION:
    case objType.EXEC_RUNSTART:
    case objType.EXEC_RUNEND:
    case objType.EXEC_INITDOWN:
    case objType.EXEC_INITUP:
    case objType.EXEC_INIT:
    case objType.EXEC_TARGET:
    case objType.EXEC_FILE:
      return CompletionItemKind.Snippet;

    /* Misc */
    case objType.IMPORT:
      return CompletionItemKind.File;
    case objType.ASSIGNMENT:
      return CompletionItemKind.Operator;

    /* Default cases */
    case objType.NONE:
    case objType.UNKNOWN:
    default:
      return CompletionItemKind.Text;
  }
}
// Convert Position to character offset in the text
function getOffsetFromPosition(text: string, position: Position): number {
  const lines = text.split('\n');
  let offset = 0;
  for (let i = 0; i < position.line; i++) {
    offset += lines[i].length + 1; // +1 for newline
  }
  offset += position.character;
  return offset;
}

// Check if cursor is inside a /** ... */ comment
function isInsideMultilineComment(text: string, position: Position): boolean {
  const offset = getOffsetFromPosition(text, position);
  const textUpToCursor = text.substring(0, offset);
  const commentStarts = (textUpToCursor.match(/\/\*\*/g) || []).length;
  const commentEnds = (textUpToCursor.match(/\*\//g) || []).length;
  return commentStarts > commentEnds;
}

// Extract dot notation chain (e.g., ['abc'] for 'abc.', ['abc', 'def'] for 'abc.def.')
function getDotNotationChain(text: string, position: Position): string[] | null {
  const offset = getOffsetFromPosition(text, position);
  if (offset === 0 || text[offset - 1] !== '.') {
    return null;
  }
  let chain = [];
  let current = '';
  let i = offset - 2; // Before the dot
  while (i >= 0) {
    const char = text[i];
    if (/[a-zA-Z0-9_]/.test(char)) {
      current = char + current;
    } else if (char === '.' && current !== '') {
      chain.unshift(current);
      current = '';
    } else {
      break;
    }
    i--;
  }
  if (current !== '') {
    chain.unshift(current);
  }
  return chain.length > 0 ? chain : null;
}

// Interface for function call context
interface FunctionContext {
  functionName: string;
  parameterIndex: number;
}

// Detect if cursor is inside a function call and get context
function getFunctionContext(text: string, position: Position): FunctionContext | null {
  const offset = getOffsetFromPosition(text, position);
  const textUpToCursor = text.substring(0, offset);
  let depth = 0;
  let parameterIndex = -1;
  let functionName = null;
  let i = 0;
  while (i < textUpToCursor.length) {
    const char = textUpToCursor[i];
    if (char === '(') {
      let j = i - 1;
      while (j >= 0 && /[a-zA-Z0-9_]/.test(textUpToCursor[j])) {
        j--;
      }
      const identifier = textUpToCursor.substring(j + 1, i);
      if (identifier) {
        functionName = identifier;
        parameterIndex = 0;
      }
      depth++;
    } else if (char === ')') {
      depth--;
      if (depth === 0) {
        functionName = null;
        parameterIndex = -1;
      }
    } else if (char === ',' && depth === 1) {
      parameterIndex++;
    }
    i++;
  }
  if (depth > 0 && functionName) {
    return { functionName, parameterIndex };
  }
  return null;
}

// This returns the keywords that can be used in comments - like brief, file, etc.
function getCommentCompletions(): CompletionItem[] {
  const items = ["brief", "param", "return", "returns", "deprecated", "author", "date", "version", "see", "attention", "file", "todo", "example"];
  const descriptions = [
    "Provides a brief summary of a function, class, or file. Used in index and summary views.",
    "Describes a parameter for a function or method, usually followed by the parameter name and description.",
    "Describes the return value of a function/action.",
    "Same as 'return'; an alternative keyword to describe what a function/action returns.",
    "Marks the function, class, or element as deprecated. Indicates that it should not be used anymore.",
    "Specifies the author of the file, function, or class.",
    "Indicates the creation or modification date of the file or item.",
    "States the version number of the documented item, typically used for tracking or release notes.",
    "Provides a cross-reference to another item such as a related function, class, or file.",
    "Highlights important information that the reader should pay close attention to.",
    "Used in file-level comments to document the purpose or content of the file.",
    "Marks a to-do item or something that needs to be implemented, fixed, or improved.",
    "Links to or embeds an example of how to use a class, function, or feature."
  ];

  var autoCompletions: CompletionItem[] = [];
  items.forEach((item, i) => {
    autoCompletions.push({
      label: item,
      kind: CompletionItemKind.Property,
      detail: descriptions[i]
    });
  });
  return autoCompletions;
}

// This Function 
function getCompletionsWithinStruct(remainingChain: string[], currentStruct: PSSLangObjects, ast: PSSLangObjects[]): CompletionItem[] {
  let completions: CompletionItem[] = [];
  if (remainingChain.length === 0) {
    currentStruct.children.forEach(child => {
      completions.push({
        label: child.name,
        kind: CompletionItemKind.EnumMember
      });
    });
    return completions;
  }

  const memberName = remainingChain[0];
  const member = currentStruct.children.find(child => child.name === memberName);
  if (!member) {
    return completions;
  }

  const memberType = member.name; // Assuming 'type' is the name of a struct
  if (!memberType) {
    return completions;
  }

  const memberStruct = getNodeFromNameArray(ast, memberType);
  if (!memberStruct) {
    return completions;
  }

  return getCompletionsWithinStruct(remainingChain.slice(1), memberStruct, ast);
}

// This function returns auto-completion for chain items (Like structs, buffer items, etc.)
function getCompletionsForChain(chain: string[], ast: PSSLangObjects[]): CompletionItem[] {
  let completions: CompletionItem[] = [];
  if (chain.length == 0) {
    return completions;
  }
  const baseName = chain[0];
  const parent = getNodeFromNameArray(ast, baseName);
  if (!parent) {
    return completions;
  }
  const parentNode = parent as InstanceNode;
  const structName = parentNode.instanceType;
  const superParent = getNodeFromNameArray(ast, structName);
  if (!superParent) {
    return completions;
  }
  if (chain.length === 1) {
    superParent.children.forEach(child => {
      completions.push({
        label: child.name,
        kind: CompletionItemKind.EnumMember
      });
    });
    return completions;
  } else {
    return getCompletionsWithinStruct(chain.slice(1), superParent, ast);
  }
}

// This function provides auto-completions for function parameters
function getCompletionsForFunction(name: string, index: number, ast: PSSLangObjects[]): CompletionItem[] {
  let completions: CompletionItem[] = [];
  let node = getNodeFromNameArray(ast, name);
  if (!node) {
    return completions;
  }
  const funcNode = node as FunctionNode;
  const params = funcNode.parameters;
  if (index > (params.length - 1)) {
    return [];
  }
  const type = params[index].paramType;
  const allTypeNodes = collectAllInstanceNodes(ast, type);
  allTypeNodes.forEach(instanceNode => {
    completions.push({
      label: instanceNode.name,
      kind: CompletionItemKind.Variable
    });
  });
  return completions;
}

export { getCompletionKind, getFunctionContext, isInsideMultilineComment, getDotNotationChain, getCommentCompletions, getCompletionsForChain, getCompletionsForFunction }