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
import alignTextElements, { formatDate, formatExpression, getBraceDepthChange, handleCommentWrapping, tokenizeLine, wrapCommentText } from "./formattingHelper";
import { statSync } from "fs-extra";
import * as path from 'path';

export function formatDocument(filePath: string, text: string, tabspace: number, author: string, patterns: string[], formatHeader: boolean, maxColumns: number): string {
  const fileName = path.basename(filePath);
  let doc: string = text;
  if (formatHeader) {
    const birthTime = formatDate(statSync(filePath).birthtime);
    const currentTime = formatDate(new Date());
    doc = formatFileHeader(text, fileName, birthTime, currentTime, author);
  }
  doc = formatCurlyBraces(doc);
  doc = formatCommas(doc);
  doc = formatMultilineComments(doc);
  doc = addNewlinesAfterSemicolons(doc);
  let lines = doc.split('\n');
  const formattedLines: string[] = [];
  let indentLevel = 0;
  let braceDepth = 0;
  let isInBlockComment = false;
  const indentLevels: number[] = [];
  const processedLines: string[] = [];

  // First pass: Calculate indentation and process lines
  for (let line of lines) {
    if (line.trim() === '') {
      processedLines.push('');
      indentLevels.push(0);
      continue;
    }
    const trimmedLine = line.trim();
    let formattedLine = formatOperators(trimmedLine);
    formattedLine = formatSingleLineComments(formattedLine);
    if (formattedLine.startsWith("*")) {
      formattedLine = ` ${formattedLine}`;
    }
    processedLines.push(formattedLine);
    if (trimmedLine[0] === '}' && !isInBlockComment) {
      indentLevel = Math.max(indentLevel - tabspace, 0);
    }
    if ((formattedLine.startsWith(')') || formattedLine.startsWith(']')) && !isInBlockComment) {
      braceDepth = Math.max(braceDepth - 1, 0);
    }
    const totalIndent = indentLevel + braceDepth * tabspace;
    indentLevels.push(totalIndent);
    const { depthChange, endsInBlockComment } = getBraceDepthChange(line, isInBlockComment);
    isInBlockComment = endsInBlockComment;
    braceDepth += depthChange;
    braceDepth = Math.max(braceDepth, 0);
    if (formattedLine.endsWith('{') && !isInBlockComment && !(/\/\/|\/\*/.test(formattedLine))) {
      indentLevel += tabspace;
    }
  }

  // Apply indentation
  const indentedLines = processedLines.map((line, idx) => ' '.repeat(indentLevels[idx]) + line);

  // Align patterns
  alignTextElements(indentedLines, patterns);

  // Wrap lines
  for (let idx = 0; idx < indentedLines.length; idx++) {
    const line = indentedLines[idx];
    const currentIndent = ' '.repeat(indentLevels[idx]);
    const wrappedLines = wrapLine(line, currentIndent, tabspace, maxColumns);
    formattedLines.push(...wrappedLines);
  }

  return formattedLines.join('\n');
}

