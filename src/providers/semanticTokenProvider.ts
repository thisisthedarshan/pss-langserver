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

import { SemanticTokens, SemanticTokensBuilder } from "vscode-languageserver/node";
import { KeywordInfo, metaData, objType, SemanticToken } from "../definitions/dataTypes";
import { mapTokenModifiers, mapTokenTypes } from "../parser/helpers";

import { semanticTokensBuiltin, semanticTokenTypes } from "../definitions/semanticTokenDefinitions";
import { PSSLangObjects } from "../definitions/dataStructures";


function getSemanticTokenInfo(type: keyof typeof objType) {
  return semanticTokenTypes[type];
}

function encodeSemanticTokens(tokens: SemanticToken[]): number[] {
  const encodedTokens: number[] = [];
  let prevLine = 0;
  let prevChar = 0;

  for (const token of tokens) {
    const deltaLine = token.line - prevLine;
    const deltaChar = token.line === prevLine
      ? token.startChar - prevChar
      : token.startChar;

    encodedTokens.push(
      deltaLine,
      deltaChar,
      token.length,
      token.tokenType,
      token.tokenModifiers
    );

    prevLine = token.line;
    prevChar = token.startChar;
  }

  return encodedTokens;
}


/* Provides semantic tokens to the client */
export function generateSemanticTokens(file: string, ast: metaData[]): SemanticTokens {
  let semTokensFromMeta = new SemanticTokensBuilder();
  findSemanticTokens(file, semanticTokensBuiltin, semTokensFromMeta);
  ast.flatMap(astObject => {
    Object.entries(astObject).map(([keyword, info]) => {
      let modifiers: number = 0;
      let objectType: objType = info.objectType;
      let semanticTokensForAstObj: KeywordInfo = semanticTokenTypes[objType[objectType]];

      if (Array.isArray(semanticTokensForAstObj.tokenModifiers)) {
        semanticTokensForAstObj.tokenModifiers.forEach(token => {
          modifiers += mapTokenModifiers(token.toString())
        });
      }

      semTokensFromMeta.push(
        info.onLine.lineNumber,
        info.onLine.columnNumber,
        keyword.length,
        typeof semanticTokensForAstObj.tokenType !== "number" ? mapTokenTypes(semanticTokensForAstObj.tokenType.toString()) : semanticTokensForAstObj.tokenType,
        Array.isArray(semanticTokensForAstObj.tokenModifiers) ? modifiers : typeof semanticTokensForAstObj.tokenModifiers !== "number" ? mapTokenModifiers(semanticTokensForAstObj.tokenModifiers.toString()) : semanticTokensForAstObj.tokenModifiers,
      );
    });

  });

  return semTokensFromMeta.build();
}

function getTokensForNode(pssNode: PSSLangObjects): { line: number, char: number, length: number, tokenType: number, tokenModifiers: number }[] {
  const returnval: { line: number, char: number, length: number, tokenType: number, tokenModifiers: number }[] = [];

  const objectType = pssNode.type;
  const semanticTokensForAstObj = semanticTokenTypes[objectType] || { tokenType: 0, tokenModifiers: 0 }; // Fallback
  const onInfo = pssNode.definedOn || { lineNumber: 0, columnNumber: 0 }; // Fallback

  let modifiers = 0;
  if (Array.isArray(semanticTokensForAstObj.tokenModifiers)) {
    modifiers = semanticTokensForAstObj.tokenModifiers.reduce((sum, token) => sum + mapTokenModifiers(token.toString()), 0);
  } else {
    modifiers = typeof semanticTokensForAstObj.tokenModifiers === "number"
      ? semanticTokensForAstObj.tokenModifiers
      : mapTokenModifiers(semanticTokensForAstObj.tokenModifiers.toString());
  }

  returnval.push({
    line: onInfo.lineNumber,
    char: onInfo.columnNumber,
    length: pssNode.name.length,
    tokenType: typeof semanticTokensForAstObj.tokenType === "number"
      ? semanticTokensForAstObj.tokenType
      : mapTokenTypes(semanticTokensForAstObj.tokenType.toString()),
    tokenModifiers: modifiers,
  });

  pssNode.children.forEach(child => {
    returnval.push(...getTokensForNode(child));
  });

  return returnval;
}

