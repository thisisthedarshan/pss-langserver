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
import { CompletionItemKind } from "vscode-languageserver/node";
import { objType } from "../definitions/dataTypes";

export function getCompletionKind(type: objType): CompletionItemKind {
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
