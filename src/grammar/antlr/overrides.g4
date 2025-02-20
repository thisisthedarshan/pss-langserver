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
parser grammar overrides;
import pss_lexer;

override_declaration : TOKEN_OVERRIDE TOKEN_CLBRACE override_stmt* TOKEN_CRBRACE;

override_stmt :
type_override
| instance_override
| override_compile_if
| stmt_terminator

type_override : TOKEN_TYPE type_identifier TOKEN_WITH type_identifier TOKEN_SEMICOLON;

instance_override : TOKEN_INSTANCE hierarchical_id TOKEN_WITH type_identifier TOKEN_SEMICOLON;
