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
import { integer } from "vscode-languageserver";
import { builtInSignatures } from "../definitions/builtinFunctions";

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

export enum objType {
  NONE, COMPONENT, ACTION, FUNCTION, ENUM, REGISTER_NAME, REGISTER_GROUP, INTEGER,
  BOOL, FLOAT, BUFFER, STRUCT, RESOURCE_OBJECT, PACKAGE, MONITOR, CONSTRAINT, DATA,
  TYPEDEF
}


export type commentDocs = {
  name: string;
  brief: string;
  details: string;
  paramNames: string[];
  paramTypes: string[];
  paramDescriptions: string[];
  sees: string[];
  returns: objType;
}

/* Tells what line Defines the object */
type definedOn = {
  file: string;
  lineNumber: integer;
  columnNumber: integer;
}

/* Tells what line(s) use the object */
type usedOn = {
  file: string;
  lineNumber: integer;
}

/* Holds info on parameters */
type params = {
  paramType: objType;
  paramDefault: any | undefined;
}

/* Holds some meta info on the object(s) */
type metaInfo = {
  objectType: objType;
  parent: string | undefined;
  onLine: definedOn;
  used: usedOn[];
  documentation: commentDocs | string | undefined;
  templateParams: string | params[] | undefined;
  inherits: string | undefined; /* In ENUMS this is their type, expression for data */
  subComponents: string[] | undefined;
}

/* This is the object returned by the visitor */
export type metaData = {
  keyword: string;
  info: metaInfo;
}
