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

import { Position, Range } from "vscode-languageserver/node";
import { commentDocs, metaData, objType, semanticTokensLegend } from "../definitions/dataTypes";
import { buildAST, buildASTNew } from "./ast";
import { TextDocument } from "vscode-languageserver-textdocument";
import { InstanceNode, PSSLangObjects, StructNode } from "../definitions/dataStructures";
const fs = require('fs-extra')
const path = require('path')

export function isWithinCommentBlock(document: { lineAt: (arg0: any) => { (): any; new(): any; text: string; }; }, lineNumber: any) {
  for (let i = lineNumber; i >= 0; i--) {
    const lineText = document.lineAt(i).text.trim();

    if ((lineText.startsWith('/*') || lineText.startsWith("/**")) && !lineText.endsWith('*/')) {
      return true;  /* Found the start of an unclosed block comment */
    }
    if (lineText.endsWith('*/')) {
      return false;  /* Found the end of the block comment */
    }
  }
  return false;
}

export function getObjType(str: string): objType {
  switch (str.toUpperCase()) {
    case "COMPONENT":
      return objType.COMPONENT;
    case "ACTION":
      return objType.ACTION;
    case "ACTION":
      return objType.ACTIVITY;
    case "FUNCTION":
      return objType.FUNCTION;
    case "PROCEDURAL_FUNCTION":
      return objType.PROCEDURAL_FUNCTION;
    case "ENUM":
      return objType.ENUM;
    case "REGISTER_BODY_ITEM":
      return objType.REGISTER_BODY_ITEM;
    case "REGISTER_GROUP":
      return objType.REGISTER_GROUP;
    case "REGISTER_COMP":
      return objType.REGISTER_COMP;
    case "REGISTER_DEF":
      return objType.REGISTER_DEF;
    case "REGISTER":
      return objType.REGISTER;
    case "BUFFER":
      return objType.BUFFER;
    case "STRUCT":
      return objType.STRUCT;
    case "STATE":
      return objType.STATE;
    case "STREAM":
      return objType.STREAM;
    case "RESOURCE_OBJECT":
      return objType.RESOURCE_OBJECT;
    case "POOLS":
      return objType.POOLS;
    case "PACKAGE":
      return objType.PACKAGE;
    case "MONITOR":
      return objType.MONITOR;
    case "CONSTRAINT":
      return objType.CONSTRAINT;
    case "DATA":
      return objType.DATA;
    case "TYPEDEF":
      return objType.TYPEDEF;
    case "CHANDLE":
      return objType.CHANDLE;
    case "INTEGER":
      return objType.INTEGER;
    case "BIT":
      return objType.BIT;
    case "STRING":
      return objType.STRING;
    case "BOOL":
      return objType.BOOL;
    case "FLOAT32":
      return objType.FLOAT32;
    case "FLOAT64":
      return objType.FLOAT64;
    case "REF":
      return objType.REF;
    case "ARRAY":
      return objType.ARRAY;
    case "LIST":
      return objType.LIST;
    case "MAP":
      return objType.MAP;
    case "SET":
      return objType.SET;
    case "INSTANCE":
      return objType.INSTANCE;
    case "MEMORY_SPACE":
      return objType.MEMORY_SPACE;
    case "MEMORY_REGION":
      return objType.MEMORY_REGION;
    case "MEMORY_CLAIM":
      return objType.MEMORY_CLAIM;
    case "VARARGS":
      return objType.VARARGS;
    case "TEMPLATE_ITEM":
      return objType.TEMPLATE_ITEM;
    case "ACTION_HANDLE":
      return objType.ACTION_HANDLE;
    case "ADDRESS_SPACE":
      return objType.ADDRESS_SPACE;
    case "ADDRESS_REGION":
      return objType.ADDRESS_REGION;
    case "ADDRESS_CLAIM":
      return objType.ADDRESS_CLAIM;
    case "STRUCT_ITEM":
      return objType.STRUCT_ITEM;
    case "EXEC_PRESOLVE":
      return objType.EXEC_PRESOLVE;
    case "EXEC_POSTSOLVE":
      return objType.EXEC_POSTSOLVE;
    case "EXEC_PREBODY":
      return objType.EXEC_PREBODY;
    case "EXEC_BODY":
      return objType.EXEC_BODY;
    case "EXEC_HEADER":
      return objType.EXEC_HEADER;
    case "EXEC_DECLARATION":
      return objType.EXEC_DECLARATION;
    case "EXEC_RUNSTART":
      return objType.EXEC_RUNSTART;
    case "EXEC_RUNEND":
      return objType.EXEC_RUNEND;
    case "EXEC_INITDOWN":
      return objType.EXEC_INITDOWN;
    case "EXEC_INITUP":
      return objType.EXEC_INITUP;
    case "EXEC_INIT":
      return objType.EXEC_INIT;
    case "EXEC_TARGET":
      return objType.EXEC_TARGET;
    case "EXEC_FILE":
      return objType.EXEC_FILE;
    case "CALL_SUPER":
      return objType.CALL_SUPER;
    default:
      return objType.UNKNOWN;
  }
}

