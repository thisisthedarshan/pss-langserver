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
parser grammar data_types;
import pss_lexer;

data_type :
scalar_data_type
| collection_type
| reference_type
| type_identifier;

scalar_data_type :
chandle_type
| integer_type
| string_type
| bool_type
| enum_type
| float_type;

casting_type :
integer_type
| bool_type
| enum_type
| float_type
| reference_type
| type_identifier;

chandle_type : TOKEN_CHANDLE;

integer_type : integer_atom_type
( TOKEN_SLBRACE constant_expression (TOKEN_COLON '0')? TOKEN_SRBRACE )?
(TOKEN_IN TOKEN_SLBRACE domain_open_range_list TOKEN_SRBRACE)?;

integer_atom_type :
TOKEN_INT
|TOKEN_BIT;

domain_open_range_list :
domain_open_range_value (TOKEN_COMMA domain_open_range_value)?;

domain_open_range_value :
(constant_expression ( TOKEN_DDOT constant_expression )?)
| (constant_expression TOKEN_DDOT)
| (TOKEN_DDOT constant_expression);

string_type : TOKEN_STRING (TOKEN_IN TOKEN_SLBRACE string_literal ( TOKEN_COMMA string_literal)* TOKEN_SRBRACE)?;

bool_type : TOKEN_BOOL;

enum_declaration :
TOKEN_ENUM enum_identifier ( TOKEN_COLON data_type ) TOKEN_CLBRACE (enum_item (TOKEN_COMMA enum_item)* )? TOKEN_CRBRACE;

enum_item : identifier (TOKEN_EQUALS constant_expression)?;

enum_type : enum_type_identifier (TOKEN_IN TOKEN_SLBRACE domain_open_range_list TOKEN_SRBRACE )?;

float_type :
TOKEN_FLOAT32
| TOKEN_FLOAT64;

collection_type :
(TOKEN_ARRAY TOKEN_LT data_type TOKEN_COMMA array_size_expression TOKEN_GT)
| (TOKEN_LIST TOKEN_LT data_type TOKEN_GT)
| (TOKEN_MAP TOKEN_LT data_type TOKEN_COMMA data_type TOKEN_GT)
| (TOKEN_SET TOKEN_LT data_type TOKEN_GT);

array_size_expression : constant_expression;

reference_type : TOKEN_REF entity_type_identifier;

typedef_declaration : TOKEN_TYPEDEF data_type identifier TOKEN_SEMICOLON;