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

parser grammar behavioral_coverage;
import pss_lexer,action_declarations,activity_statements,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,pss_lexer,struct_declaration,template_types;

cover_stmt:
(label_identifier? TOKEN_COVER type_identifier TOKEN_SEMICOLON)
| ([ label_identifier ] TOKEN_COVER  TOKEN_CLBRACE monitor_body_item* TOKEN_CRBRACE);

monitor_declaration : TOKEN_MONITOR monitor_identifier
template_param_decl_list? monitor_super_spec? TOKEN_CLBRACE monitor_body_item* TOKEN_CRBRACE;

abstract_monitor_declaration : TOKEN_ABSTRACT monitor_declaration;

monitor_super_spec : TOKEN_COLON type_identifier;

monitor_body_item :
monitor_activity_declaration
| override_declaration
| monitor_constraint_declaration
| monitor_field_declaration
| covergroup_declaration
| attr_group
| compile_assert_stmt
| covergroup_instantiation
| monitor_body_compile_if
| stmt_terminator;

monitor_field_declaration :
const_field_declaration
| action_handle_declaration
| monitor_handle_declaration;

monitor_activity_declaration :
TOKEN_ACTIVITY TOKEN_CLBRACE monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_stmt :
(label_identifier TOKEN_COLON)? labeled_monitor_activity_stmt
| activity_action_traversal_stmt
| monitor_activity_monitor_traversal_stmt
| action_handle_declaration
| monitor_handle_declaration
| monitor_activity_constraint_stmt
| stmt_terminator;

labeled_monitor_activity_stmt :
monitor_activity_sequence_block_stmt
| monitor_activity_concat_stmt
| monitor_activity_eventually_stmt
| monitor_activity_overlap_stmt
| monitor_activity_schedule_stmt;

monitor_handle_declaration : monitor_type_identifier
monitor_instantiation TOKEN_SEMICOLON;

monitor_instantiation :
monitor_identifier array_dim? (TOKEN_COMMA monitor_identifier array_dim? )*;


monitor_activity_sequence_block_stmt : TOKEN_SEQUENCE? TOKEN_CLBRACE monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_concat_stmt : TOKEN_CONCAT TOKEN_CLBRACE monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_eventually_stmt : TOKEN_EVENTUALLY monitor_activity_stmt TOKEN_SEMICOLON;

monitor_activity_overlap_stmt : TOKEN_OVERLAP TOKEN_CLBRACE monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_select_stmt : TOKEN_SELECT TOKEN_CLBRACE monitor_activity_stmt monitor_activity_stmt monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_schedule_stmt : TOKEN_SCHEDULE TOKEN_CLBRACE monitor_activity_stmt* TOKEN_CRBRACE;

monitor_activity_monitor_traversal_stmt :
(monitor_identifier ( TOKEN_SLBRACE expression TOKEN_SRBRACE )? inline_constraints_or_empty)
| (label_identifier TOKEN_COLON)? TOKEN_DO monitor_type_identifier inline_constraints_or_empty;

monitor_inline_constraints_or_empty :
(TOKEN_WITH monitor_constraint_set)
| TOKEN_SEMICOLON;

monitor_activity_constraint_stmt : TOKEN_CONSTRAINT monitor_constraint_set;

monitor_constraint_declaration :
(TOKEN_CONSTRAINT monitor_constraint_set)
| (TOKEN_CONSTRAINT identifier monitor_constraint_block)

monitor_constraint_set :
monitor_constraint_body_item
| monitor_constraint_block;

monitor_constraint_block : TOKEN_CLBRACE monitor_constraint_body_item* TOKEN_CRBRACE;

monitor_constraint_body_item :
expression_constraint_item
| foreach_constraint_item
| forall_constraint_item
| if_constraint_item
| implication_constraint_item
| unique_constraint_item
| constraint_body_compile_if
| stmt_terminator;