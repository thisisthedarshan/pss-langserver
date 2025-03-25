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

parser grammar action_declarations;
options {tokenVocab=pssLex;}

import activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

action_declaration
	: TOKEN_ACTION 
		action_identifier 
		template_param_decl_list? 
		action_super_spec? 
	  TOKEN_CLBRACE 
		action_body_item* 
	  TOKEN_CRBRACE
	;

abstract_action_declaration
	: TOKEN_ABSTRACT 
		action_declaration
	;

action_super_spec
	: TOKEN_COLON 
		type_identifier
	;

action_body_item
	: comments
	| activity_declaration
	| override_declaration
	| constraint_declaration
	| action_field_declaration
	| symbol_declaration
	| covergroup_declaration
	| exec_block_stmt
	| activity_scheduling_constraint
	| attr_group
	| compile_assert_stmt
	| covergroup_instantiation
	| action_body_compile_if
	| transparent_addr_claim
	| addr_claim
	| inout_data
	| stmt_terminator
	;

action_field_declaration
	: comments
	| attr_field
	| activity_data_field
	| action_handle_declaration
	| object_ref_field_declaration
	;

object_ref_field_declaration
	: comments
	| flow_ref_field_declaration
	| resource_ref_field_declaration
	;

flow_ref_field_declaration
	: (TOKEN_INPUT | TOKEN_OUTPUT) 
		flow_object_type 
		object_ref_field 
	  ( TOKEN_COMMA 
		object_ref_field 
	  )* TOKEN_SEMICOLON
	;

resource_ref_field_declaration
	: (TOKEN_LOCK | TOKEN_SHARE) 
		resource_object_type 
		object_ref_field 
	  (TOKEN_COMMA 
			object_ref_field 
	  )* TOKEN_SEMICOLON
	;

flow_object_type
	: buffer_type_identifier
	| state_type_identifier
	| stream_type_identifier
	;

resource_object_type
	: resource_type_identifier
	;

object_ref_field
	: identifier array_dim?
	;

action_handle_declaration
	: action_type_identifier 
	  action_instantiation 
	  ( TOKEN_COMMA 
	  	action_instantiation
	  )*
	;

action_instantiation
	: action_handle_identifier 
	  array_dim? 
	  (TOKEN_COMMA 
	  	action_handle_identifier 
		array_dim?
	  )*
	;

activity_data_field
	: TOKEN_ACTION 
	  data_declaration
	;

activity_scheduling_constraint
	: TOKEN_CONSTRAINT 
	  (TOKEN_PARALLEL | TOKEN_SEQUENCE) 
	  TOKEN_CLBRACE 
	  	hierarchical_id 
	  TOKEN_COMMA
		hierarchical_id 
	  (TOKEN_COMMA 
	    hierarchical_id
	  ) TOKEN_CRBRACE TOKEN_SEMICOLON
	;

inout_data
	: (TOKEN_INPUT | TOKEN_OUTPUT) struct_kind identifier;