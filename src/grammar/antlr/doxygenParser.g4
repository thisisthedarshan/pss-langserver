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
parser grammar doxygenParser;
import doxygenLexer;
options {tokenVocab=doxygenLexer;}

documentation_comment
    : DOC_START doc_content* DOC_END
    ;

doc_content
    : brief_command
    | param_command
    | return_command
    | deprecated_command
    | author_command
    | date_command
    | version_command
    | see_command
    | attention_command
    | file_command
    | todo_command
    | example_command
    ;

brief_command
    : BRIEF_MARKER brief_text
    ;

param_command
    : PARAM_MARKER param_identifier param_description
    ;

return_command
    : (RETURN_MARKER | RETURNS_MARKER) return_description
    ;

deprecated_command
    : DEPRECATED_MARKER deprecated_description
    ;

author_command
    : AUTHOR_MARKER author_name
    ;

date_command
    : DATE_MARKER date_value
    ;

version_command
    : VERSION_MARKER version_value
    ;

see_command
    : SEE_MARKER see_link (see_description)?
    ;

attention_command
    : ATTENTION_MARKER attention_description
    ;

file_command
    : FILE_MARKER file_path
    ;

todo_command
    : TODO_MARKER todo_description
    ;

example_command
    : EXAMPLE_MARKER example_code
    ;

/* Text content rules */
brief_text
    : ~(PARAM_MARKER | RETURN_MARKER | RETURNS_MARKER | DEPRECATED_MARKER 
        | AUTHOR_MARKER | DATE_MARKER | VERSION_MARKER | SEE_MARKER 
        | ATTENTION_MARKER | FILE_MARKER | TODO_MARKER | EXAMPLE_MARKER | DOC_END)+ 
    ;

param_identifier
    : WORD
    ;

param_description
    : (NEWLINE* ~(PARAM_MARKER | DOC_END))+ 
    ;

return_description
    : (NEWLINE* ~(DEPRECATED_MARKER | AUTHOR_MARKER | DOC_END))+ 
    ;

deprecated_description
    : (NEWLINE* ~(AUTHOR_MARKER | DOC_END))+ 
    ;

author_name
    : (WORD | WHITESPACE)+
    ;

date_value
    : DATE
    ;

version_value
    : (WORD | '.' | DIGIT)+
    ;

see_link
    : WORD
    ;

see_description
    : (NEWLINE* ~(DOC_END))+ 
    ;

attention_description
    : (NEWLINE* ~(DOC_END))+ 
    ;

file_path
    : (WORD | '.' | '/' | '_')+
    ;

todo_description
    : (NEWLINE* ~(DOC_END))+ 
    ;

example_code
    : (NEWLINE* ~(DOC_END))+ 
    ;