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

parser grammar functions;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types,memory,registers;

procedural_function : platform_qualifier? TOKEN_PURE? TOKEN_STATIC? TOKEN_FUNCTION
function_prototype  TOKEN_CLBRACE  procedural_stmt* TOKEN_CRBRACE;

function_decl : platform_qualifier? TOKEN_PURE? TOKEN_STATIC? TOKEN_FUNCTION
function_prototype TOKEN_SEMICOLON;

platform_qualifier : TOKEN_TARGET | TOKEN_SOLVE;

function_prototype : function_return_type function_identifier function_parameter_list_prototype;

function_return_type : TOKEN_VOID | data_type;

function_parameter_list_prototype 
: (TOKEN_FLBRACE (function_parameter ( TOKEN_COMMA function_parameter )*)? TOKEN_FRBRACE)
| (TOKEN_FLBRACE (function_parameter TOKEN_COMMA)* varargs_parameter TOKEN_FRBRACE);

function_parameter 
: ((function_parameter_dir | TOKEN_CONST)?
  data_type identifier (TOKEN_EQUALS constant_expression)?)
| ((function_parameter_dir | TOKEN_CONST)?
  user_type (TOKEN_EQUALS constant_expression)?)
| (TOKEN_CONST? ( TOKEN_TYPE | TOKEN_REF type_category | TOKEN_STRUCT ) identifier);

function_parameter_dir 
: TOKEN_INPUT
| TOKEN_OUTPUT
| TOKEN_INOUT;

varargs_parameter :
(data_type | TOKEN_TYPE | TOKEN_REF type_category | TOKEN_STRUCT ) TOKEN_ELLIPSIS identifier;

user_type : identifier;

/* Out-of-spec grammar for detecting function calls */
/* Example -> comp.function_identifier(function_parameter);*/
function_call 
: TOKEN_COMP TOKEN_DOT 
  function_identifier 
  TOKEN_FLBRACE
    function_call_params?
  TOKEN_FRBRACE 
  TOKEN_SEMICOLON;

function_call_params
  : identifier?
  | (identifier (TOKEN_COMMA identifier)*);