function wrapLine(line: string, currentIndent: string, tabspace: number, maxColumns: number): string[] {
  if (maxColumns === 0 || line.length <= maxColumns) {
    return [line];
  }
  const tokens: string[] = tokenizeLine(line);
  const wrappedLines: string[] = [];
  let currentLine = '';
  let isFirstLine = true;
  let inMultiLineComment = false;
  let hasWrappedSingleLineComment = false;

  for (let j = 0; j < tokens.length; j++) {
    const token = tokens[j];
    const separator = currentLine && !['(', ',', ')'].includes(token) && !['(', ','].includes(currentLine.slice(-1)) ? ' ' : '';
    const potentialLine = currentLine + separator + token;
    const indentLength = isFirstLine ? currentIndent.length : currentIndent.length + tabspace;
    const potentialLength = indentLength + potentialLine.length;

    // Handle long single-line comment tokens
    if (token.startsWith('//') && potentialLength > maxColumns) {
      const commentText = token.substring(2).trimStart();
      const words = commentText.split(' ');
      let commentLines: string[] = [];
      let currentCommentLine = '';
      for (const word of words) {
        const testLine = currentCommentLine ? currentCommentLine + ' ' + word : word;
        if (indentLength + testLine.length + 3 > maxColumns) { // 3 for "// "
          commentLines.push('// ' + currentCommentLine.trim());
          currentCommentLine = word;
        } else {
          currentCommentLine = testLine;
        }
      }
      if (currentCommentLine) {
        commentLines.push('// ' + currentCommentLine.trim());
      }
      if (currentLine) {
        wrappedLines.push((isFirstLine ? currentIndent : currentIndent + ' '.repeat(tabspace)) + currentLine.trimStart());
      }
      if (isFirstLine) {
        wrappedLines.push(currentIndent + commentLines[0]);
        for (let k = 1; k < commentLines.length; k++) {
          wrappedLines.push(currentIndent + ' '.repeat(tabspace) + commentLines[k]);
        }
      } else {
        commentLines.forEach(cl => wrappedLines.push(currentIndent + ' '.repeat(tabspace) + cl));
      }
      isFirstLine = false;
      hasWrappedSingleLineComment = true;
      currentLine = '';
    }
    // Handle long multi-line comment tokens
    else if (token.startsWith('/*') && token.endsWith('*/') && potentialLength > maxColumns) {
      const commentText = token.substring(2, token.length - 2).trim();
      const words = commentText.split(' ');
      let commentLines: string[] = [];
      let currentCommentLine = '';
      for (const word of words) {
        const testLine = currentCommentLine ? currentCommentLine + ' ' + word : word;
        if (indentLength + testLine.length + 4 > maxColumns) { // 4 for "* "
          commentLines.push('* ' + currentCommentLine.trim());
          currentCommentLine = word;
        } else {
          currentCommentLine = testLine;
        }
      }
      if (currentCommentLine) {
        commentLines.push('* ' + currentCommentLine.trim());
      }
      if (currentLine) {
        wrappedLines.push((isFirstLine ? currentIndent : currentIndent + ' '.repeat(tabspace)) + currentLine.trimStart());
      }
      wrappedLines.push((isFirstLine ? currentIndent : currentIndent + ' '.repeat(tabspace)) + '/*');
      commentLines.forEach(cl => wrappedLines.push(currentIndent + ' '.repeat(tabspace) + cl));
      wrappedLines.push(currentIndent + ' '.repeat(tabspace) + '*/');
      isFirstLine = false;
      currentLine = '';
    }
    else if (potentialLength > maxColumns && currentLine) {
      const lineIndent = isFirstLine ? currentIndent : currentIndent + ' '.repeat(tabspace);
      wrappedLines.push(lineIndent + currentLine.trimStart());
      isFirstLine = false;
      if (currentLine.includes('//')) {
        hasWrappedSingleLineComment = true;
      }
      currentLine = handleCommentWrapping(token, inMultiLineComment, hasWrappedSingleLineComment);
    } else {
      currentLine = potentialLine;
    }

    if (token === '/*') {
      inMultiLineComment = true;
    } else if (token === '*/') {
      inMultiLineComment = false;
    }
  }

  if (currentLine) {
    const lineIndent = isFirstLine ? currentIndent : currentIndent + ' '.repeat(tabspace);
    wrappedLines.push(lineIndent + currentLine.trimStart());
  }

  return wrappedLines;
}

