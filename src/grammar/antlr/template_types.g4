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

parser grammar template_types;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration;

template_param_decl_list : TOKEN_LT template_param_decl (TOKEN_COMMA template_param_decl)* TOKEN_GT;

template_param_decl : type_param_decl | value_param_decl;

type_param_decl : generic_type_param_decl | category_type_param_decl;

generic_type_param_decl : TOKEN_TYPE identifier (TOKEN_EQUALS type_identifier)?;

category_type_param_decl :
type_category identifier type_restriction? (TOKEN_EQUALS type_identifier)?;

type_restriction : TOKEN_COLON type_identifier;

type_category :
TOKEN_ACTION
| TOKEN_COMPONENT
| struct_kind;

value_param_decl : data_type identifier (TOKEN_EQUALS constant_expression)?;

template_param_value_list
    : TOKEN_LT TOKEN_GT
    | TOKEN_LT template_param_value (TOKEN_COMMA template_param_value)* TOKEN_GT
    ;

template_param_value : constant_expression | data_type;