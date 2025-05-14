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

const multiCharTokens = [
    "===", "!==", "==", "!=", "<=",
    ">=", "=>", "+=", "-=", "*=",
    "/=", "&&", "||", "++", "--",
    ">>", "<<", ">>>", "?.", "**",
    "**=", "??", "??=", "...", "::"];

function alignTextElements(lines: string[], patterns: string[]): void {
    if (patterns.length === 0) {
        return;
    }
    patterns.forEach(pattern => {
        findAndAlignConsecutivePatterns(lines, pattern);
    });
}

function findAndAlignConsecutivePatterns(lines: string[], pattern: string): void {
    let i = 0;
    let blockStart = 0;
    let inBlock = false;
    let isInBlockComment = false;

    while (i < lines.length) {
        if (!inBlock && lines[i].includes('{')) {
            blockStart = i;
            inBlock = true;
        }
        if (inBlock && lines[i].includes('}')) {
            processBlockForAlignment(lines, blockStart, i + 1, pattern, isInBlockComment);
            isInBlockComment = processBlockForAlignment(lines, blockStart, i + 1, pattern, isInBlockComment, true);
            inBlock = false;
        }
        const { endsInBlockComment } = hasPatternOutsideBrackets(lines[i], pattern, isInBlockComment);
        isInBlockComment = endsInBlockComment;
        i++;
    }
    processBlockForAlignment(lines, 0, lines.length, pattern, isInBlockComment, true);
}

function processBlockForAlignment(lines: string[], start: number, end: number, pattern: string, startInBlockComment: boolean, isTopLevel: boolean = false): boolean {
    let currentIndent = -1;
    let blockStartLine = start;
    let consecutiveCount = 0;
    let isInBlockComment = startInBlockComment;
    let linesToAlign: { idx: number, patternIndex: number }[] = [];

    for (let i = start; i < end; i++) {
        const line = lines[i].trim();
        if (line === '' || line === '{' || line === '}') {
            const { endsInBlockComment } = hasPatternOutsideBrackets(lines[i], pattern, isInBlockComment);
            isInBlockComment = endsInBlockComment;
            continue;
        }
        const indent = lines[i].length - lines[i].trimStart().length;
        if (currentIndent !== -1 && indent !== currentIndent) {
            if (consecutiveCount >= 2) {
                alignPatternInBlock(lines, linesToAlign);
            }
            blockStartLine = i;
            consecutiveCount = 0;
            linesToAlign = [];
        }
        currentIndent = indent;
        const { hasPattern, patternIndex, endsInBlockComment } = hasPatternOutsideBrackets(lines[i], pattern, isInBlockComment);
        isInBlockComment = endsInBlockComment;
        if (hasPattern) {
            consecutiveCount++;
            linesToAlign.push({ idx: i, patternIndex });
        } else {
            if (consecutiveCount >= 2) {
                alignPatternInBlock(lines, linesToAlign);
            }
            blockStartLine = i + 1;
            consecutiveCount = 0;
            linesToAlign = [];
        }
    }
    if (consecutiveCount >= 2) {
        alignPatternInBlock(lines, linesToAlign);
    }
    return isInBlockComment;
}

function alignPatternInBlock(lines: string[], linesToAlign: { idx: number, patternIndex: number }[]): void {
    const pattern = lines[linesToAlign[0].idx].substring(linesToAlign[0].patternIndex, linesToAlign[0].patternIndex + lines[linesToAlign[0].idx].indexOf('=', linesToAlign[0].patternIndex) + 1 - linesToAlign[0].patternIndex);
    if (pattern === '//') {
        let linesWithComment = [];
        let maxCodeLength = 0;

        for (let i = 0; i < linesToAlign.length; i++) {
            const { idx, patternIndex } = linesToAlign[i];
            const line = lines[idx];
            const commentIndex = patternIndex;
            if (commentIndex !== -1) {
                const codePart = line.substring(0, commentIndex).trimEnd();
                maxCodeLength = Math.max(maxCodeLength, codePart.length);
                linesWithComment.push({ idx, codePart, commentPart: line.substring(commentIndex) });
            }
        }

        if (linesWithComment.length < 2) { return; }

        for (const { idx, codePart, commentPart } of linesWithComment) {
            const padding = ' '.repeat(maxCodeLength - codePart.length);
            lines[idx] = codePart + padding + ' ' + commentPart.trimStart();
        }
    } else {
        if (linesToAlign.length < 2) { return; }
        let maxI = 0;
        for (const { idx, patternIndex } of linesToAlign) {
            const line = lines[idx];
            const i = patternIndex;
            if (i !== -1) {
                maxI = Math.max(maxI, i);
            }
        }
        for (const { idx, patternIndex } of linesToAlign) {
            const line = lines[idx];
            const i = patternIndex;
            if (i !== -1) {
                const padding = ' '.repeat(maxI - i);
                const leftPart = line.substring(0, i);
                const rightPart = line.substring(i);
                lines[idx] = leftPart + padding + rightPart;
            }
        }
    }
}

