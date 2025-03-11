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

parser grammar procedural_statements;
options {tokenVocab=pssLex;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,struct_declaration,template_types,memory,registers;

procedural_stmt:
	procedural_sequence_block_stmt
	| procedural_data_declaration
	| procedural_assignment_stmt
	| procedural_void_function_call_stmt
	| procedural_return_stmt
	| procedural_repeat_stmt
	| procedural_foreach_stmt
	| procedural_if_else_stmt
	| procedural_match_stmt
	| procedural_break_stmt
	| procedural_continue_stmt
	| procedural_randomization_stmt
	| procedural_compile_if
	| procedural_yield_stmt
	| stmt_terminator;

procedural_sequence_block_stmt:
	TOKEN_SEQUENCE? TOKEN_CLBRACE procedural_stmt* TOKEN_CRBRACE;

procedural_data_declaration:
	data_type procedural_data_instantiation (
		TOKEN_COMMA procedural_data_instantiation
	)*;

procedural_data_instantiation:
	identifier array_dim? (TOKEN_EQUALS expression)?;

procedural_assignment_stmt
	:	(ref_path assign_op expression TOKEN_SEMICOLON)
	|	(data_type assign_op expression TOKEN_SEMICOLON)
	|	(data_type? identifier assign_op function_call);

procedural_void_function_call_stmt: (
		TOKEN_FLBRACE TOKEN_VOID TOKEN_FRBRACE
	)? function_call TOKEN_SEMICOLON;

procedural_return_stmt
    : TOKEN_RETURN TOKEN_SEMICOLON
    | TOKEN_RETURN expression TOKEN_SEMICOLON
    ;

procedural_repeat_stmt:
	TOKEN_REPEAT TOKEN_FLBRACE (index_identifier TOKEN_COLON)? expression TOKEN_FRBRACE
		procedural_stmt
	| TOKEN_REPEAT procedural_stmt TOKEN_WHILE (expression) TOKEN_SEMICOLON
	| TOKEN_WHILE TOKEN_FLBRACE expression TOKEN_FRBRACE procedural_stmt;

procedural_foreach_stmt:
	TOKEN_FOREACH TOKEN_FLBRACE (iterator_identifier TOKEN_COLON)? expression (
		TOKEN_SLBRACE index_identifier TOKEN_SRBRACE
	)? TOKEN_FRBRACE procedural_stmt;

procedural_if_else_stmt:
	TOKEN_IF TOKEN_FLBRACE expression TOKEN_FRBRACE procedural_stmt (
		TOKEN_ELSE procedural_stmt
	)?;

procedural_match_stmt:
	TOKEN_MATCH TOKEN_FLBRACE match_expression TOKEN_FRBRACE TOKEN_CLBRACE procedural_match_choice
		procedural_match_choice* TOKEN_CRBRACE;

procedural_match_choice:
	(TOKEN_SLBRACE open_range_list TOKEN_SRBRACE) TOKEN_COLON procedural_stmt
	| TOKEN_DEFAULT TOKEN_COLON procedural_stmt;

procedural_break_stmt: TOKEN_BREAK TOKEN_SEMICOLON;

procedural_continue_stmt: TOKEN_CONTINUE TOKEN_SEMICOLON;

procedural_randomization_stmt:
	TOKEN_RANDOMIZE procedural_randomization_target procedural_randomization_term;

procedural_randomization_target:
	hierarchical_id (TOKEN_COMMA hierarchical_id)*;

procedural_randomization_term:
	TOKEN_WITH constraint_set
	| TOKEN_SEMICOLON;

procedural_yield_stmt: TOKEN_YIELD TOKEN_SEMICOLON;