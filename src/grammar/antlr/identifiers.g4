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
parser grammar identifiers;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

hierarchical_id_list : hierarchical_id (TOKEN_COMMA hierarchical_id)*;

hierarchical_id : member_path_elem (TOKEN_DOT member_path_elem)*;

member_path_elem : identifier function_parameter_list? ( TOKEN_SLBRACE expression TOKEN_SRBRACE )*;

action_identifier : identifier;

action_handle_identifier : identifier;

component_identifier : identifier;

covercross_identifier : identifier;

covergroup_identifier : identifier;

coverpoint_identifier : identifier;

enum_identifier : identifier;

function_identifier : identifier;

import_class_identifier : identifier;

index_identifier : identifier;

iterator_identifier : identifier;

label_identifier : identifier;

language_identifier : identifier;

monitor_identifier : identifier;

package_identifier : identifier;

struct_identifier : identifier;

struct_kind_identifier : identifier; /* Custom addition */

symbol_identifier : identifier;

type_identifier : (TOKEN_SCOPE)? type_identifier_elem (TOKEN_SCOPE type_identifier_elem)*;

type_identifier_elem : identifier template_param_value_list?;

action_type_identifier : type_identifier;

buffer_type_identifier : type_identifier;

component_type_identifier : type_identifier;

covergroup_type_identifier : type_identifier;

enum_type_identifier : type_identifier;

monitor_type_identifier : type_identifier;

resource_type_identifier : type_identifier;

state_type_identifier : type_identifier;

stream_type_identifier : type_identifier;

entity_type_identifier :
action_type_identifier
| component_type_identifier
| flow_object_type
| resource_object_type;

/* This is extended to allow certain keywords - (my requirement >_<) */
identifier :
TOKEN_ADDR
| TOKEN_SIZE
| ID
| ESCAPED_ID;