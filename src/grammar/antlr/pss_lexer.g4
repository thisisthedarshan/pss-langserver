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

lexer grammar pss_lexer;

/* CONSTANT CHARACTERS */
TOKEN_SCOPE: '::';
TOKEN_SEMICOLON: ';';
TOKEN_ASTERISK: '*';
TOKEN_COMMA: ',';
TOKEN_COLON: ':';
TOKEN_EQUALS: '=';
TOKEN_ELLIPSIS: '...';

/* BRACES */

/* Function braces */
TOKEN_FLBRACE: '(';
TOKEN_FRBRACE: ')';

/* Curly braces */
TOKEN_CLBRACE: '{';
TOKEN_CRBRACE: '}';

/* CONSTANT KEYWORDS */
TOKEN_IMPORT: 'import';
TOKEN_AS: 'as';
TOKEN_EXTEND: 'extend';
TOKEN_ACTION: 'action';
TOKEN_COMPONENT: 'component';
TOKEN_ENUM: 'enum';
TOKEN_STATIC: 'static';
TOKEN_CONST: 'const';
TOKEN_ABSTRACT: 'abstract';
TOKEN_INPUT: 'input';
TOKEN_OUTPUT: 'output';
TOKEN_INOUT: 'inout';
TOKEN_LOCK: 'lock';
TOKEN_SHARE: 'share'; 
TOKEN_CONSTRAINT: 'constraint';
TOKEN_PARALLEL: 'parallel';
TOKEN_SEQUENCE: 'sequence';
TOKEN_STRUCT: 'struct';
TOKEN_BUFFER:'buffer';
TOKEN_STREAM:'stream';
TOKEN_STATE:'state';
TOKEN_RESOURCE:'resource';
TOKEN_EXEC: 'exec';
TOKEN_PRESOLVE:'pre_solve';
TOKEN_POSTSOLVE:'post_solve';
TOKEN_PREBODY:'pre_body';
TOKEN_BODY:'body';
TOKEN_HEADER:'header';
TOKEN_DECLARATION:'declaration';
TOKEN_RUNSTART:'run_start';
TOKEN_RUNEND:'run_end';
TOKEN_INITDOWN:'init_down';
TOKEN_INITUP:'init_up';
TOKEN_INIT:'init';
TOKEN_SUPER:'super';
TOKEN_PURE: 'pure';
TOKEN_STATIC: 'static';
TOKEN_TARGET: 'target';
TOKEN_SOLVE: 'solve';
TOKEN_VOID: 'void';
TOKEN_TYPE: 'type';
TOKEN_REF: 'ref';
TOKEN_FUNCTION: 'function';
TOKEN_CLASS: 'class';
TOKEN_EXPORT: 'export';