export function getFlowObjType(str: string): objType.BUFFER | objType.STREAM | objType.STATE | objType.POOLS {
  switch (str.toUpperCase()) {
    case "STREAM":
      return objType.STREAM;
    case "STATE":
      return objType.STATE;
    case "POOLS":
      return objType.POOLS;
    default:
      return objType.BUFFER;
  }
}

export function getExecType(str: string): objType.EXEC_PRESOLVE | objType.EXEC_POSTSOLVE | objType.EXEC_PREBODY | objType.EXEC_BODY | objType.EXEC_HEADER | objType.EXEC_DECLARATION | objType.EXEC_RUNSTART | objType.EXEC_RUNEND | objType.EXEC_INITDOWN | objType.EXEC_INITUP | objType.EXEC_INIT {
  switch (str.toUpperCase()) {
    case "EXEC_PRESOLVE":
      return objType.EXEC_PRESOLVE;
    case "EXEC_POSTSOLVE":
      return objType.EXEC_POSTSOLVE;
    case "EXEC_PREBODY":
      return objType.EXEC_PREBODY;
    case "EXEC_BODY":
      return objType.EXEC_BODY;
    case "EXEC_HEADER":
      return objType.EXEC_HEADER;
    case "EXEC_DECLARATION":
      return objType.EXEC_DECLARATION;
    case "EXEC_RUNSTART":
      return objType.EXEC_RUNSTART;
    case "EXEC_RUNEND":
      return objType.EXEC_RUNEND;
    case "EXEC_INITDOWN":
      return objType.EXEC_INITDOWN;
    case "EXEC_INITUP":
      return objType.EXEC_INITUP;
    default:
      return objType.EXEC_INIT
  }
}

export function getStructKind(st: string): objType.STRUCT | objType.BUFFER | objType.STATE | objType.STREAM | objType.RESOURCE_OBJECT {
  switch (st.toUpperCase()) {
    case "BUFFER":
      return objType.BUFFER;
    case "STATE":
      return objType.STATE;
    case "STREAM":
      return objType.STREAM;
    case "RESOURCE_OBJECT":
      return objType.RESOURCE_OBJECT;
    default:
      return objType.STRUCT;
  }
}

export const mapTokenTypes = ((arr: string[]) => (str: string) => arr.indexOf(str))(semanticTokensLegend.tokenTypes);
export const mapTokenModifiers = ((arr) => (str: string) => str in arr ? 1 << arr.indexOf(str) : 0)(semanticTokensLegend.tokenModifiers);

export function buildMarkdownComment(docs: commentDocs): string {
  let markdown = `## ${docs.name}\n\n`;

  // Brief
  markdown += `${docs.brief}\n\n`;

  // Details
  if (docs.details) markdown += `${docs.details}\n\n`;

  // Parameters
  if (docs.paramNames.length > 0) {
    markdown += "### Parameters\n";
    docs.paramNames.forEach((name, i) => {
      const desc = docs.paramDescriptions[i] || "No description";
      markdown += `- **${name}** : ${desc}\n`;
    });
    markdown += "\n";
  }

  // See Also
  if (docs.sees.length > 0) {
    markdown += "### See Also\n";
    markdown += docs.sees.map(see => `- ${see}`).join("\n") + "\n\n";
  }

  // Returns
  if (docs.returns) {
    markdown += "### Returns\n";
    markdown += `${docs.returns}\n\n`;
  }

  return markdown;
}

