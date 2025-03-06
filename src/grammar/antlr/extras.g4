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
parser grammar extras;
options {tokenVocab=pss_lexer;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types;

string_literal :
TOKEN_QUOTED_STRING
| TOKEN_TRIPLE_QUOTED_STRING;

filename_string : TOKEN_QUOTED_STRING;

/* Data Declarations - missing from the LRM */
data_declaration:
data_type data_instantiation (TOKEN_COMMA data_instantiation)* TOKEN_SEMICOLON;

data_instantiation:
identifier array_dim? (TOKEN_EQUALS constant_expression)?;

array_dim:
TOKEN_SLBRACE constant_expression TOKEN_SRBRACE;

attr_field:
access_modifier? TOKEN_RAND (TOKEN_STATIC TOKEN_CONST)? data_declaration;

/* Proper extend statements re-declared */
action_extension
  : (
      (TOKEN_EXTEND TOKEN_ACTION action_identifier) 
    | (TOKEN_EXTEND component_identifier TOKEN_COLON action_identifier)
    ) TOKEN_CLBRACE (
		action_body_item*
	) TOKEN_CRBRACE;
