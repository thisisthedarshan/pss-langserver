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

/**
 * These register definitions and usage rules are derived from
 * the official Portable Stimulus Standard Specification v3
 * It is missing from the specification's BNF Syntax section.
 */

parser grammar registers;
options {tokenVocab=pssLex;}
import expressions, identifiers, memory, numbers_and_literals;

/* These are identifiers */
register_identifier : identifier;
register_comp_identifier : identifier;
register_group_identifier : identifier;
reg_struct_identifier : identifier;
value_identifier : integer_number;
mask_struct_identifier : identifier;
value_struct_identifier : identifier;
mask_identifier : identifier;
field_identifier : TOKEN_QUOTES identifier TOKEN_QUOTES;
names_list_identifier : identifier;
value_list_identifier : identifier;
access_type 
  : TOKEN_READONLY
  | TOKEN_READWRITE
  | TOKEN_WRITEONLY
  ;
reg_length 
  : integer_number 
  | (TOKEN_SIZEOF_S 
    TOKEN_LT 
      (data_type | type_identifier) 
    TOKEN_GT 
    TOKEN_SCOPE (TOKEN_NBITS | TOKEN_NBYTES)
    )
  ;

/* These syntaxes are for setting-up registers */

register_comp_definition
  : TOKEN_PURE TOKEN_COMPONENT register_comp_identifier
    TOKEN_COLON TOKEN_REGC TOKEN_LT 
    reg_struct_identifier 
    ( TOKEN_COMMA access_type 
      (TOKEN_COMMA reg_length)?
    )?
    TOKEN_GT TOKEN_CLBRACE TOKEN_CRBRACE;

register_group_definition
  : TOKEN_PURE? TOKEN_COMPONENT register_group_identifier 
    TOKEN_COLON TOKEN_REG_GROUP_C TOKEN_CLBRACE
    register_body_definition 
    (register_body_definition)*
    TOKEN_CRBRACE;

register_body_definition
  : register_comp_instance
  | register_definition
  | (function_offset_of_instance_def function_offset_of_instance_arr_def)
  ;

register_comp_instance
  : register_group_identifier register_identifier TOKEN_SEMICOLON;

register_definition
  : TOKEN_REGC TOKEN_LT 
    reg_struct_identifier  (TOKEN_COMMA access_type (TOKEN_COMMA reg_length)?)?
    TOKEN_GT register_identifier
    TOKEN_SEMICOLON;

/* These functions are part of the register group */
function_offset_of_instance_def
  : TOKEN_FUNCTION TOKEN_BIT TOKEN_64 TOKEN_GET_OFFSET_OF_INSTANCE
    TOKEN_FLBRACE TOKEN_STRING identifier TOKEN_FRBRACE
    TOKEN_CLBRACE
    ( if_else_stmts | reg_match_stmts )
    TOKEN_CRBRACE;

function_offset_of_instance_arr_def
  : TOKEN_FUNCTION TOKEN_BIT TOKEN_64 TOKEN_GET_OFFSET_OF_INSTANCE_ARR
    TOKEN_FLBRACE TOKEN_STRING identifier TOKEN_COMMA TOKEN_INT identifier TOKEN_FRBRACE
    TOKEN_CLBRACE
    ( if_else_stmts | reg_match_stmts )
    TOKEN_CRBRACE;

/* Currently, we don't support get_offset_of_path since I don't know an example which uses this? */

/* These define how register offsets are matched - offset calculation functions */
offset_match_stmts
  : TOKEN_MATCH TOKEN_FLBRACE identifier TOKEN_FRBRACE TOKEN_CLBRACE
    reg_match_stmts
    reg_match_stmts*
    TOKEN_DEFAULT TOKEN_COLON TOKEN_RETURN (offset_return_items | TOKEN_M1) TOKEN_SEMICOLON
    TOKEN_CRBRACE;

if_else_stmts
  : TOKEN_IF TOKEN_FLBRACE expression TOKEN_FRBRACE
    TOKEN_CLBRACE TOKEN_RETURN offset_return_items TOKEN_SEMICOLON TOKEN_CRBRACE
    (TOKEN_ELSE if_else_stmts)*
    (TOKEN_ELSE TOKEN_CLBRACE TOKEN_RETURN (offset_return_items | TOKEN_M1) TOKEN_SEMICOLON TOKEN_CRBRACE)?
  ;

reg_match_stmts
  : TOKEN_SLBRACE TOKEN_QUOTES 
    register_identifier TOKEN_QUOTES TOKEN_SRBRACE 
    TOKEN_COLON TOKEN_RETURN offset_return_items TOKEN_SEMICOLON;

offset_return_items : offset | expression | integer_number;

/* These syntaxes are for using registers - mainly into execs and native functions */
reg_function_calls
  : TOKEN_COMP TOKEN_DOT register_group_identifier 
    TOKEN_DOT register_identifier
    (TOKEN_SLBRACE offset TOKEN_SRBRACE)?
    TOKEN_DOT register_operation_call
    TOKEN_SEMICOLON;

/* Register related */
register_operation_call
  : reg_read
  | reg_write
  | reg_read_val
  | reg_write_val
  | reg_write_masked
  | reg_write_val_masked
  | reg_write_field
  | reg_write_fields
  ;

reg_read
  : TOKEN_READ TOKEN_FLBRACE TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write
  : TOKEN_WRITE TOKEN_FLBRACE reg_struct_identifier TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_read_val
  : TOKEN_READVAL TOKEN_FLBRACE TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write_val
  : TOKEN_WRITEVAL TOKEN_FLBRACE 
    value_identifier 
    TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write_masked
  : TOKEN_WRITE_MASKED TOKEN_FLBRACE
    mask_struct_identifier TOKEN_COMMA value_struct_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write_val_masked
  : TOKEN_WRITEVAL_MASKED TOKEN_FLBRACE 
    mask_identifier TOKEN_COMMA value_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write_field
  : TOKEN_WRITE_FIELD TOKEN_FLBRACE 
    field_identifier TOKEN_COMMA value_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_write_fields
  : TOKEN_WRITE_FIELDS TOKEN_FLBRACE 
    names_list_identifier TOKEN_COMMA value_list_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

/* Set Handle syntax */
reg_set_handle
  : register_group_identifier TOKEN_DOT TOKEN_SET_HANDLE
    TOKEN_FLBRACE
    addr_handle_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

reg_declarations
  : register_comp_definition
  | register_group_definition;