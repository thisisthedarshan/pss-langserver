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

grammar component_declaration;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

component_declaration:
 TOKEN_PURE? TOKEN_COMPONENT component_identifier template_param_decl_list?
component_super_spec? TOKEN_CLBRACE (component_body_item)* TOKEN_CRBRACE;

component_super_spec : TOKEN_COLON type_identifier;

component_body_item 
: comments
| override_declaration
| register_comp_instance
| addr_space_def
| component_data_declaration
| component_pool_declaration
| action_declaration
| action_extension
| abstract_action_declaration
| object_bind_stmt
| exec_block
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
| compile_assert_stmt
| attr_group
| component_body_compile_if
| monitor_declaration
| cover_stmt
| stmt_terminator;

component_data_declaration :
access_modifier? (TOKEN_STATIC TOKEN_CONST)? data_declaration;

component_pool_declaration :
TOKEN_POOL (TOKEN_SLBRACE expression TOKEN_SRBRACE)? type_identifier identifier TOKEN_SEMICOLON;

object_bind_stmt : TOKEN_BIND hierarchical_id object_bind_item_or_list TOKEN_SEMICOLON;

object_bind_item_or_list :
object_bind_item_path
| (TOKEN_CLBRACE object_bind_item_path (TOKEN_COMMA object_bind_item_path)* TOKEN_CRBRACE);

object_bind_item_path : (component_path_elem TOKEN_DOT)* object_bind_item;

component_path_elem : component_identifier (TOKEN_SLBRACE domain_open_range_list TOKEN_SRBRACE)?;

object_bind_item :
(action_type_identifier TOKEN_DOT identifier ( TOKEN_SLBRACE domain_open_range_list TOKEN_SRBRACE )?)
| TOKEN_ASTERISK;