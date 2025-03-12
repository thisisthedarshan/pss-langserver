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
 * These memory space& region rules are derived from
 * the official Portable Stimulus Standard Specification v3
 * It is missing from the specification's BNF Syntax section.
 */

parser grammar memory;
options {tokenVocab=pssLex;}
import data_types, identifiers, numbers_and_literals, registers;

/* This identifies address regions */
addr_region_identifier : identifier;

/* This to identify address handles */
addr_handle_identifier : identifier;

/* This identifies address space names */
addr_space_identifier : identifier;

/* This is the traits struct */
addr_space_traits : struct_identifier;

/* This identifies claim */
claim_identifier : identifier;

/* Identify the traits struct */
trait_identifier : identifier;

/* Offsets for functions that use it */
offset
  : integer_number 
  | (TOKEN_SIZEOF_S 
    TOKEN_LT 
      (data_type | type_identifier) 
    TOKEN_GT 
    TOKEN_SCOPE (TOKEN_NBITS | TOKEN_NBYTES)
    );

/* This is the region/claim trait property value types */
trait_property 
  : number
  | bool_literal
  | enum_item
  | expression;

/* Identify return types from address related functions */
number_identifier : identifier;
bool_identifier : identifier;

/* Contiguous Address Space related grammar */
contiguous_addr_space_def
  : TOKEN_CONTI_ADDR_SPACE 
    TOKEN_LT 
        (addr_space_traits)? 
    TOKEN_GT 
    addr_space_identifier (TOKEN_COMMA addr_space_identifier)*
    TOKEN_SEMICOLON;

addr_region_setting 
 :  addr_region_identifier TOKEN_DOT 
    TOKEN_SIZE TOKEN_EQUALS 
    integer_number 
    TOKEN_SEMICOLON;

addr_claim
  : TOKEN_RAND? TOKEN_ADDRESS_CLAIM 
    TOKEN_LT 
      trait_identifier?
    TOKEN_GT 
    claim_identifier;

/* Transparent Address Space related grammar */
transparent_addr_space_def
  : TOKEN_TRANSP_ADDR_SPACE
    TOKEN_LT 
        (addr_space_traits)? 
    TOKEN_GT 
    addr_space_identifier (TOKEN_COMMA addr_space_identifier)*
    TOKEN_SEMICOLON;

transparent_addr_region_def 
  : TOKEN_TRANSP_ADDR_REGION
    TOKEN_LT
      (addr_space_traits)? 
    TOKEN_GT
    addr_region_identifier;

transparent_addr_region_setting
  : addr_region_identifier TOKEN_DOT
    (
        (TOKEN_SIZE TOKEN_EQUALS (integer_number | expression))
      | (TOKEN_ADDR TOKEN_EQUALS (integer_number | expression))
      | (TOKEN_TRAIT TOKEN_DOT trait_identifier TOKEN_EQUALS trait_property)
    ) TOKEN_SEMICOLON;

transparent_addr_claim
  : TOKEN_RAND? TOKEN_TRANSP_ADDRESS_CLAIM 
    TOKEN_LT 
      trait_identifier?
    TOKEN_GT 
    claim_identifier;


/* Using address regions */
/* 
  This is => 
  (void)addr_space_identifier.add_nonallocatable_region(addr_region_dentifier);
  or
  addr_handle_identifier = addr_space_identifier.add_nonallocatable_region(addr_region_dentifier);
*/
add_addr_region_nonallocatable
  : ((TOKEN_FLBRACE TOKEN_VOID TOKEN_FRBRACE )
  | (addr_handle_identifier TOKEN_EQUALS))
    addr_space_identifier TOKEN_DOT 
    TOK_ADD_NONALLOC_REGION TOKEN_FLBRACE addr_region_identifier TOKEN_FRBRACE
    TOKEN_SEMICOLON;

/* 
  This is => 
  (void)addr_space_identifier.add_region(addr_region_dentifier);
  or
  addr_handle_identifier = addr_space_identifier.add_region(addr_region_dentifier);
*/
add_addr_region
  : ((TOKEN_FLBRACE TOKEN_VOID TOKEN_FRBRACE )
  | (addr_handle_identifier TOKEN_EQUALS))
    addr_space_identifier TOKEN_DOT 
    TOK_ADD_REGION TOKEN_FLBRACE addr_region_identifier TOKEN_FRBRACE
    TOKEN_SEMICOLON;


/* These are code to detect usage of address handle related functions */
make_handle_from_claim
  : addr_handle_identifier TOKEN_EQUALS 
    TOKEN_MAKE_HANDLE_FROM_CLAIM
    TOKEN_FLBRACE
      claim_identifier
      (TOKEN_COMMA offset)?
    TOKEN_FRBRACE
    TOKEN_SEMICOLON;

make_handle_from_handle
  : addr_handle_identifier TOKEN_EQUALS 
    TOKEN_MAKE_HANDLE_FROM_HANDLE
    TOKEN_FLBRACE
      addr_handle_identifier
      TOKEN_COMMA offset
    TOKEN_FRBRACE
    TOKEN_SEMICOLON;

addr_value
  : number_identifier TOKEN_EQUALS TOKEN_ADDR_VALUE
    TOKEN_FLBRACE
      addr_handle_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

addr_value_solve
  : number_identifier TOKEN_EQUALS TOKEN_ADDR_VALUE_SOLVE
    TOKEN_FLBRACE
      addr_handle_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

addr_value_abs
  : bool_identifier TOKEN_EQUALS TOKEN_ADDR_VALUE_ABS
    TOKEN_FLBRACE
      addr_handle_identifier
    TOKEN_FRBRACE TOKEN_SEMICOLON;

/* Memory operations in exec blocks */
mem_ops 
  : transparent_addr_region_def
  | transparent_addr_region_setting
  | addr_region_setting
  | add_addr_region
  | add_addr_region_nonallocatable
  | reg_set_handle;


addr_space_def
  : transparent_addr_space_def
  | contiguous_addr_space_def
  ;

addr_region_def
  : transparent_addr_region_def
  ;