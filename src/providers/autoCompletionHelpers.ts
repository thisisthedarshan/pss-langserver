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
