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

export function alignTextElements(lines: string[], patterns: string[]): void {
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
                alignPatternInBlock(lines, blockStartLine, i, pattern);
            }
            blockStartLine = i;
            consecutiveCount = 0;
        }
        currentIndent = indent;
        const { hasPattern, endsInBlockComment } = hasPatternOutsideBrackets(lines[i], pattern, isInBlockComment);
        isInBlockComment = endsInBlockComment;
        if (hasPattern) {
            consecutiveCount++;
        } else {
            if (consecutiveCount >= 2) {
                alignPatternInBlock(lines, blockStartLine, i, pattern);
            }
            blockStartLine = i + 1;
            consecutiveCount = 0;
        }
    }
    if (consecutiveCount >= 2) {
        alignPatternInBlock(lines, blockStartLine, end, pattern);
    }
    return isInBlockComment;
}

function alignPatternInBlock(lines: string[], start: number, end: number, pattern: string): void {
    if (pattern === '//') {
        // Handle '//' alignment
        let linesWithComment = [];
        let maxCodeLength = 0;

        // Step 1: Scan lines to find max code length before '//'
        for (let i = start; i < end; i++) {
            const line = lines[i];
            const commentIndex = line.indexOf('//');
            if (commentIndex !== -1) {
                const codePart = line.substring(0, commentIndex).trimEnd();
                maxCodeLength = Math.max(maxCodeLength, codePart.length);
                linesWithComment.push({ idx: i, codePart, commentPart: line.substring(commentIndex) });
            }
        }

        // If fewer than 2 lines, no alignment needed
        if (linesWithComment.length < 2) { return; }

        // Step 2: Pad each line to align '//'
        for (const { idx, codePart, commentPart } of linesWithComment) {
            const padding = ' '.repeat(maxCodeLength - codePart.length);
            lines[idx] = codePart + padding + ' ' + commentPart.trimStart();
        }
    } else {
        // Handle other patterns (unchanged logic)
        let linesToAlign = [];
        for (let i = start; i < end; i++) {
            const { hasPattern } = hasPatternOutsideBrackets(lines[i], pattern, false);
            if (hasPattern) {
                linesToAlign.push(i);
            }
        }
        if (linesToAlign.length < 2) { return; }
        let maxI = 0;
        for (const idx of linesToAlign) {
            const line = lines[idx];
            const i = line.indexOf(pattern);
            if (i !== -1) {
                maxI = Math.max(maxI, i);
            }
        }
        for (const idx of linesToAlign) {
            const line = lines[idx];
            const i = line.indexOf(pattern);
            if (i !== -1) {
                const padding = ' '.repeat(maxI - i);
                const leftPart = line.substring(0, i);
                const rightPart = line.substring(i);
                lines[idx] = leftPart + padding + rightPart;
            }
        }
    }
}

function hasPatternOutsideBrackets(line: string, pattern: string, startInBlockComment: boolean): { hasPattern: boolean, endsInBlockComment: boolean } {
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
                return { hasPattern: true, endsInBlockComment: inMultiLineComment };
            }
        }
        return { hasPattern: false, endsInBlockComment: inMultiLineComment };
    }
    if (!line.includes(pattern)) {
        return { hasPattern: false, endsInBlockComment: startInBlockComment };
    }
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inSingleLineComment = false;
    let inMultiLineComment = startInBlockComment;
    let bracketDepth = 0;
    let foundPattern = false;

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
            }
        }
    }
    return { hasPattern: foundPattern, endsInBlockComment: inMultiLineComment };
}

function isStandalonePattern(line: string, i: number, pattern: string): boolean {
    const multiCharOperators = ["===", "!==", "==", "!=", "<=", ">=", "=>", "+=", "-=", "*=", "/=", "&&", "||", "++", "--"];
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

export function formatDate(date: Date): string {
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

export function formatExpression(expression: string): string {
    const multiCharOperators = ["===", "!==", "==", "!=", "<=", ">=", "=>", "+=", "-=", "*=", "/=", "&&", "||", "++", "--"];
    const operatorRegex = new RegExp(`(${multiCharOperators.map(op => op.replace(/[-+*/%^=<>!&|]/g, '\\$&')).join('|')})|([+\\-*/%^=<>!&|])`, 'g');
    return expression.replace(operatorRegex, (match, multiOp, singleOp) => {
        if (multiOp) {
            return ` ${multiOp} `;
        } else if (singleOp) {
            return ` ${singleOp} `;
        }
        return match;
    }).replace(/\s+/g, ' ').trim();
}

export function getBraceDepthChange(line: string, startInBlockComment: boolean): { depthChange: number, endsInBlockComment: boolean } {
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

function tokenizeLine(line: string): string[] {
    const tokens: string[] = [];
    let currentToken = '';
    let inSingleQuote = false;
    let inDoubleQuote = false;
    let inComment = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (inComment) {
            currentToken += char;
            if (char === '\n') {
                inComment = false;
                tokens.push(currentToken);
                currentToken = '';
            }
        } else if (inSingleQuote) {
            currentToken += char;
            if (char === "'" && (i === 0 || line[i - 1] !== '\\')) {
                inSingleQuote = false;
            }
        } else if (inDoubleQuote) {
            currentToken += char;
            if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
                inDoubleQuote = false;
            }
        } else if (char === '/' && i + 1 < line.length && line[i + 1] === '/') {
            if (currentToken) {
                tokens.push(currentToken);
                currentToken = '';
            }
            inComment = true;
            currentToken += '//';
            i++;
        } else if (char === '/' && i + 1 < line.length && line[i + 1] === '*') {
            if (currentToken) {
                tokens.push(currentToken);
                currentToken = '';
            }
            tokens.push('/*');
            i++;
        } else if (char === '*' && i + 1 < line.length && line[i + 1] === '/') {
            tokens.push('*/');
            i++;
        } else if ([' ', '(', ')', '+', '-', '*', '/', '=', '<', '>', '&', '|', ','].includes(char)) {
            if (currentToken) {
                tokens.push(currentToken);
                currentToken = '';
            }
            if (char !== ' ') {
                tokens.push(char);
            }
        } else {
            currentToken += char;
        }
    }
    if (currentToken) {
        tokens.push(currentToken);
    }
    return tokens;
}

function handleCommentWrapping(token: string, inMultiLineComment: boolean, hasWrappedSingleLineComment: boolean): string {
    if (token.startsWith('//') && hasWrappedSingleLineComment) {
        return '// ' + token.substring(2).trim();
    } else if (inMultiLineComment && !token.startsWith('/*') && !token.endsWith('*/')) {
        return token.trim(); // Pull up content without ' * ' for consistency
    } else if (inMultiLineComment) {
        return ' * ' + token.trim();
    }
    return token;
}


export default alignTextElements;
export { isStandalonePattern, formatOperators, handleCommentWrapping, tokenizeLine };