function hasPatternOutsideBrackets(line: string, pattern: string, startInBlockComment: boolean): { hasPattern: boolean, patternIndex: number, endsInBlockComment: boolean } {
    if (pattern === '//') {
        let inSingleQuote = false;
        let inDoubleQuote = false;
        let inMultiLineComment = startInBlockComment;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (inMultiLineComment) {
                if (char === '*' && i + 1 < line.length && line[i + 1] === '/') {
                    inMultiLineComment = false;
                    i++;
                }
                continue;
            }
            if (char === "'" && !inDoubleQuote && (i === 0 || line[i - 1] !== '\\')) {
                inSingleQuote = !inSingleQuote;
            } else if (char === '"' && !inSingleQuote && (i === 0 || line[i - 1] !== '\\')) {
                inDoubleQuote = !inDoubleQuote;
            }
            if (inSingleQuote || inDoubleQuote) { continue; }
            if (char === '/' && i + 1 < line.length && line[i + 1] === '/') {
                return { hasPattern: true, patternIndex: i, endsInBlockComment: inMultiLineComment };
            }
        }
        return { hasPattern: false, patternIndex: -1, endsInBlockComment: inMultiLineComment };
    }
    if (!line.includes(pattern)) {
        return { hasPattern: false, patternIndex: -1, endsInBlockComment: startInBlockComment };
    }
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inSingleLineComment = false;
    let inMultiLineComment = startInBlockComment;
    let bracketDepth = 0;
    let foundPattern = false;
    let patternIndex = -1;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (inSingleLineComment) {
            continue;
        }
        if (inMultiLineComment) {
            if (char === '*' && i + 1 < line.length && line[i + 1] === '/') {
                inMultiLineComment = false;
                i++;
            }
            continue;
        }
        if (char === "'" && !inDoubleQuote && (i === 0 || line[i - 1] !== '\\')) {
            inSingleQuote = !inSingleQuote;
        } else if (char === '"' && !inSingleQuote && (i === 0 || line[i - 1] !== '\\')) {
            inDoubleQuote = !inDoubleQuote;
        }
        if (inSingleQuote || inDoubleQuote) { continue; }
        if (char === '/' && i + 1 < line.length) {
            if (line[i + 1] === '/') {
                inSingleLineComment = true;
                i++;
                continue;
            } else if (line[i + 1] === '*') {
                inMultiLineComment = true;
                i++;
                continue;
            }
        }
        if (char === '(' || char === '[' || char === '{') {
            bracketDepth++;
        } else if (char === ')' || char === ']' || char === '}') {
            bracketDepth--;
        }
        if (bracketDepth === 0 && !inSingleLineComment && !inMultiLineComment && line.substring(i, i + pattern.length) === pattern && isStandalonePattern(line, i, pattern)) {
            const beforeChar = i > 0 ? line[i - 1] : ' ';
            const afterChar = i + pattern.length < line.length ? line[i + pattern.length] : ' ';
            if (/[\s\w]/.test(beforeChar) && /[\s\w=;,)]/.test(afterChar)) {
                foundPattern = true;
                patternIndex = i;
                break; // Take the first occurrence outside brackets
            }
        }
    }
    return { hasPattern: foundPattern, patternIndex, endsInBlockComment: inMultiLineComment };
}

function isStandalonePattern(line: string, i: number, pattern: string): boolean {
    const multiCharOperators = ["===", "!==", "==", "!=", "<=", ">=", "=>", "+=", "-=", "*=", "/=", "&&", "||", "++", "--", ">>", "<<", ">>>"];
    for (const op of multiCharOperators) {
        if (line.substring(i, i + op.length) === op) {
            return pattern === op;
        }
    }
    if (pattern.length === 1 && i + pattern.length < line.length) {
        const nextChar = line[i + pattern.length];
        if (nextChar === pattern[0]) {
            return false;
        }
    }
    return true;
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short',
    };
    return date.toLocaleString('en-US', options).replace(/,/, '').replace(/(\d+):(\d+) (AM|PM)/, '$1:$2 $3');
}

function formatExpression(expression: string): string {
    const multiCharOperators = multiCharTokens;
    const operatorRegex = new RegExp(
        `(${multiCharOperators.map(op => op.replace(/[-+*/%^=<>!&|]/g, '\\$&')).join('|')})|([+\\-*/%^=<>!&|])`,
        'g'
    );
    return expression.replace(operatorRegex, (match, multiOp, singleOp) => {
        if (multiOp) {
            return ` ${multiOp} `;
        } else if (singleOp) {
            return ` ${singleOp} `;
        }
        return match;
    }).replace(/\s+/g, ' ').trim();
}

