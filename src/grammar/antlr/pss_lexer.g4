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
TOKEN_DOT: '.';
TOKEN_DDOT: '..';
TOKEN_LT: '<';
TOKEN_GT: '>';
TOKEN_IMPLY: '->';
TOKEN_COLASSIGN: ':=';
TOKEN_COLPATH: ':/';
TOKEN_MINUS: '-';
TOKEN_EXCLAMATION: '!';
TOKEN_TILDA: '~';
TOKEN_AND: '&';
TOKEN_OR: '|';
TOKEN_CARET: '^';
TOKEN_DIVIDE: '/';
TOKEN_MOD: '%';
TOKEN_ADD: '+';
TOKEN_QUESTION: '?';
TOKEN_UNDERSCORE: '_';
TOKEN_ZERO: '0';

/* Comparison and Shift */
TOKEN_EQUALEQUAL: '==';
TOKEN_LSHIFT: '<<';
TOKEN_RSHIFT: '>>';
TOKEN_NOTEQUAL: '!=';
TOKEN_LTEQ: '<=';
TOKEN_GTEQ: '>=';
TOKEN_OROR: '||';
TOKEN_ANDAND: '&&';
TOKEN_DASTERISK: '**';

/* Assignment-types */
TOKEN_PLUSEQ: '+=';
TOKEN_MINUSEQ: '-=';
TOKEN_LSHIFTEQ: '<<=';
TOKEN_RSHIFTQE: '>>=';
TOKEN_OREQ: '|=';
TOKEN_ANDEQ: '&=';

/* BRACES */

/* Function braces */
TOKEN_FLBRACE: '(';
TOKEN_FRBRACE: ')';

/* Curly braces */
TOKEN_CLBRACE: '{';
TOKEN_CRBRACE: '}';

/* Square braces */
TOKEN_SLBRACE: '[';
TOKEN_SRBRACE: ']';

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
TOKEN_BUFFER: 'buffer';
TOKEN_STREAM: 'stream';
TOKEN_STATE: 'state';
TOKEN_RESOURCE: 'resource';
TOKEN_EXEC: 'exec';
TOKEN_PRESOLVE: 'pre_solve';
TOKEN_POSTSOLVE: 'post_solve';
TOKEN_PREBODY: 'pre_body';
TOKEN_BODY: 'body';
TOKEN_HEADER: 'header';
TOKEN_DECLARATION: 'declaration';
TOKEN_RUNSTART: 'run_start';
TOKEN_RUNEND: 'run_end';
TOKEN_INITDOWN: 'init_down';
TOKEN_INITUP: 'init_up';
TOKEN_INIT: 'init';
TOKEN_SUPER: 'super';
TOKEN_PURE: 'pure';
TOKEN_TARGET: 'target';
TOKEN_SOLVE: 'solve';
TOKEN_VOID: 'void';
TOKEN_TYPE: 'type';
TOKEN_REF: 'ref';
TOKEN_FUNCTION: 'function';
TOKEN_CLASS: 'class';
TOKEN_EXPORT: 'export';
TOKEN_RETURN: 'return';
TOKEN_REPEAT: 'repeat';
TOKEN_WHILE: 'while';
TOKEN_IF: 'if';
TOKEN_ELSE: 'else';
TOKEN_MATCH: 'match';
TOKEN_DEFAULT: 'default';
TOKEN_BREAK: 'break';
TOKEN_CONTINUE: 'continue';
TOKEN_RANDOMIZE: 'randomize';
TOKEN_WITH: 'with';
TOKEN_YIELD: 'yield';
TOKEN_POOL: 'pool';
TOKEN_BIND: 'bind';
TOKEN_DO: 'do';
TOKEN_SCHEDULE: 'schedule';
TOKEN_JOINBRANCH: 'join_branch';
TOKEN_JOINSELECT: 'join_select';
TOKEN_JOINNONE: 'join_none';
TOKEN_JOINFIRST: 'join_first';
TOKEN_FOREACH: 'foreach';
TOKEN_SELECT: 'select';
TOKEN_REPLICATE: 'replicate';
TOKEN_ATOMIC: 'atomic';
TOKEN_SYMBOL: 'symbol';
TOKEN_OVERRIDE: 'override';
TOKEN_INSTANCE: 'instance';
TOKEN_RAND: 'rand';
TOKEN_PUBLIC: 'public';
TOKEN_PROTECTED: 'protected';
TOKEN_PRIVATE: 'private';
TOKEN_COVER: 'cover';
TOKEN_MONITOR: 'monitor';
TOKEN_ACTIVITY: 'activity';
TOKEN_CONCAT: 'concat';
TOKEN_EVENTUALLY: 'eventually';
TOKEN_OVERLAP: 'overlap';
TOKEN_CHANDLE: 'chandle';
TOKEN_IN: 'in';
TOKEN_INT: 'int';
TOKEN_BIT: 'bit';
TOKEN_STRING: 'string';
TOKEN_BOOL: 'bool';
TOKEN_FLOAT32: 'float32';
TOKEN_FLOAT64: 'float64';
TOKEN_ARRAY: 'array';
TOKEN_LIST: 'list';
TOKEN_MAP: 'map';
TOKEN_SET: 'set';
TOKEN_TYPEDEF: 'typedef';
TOKEN_DYNAMIC: 'dynamic';
TOKEN_DISABLE: 'disable';
TOKEN_FORALL: 'forall';
TOKEN_UNIQUE: 'unique';
TOKEN_DIST: 'dist';
TOKEN_COVERGROUP: 'covergroup';
TOKEN_OPTION: 'option';
TOKEN_IFF: 'iff';
TOKEN_COVERPOINT: 'coverpoint';
TOKEN_BINS: 'bins';
TOKEN_ILLEGALBINS: 'illegal_bins';
TOKEN_IGNOREBINS: 'ignore_bins';
TOKEN_CROSS: 'cross';
TOKEN_COMPILE: 'compile';
TOKEN_HAS: 'has';
TOKEN_ASSERT: 'assert';
TOKEN_TRUE: 'true';
TOKEN_FALSE: 'false';
TOKEN_NULL: 'null';
TOKEN_FILE: 'file';
TOKEN_PARAM : 'param';
TOKEN_BRIEF : 'brief';
TOKEN_RETURNS : 'returns';
TOKEN_AUTHOR : 'author';
TOKEN_DATE : 'date';
TOKEN_SEE : 'see';
TOKEN_DEPRECATED : 'deprecated';
TOKEN_DETAILS : 'details';
TOKEN_TODO : 'todo';
TOKEN_EXAMPLE : 'example';
TOKEN_VERSION : 'version';
TOKEN_ATTENTION : 'attention';
TOKEN_COMP : 'comp';
TOKEN_SIZEOF_S : 'sizeof_s';
TOKEN_NBYTES: 'nbytes';
TOKEN_NBITS: 'nbits';

