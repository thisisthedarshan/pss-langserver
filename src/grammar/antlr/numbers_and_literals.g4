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
parser grammar numbers_and_literals;
options {tokenVocab=pss_lexer;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,overrides,package_declaration,procedural_statements,struct_declaration,template_types;

number :
integer_number
| floating_point_number;

integer_number :
TOKEN_BIN_NUMBER
| TOKEN_OCT_NUMBER
| TOKEN_DEC_NUMBER
| TOKEN_HEX_NUMBER
| based_bin_number
| based_oct_number
| based_dec_number
| based_hex_number;

based_bin_number : TOKEN_DEC_NUMBER? TOKEN_BASED_BIN_LITERAL;
based_oct_number : TOKEN_DEC_NUMBER? TOKEN_BASED_OCT_LITERAL;
based_dec_number : TOKEN_DEC_NUMBER? TOKEN_BASED_DEC_LITERAL;
based_hex_number : TOKEN_DEC_NUMBER? TOKEN_BASED_HEX_LITERAL;

floating_point_number :
floating_point_dec_number
| floating_point_sci_number;

unsigned_number : TOKEN_DEC_NUMBER;

floating_point_dec_number : unsigned_number TOKEN_DOT unsigned_number;

floating_point_sci_number :
unsigned_number (TOKEN_DOT unsigned_number)? TOKEN_EXP TOKEN_SIGN? unsigned_number;

aggregate_literal :
empty_aggregate_literal
| value_list_literal
| map_literal
| struct_literal;

empty_aggregate_literal : TOKEN_CLBRACE TOKEN_CRBRACE;

value_list_literal : TOKEN_CLBRACE expression (TOKEN_COMMA  expression)* TOKEN_CRBRACE;

map_literal : TOKEN_CLBRACE map_literal_item  (TOKEN_COMMA map_literal_item)* TOKEN_CRBRACE;

map_literal_item : expression TOKEN_COLON expression;

struct_literal : TOKEN_CLBRACE struct_literal_item (TOKEN_COMMA struct_literal_item)* TOKEN_CRBRACE;

struct_literal_item : TOKEN_DOT identifier TOKEN_EQUALS expression;

bool_literal :
TOKEN_TRUE
| TOKEN_FALSE;

null_ref : TOKEN_NULL;