export function generateSemanticTokensAdvanced(file: string, ast: PSSLangObjects[]): SemanticTokens {
  let semTokensFromMeta = new SemanticTokensBuilder();
  findSemanticTokens(file, semanticTokensBuiltin, semTokensFromMeta);
  ast.forEach(item => {
    const sematicDataArray = getTokensForNode(item);
    sematicDataArray.forEach(sematicData => {
      semTokensFromMeta.push(sematicData.line, sematicData.char, sematicData.length, sematicData.tokenType, sematicData.tokenModifiers);
    });
  });
  return semTokensFromMeta.build();
}

function findSemanticTokens(text: string, keywordArray: Record<string, KeywordInfo>, tokens: SemanticTokensBuilder): SemanticTokens {
  const lines = text.split('\n');

  /* Track comment state across lines */
  let inMultilineComment = false;

  /* Process each line */
  lines.forEach((line, lineIndex) => {
    let processedLine = line;
    let offsetMap: number[] = [];

    /* Build offset map for original positions */
    for (let i = 0; i < line.length; i++) {
      offsetMap[i] = i;
    }

    /* Handle multiline comments */
    if (inMultilineComment) {
      const endCommentIndex = line.indexOf('*/');
      if (endCommentIndex !== -1) {
        /* End of multiline comment found */
        processedLine = line.substring(endCommentIndex + 2);
        inMultilineComment = false;

        /* Adjust offset map for removed comment part */
        offsetMap = offsetMap.slice(endCommentIndex + 2);
      } else {
        /* Entire line is within a comment */
        return;
      }
    }

    /* Handle single line comments and start of multiline comments */
    let singleLineCommentIndex = processedLine.indexOf('//');
    let multilineCommentStartIndex = processedLine.indexOf('/*');

    /* Handle single line comments */
    if (singleLineCommentIndex !== -1) {
      if (multilineCommentStartIndex === -1 || singleLineCommentIndex < multilineCommentStartIndex) {
        processedLine = processedLine.substring(0, singleLineCommentIndex);
      }
    }

    /* Handle start of multiline comments */
    if (multilineCommentStartIndex !== -1) {
      if (singleLineCommentIndex === -1 || multilineCommentStartIndex < singleLineCommentIndex) {
        const endCommentIndex = processedLine.indexOf('*/', multilineCommentStartIndex + 2);
        if (endCommentIndex !== -1) {
          /* Multiline comment ends on the same line */
          processedLine =
            processedLine.substring(0, multilineCommentStartIndex) +
            processedLine.substring(endCommentIndex + 2);
        } else {
          /* Multiline comment continues to next line */
          processedLine = processedLine.substring(0, multilineCommentStartIndex);
          inMultilineComment = true;
        }
      }
    }

    /* Skip empty lines after comment removal */
    if (processedLine.trim() === '') {
      return;
    }

    /* Check each keyword */
    for (const [keyword, info] of Object.entries(keywordArray)) {
      let startIndex = 0;

      /* Find all occurrences of the keyword in the line */
      while (startIndex < processedLine.length) {
        const keywordIndex = processedLine.indexOf(keyword, startIndex);
        let modifiers: number = 0;
        if (keywordIndex === -1) {
          break; /* No more occurrences */
        }

        /* Check for word boundaries to avoid partial matches */
        const beforeChar = keywordIndex > 0 ? processedLine[keywordIndex - 1] : ' ';
        const afterChar = keywordIndex + keyword.length < processedLine.length ?
          processedLine[keywordIndex + keyword.length] : ' ';

        const isWordBoundaryBefore = /\W/.test(beforeChar);
        const isWordBoundaryAfter = /\W/.test(afterChar);

        if (Array.isArray(info.tokenModifiers)) {
          info.tokenModifiers.forEach(token => {
            modifiers += mapTokenModifiers(token.toString())
          });
        }

        if (isWordBoundaryBefore && isWordBoundaryAfter) {
          /* Map position back to original line using offset map */
          const originalIndex = offsetMap[keywordIndex] || keywordIndex;

          /* Add token */
          tokens.push(
            lineIndex,
            originalIndex,
            keyword.length,
            typeof info.tokenType !== "number" ? mapTokenTypes(info.tokenType.toString()) : info.tokenType,
            Array.isArray(info.tokenModifiers) ? modifiers : typeof info.tokenModifiers !== "number" ? mapTokenModifiers(info.tokenModifiers.toString()) : info.tokenModifiers,
          );
        }

        /* Move to the next position */
        startIndex = keywordIndex + keyword.length;
      }
    }
  });

  return tokens.build();
}