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

function alignTextElements(input: string, patterns: string[]): string {
    // Split the input into lines
    const lines = input.split('\n');

    // Process each formatting pattern
    let contents = lines;
    let isEndComment = false;
    if (patterns.length == 0) {
        return input; /* Assume user doesn't want any formatting */
    }
    patterns.forEach(pattern => {
        if (pattern === "//") {
            isEndComment = true;
        }
        contents = findAndAlignConsecutivePatterns(contents, pattern, isEndComment);
    });
    // const colonFormatted = findAndAlignConsecutivePatterns(lines, ':');
    // const formattedEquals = findAndAlignConsecutivePatterns(colonFormatted, '=');
    // const formatted = findAndAlignConsecutivePatterns(formattedEquals, '//', true);

    // Join the formatted lines and return
    return contents.join('\n');
}

function findAndAlignConsecutivePatterns(lines: string[], pattern: string, isEndComment: boolean = false): string[] {
    const result = [...lines];
    let i = 0;
    let blockStart = 0;
    let inBlock = false;

    // Group lines by code blocks (determined by indentation)
    while (i < result.length) {
        // Detect blocks based on indentation or braces
        if (!inBlock && result[i].includes('{')) {
            blockStart = i;
            inBlock = true;
        }

        if (inBlock && result[i].includes('}')) {
            // Process this block separately
            processBlockForAlignment(result, blockStart, i + 1, pattern, isEndComment);
            inBlock = false;
        }

        i++;
    }

    // Process the top level (non-block) lines
    processBlockForAlignment(result, 0, result.length, pattern, isEndComment, true);

    return result;
}

function processBlockForAlignment(lines: string[], start: number, end: number, pattern: string, isEndComment: boolean, isTopLevel: boolean = false): void {
    // Find consecutive lines with the pattern at the same indent level
    let currentIndent = -1;
    let blockStartLine = start;
    let consecutiveCount = 0;

    for (let i = start; i < end; i++) {
        const line = lines[i].trim();

        // Skip empty lines or block delimiters
        if (line === '' || line === '{' || line === '}') {
            continue;
        }

        // Calculate indent level
        const indent = lines[i].length - lines[i].trimStart().length;

        // If moving to a different indent level, process the previous block
        if (currentIndent !== -1 && indent !== currentIndent) {
            if (consecutiveCount >= 2) {
                alignPatternInBlock(lines, blockStartLine, i, pattern, isEndComment);
            }
            blockStartLine = i;
            consecutiveCount = 0;
        }

        currentIndent = indent;

        // Check if line contains the pattern outside of brackets
        if (hasPatternOutsideBrackets(lines[i], pattern)) {
            consecutiveCount++;
        } else {
            // If we had consecutive lines and now found a non-matching one, process the block
            if (consecutiveCount >= 2) {
                alignPatternInBlock(lines, blockStartLine, i, pattern, isEndComment);
            }
            blockStartLine = i + 1;
            consecutiveCount = 0;
        }
    }

    // Process the last block if needed
    if (consecutiveCount >= 2) {
        alignPatternInBlock(lines, blockStartLine, end, pattern, isEndComment);
    }
}

function hasPatternOutsideBrackets(line: string, pattern: string): boolean {
    if (!line.includes(pattern)) return false;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let bracketDepth = 0;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === "'" && (i === 0 || line[i - 1] !== '\\')) {
            inSingleQuote = !inSingleQuote;
        } else if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
            inDoubleQuote = !inDoubleQuote;
        }
        if (inSingleQuote || inDoubleQuote) continue;
        if (char === '(' || char === '[' || char === '{') {
            bracketDepth++;
        } else if (char === ')' || char === ']' || char === '}') {
            bracketDepth--;
        }
        if (bracketDepth === 0 && line.substring(i, i + pattern.length) === pattern && isStandalonePattern(line, i, pattern)) {
            const beforeChar = i > 0 ? line[i - 1] : ' ';
            const afterChar = i + pattern.length < line.length ? line[i + pattern.length] : ' ';
            if (/[\s\w]/.test(beforeChar) && /[\s\w=;,)]/.test(afterChar)) {
                return true;
            }
        }
    }
    return false;
}

function alignPatternInBlock(lines: string[], start: number, end: number, pattern: string, isEndComment: boolean): void {
    // Find the longest prefix before the pattern (ignoring patterns inside brackets)
    let maxPrefixLength = 0;
    let linesToAlign = [];

    // First, collect all valid lines and determine max prefix length
    for (let i = start; i < end; i++) {
        const line = lines[i];
        if (!hasPatternOutsideBrackets(line, pattern)) continue;

        const { prefix } = getPatternPosition(line, pattern);
        maxPrefixLength = Math.max(maxPrefixLength, prefix.length);
        linesToAlign.push(i);
    }

    // Now align each line
    for (const i of linesToAlign) {
        const line = lines[i];
        const { prefix, suffix } = getPatternPosition(line, pattern);

        const padding = ' '.repeat(maxPrefixLength - prefix.length);

        if (isEndComment) {
            // For comments, add more padding
            lines[i] = prefix + padding + ' '.repeat(4) + suffix;
        } else {
            // For other patterns, maintain a single space before and after
            lines[i] = prefix + padding + ' ' + pattern + ' ' + suffix.trimStart().substring(pattern.length).trimStart();
        }
    }
}

function getPatternPosition(line: string, pattern: string): { prefix: string, suffix: string } {
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let bracketDepth = 0;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === "'" && (i === 0 || line[i - 1] !== '\\')) {
            inSingleQuote = !inSingleQuote;
        } else if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
            inDoubleQuote = !inDoubleQuote;
        }
        if (inSingleQuote || inDoubleQuote) continue;
        if (char === '(' || char === '[' || char === '{') {
            bracketDepth++;
        } else if (char === ')' || char === ']' || char === '}') {
            bracketDepth--;
        }
        if (bracketDepth === 0 && line.substring(i, i + pattern.length) === pattern && isStandalonePattern(line, i, pattern)) {
            const beforeChar = i > 0 ? line[i - 1] : ' ';
            const afterChar = i + pattern.length < line.length ? line[i + pattern.length] : ' ';
            if (/[\s\w]/.test(beforeChar) && /[\s\w=;,)]/.test(afterChar)) {
                const prefix = line.substring(0, i).trimEnd();
                const suffix = line.substring(i);
                return { prefix, suffix };
            }
        }
    }
    return { prefix: line, suffix: '' };
}

function isStandalonePattern(line: string, i: number, pattern: string): boolean {
    const multiCharOperators = ["==", "===", "!=", "!==", "=>", "<=", ">=", "+=", "-=", "*=", "/=", "&&", "||", "++", "--"];
    for (const op of multiCharOperators) {
        if (op.startsWith(pattern) && line.substring(i, i + op.length) === op) {
            return false;
        }
    }
    // Check if the pattern is not part of a longer sequence of the same character
    if (pattern.length === 1) {
        const char = pattern[0];
        let j = i + 1;
        while (j < line.length && line[j] === char) {
            j++;
        }
        if (j - i > 1) {
            return false;
        }
    }
    return true;
}

export default alignTextElements;
export { isStandalonePattern };