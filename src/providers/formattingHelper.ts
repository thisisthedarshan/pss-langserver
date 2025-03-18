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
    let inTripleQuotes = false;

    while (i < result.length) {
        // Check if entering or exiting triple quotes
        if (result[i].includes('"""')) {
            inTripleQuotes = !inTripleQuotes;
        }

        // Find consecutive lines with the pattern
        const blockStart = i;
        let hasPattern = false;

        // Skip lines that don't contain the pattern
        while (i < result.length && !shouldProcessLine(result[i], pattern, inTripleQuotes)) {
            // Check if entering or exiting triple quotes
            if (result[i].includes('"""')) {
                inTripleQuotes = !inTripleQuotes;
            }
            i++;
        }

        // Check the current block of lines with the pattern
        const blockStartWithPattern = i;

        // Count consecutive lines with the pattern
        while (i < result.length && shouldProcessLine(result[i], pattern, inTripleQuotes)) {
            hasPattern = true;
            // Check if entering or exiting triple quotes in this line
            if (result[i].includes('"""')) {
                inTripleQuotes = !inTripleQuotes;
            }
            i++;
        }

        const blockEnd = i;

        // Only align if there are at least 2 consecutive lines with the pattern
        if (hasPattern && blockEnd - blockStartWithPattern >= 2) {
            // For patterns not at the end (= and :)
            if (!isEndComment) {
                alignBlockByPattern(result, blockStartWithPattern, blockEnd, pattern);
            }
            // For end comments (//)
            else {
                alignEndComments(result, blockStartWithPattern, blockEnd);
            }
        }
    }

    return result;
}

function shouldProcessLine(line: string, pattern: string, inTripleQuotes: boolean): boolean {
    // Don't process if line doesn't contain the pattern at all
    if (!line.includes(pattern)) return false;

    // Check if the pattern is inside a double quoted string
    let inDoubleQuotes = false;
    let patternIndex = -1;

    for (let i = 0; i < line.length; i++) {
        if (line[i] === '"' && (i === 0 || line[i - 1] !== '\\')) {
            // Toggle double quotes state (but only if not in triple quotes context)
            if (!inTripleQuotes || line[i - 1] !== '"' || line[i + 1] !== '"') {
                inDoubleQuotes = !inDoubleQuotes;
            }
        }

        // Check if we're at the pattern
        if (!inDoubleQuotes && line.substring(i, i + pattern.length) === pattern) {
            patternIndex = i;
            // Check if pattern is standalone
            if (isStandalonePattern(line, patternIndex, pattern)) {
                // Check if line ends with bracket
                const trimmedLine = line.trimEnd();
                const lastChar = trimmedLine[trimmedLine.length - 1];
                if (lastChar === '{' || lastChar === '}' || lastChar === '[' || lastChar === ']' || lastChar === '(' || lastChar === ')') {
                    return false;
                }
                return true;
            }
        }
    }

    return false;
}

function isStandalonePattern(line: string, index: number, pattern: string): boolean {
    // Check character before pattern (if it exists)
    if (index > 0) {
        const charBefore = line[index - 1];
        // If char before is not whitespace and not alphanumeric, it's part of another operator
        if (!/[\s\w]/.test(charBefore)) {
            return false;
        }
    }

    // Check character after pattern (if it exists)
    const afterIndex = index + pattern.length;
    if (afterIndex < line.length) {
        const charAfter = line[afterIndex];
        // If char after is not whitespace and not alphanumeric, it's part of another operator
        if (!/[\s\w=;,)]/.test(charAfter)) {
            return false;
        }
    }

    return true;
}

function alignBlockByPattern(lines: string[], start: number, end: number, pattern: string): void {
    // Find the longest prefix before the pattern
    let maxPrefixLength = 0;

    for (let i = start; i < end; i++) {
        const line = lines[i];
        const patternIndex = line.indexOf(pattern);
        if (patternIndex !== -1) {
            // Get content before the pattern, trimming trailing spaces
            const prefix = line.substring(0, patternIndex).trimEnd();
            maxPrefixLength = Math.max(maxPrefixLength, prefix.length);
        }
    }

    // Align the pattern in each line
    for (let i = start; i < end; i++) {
        const line = lines[i];
        const patternIndex = line.indexOf(pattern);

        if (patternIndex !== -1) {
            const prefix = line.substring(0, patternIndex).trimEnd();
            const padding = ' '.repeat(maxPrefixLength - prefix.length);
            const suffix = line.substring(patternIndex);

            lines[i] = prefix + padding + ' ' + suffix;
        }
    }
}

function alignEndComments(lines: string[], start: number, end: number): void {
    // Find the longest content before the comment
    let maxContentLength = 0;

    for (let i = start; i < end; i++) {
        const line = lines[i];
        const commentIndex = line.indexOf('//');
        if (commentIndex !== -1) {
            // Get content before the comment
            const content = line.substring(0, commentIndex).trimEnd();
            maxContentLength = Math.max(maxContentLength, content.length);
        }
    }

    // Align the comments in each line
    for (let i = start; i < end; i++) {
        const line = lines[i];
        const commentIndex = line.indexOf('//');

        if (commentIndex !== -1) {
            const content = line.substring(0, commentIndex).trimEnd();
            const comment = line.substring(commentIndex);
            const padding = ' '.repeat(maxContentLength - content.length + 4); // +4 for spacing

            lines[i] = content + padding + comment;
        }
    }
}

export default alignTextElements;