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
 
parser grammar data_coverage;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

data_declaration : data_type data_instantiation (TOKEN_COMMA data_instantiation)* TOKEN_SEMICOLON;

data_instantiation:
identifier array_dim? (TOKEN_EQUALS (constant_expression | function_call))?;

array_dim : TOKEN_SLBRACE constant_expression TOKEN_SRBRACE;

attr_field:
access_modifier? TOKEN_RAND? (TOKEN_STATIC TOKEN_CONST)? data_declaration;

access_modifier : TOKEN_PUBLIC | TOKEN_PROTECTED | TOKEN_PRIVATE;

attr_group : access_modifier TOKEN_COLON;