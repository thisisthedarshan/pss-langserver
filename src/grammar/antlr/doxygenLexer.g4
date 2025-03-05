/* 
 * Copyright (C) 2025 Darshan(@thisisthedarshan)
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with this program. If
 * not, see <https://www.gnu.org/licenses/>.
 */
lexer grammar doxygenLexer;

DOC_START: '/**';
DOC_END: '*/';

/* Command Markers */
BRIEF_MARKER: '@brief' | '\\brief';
PARAM_MARKER: '@param' | '\\param';
RETURN_MARKER: '@return' | '\\return';
RETURNS_MARKER: '@returns' | '\\returns';
DEPRECATED_MARKER: '@deprecated' | '\\deprecated';
AUTHOR_MARKER: '@author' | '\\author';
DATE_MARKER: '@date' | '\\date';
VERSION_MARKER: '@version' | '\\version';
SEE_MARKER: '@see' | '\\see';
ATTENTION_MARKER: '@attention' | '\\attention';
FILE_MARKER: '@file' | '\\file';
TODO_MARKER: '@todo' | '\\todo';
EXAMPLE_MARKER: '@example' | '\\example';

/* Basic tokens */
WORD: [a-zA-Z_]+;
DIGIT: [0-9];
DATE: DIGIT DIGIT DIGIT DIGIT '-' DIGIT DIGIT '-' DIGIT DIGIT;
NEWLINE: '\r'? '\n';
WHITESPACE: [ \t]+;

/* Skip whitespace and newlines in lexer */
SKIP_WHITESPACE: [ \t\r\n]+ -> skip;