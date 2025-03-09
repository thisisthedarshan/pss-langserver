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

addr_space_identifier : identifier;

/* This is the traits struct */
addr_space_traits : struct_identifier;

/* Contiguous Address Space related grammar */
contiguous_addr_space_def
  : TOKEN_CONTI_ADDR_SPACE 
    TOKEN_LT 
        (addr_space_traits)? 
    TOKEN_GT 
    addr_space_identifier
    TOKEN_SEMICOLON;

addr_region_setting 
 :  addr_region_dentifier TOKEN_DOT 
    TOKEN_SIZE TOKEN_EQUALS 
    integer_number 
    TOKEN_SEMICOLON;

/* Transparent Address Space related grammar */
transparent_addr_space_def
  : TOKEN_TRANSP_ADDR_SPACE
    TOKEN_LT 
        (addr_space_traits)? 
    TOKEN_GT 
    addr_space_identifier
    TOKEN_SEMICOLON;