function formatCurlyBraces(input: string): string {
  /* 
   * Check for comments on the same line before opening brace
   * If a comment exists, place the brace before the comment
   */
  input = input.replace(/(\s*)([^\/]*?)(\s*)(\/\/.*|\/\*.*?\*\/)(\s*\n\s*{)/g, '$1$2 {$3$4$5');

  /* Remove newlines before opening braces to bring them up */
  input = input.replace(/\n\s*{/g, '');

  /* Ensure space before opening brace */
  input = input.replace(/\s*{/g, ' {');

  /* Ensure newline after opening brace */
  input = input.replace(/{(?!\s*\n)/g, '{\n');

  /* Add newline before closing brace if there isn't one already */
  input = input.replace(/([^\n])(\s*})(?!\n)/g, (match, p1, p2) => {
    return /\n/.test(match) ? match : p1 + '\n' + p2;
  });

  /* Add newline after } unless followed by newline, semicolon, or comment */
  input = input.replace(/}(?!\s*(?:\n|;|\/\/))/g, '}\n');

  /* Add newline after } followed by a multiline comment if newline is missing */
  input = input.replace(/}(\s*\/\*[\s\S]*?\*\/)(?!\n)/g, '}$1\n');

  return input;
}

function addNewlinesAfterSemicolons(input: string): string {
  return input.replace(
    /(\/\/.*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|;/g,
    (match, commentOrString, offset, string) => {
      if (commentOrString) {
        // If it's a comment or string literal, return it unchanged
        return commentOrString;
      } else {
        // It's a semicolon; determine if a newline should be added
        let next = offset + 1;
        // Skip horizontal whitespace (tabs and spaces) after the semicolon
        while (next < string.length && /[\t ]/.test(string[next])) {
          next++;
        }
        // Check what follows the semicolon
        if (next >= string.length || string[next] === '\n') {
          // Semicolon is at end of string or followed by a newline; no extra newline needed
          return ';';
        } else if (string.startsWith('//', next) || string.startsWith('/*', next)) {
          // Semicolon is followed by a comment; do not add newline
          return ';';
        } else {
          // Semicolon is followed by code; add a newline
          return ';\n';
        }
      }
    }
  );
}

function formatCommas(input: string): string {
  return input.replace(/,(?=\S)/g, ', ');
}

function formatMultilineComments(documentText: string): string {
  return documentText.replace(
    /(\/\*\*?)([\s\S]*?)\*\//g,
    (match: string, openingBlock: string, commentBody: string) => {
      const opening = openingBlock;
      const closing = '*/';
      if (!commentBody.includes('\n')) {
        return `${opening} ${commentBody.trim()} ${closing}`.replace(/\s+/g, ' ');
      }
      const newlineIndex = commentBody.indexOf('\n');
      let firstPart = '';
      let rest = commentBody;
      if (newlineIndex !== -1) {
        firstPart = commentBody.substring(0, newlineIndex).trim();
        rest = commentBody.substring(newlineIndex + 1);
      } else {
        firstPart = commentBody.trim();
        rest = '';
      }
      if (/^\*+$/.test(firstPart)) {
        let formattedComment = `${opening} ${firstPart}`;
        if (rest) {
          const lines = rest.split('\n');
          const formattedLines = lines.map((line: string) => {
            const trimmedLine = line.trim();
            if (trimmedLine === '' || trimmedLine === '*') {
              return null;
            } else if (trimmedLine.startsWith('*')) {
              return ` * ${trimmedLine.slice(1).trim()}`;
            } else {
              return ` * ${trimmedLine}`;
            }
          }).filter((line: string | null) => line !== null);
          formattedComment += '\n' + formattedLines.join('\n');
        }
        formattedComment += '\n' + closing;
        return formattedComment;
      } else {
        const lines = commentBody.split('\n');
        const formattedLines = lines.map((line: string) => {
          const trimmedLine = line.trim();
          if (trimmedLine === '' || trimmedLine === '*') {
            return null;
          } else if (trimmedLine.startsWith('*')) {
            return `* ${trimmedLine.slice(1).trim()}`;
          } else {
            return `* ${trimmedLine}`;
          }
        }).filter((line: string | null) => line !== null);
        return `${opening}\n${formattedLines.join('\n')}\n${closing}`;
      }
    }
  );
}

function formatOperators(input: string): string {
  const multiCharOperators = [
    "===", "!==", "==", "!=", "<=", ">=", "=>", 
    "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", ">>>=",
    "&&", "||", "++", "--", "<<", ">>", ">>>", "**"
  ];
  
  multiCharOperators.sort((a, b) => b.length - a.length);
  
  const operatorRegex = new RegExp(
    `(${multiCharOperators.map(op => op.replace(/[-+*/%^=<>!&|]/g, '\\$&')).join('|')})|([+\\-*/%^=<>!&|])`, 
    'g'
  );

  function formatExpression(expression: string): string {
    return expression.replace(operatorRegex, (match, multiOp, singleOp) => {
      if (multiOp) {
        return ` ${multiOp} `;
      } else if (singleOp) {
        return ` ${singleOp} `;
      }
      return match;
    }).replace(/\s+/g, ' ').trim();
  }

  let result = "";
  let i = 0;
  let bracketDepth = 0;
  let currentSegment = "";

  while (i < input.length) {
    if (input[i] === '/' && (input[i + 1] === '/' || input[i + 1] === '*')) {
      if (currentSegment) {
        result += bracketDepth > 0 ? formatExpression(currentSegment) : currentSegment;
        currentSegment = "";
      }
      if (input[i + 1] === '/') {
        const commentEnd = input.indexOf('\n', i) === -1 ? input.length : input.indexOf('\n', i);
        result += input.substring(i, commentEnd);
        i = commentEnd;
      } else {
        const commentEnd = input.indexOf('*/', i) + 2;
        result += input.substring(i, commentEnd);
        i = commentEnd;
      }
    } else if (input[i] === '(') {
      if (currentSegment) {
        result += bracketDepth > 0 ? formatExpression(currentSegment) : currentSegment;
        currentSegment = "";
      }
      bracketDepth++;
      result += '(';
      i++;
    } else if (input[i] === ')') {
      if (currentSegment) {
        result += bracketDepth > 0 ? formatExpression(currentSegment) : currentSegment;
        currentSegment = "";
      }
      bracketDepth--;
      result += ')';
      i++;
    } else {
      currentSegment += input[i];
      i++;
    }
  }

  if (currentSegment) {
    result += bracketDepth > 0 ? formatExpression(currentSegment) : currentSegment;
  }

  return result;
}

function formatSingleLineComments(line: string): string {
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // ');
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // ');
  return line;
}

export function formatFileHeader(content: string, fileName: string, creationDate: string, lastModifiedDate: string, author: string): string {
  const headerRegex = /^\/\*\*[\s\S]*?\*\/\n?/;

  if (headerRegex.test(content)) {
    const header = content.match(headerRegex)![0];
    const headerLines = header
      .replace(/^\/\*\*\s*\n/, '')
      .replace(/\s*\*\/\s*$/, '')
      .split('\n')
      .map(line => line.replace(/^\s*\*\s?/, ''))
      .filter(line => line !== '');

    const hasFileTag = headerLines.some(line => line.trim().startsWith('@file'));
    const hasAuthorTag = headerLines.some(line => line.trim().startsWith('@author'));
    const hasDateTag = headerLines.some(line => line.trim().startsWith('@date'));
    const hasLastModified = headerLines.some(line => line.trim().startsWith('Last Modified on:'));

    let newHeaderLines = [];
    if (!hasFileTag) {
      newHeaderLines.push(`@file ${fileName}`);
    }
    for (const line of headerLines) {
      if (!line.trim().startsWith('@author') &&
        !line.trim().startsWith('Last Modified on:') &&
        (hasDateTag || !line.trim().startsWith('@date'))) {
        newHeaderLines.push(line);
      }
    }
    if (!hasDateTag) {
      newHeaderLines.push(`@date ${creationDate}`);
    }
    if (!hasAuthorTag) {
      newHeaderLines.push(`@author ${author}`);
    } else {
      const authorLine = headerLines.find(line => line.trim().startsWith('@author'));
      newHeaderLines.push(authorLine || `@author ${author}`);
    }
    newHeaderLines.push(`Last Modified on: ${lastModifiedDate}`);

    const newHeader = [
      '/**',
      ...newHeaderLines.map(line => ` * ${line}`),
      ' */'
    ].join('\n') + '\n';

    return content.replace(headerRegex, newHeader);
  }

  const newHeader = `/**
 * @file ${fileName}
 * @brief 
 * @date ${creationDate}
 * @author ${author}
 * Last Modified on: ${lastModifiedDate}
 */
`;
  return newHeader + content;
}