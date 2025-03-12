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

parser grammar package_declaration;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,procedural_statements,struct_declaration,template_types,memory,registers;

package_declaration:
	TOKEN_PACKAGE package_id_path TOKEN_CLBRACE (
		package_body_item*
	) TOKEN_CRBRACE;

package_id_path:
	package_identifier (TOKEN_SCOPE package_identifier);

package_body_item
	:	comments
	|	abstract_action_declaration
	| abstract_monitor_declaration
	| struct_declaration
	| enum_declaration
	| covergroup_declaration
	| function_decl
	| import_class_decl
	| procedural_function
	| import_function
	| target_template_function
	| export_action
	| typedef_declaration
	| import_stmt
	| extend_stmt
	| const_field_declaration
	| component_declaration
	| package_declaration
	| compile_assert_stmt
	| package_body_compile_if
	| stmt_terminator;

import_stmt:
	TOKEN_IMPORT package_import_pattern TOKEN_SEMICOLON;

package_import_pattern:
	type_identifier package_import_qualifier?;

package_import_qualifier:
	package_import_wildcard
	| package_import_alias;

package_import_wildcard: TOKEN_SCOPE TOKEN_ASTERISK;

package_import_alias: TOKEN_AS package_identifier;

extend_stmt:
	action_extension
	| (TOKEN_EXTEND TOKEN_COMPONENT component_identifier TOKEN_CLBRACE (
		component_body_item*
	) TOKEN_CRBRACE)
	| (TOKEN_EXTEND struct_kind struct_kind_identifier TOKEN_CLBRACE (
		struct_body_item*
	) TOKEN_CRBRACE)
	| (TOKEN_EXTEND TOKEN_ENUM enum_identifier TOKEN_CLBRACE (
		enum_item ( TOKEN_COMMA enum_item)*
	)? TOKEN_CRBRACE);

const_field_declaration:
	TOKEN_STATIC? TOKEN_CONST data_declaration;

stmt_terminator: TOKEN_SEMICOLON;