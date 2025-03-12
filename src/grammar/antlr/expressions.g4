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
parser grammar expressions;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

constant_expression : expression;

expression :
| (unary_operator primary)
| (power_op expression)
| (mul_div expression)
| (add_sub expression)
| (shifting expression)
| (in_statements expression)
| (logical_compare expression)
| (equality_compare expression)
| (bitwise_and expression)
| (bitwise_xor expression)
| (bitwise_or expression)
| (logical_and expression)
| (logical_or expression)
| (binary_operator expression)
| (conditional_expression)
| primary
| identifier;

primary:
number
|aggregate_literal
|bool_literal
|string_literal
|null_ref
|parenthesis_expressions
|cast_expression
|ref_path
|compile_has_expr;

unary_operator : TOKEN_MINUS | TOKEN_EXCLAMATION | TOKEN_TILDA | TOKEN_AND | TOKEN_OR | TOKEN_CARET;

power_op: TOKEN_DASTERISK;

binary_operator :
TOKEN_ASTERISK | TOKEN_DIVIDE | TOKEN_MOD | TOKEN_ADD | TOKEN_MINUS | TOKEN_LSHIFT | TOKEN_RSHIFT | TOKEN_EQUALEQUAL | TOKEN_NOTEQUAL | TOKEN_LT | TOKEN_LTEQ | TOKEN_GT | TOKEN_GTEQ | TOKEN_OROR | TOKEN_ANDAND | TOKEN_OR | TOKEN_CARET | TOKEN_AND | TOKEN_DASTERISK;

assign_op : TOKEN_EQUALS | TOKEN_PLUSEQ | TOKEN_MINUSEQ | TOKEN_LSHIFTEQ | TOKEN_RSHIFTQE | TOKEN_OREQ | TOKEN_ANDEQ;

parenthesis_expressions: TOKEN_FLBRACE expression TOKEN_FRBRACE;

mul_div: 
  TOKEN_DIVIDE
  | TOKEN_ASTERISK
  | TOKEN_MOD;

add_sub:
  TOKEN_ADD
  | TOKEN_MINUS;

shifting:
TOKEN_LSHIFT
| TOKEN_RSHIFT;

in_statements:
(TOKEN_IN TOKEN_SLBRACE open_range_list TOKEN_SRBRACE)
| (TOKEN_IN collection_expression);

logical_compare:
TOKEN_LT
| TOKEN_LTEQ
| TOKEN_GT
|TOKEN_GTEQ;

equality_compare:
TOKEN_EQUALEQUAL | TOKEN_NOTEQUAL;

bitwise_and: TOKEN_AND;
bitwise_xor : TOKEN_CARET;
bitwise_or : TOKEN_OR;
logical_and : TOKEN_ANDAND;
logical_or : TOKEN_OROR;

open_range_value:
expression (TOKEN_ELLIPSIS expression)?;

conditional_expression : TOKEN_QUESTION expression TOKEN_COLON expression;

in_expression :
(expression TOKEN_IN TOKEN_SLBRACE open_range_list TOKEN_SRBRACE )
| (expression TOKEN_IN collection_expression);

open_range_list : open_range_value (TOKEN_COMMA open_range_value)*;

/* open_range_value : expression (TOKEN_DDOT expression)?; */

collection_expression : expression;

cast_expression : TOKEN_FLBRACE casting_type TOKEN_FRBRACE expression;

ref_path
    : static_ref_path
    | static_ref_path TOKEN_DOT hierarchical_id     
    | static_ref_path TOKEN_DOT hierarchical_id slice
    | static_ref_path slice
    | TOKEN_SUPER TOKEN_DOT hierarchical_id
    | TOKEN_SUPER TOKEN_DOT hierarchical_id slice
    ;

slice : bit_slice | string_slice;

static_ref_path : (TOKEN_SCOPE)? (type_identifier_elem TOKEN_SCOPE)* member_path_elem;

bit_slice : TOKEN_SLBRACE constant_expression TOKEN_COLON constant_expression TOKEN_SRBRACE;

string_slice :
(expression (TOKEN_DDOT expression)?)
| (expression TOKEN_DDOT)
| (TOKEN_DDOT expression);

function_call :
(TOKEN_SUPER TOKEN_DOT function_ref_path)
| ((TOKEN_SCOPE)? (type_identifier_elem TOKEN_SCOPE)* function_ref_path)
| (TOKEN_COMP TOKEN_DOT function_identifier 
  TOKEN_FLBRACE function_params? (TOKEN_COMMA function_params)* TOKEN_FRBRACE TOKEN_SEMICOLON);

function_ref_path : (member_path_elem TOKEN_DOT)? identifier function_parameter_list;

function_params : identifier;

symbol_call : symbol_identifier function_parameter_list TOKEN_SEMICOLON;

function_parameter_list
    : TOKEN_FLBRACE TOKEN_FRBRACE                
    | TOKEN_FLBRACE expression_list TOKEN_FRBRACE
    ;

expression_list
    : expression (TOKEN_COMMA expression)*
    ;