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

parser grammar activity_statements;
import pss_lexer, action_declarations,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,pss_lexer,struct_declaration,template_types;

activity_stmt :
(label_identifier TOKEN_COLON)? labeled_activity_stmt
| activity_action_traversal_stmt
| activity_data_field
| activity_bind_stmt
| action_handle_declaration
| activity_constraint_stmt
| activity_scheduling_constraint
| stmt_terminator;

labeled_activity_stmt :
activity_sequence_block_stmt
| activity_parallel_stmt
| activity_schedule_stmt
| activity_repeat_stmt
| activity_foreach_stmt
| activity_select_stmt
| activity_if_else_stmt
| activity_match_stmt
| activity_replicate_stmt
| activity_super_stmt
| activity_atomic_block_stmt
| symbol_call;


activity_action_traversal_stmt :
(identifier ( TOKEN_SLBRACE expression TOKEN_SRBRACE )? inline_constraints_or_empty)
|  ((label_identifier TOKEN_COLON )? TOKEN_DO type_identifier inline_constraints_or_empty);

inline_constraints_or_empty :
(TOKEN_WITH constraint_set)
| TOKEN_SEMICOLON;

activity_sequence_block_stmt : (TOKEN_SEQUENCE)? TOKEN_CLBRACE activity_stmt* TOKEN_CRBRACE;

activity_parallel_stmt : TOKEN_PARALLEL activity_join_spec? TOKEN_CLBRACE activity_stmt* TOKEN_CRBRACE;

activity_schedule_stmt : TOKEN_SCHEDULE activity_join_spec? TOKEN_CLBRACE activity_stmt* TOKEN_CRBRACE;

activity_join_spec :
activity_join_branch
| activity_join_select
| activity_join_none
| activity_join_first;

activity_join_branch : TOKEN_JOINBRANCH TOKEN_FLBRACE label_identifier (TOKEN_COMMA label_identifier)* TOKEN_FRBRACE;
activity_join_select : TOKEN_JOINSELECT TOKEN_FLBRACE expression TOKEN_FRBRACE;
activity_join_none : TOKEN_JOINNONE;
activity_join_first : TOKEN_JOINFIRST TOKEN_FLBRACE expression TOKEN_FRBRACE;

activity_repeat_stmt :
(TOKEN_REPEAT TOKEN_FLBRACE (index_identifier TOKEN_COLON)? expression TOKEN_FRBRACE activity_stmt)
| (TOKEN_REPEAT activity_stmt TOKEN_WHILE TOKEN_FLBRACE expression TOKEN_FRBRACE TOKEN_SEMICOLON);

activity_foreach_stmt : TOKEN_FOREACH TOKEN_FLBRACE (iterator_identifier TOKEN_COLON )? expression
( TOKEN_SLBRACE index_identifier TOKEN_SRBRACE )? TOKEN_FRBRACE activity_stmt;

activity_select_stmt : TOKEN_SELECT TOKEN_CLBRACE select_branch select_branch select_branch* TOKEN_CRBRACE;

select_branch : ((TOKEN_FLBRACE expression TOKEN_FRBRACE (TOKEN_FLBRACE expression TOKEN_FRBRACE)? TOKEN_COLON) | (TOKEN_SLBRACE expression TOKEN_SRBRACE TOKEN_COLON))? activity_stmt;

activity_if_else_stmt : TOKEN_IF TOKEN_FLBRACE expression TOKEN_FRBRACE activity_stmt (TOKEN_ELSE activity_stmt)?;

activity_match_stmt :
match TOKEN_FLBRACE match_expression TOKEN_FRBRACE TOKEN_CLBRACE match_choice match_choice* TOKEN_CRBRACE;

match_expression : expression;

match_choice :
(TOKEN_SLBRACE open_range_list TOKEN_SRBRACE TOKEN_COLON activity_stmt)
| (TOKEN_DEFAULT : activity_stmt);

activity_replicate_stmt : TOKEN_REPLICATE TOKEN_FLBRACE (index_identifier TOKEN_COLON)? expression TOKEN_FRBRACE
 (label_identifier TOKEN_SLBRACE TOKEN_SRBRACE TOKEN_COLON)? labeled_activity_stmt;

activity_super_stmt : TOKEN_SUPER TOKEN_SEMICOLON ;

activity_atomic_block_stmt : TOKEN_ATOMIC TOKEN_CLBRACE activity_stmt* TOKEN_CRBRACE

activity_bind_stmt : TOKEN_BIND hierarchical_id activity_bind_item_or_list TOKEN_SEMICOLON;

activity_bind_item_or_list :
hierarchical_id
| (TOKEN_CLBRACE hierarchical_id_list TOKEN_CLBRACE);

activity_constraint_stmt : TOKEN_CONSTRAINT constraint_set;

symbol_declaration :
TOKEN_SYMBOL symbol_identifier ( TOKEN_FLBRACE symbol_paramlist TOKEN_FRBRACE )? TOKEN_CLBRACE activity_stmt* TOKEN_CRBRACE;

symbol_paramlist : (symbol_param (TOKEN_COMMA symbol_param)* )?;

symbol_param : data_type identifier;