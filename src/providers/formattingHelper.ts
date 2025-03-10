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

    while (i < result.length) {
        // Find consecutive lines with the pattern
        const blockStart = i;
        let hasPattern = false;

        // Skip lines that don't contain the pattern
        while (i < result.length && !result[i].includes(pattern)) {
            i++;
        }

        // Check the current block of lines with the pattern
        const blockStartWithPattern = i;

        // Count consecutive lines with the pattern
        while (i < result.length && result[i].includes(pattern)) {
            hasPattern = true;
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