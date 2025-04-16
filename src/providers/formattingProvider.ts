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
import alignTextElements from "./formattingHelper";

export function formatDocument(fileName: string, text: string, tabspace: integer, author: string, patterns: string[], formatHeader: boolean, maxColumns: integer): string {
  let doc = formatCurlyBraces(text);
  doc = formatCommas(doc);
  doc = formatMultilineComments(doc);
  doc = addNewlinesAfterSemicolons(doc);
  doc = alignTextElements(doc, patterns);
  doc = doc.replace(/\b(if|for|while|repeat)(?=\()/g, '$1 ');
  let lines = doc.split('\n');
  const formattedLines: string[] = [];
  let indentLevel = 0;
  let isInBlockComment = false;

  for (let line of lines) {
    if (line.trim() === '') {
      formattedLines.push('');
      continue;
    }
    line = line.trim();
    line = formatOperators(line);
    line = formatSingleLineComments(line);
    if (line.startsWith('}') && !isInBlockComment && !(/\/\//.test(line))) {
      indentLevel = Math.max(indentLevel - tabspace, 0);
    }
    if (line.startsWith("/*")) {
      isInBlockComment = true;
    }
    if (line.endsWith("*/")) {
      isInBlockComment = false;
      if (!line.startsWith("/*")) {
        line = line.replace(/^(?!.*\/\*).*?\*\/$/, (match) => match.replace(/(\*\/)/, ' $1'));
      }
    }
    if (isInBlockComment) {
      if (line.startsWith("*")) {
        line = ` ${line}`;
      }
    }
    const indentedLine = `${' '.repeat(indentLevel)}${line}`;
    const wrappedLines = wrapLine(indentedLine, indentLevel, tabspace, maxColumns);
    formattedLines.push(...wrappedLines);
    if (line.endsWith('{') && !isInBlockComment && !(/\/\/|\/\*/.test(line))) {
      indentLevel += tabspace;
    }
  }
  let formattedFile = formattedLines.join('\n');
  if (formatHeader) {
    formatFileHeader(formattedFile, fileName, "sad", "dsa", author);
  }
  return formattedFile;
}

function wrapLine(line: string, indentLevel: number, tabspace: number, maxColumns: number): string[] {
  if (maxColumns === 0 || line.length <= maxColumns) {
    return [line];
  }
  const words = line.split(' ');
  const wrappedLines: string[] = [];
  let currentLine = '';
  const baseIndent = ' '.repeat(indentLevel);
  const doubleIndent = ' '.repeat(indentLevel + tabspace);
  let isFirstLine = true;
  for (const word of words) {
    const separator = currentLine ? ' ' : '';
    const indentLength = isFirstLine ? baseIndent.length : doubleIndent.length;
    const potentialLength = indentLength + currentLine.length + separator.length + word.length;
    if (potentialLength > maxColumns) {
      if (currentLine) {
        const lineIndent = isFirstLine ? baseIndent : doubleIndent;
        wrappedLines.push(lineIndent + currentLine.trimStart());
        isFirstLine = false;
      }
      currentLine = word;
    } else {
      currentLine += separator + word;
    }
  }
  if (currentLine) {
    const lineIndent = isFirstLine ? baseIndent : doubleIndent;
    wrappedLines.push(lineIndent + currentLine.trimStart());
  }
  return wrappedLines;
}

function formatCurlyBraces(input: string): string {
  input = input.replace(/\n\s*{/g, ' {');
  input = input.replace(/\s*{/g, ' {');
  input = input.replace(/({)(?!\n)/g, '$1\n');
  input = input.replace(/([^\n])(\s*})(?!\n)/g, (match, p1, p2) => {
    return /\n/.test(match) ? match : p1 + '\n' + p2;
  });
  input = input.replace(/}(?!\n)(?!\s*\n)(?!;)/g, '}\n');
  return input;
}

function addNewlinesAfterSemicolons(input: string): string {
  input = input.replace(/;(?!\s*(?:\n|\/\/|\/\*[^*]*\*\/))(?=\s*(?!\n))(?=\s*(?![^*]*\*\/)[^]*\n)/g, ';\n');
  return input;
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
              return `* ${trimmedLine.slice(1).trim()}`;
            } else {
              return `* ${trimmedLine}`;
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
  const operatorRegex = /([^\s])([\+\-\*\/\%\^=<>!&|]+)([^\s])/g;
  function formatExpression(expression: string): string {
    return expression.replace(operatorRegex, (match, left, ops, right) => {
      if ((left === '/' && (ops === '*' || ops === '**')) || (ops === '*' && right === '/')) {
        return match;
      }
      if (ops.length === 1) {
        return `${left} ${ops} ${right}`;
      } else {
        return match;
      }
    });
  }
  function formatNested(content: string): string {
    let previousContent;
    do {
      previousContent = content;
      content = content.replace(/\(([^()]+)\)/g, (match, innerContent) => {
        return `(${formatExpression(innerContent)})`;
      });
    } while (content !== previousContent);
    return formatExpression(content);
  }
  return input.replace(/\/\*[\s\S]*?\*\//g, match => match)
    .replace(/\/\/[^\n]*/g, match => match)
    .replace(/['"`][^'"`]*['"`]/g, match => match)
    .replace(/\bhttps?:\/\/[^\s)]+/g, match => match)
    .replace(/[^\s()]+/g, formatNested);
}

function formatSingleLineComments(line: string): string {
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // ');
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // ');
  return line;
}

export function formatFileHeader(content: string, fileName: string, creationDate: string, lastModifiedDate: string, author: string): string {
  const headerRegex = /^\/\*\*[\s\S]*?\*\/\n?/;
  const lastModifiedRegex = /(Last Modified on: ).*/;
  if (headerRegex.test(content)) {
    return content.replace(headerRegex, (header) => {
      if (lastModifiedRegex.test(header)) {
        return header.replace(lastModifiedRegex, `$1${lastModifiedDate}`);
      } else {
        const headerLines = header.split('\n');
        headerLines.splice(headerLines.length - 1, 0, ` * Last Modified on: ${lastModifiedDate}`);
        return headerLines.join('\n');
      }
    });
  }
  const newHeader = `/**
 * @file ${fileName}
 * @author ${author}
 * @brief 
 * @date ${creationDate}
 * Last Modified on: ${lastModifiedDate}
 */

`;
  return newHeader + content;
}