/* Address space and registers related tokens */
TOKEN_ADDR_REGION : 'addr_region_s';
TOKEN_TRANSP_ADDR_REGION : 'transparent_addr_region_s';
TOKEN_SIZE : 'size';
TOKEN_ADDR : 'addr';
TOKEN_TRAIT : 'trait';

TOK_ADD_NONALLOC_REGION : 'add_nonallocatable_region';
TOK_ADD_REGION : 'add_region';

TOKEN_CONTI_ADDR_SPACE : 'contiguous_addr_space_c';
TOKEN_TRANSP_ADDR_SPACE : 'transparent_addr_space_c';

TOKEN_ADDRESS_CLAIM : 'addr_claim_s';
TOKEN_TRANSP_ADDRESS_CLAIM : 'transparent_addr_claim_s';

/* Address related functions */
TOKEN_MAKE_HANDLE_FROM_CLAIM : 'make_handle_from_claim';
TOKEN_MAKE_HANDLE_FROM_HANDLE : 'make_handle_from_handle';
TOKEN_ADDR_VALUE : 'addr_value';
TOKEN_ADDR_VALUE_SOLVE : 'addr_value_solve';
TOKEN_ADDR_VALUE_ABS : 'addr_value_abs';
/* This doesn't cover primitive read/write functions */

/* Digits */
fragment BIN_DIGIT: '0' | '1';
fragment OCT_DIGIT: [0-7];
fragment DEC_DIGIT: [0-9];
fragment HEX_DIGIT: [0-9a-fA-F];
fragment EXP: 'e' | 'E';
fragment SIGN: '+' | '-';

TOKEN_EXP: EXP;
TOKEN_SIGN: SIGN;

/* Number literals */
TOKEN_BIN_NUMBER: '0' ('b' | 'B') BIN_DIGIT (BIN_DIGIT | '_')*;
TOKEN_OCT_NUMBER: '0' (OCT_DIGIT | '_')*;
TOKEN_DEC_NUMBER: [1-9] (DEC_DIGIT | '_')*;
TOKEN_HEX_NUMBER: '0' ('x' | 'X') HEX_DIGIT (HEX_DIGIT | '_')*;

TOKEN_BASED_BIN_LITERAL:
	'\'' ('s' | 'S')? ('b' | 'B') BIN_DIGIT (BIN_DIGIT | '_')*;
TOKEN_BASED_OCT_LITERAL:
	'\'' ('s' | 'S')? ('o' | 'O') OCT_DIGIT (OCT_DIGIT | '_')*;
TOKEN_BASED_DEC_LITERAL:
	'\'' ('s' | 'S')? ('d' | 'D') DEC_DIGIT (DEC_DIGIT | '_')*;
TOKEN_BASED_HEX_LITERAL:
	'\'' ('s' | 'S')? ('h' | 'H') HEX_DIGIT (HEX_DIGIT | '_')*;

/* Comments */
TOKEN_DOC_COMMENT: '/**' .*? '*/' -> channel(HIDDEN);
TOKEN_SL_COMMENT: '//' ~[\r\n]* '\n' -> channel(HIDDEN);
TOKEN_ML_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

/* Double and Triple-quoted strings */
TOKEN_QUOTED_STRING:
	'"' (UNESCAPED_CHARACTER | ESCAPED_CHARACTER)* '"';
TOKEN_TRIPLE_QUOTED_STRING: '"""' .*? '"""';

/* String-related characters */
fragment UNESCAPED_CHARACTER:
	~["\\]; /* Any printable character except quotes and backslash */
fragment ESCAPED_CHARACTER:
	'\\' ['"\\?abfnrtv]
	| '\\' [0-7] [0-7] [0-7]; /* Escapes */

TOKEN_FILENAME_STRING: TOKEN_QUOTED_STRING;

/* identifier */
ID: [a-zA-Z_] [a-zA-Z_0-9]*;
ESCAPED_ID: '\\' ~[ \t\r\n]+ [ \t\r\n]+;
WS: [ \t\r\n] -> skip; // Ignore whitespace