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
parser grammar exec_blocks;
options {tokenVocab=pss_lexer;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types;

exec_block_stmt :
exec_block
| target_code_exec_block
| target_file_exec_block
| stmt_terminator;

exec_block : TOKEN_EXEC exec_kind TOKEN_CLBRACE exec_stmt* TOKEN_CRBRACE;

exec_kind :
TOKEN_PRESOLVE
| TOKEN_POSTSOLVE
| TOKEN_PREBODY
| TOKEN_BODY
| TOKEN_HEADER
| TOKEN_DECLARATION
| TOKEN_RUNSTART
| TOKEN_RUNEND
| TOKEN_INITDOWN
| TOKEN_INITUP
| TOKEN_INIT;

exec_stmt : procedural_stmt | exec_super_stmt | function_call* ;

exec_super_stmt : TOKEN_SUPER TOKEN_SEMICOLON;

target_code_exec_block : TOKEN_EXEC exec_kind language_identifier TOKEN_EQUALS string_literal TOKEN_SEMICOLON;

target_file_exec_block : TOKEN_EXEC TOKEN_FILE filename_string TOKEN_EQUALS string_literal TOKEN_SEMICOLON;