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

export function formatDocument(fileName: string, text: string, tabspace: integer, author: string, patterns: string[], formatHeader: boolean): string {
  /* First format curly braces */
  let doc = formatCurlyBraces(text);
  /* Then add spaces after commas */
  doc = formatCommas(doc);
  /* Format multi-line comments: */
  doc = formatMultilineComments(doc);
  /* Then format semicolons */
  doc = addNewlinesAfterSemicolons(doc);
  /* Then start by formatting patterns - beautification */
  doc = alignTextElements(doc, patterns);
  /* Add spaces when using keywords */
  doc = doc.replace(/\b(if|for|while|repeat)(?=\()/g, '$1 ');


  /* The make it process line by line */
  let lines = doc.split('\n');
  const formattedLines: string[] = [];

  let indentLevel = 0; /* Start with indentLevel of 0 */
  let isInBlockComment = false;


  for (let line of lines) {
    /* Keep empty newlines as it is */
    if (line.trim() === '') {
      formattedLines.push(''); // Keep the empty line as-is
      continue;
    }

    line = line.trim();

    /* Format specific syntax */
    line = formatOperators(line);
    line = formatSingleLineComments(line);

    /* Handle closing braces */
    if (line.startsWith('}') && !isInBlockComment && !(/\/\//.test(line))) {
      indentLevel = Math.max(indentLevel - tabspace, 0);
    }

    /* Check if comment block is encountered */
    if (line.startsWith("/*")) {
      isInBlockComment = true;
    }
    if (line.endsWith("*/")) {
      isInBlockComment = false;
      if (!line.startsWith("/*")) {
        line = line.replace(/^(?!.*\/\*).*?\*\/$/, (match) => match.replace(/(\*\/)/, ' $1'));
      }
    }

    /* Check if still in comment */
    if (isInBlockComment) {
      if (line.startsWith("*")) {
        line = ` ${line}`; // Add an extra space
      }
    }

    /* Add indentation */
    const indentedLine = `${' '.repeat(indentLevel)}${line}`;
    formattedLines.push(indentedLine.trimEnd());

    /* Handle opening braces */
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

function formatCurlyBraces(input: string): string {
  // Remove newline before `{` and move it back to the previous line
  input = input.replace(/\n\s*{/g, ' {');

  // Ensure there is exactly 1 space before the opening `{`
  input = input.replace(/\s*{/g, ' {');

  // Ensure there is always a newline after the opening `{` without removing existing newlines
  input = input.replace(/({)(?!\n)/g, '$1\n');

  // Ensure `}` is on its own line and add a newline before it if needed
  input = input.replace(/([^\n])(\s*})(?!\n)/g, (match, p1, p2) => {
    // Only add newline if there isn't already a newline before the closing brace
    return /\n/.test(match) ? match : p1 + '\n' + p2;
  });


  // Add a newline after `}` only if there is no newline already
  input = input.replace(/}(?!\n)(?!\s*\n)(?!;)/g, '}\n');

  return input;
}

function addNewlinesAfterSemicolons(input: string): string {
  // Step 1: Add newline after semicolon if not followed by newline or comment (single-line or multi-line)
  input = input.replace(/;(?!\s*(?:\n|\/\/|\/\*[^*]*\*\/))(?=\s*(?!\n))(?=\s*(?![^*]*\*\/)[^]*\n)/g, ';\n');
  return input; // No need for .trim() to avoid stripping empty lines
}

function formatCommas(input: string): string {
  // Add a space after every comma if there isn't already one
  return input.replace(/,\s*/g, ', ');
}

function formatMultilineComments(documentText: string): string {
  return documentText.replace(
    /(\/\*\*?)([\s\S]*?)\*\//g,
    (match: string, openingBlock: string, commentBody: string) => {
      const opening = openingBlock;
      const closing = '*/';

      // Handle single-line comments
      if (!commentBody.includes('\n')) {
        return `${opening} ${commentBody.trim()} ${closing}`.replace(/\s+/g, ' ');
      }

      // Handle multiline comments
      const newlineIndex = commentBody.indexOf('\n');
      let firstPart = '';
      let rest = commentBody;

      // Split into first part (before first newline) and the rest
      if (newlineIndex !== -1) {
        firstPart = commentBody.substring(0, newlineIndex).trim();
        rest = commentBody.substring(newlineIndex + 1);
      } else {
        firstPart = commentBody.trim();
        rest = '';
      }

      // Check if first part is all asterisks
      if (/^\*+$/.test(firstPart)) {
        let formattedComment = `${opening} ${firstPart}`;

        // Process the remaining lines if any
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
        // First part is not all asterisks, format with * on each line
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

  return input.replace(/\/\*[\s\S]*?\*\//g, match => match) // Ignore multiline comments
    .replace(/\/\/[^\n]*/g, match => match) // Ignore single-line comments
    .replace(/['"`][^'"`]*['"`]/g, match => match) // Ignore strings
    .replace(/\bhttps?:\/\/[^\s)]+/g, match => match) // Ignore URLs
    .replace(/[^\s()]+/g, formatNested);
}

function formatSingleLineComments(line: string): string {
  // Ensure there is a space before `//`, but ignore URLs starting with `://`
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // '); // Add a space before `//` if not preceded by a colon
  // Ensure there is a space after `//`, but ignore if it's part of a URL (contains colon before `//`)
  line = line.replace(/([^:])\/\/(?! )/g, '$1 // '); // Ensures space after `//` if not already present and not part of a URL

  return line;
}

export function formatFileHeader(content: string, fileName: string, creationDate: string, lastModifiedDate: string, author: string): string {
  const headerRegex = /^\/\*\*[\s\S]*?\*\/\n?/; // Match the header block only at the top of the file
  const lastModifiedRegex = /(Last Modified on: ).*/;

  // If a header already exists, update "Last Modified on:"
  if (headerRegex.test(content)) {
    return content.replace(headerRegex, (header) => {
      // Update or add the "Last Modified on:" field in the existing header
      if (lastModifiedRegex.test(header)) {
        return header.replace(lastModifiedRegex, `$1${lastModifiedDate}`);
      } else {
        // Add "Last Modified on:" if it doesn't exist
        const headerLines = header.split('\n');
        headerLines.splice(headerLines.length - 1, 0, ` * Last Modified on: ${lastModifiedDate}`);
        return headerLines.join('\n');
      }
    });
  }

  // If no header exists, add a new one at the top
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