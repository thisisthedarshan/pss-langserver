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
import { integer, SemanticTokenModifiers, SemanticTokensLegend, SemanticTokenTypes } from "vscode-languageserver";

/* The tool spec config */
export interface PSS_Config {
  tabspaces: number,
  fileAuthor: string;
}

/* This enum defines the types of objects our AST has */
export enum objType {
  NONE = 'NONE',
  COMPONENT = 'COMPONENT',
  ACTION = 'ACTION',
  FUNCTION = 'FUNCTION',
  PROCEDURAL_FUNCTION = 'PROCEDURAL_FUNCTION',
  ENUM = 'ENUM',
  REGISTER_NAME = 'REGISTER_NAME',
  REGISTER_GROUP = 'REGISTER_GROUP',
  BUFFER = 'BUFFER',
  STRUCT = 'STRUCT',
  RESOURCE_OBJECT = 'RESOURCE_OBJECT',
  PACKAGE = 'PACKAGE',
  MONITOR = 'MONITOR',
  CONSTRAINT = 'CONSTRAINT',
  DATA = 'DATA',
  TYPEDEF = 'TYPEDEF',
  CHANDLE = 'CHANDLE',
  INTEGER = 'INTEGER',
  BIT = 'BIT',
  STRING = 'STRING',
  BOOL = 'BOOL',
  FLOAT32 = 'FLOAT32',
  FLOAT64 = 'FLOAT64',
  REF = 'REF',
  ARRAY = 'ARRAY',
  LIST = 'LIST',
  MAP = 'MAP',
  SET = 'SET',
  UNKNOWN = 'UNKNOWN'
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
export type params = {
  paramType: objType;
  paramName: string;
  paramDefault: any | undefined;
}

/* Holds some meta info on the object(s) */
export type metaInfo = {
  objectType: objType;
  parent: string | undefined;
  onLine: definedOn;
  used: usedOn[];
  documentation: string | undefined;
  params: string | params[] | undefined;
  /* In ENUMS this is their type, expression for data, return type for functions */
  type: string | undefined;
  subComponents: string[] | void[] | undefined;
}

/* This is the object returned by the visitor */
export type metaData = Record<string, metaInfo>;

export type semanticToken = {
  line: integer;
  startChar: integer;
  length: integer;
  tokenType: integer;
  tokenModifers: integer;
}

export interface SemanticToken {
  line: number;
  startChar: number;
  length: number;
  tokenType: number;
  tokenModifiers: number;
}


export interface KeywordInfo {
  tokenType: number | SemanticTokenTypes;
  tokenModifiers: number | SemanticTokenModifiers | SemanticTokenModifiers[];
}

/* Semantic Legend */
export const semanticTokensLegend = {
  tokenTypes: [
    "namespace",
    "type",
    "class",
    "enum",
    "interface",
    "struct",
    "typeParameter",
    "parameter",
    "variable",
    "property",
    "enumMember",
    "event",
    "function",
    "method",
    "macro",
    "keyword",
    "modifier",
    "comment",
    "string",
    "number",
    "regexp",
    "operator",
    "decorator"
  ],
  tokenModifiers: [
    "declaration",
    "definition",
    "readonly",
    "static",
    "deprecated",
    "abstract",
    "async",
    "modification",
    "documentation",
    "defaultLibrary"
  ]
};