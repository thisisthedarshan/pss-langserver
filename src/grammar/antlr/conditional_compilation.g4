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
parser grammar conditional_compilation;
import pss_lexer,action_declarations,activity_statements,behavioral_coverage,component_declaration,constraints,coverage,data_coverage,data_types,exec_blocks,expressions,extras,foreign_procedural_interface,functions,identifiers,numbers_and_literals,overrides,package_declaration,procedural_statements,pss_lexer,struct_declaration,template_types;

package_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
package_body_compile_if_item (TOKEN_ELSE package_body_compile_if_item)?;

monitor_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
monitor_body_compile_if_item (TOKEN_ELSE monitor_body_compile_if_item)?;

action_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
action_body_compile_if_item (TOKEN_ELSE action_body_compile_if_item)?;

component_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
component_body_compile_if_item (TOKEN_ELSE component_body_compile_if_item)?;

struct_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
struct_body_compile_if_item (TOKEN_ELSE struct_body_compile_if_item)?;

procedural_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
procedural_compile_if_stmt (TOKEN_ELSE procedural_compile_if_stmt)?;

constraint_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
constraint_body_compile_if_item (TOKEN_ELSE constraint_body_compile_if_item)?;

covergroup_body_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
covergroup_body_compile_if_item (TOKEN_ELSE covergroup_body_compile_if_item)?;

override_compile_if : TOKEN_COMPILE TOKEN_IF TOKEN_FLBRACE constant_expression TOKEN_FRBRACE
override_compile_if_stmt (TOKEN_ELSE override_compile_if_stmt)?;

package_body_compile_if_item : TOKEN_CLBRACE ( package_body_item )* TOKEN_CLBRACE;

action_body_compile_if_item : TOKEN_CLBRACE ( action_body_item )* TOKEN_CLBRACE;

monitor_body_compile_if_item : TOKEN_CLBRACE ( monitor_body_item )* TOKEN_CLBRACE;

component_body_compile_if_item : TOKEN_CLBRACE ( component_body_item )* TOKEN_CLBRACE;

struct_body_compile_if_item : TOKEN_CLBRACE ( struct_body_item )* TOKEN_CLBRACE;

procedural_compile_if_stmt : TOKEN_CLBRACE ( procedural_stmt )* TOKEN_CLBRACE;

constraint_body_compile_if_item : TOKEN_CLBRACE ( constraint_body_item )* TOKEN_CLBRACE;

covergroup_body_compile_if_item : TOKEN_CLBRACE ( covergroup_body_item )* TOKEN_CLBRACE;

override_compile_if_stmt : TOKEN_CLBRACE ( override_stmt )* TOKEN_CLBRACE;

compile_has_expr : TOKEN_COMPILE TOKEN_HAS TOKEN_FLBRACE static_ref_path TOKEN_FRBRACE;

compile_assert_stmt :
TOKEN_COMPILE TOKEN_ASSERT TOKEN_FLBRACE constant_expression (TOKEN_COMMA string_literal)? TOKEN_FRBRACE TOKEN_SEMICOLON;