export function fullRange(document: TextDocument): Range {
  const lastLine = document.lineCount - 1;
  const lastChar = document.getText().split("\n")[lastLine]?.length || 0;

  return Range.create(
    Position.create(0, 0), /* Start position at first character */
    Position.create(lastLine, lastChar) /* End position at last character */
  );
}

export async function updateAST(fileURI: string, documentText: string): Promise<metaData[]> {
  var items = buildAST(fileURI, documentText);
  return items;
}

export async function updateASTNew(fileURI: string, documentText: string): Promise<PSSLangObjects[]> {
  var items = buildASTNew(fileURI, documentText);
  return items;
}

export async function scanDirectory(dirPath: string, files: string[]): Promise<void> {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await scanDirectory(fullPath, files);
      } else if (entry.isFile() && entry.name.endsWith('.pss')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory: ${dirPath}`, error);
    throw error;
  }
}

export function updateASTMeta(old: metaData[], newData: metaData[]): metaData[] {
  const seenKeys = new Set(newData.flatMap(Object.keys));

  const uniqueArray2 = old.filter(item =>
    Object.keys(item).every(key => !seenKeys.has(key))
  );

  return [...newData, ...uniqueArray2];
}

function mergePSSNodes(oldNode: PSSLangObjects, newNode: PSSLangObjects): PSSLangObjects {
  const merged = { ...oldNode, ...newNode };
  if (newNode.children && oldNode.children) {
    const childMap = new Map<string, PSSLangObjects>();
    oldNode.children.forEach(child => childMap.set(child.name, child));
    newNode.children.forEach(child => {
      const oldChild = childMap.get(child.name);
      childMap.set(child.name, oldChild ? mergePSSNodes(oldChild, child) : { ...child });
    });
    merged.children = Array.from(childMap.values());
  }
  return merged;
}

export function updateASTNewMeta(oldArray: PSSLangObjects[], newArray: PSSLangObjects[]): PSSLangObjects[] {
  // if (newArray.length === 0) { return oldArray; }
  // const mergedMap = new Map<string, PSSLangObjects>();

  // oldArray.forEach(item => mergedMap.set(item.name, { ...item }));
  // newArray.forEach(item => {
  //   const oldItem = mergedMap.get(item.name);
  //   mergedMap.set(item.name, oldItem ? mergePSSNodes(oldItem, item) : { ...item });
  // });

  // return Array.from(mergedMap.values());
  return [...oldArray, ...newArray]
}

/** This function returns sizes for known object */
function getObjectSize(obj: string): number {
  /* Base type sizes */
  const baseTypes: { [key: string]: number } = {
    'int': 32,
    'bit': 1
  };

  /* Helper function to recursively calculate type size */
  function parseTypeSize(type: string): number {
    /* Check for array type */
    if (type.startsWith('array<')) {
      const match = type.match(/array<([^,]+),(\d+)>/);
      if (match) {
        const innerType = match[1];
        const arraySize = parseInt(match[2]);
        return getObjectSize(innerType) * arraySize;
      }
      return 0;
    }

    /* Check for range notation */
    const rangeMatch = type.match(/^(int|bit)\[(\d+):(\d+)\]$/);
    if (rangeMatch) {
      const baseType = rangeMatch[1];
      const start = parseInt(rangeMatch[2]);
      const end = parseInt(rangeMatch[3]);
      return Math.abs(end - start) + 1;
    }

    /* Check for single index notation */
    const indexMatch = type.match(/^(int|bit)\[(\d+)\]$/);
    if (indexMatch) {
      return parseInt(indexMatch[2]);
    }

    /* Base type lookup */
    return baseTypes[type] || 0;
  }

  return parseTypeSize(obj);
}

/** This lambda function finds the next closest byte size for given bit size */
export const findByteSize: (input: number) => number = (input) => {
  const remainder = input % 8;
  return remainder === 0 ? 8 : 8 - remainder;
};


/** This function returns the size of a packed struct - for use with registers */
export function getPackedStructSize(obj: PSSLangObjects[] | PSSLangObjects, packedStructName: string): number {
  let packedStructNode: PSSLangObjects | undefined;

  if (Array.isArray(obj)) {
    /* Iteratively get the packedStruct from each object in pssLangObject array */
    obj.forEach(arrayItem => {
      packedStructNode = getNodeFromName(arrayItem, packedStructName);
      if (typeof (packedStructName) !== 'undefined') {
        return;
      }
    });
  } else {
    packedStructNode = getNodeFromName(obj, packedStructName);
  }
  if (typeof (packedStructNode) === 'undefined') {
    return 0;
  }
  let size: number = 0;
  packedStructNode.children.map(structItemNode => {
    const structItem = structItemNode as InstanceNode;
    size += getObjectSize(structItem.instanceType);
  });
  /* todo */
  return size;
}

/** This function goes through a PSS Lang Objects data type and finds the object with given name and returns it */
export function getNodeFromName(object: PSSLangObjects, name: string, ignore: objType = objType.UNKNOWN): PSSLangObjects | undefined {
  const stack: PSSLangObjects[] = [object];
  /* This logic uses an iterative Depth First Search algorithm to find the child */
  while (stack.length > 0) {
    const current = stack.pop()!;
    if (current.name === name && current.type != ignore) {
      return current;
    }
    for (const child of current.children) {
      stack.push(child);
    }
  }
  return undefined;
}

/** This function just iterates through objects and returns the result from getNodeFromName function */
export function getNodeFromNameArray(objects: PSSLangObjects[], name: string, ignore: objType = objType.UNKNOWN): PSSLangObjects | undefined {
  for (const obj of objects) {
    const node = getNodeFromName(obj, name, ignore);
    if (typeof (node) !== 'undefined') {
      return node;
    }
  }
  return undefined;
}

/**
 * Collects nodes from PSSLangObjects arrays that match the given criteria.
 * If multiple criteria are provided, nodes must match all of them.
 */
export function collectAllPSSNodes(
  objects: PSSLangObjects[],
  options: {
    name?: string,
    type?: objType,
    fileURI?: string
  } = {},
  skipOptions: {
    skipName?: string,
    skipType?: objType,
    skipFileURI?: string
  } = {}
): PSSLangObjects[] {
  const { name, type, fileURI } = options;
  const { skipName, skipType, skipFileURI } = skipOptions;
  const results: PSSLangObjects[] = [];

  /* If no filtering criteria provided, return empty array */
  if (!name && type === undefined && !fileURI) {
    return results;
  }

  /* Process each root object */
  for (const object of objects) {
    /* Use iterative DFS to traverse the tree */
    const stack: PSSLangObjects[] = [object];

    while (stack.length > 0) {
      const current = stack.pop()!;

      /* Check if current node matches all specified criteria */
      let isMatch = true;

      if (name !== undefined && current.name !== name) {
        isMatch = false;
      }

      if (type !== undefined && current.type !== type) {
        isMatch = false;
      }

      if (fileURI !== undefined &&
        (!current.definedOn || current.definedOn.file !== fileURI)) {
        isMatch = false;
      }

      /* Skip certain files */
      if (skipName !== undefined && current.name === skipName) {
        isMatch = false;
      }
      if (skipType !== undefined && current.type === skipType) {
        isMatch = false;
      }
      if (skipFileURI !== undefined && (!current.definedOn || current.definedOn.file === skipFileURI)) {
        isMatch = false;
      }

      /* If all criteria matched, add to results */
      if (isMatch) {
        results.push(current);
      }

      /* Add all children to stack for processing */
      for (const child of current.children) {
        stack.push(child);
      }
    }
  }

  return results;
}

// Type guard to check if a node is an InstanceNode
function isInstanceNode(node: PSSLangObjects): node is InstanceNode {
  return node.type === objType.INSTANCE;
}
export function collectAllInstanceNodes(
  objects: PSSLangObjects[],
  instanceType: string
): InstanceNode[] {
  const results: InstanceNode[] = [];

  // Process each root object
  for (const object of objects) {
    // Use iterative DFS with a stack
    const stack: PSSLangObjects[] = [object];

    while (stack.length > 0) {
      const current = stack.pop()!;

      // Check if the current node is an InstanceNode with matching instanceType
      if (isInstanceNode(current) && current.instanceType === instanceType) {
        results.push(current);
      }

      // Add all children to the stack for further processing
      for (const child of current.children) {
        stack.push(child);
      }
    }
  }

  return results;
}