function getBraceDepthChange(line: string, startInBlockComment: boolean): { depthChange: number, endsInBlockComment: boolean } {
    let depthChange = 0;
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inSingleLineComment = false;
    let inMultiLineComment = startInBlockComment;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (inSingleLineComment) {
            continue;
        }
        if (inMultiLineComment) {
            if (char === '*' && i + 1 < line.length && line[i + 1] === '/') {
                inMultiLineComment = false;
                i++;
            }
            continue;
        }
        if (char === "'" && !inDoubleQuote && (i === 0 || line[i - 1] !== '\\')) {
            inSingleQuote = !inSingleQuote;
        } else if (char === '"' && !inSingleQuote && (i === 0 || line[i - 1] !== '\\')) {
            inDoubleQuote = !inDoubleQuote;
        }
        if (inSingleQuote || inDoubleQuote) { continue; }
        if (char === '/' && i + 1 < line.length) {
            if (line[i + 1] === '/') {
                inSingleLineComment = true;
                i++;
                continue;
            } else if (line[i + 1] === '*') {
                inMultiLineComment = true;
                i++;
                continue;
            }
        }
        if (char === '(' || char === '[') {
            depthChange++;
        } else if (char === ')' || char === ']') {
            depthChange--;
        }
    }
    return { depthChange, endsInBlockComment: inMultiLineComment };
}

function formatOperators(input: string): string {
    let result = "";
    let i = 0;
    let bracketDepth = 0;
    let currentSegment = "";
    let isInBlockComment = false;

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
                isInBlockComment = false;
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

function wrapCommentText(commentText: string, indent: string, maxColumns: number, isSingleLine: boolean): string[] {
    const wrappedLines: string[] = [];
    /* Use exact comment markers, not separated by spaces */
    const prefix = isSingleLine ? '//' : '* ';

    /* Extract comment content without prefix */
    let content = commentText.trim();
    if (isSingleLine && content.startsWith('//')) {
        content = content.substring(2).trim();
    } else if (!isSingleLine && content.startsWith('*')) {
        content = content.substring(1).trim();
    }

    const words = content.split(/\s+/);
    let currentLine = prefix;

    for (const word of words) {
        const potentialLine = currentLine + (currentLine !== prefix ? ' ' : '') + word;
        if (potentialLine.length + indent.length > maxColumns && currentLine !== prefix) {
            wrappedLines.push(indent + currentLine);
            currentLine = prefix + word;
        } else {
            currentLine = potentialLine;
        }
    }

    if (currentLine) {
        wrappedLines.push(indent + currentLine);
    }

    return wrappedLines;
}


function tokenizeLine(line: string): string[] {
    const tokens: string[] = [];
    let i = 0;

    while (i < line.length) {
        // Skip whitespace
        if (line[i] === ' ' || line[i] === '\t') {
            i++;
            continue;
        }

        // Check for comments first
        if (line[i] === '/' && i + 1 < line.length) {
            if (line[i + 1] === '/') {
                tokens.push(line.substring(i));
                break; // Entire single-line comment captured
            } else if (line[i + 1] === '*') {
                const commentEnd = line.indexOf('*/', i + 2);
                if (commentEnd !== -1) {
                    tokens.push(line.substring(i, commentEnd + 2));
                    i = commentEnd + 2;
                } else {
                    tokens.push(line.substring(i));
                    i = line.length;
                }
                continue;
            }
        }

        // Check for multi-character tokens (e.g., ==, !=)
        let matched = false;
        for (const token of multiCharTokens) {
            if (line.substring(i, i + token.length) === token) {
                tokens.push(token);
                i += token.length;
                matched = true;
                break;
            }
        }
        if (matched) { continue; }

        // Check for single-character tokens
        if (['(', ')', '+', '-', '*', '/', '=', '<', '>', '&', '|', ','].includes(line[i])) {
            tokens.push(line[i]);
            i++;
            continue;
        }

        // Handle strings
        if (line[i] === "'" || line[i] === '"') {
            const quote = line[i];
            let j = i + 1;
            while (j < line.length && line[j] !== quote) {
                if (line[j] === '\\') { j++; }
                j++;
            }
            if (j < line.length) {
                tokens.push(line.substring(i, j + 1));
                i = j + 1;
            } else {
                tokens.push(line.substring(i));
                i = line.length;
            }
            continue;
        }

        // Handle identifiers and keywords
        let j = i;
        while (j < line.length && ![' ', '\t', '(', ')', '+', '-', '*', '/', '=', '<', '>', '&', '|', ','].includes(line[j])) {
            j++;
        }
        tokens.push(line.substring(i, j));
        i = j;
    }
    return tokens;
}

function handleCommentWrapping(token: string, inMultiLineComment: boolean, hasWrappedSingleLineComment: boolean): string {
    if (inMultiLineComment) {
        return token; // Preserve token as is within multi-line comments
    } else if (hasWrappedSingleLineComment && !token.startsWith('//')) {
        return '// ' + token; // Prepend '// ' to continue a wrapped single-line comment
    }
    return token;
}

export default alignTextElements;
export {
    isStandalonePattern,
    formatOperators,
    handleCommentWrapping,
    tokenizeLine,
    getBraceDepthChange,
    formatExpression,
    formatDate,
    alignTextElements,
    wrapCommentText
};
