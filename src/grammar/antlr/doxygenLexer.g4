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

TOKEN_DOC_START: '/**';
TOKEN_DOC_END: '*/';

/* Command Markers */
TOKEN_BRIEF_MARKER: '@brief' | '\\brief';
TOKEN_PARAM_MARKER: '@param' | '\\param';
TOKEN_RETURN_MARKER: '@return' | '\\return';
TOKEN_RETURNS_MARKER: '@returns' | '\\returns';
TOKEN_DEPRECATED_MARKER: '@deprecated' | '\\deprecated';
TOKEN_AUTHOR_MARKER: '@author' | '\\author';
TOKEN_DATE_MARKER: '@date' | '\\date';
TOKEN_VERSION_MARKER: '@version' | '\\version';
TOKEN_SEE_MARKER: '@see' | '\\see';
TOKEN_ATTENTION_MARKER: '@attention' | '\\attention';
TOKEN_FILE_MARKER: '@file' | '\\file';
TOKEN_TODO_MARKER: '@todo' | '\\todo';
TOKEN_EXAMPLE_MARKER: '@example' | '\\example';

/* Basic tokens */
TOKEN_WORD: [a-zA-Z_]+;
TOKEN_DIGIT: [0-9];
TOKEN_DATE: ~[\r\n\t]+;
TOKEN_NEWLINE: '\r'? '\n';
TOKEN_WHITESPACE: [ \t]+;
TOKEN_DOT: '.';
TOKEN_DIVIDE: '/';
TOKEN_UNDERSCORE: '_';

/* Skip whitespace and newlines in lexer */
SKIP_WHITESPACE: [ \t\r\n]+ -> skip;