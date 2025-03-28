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

parser grammar foreign_procedural_interface;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

import_function :
(TOKEN_IMPORT platform_qualifier? language_identifier?
TOKEN_FUNCTION type_identifier TOKEN_SEMICOLON)
| (TOKEN_IMPORT platform_qualifier? language_identifier? TOKEN_STATIC? TOKEN_FUNCTION function_prototype TOKEN_SEMICOLON);

target_template_function :
TOKEN_TARGET language_identifier TOKEN_STATIC?
TOKEN_FUNCTION function_prototype TOKEN_EQUALS string_literal TOKEN_SEMICOLON;

import_class_decl : TOKEN_IMPORT TOKEN_CLASS import_class_identifier import_class_extends? TOKEN_CLBRACE (import_class_function_decl)* TOKEN_CRBRACE;

import_class_extends : TOKEN_COLON type_identifier (TOKEN_COLON type_identifier)*;

import_class_function_decl : function_prototype ;

export_action : TOKEN_EXPORT platform_qualifier? action_type_identifier function_parameter_list_prototype TOKEN_SEMICOLON;