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
parser grammar extras;
import pss_lexer,action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,pss_lexer,struct_declaration,template_types

string_literal :
TOKEN_QUOTED_STRING
| TOKEN_TRIPLE_QUOTED_STRING;

comment : TOKEN_SL_COMMENT | TOKEN_ML_COMMENT;

unescaped_character : any_printable_ASCII_character
escaped_character : \('|"|?|\|a|b|f|n|r|t|v|[0-7][0-7][0-7])

filename_string : TOKEN_QUOTED_STRING
