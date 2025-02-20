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
parser grammar coverage;
import pss_lexer,action_declarations,activity_statements,behavioral_coverage,component_declaration,conditional_compilation,constraints,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,pss_lexer,struct_declaration,template_types;

covergroup_declaration : TOKEN_COVERGROUP covergroup_identifier
TOKEN_FLBRACE covergroup_port (TOKEN_COMMA covergroup_port)* TOKEN_FRBRACE TOKEN_CLBRACE covergroup_body_item* TOKEN_CRBRACE;

covergroup_port : data_type identifier;

covergroup_body_item :
covergroup_option
| covergroup_coverpoint
| covergroup_cross
| covergroup_body_compile_if
| stmt_terminator;

covergroup_option :
TOKEN_OPTION TOKEN_DOT identifier TOKEN_EQUALS constant_expression TOKEN_SEMICOLON;

covergroup_instantiation :
covergroup_type_instantiation
| inline_covergroup;

inline_covergroup : TOKEN_COVERGROUP TOKEN_CLBRACE covergroup_body_item* TOKEN_CRBRACE identifier TOKEN_SEMICOLON;

covergroup_type_instantiation :
covergroup_type_identifier covergroup_identifier
TOKEN_FLBRACE covergroup_portmap_list TOKEN_FRBRACE covergroup_options_or_empty;

covergroup_portmap_list :
(covergroup_portmap (TOKEN_COMMA covergroup_portmap))
| hierarchical_id_list;

covergroup_portmap : TOKEN_DOT identifier TOKEN_FLBRACE hierarchical_id TOKEN_FRBRACE;

covergroup_options_or_empty :
TOKEN_WITH TOKEN_CLBRACE covergroup_option* TOKEN_CRBRACE;
| TOKEN_SEMICOLON;

covergroup_coverpoint : (data_type? coverpoint_identifier TOKEN_COLON)? TOKEN_COVERPOINT expression (TOKEN_IFF TOKEN_FLBRACE expression TOKEN_FRBRACE)? bins_or_empty;

bins_or_empty :
TOKEN_CLBRACE covergroup_coverpoint_body_item* TOKEN_CRBRACE
| TOKEN_SEMICOLON;

covergroup_coverpoint_body_item :
covergroup_option
| covergroup_coverpoint_binspec;

covergroup_coverpoint_binspec : bins_keyword identifier
(TOKEN_SLBRACE constant_expression? TOKEN_SRBRACE)? TOKEN_EQUALS coverpoint_bins;

coverpoint_bins :
(TOKEN_SLBRACE covergroup_range_list TOKEN_SRBRACE ( TOKEN_WITH TOKEN_FLBRACE covergroup_expression TOKEN_FRBRACE)? TOKEN_SEMICOLON)
| (coverpoint_identifier TOKEN_WITH TOKEN_FLBRACE covergroup_expression TOKEN_FRBRACE TOKEN_SEMICOLON)
| (default TOKEN_SEMICOLON);

covergroup_range_list : covergroup_value_range (TOKEN_COMMA covergroup_value_range)*;

covergroup_value_range :
expression
| (expression TOKEN_DDOT expression? )
| (expression? TOKEN_DDOT expression);

bins_keyword : TOKEN_BINS | TOKEN_ILLEGALBINS | TOKEN_IGNOREBINS;

covergroup_expression : expression;

covergroup_cross :
covercross_identifier TOKEN_COLON TOKEN_CROSS coverpoint_identifier
(TOKEN_COMMA coverpoint_identifier)* (TOKEN_IFF TOKEN_FLBRACE expression TOKEN_FRBRACE)? cross_item_or_null;

cross_item_or_null :
(TOKEN_CLBRACE covergroup_cross_body_item* TOKEN_CRBRACE)
| TOKEN_SEMICOLON;

covergroup_cross_body_item :
covergroup_option
| covergroup_cross_binspec;

covergroup_cross_binspec : bins_keyword identifier TOKEN_EQUALS covercross_identifier
TOKEN_WITH TOKEN_FLBRACE covergroup_expression TOKEN_FRBRACE TOKEN_SEMICOLON;
