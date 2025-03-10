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
parser grammar constraints;
options {tokenVocab=pss_lexer;}

import action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,struct_declaration,template_types;

constraint_declaration :
(TOKEN_CONSTRAINT constraint_set)
| ( TOKEN_DYNAMIC?  TOKEN_CONSTRAINT identifier constraint_block);

constraint_set :
constraint_body_item
| constraint_block;

constraint_block : TOKEN_CLBRACE constraint_body_item* TOKEN_CRBRACE;

constraint_body_item :
expression_constraint_item
| foreach_constraint_item
| forall_constraint_item
| if_constraint_item
| implication_constraint_item
| unique_constraint_item
| (TOKEN_DEFAULT hierarchical_id TOKEN_EQUALEQUAL constant_expression TOKEN_SEMICOLON)
| (TOKEN_DEFAULT TOKEN_DISABLE hierarchical_id TOKEN_SEMICOLON)
| dist_directive
| constraint_body_compile_if
| stmt_terminator;

expression_constraint_item : expression TOKEN_SEMICOLON;

foreach_constraint_item :
TOKEN_FOREACH TOKEN_FLBRACE (iterator_identifier TOKEN_COLON)? expression ( TOKEN_SLBRACE index_identifier TOKEN_SRBRACE )? TOKEN_FRBRACE constraint_set;

forall_constraint_item :
TOKEN_FORALL TOKEN_FLBRACE iterator_identifier TOKEN_COLON type_identifier (TOKEN_IN ref_path)? TOKEN_FRBRACE constraint_set;

if_constraint_item : TOKEN_IF TOKEN_FLBRACE expression TOKEN_FRBRACE constraint_set ( TOKEN_ELSE constraint_set )?;

implication_constraint_item : expression TOKEN_IMPLY constraint_set;

unique_constraint_item : TOKEN_UNIQUE hierarchical_id_list* ;

dist_directive : TOKEN_DIST expression TOKEN_IN TOKEN_SLBRACE dist_list TOKEN_SRBRACE TOKEN_SEMICOLON ;

dist_list : dist_item (TOKEN_DOT dist_item)*;

dist_item : open_range_value dist_weight?;

dist_weight :
(TOKEN_COLASSIGN expression)
| (TOKEN_COLPATH expression);
