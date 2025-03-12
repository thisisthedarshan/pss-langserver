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
parser grammar struct_declaration;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,template_types;

struct_declaration: struct_kind struct_identifier template_param_decl_list? struct_super_spec?
	TOKEN_CLBRACE struct_body_item* TOKEN_CRBRACE;

struct_kind: TOKEN_STRUCT
	| object_kind;

object_kind : TOKEN_BUFFER
	| TOKEN_STREAM
	| TOKEN_STATE
	| TOKEN_RESOURCE; 

struct_super_spec: TOKEN_COLON type_identifier;

  struct_body_item
	: comments
	|	constraint_declaration
	| attr_field
	| typedef_declaration
	| exec_block_stmt
	| attr_group
	| compile_assert_stmt
	| covergroup_declaration
	| covergroup_instantiation
	| struct_body_compile_if
	| stmt_terminator;