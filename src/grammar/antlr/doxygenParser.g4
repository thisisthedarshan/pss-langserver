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
options {tokenVocab=doxygenLexer;}

file_doc_comment 
    : documentation_comment;

documentation_comment
    : TOKEN_DOC_START doc_content* TOKEN_DOC_END
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
    : TOKEN_BRIEF_MARKER brief_text
    ;

param_command
    : TOKEN_PARAM_MARKER param_identifier param_description
    ;

return_command
    : (TOKEN_RETURN_MARKER | TOKEN_RETURNS_MARKER) return_description
    ;

deprecated_command
    : TOKEN_DEPRECATED_MARKER deprecated_description
    ;

author_command
    : TOKEN_AUTHOR_MARKER author_name
    ;

date_command
    : TOKEN_DATE_MARKER date_value
    ;

version_command
    : TOKEN_VERSION_MARKER version_value
    ;

see_command
    : TOKEN_SEE_MARKER see_link (see_description)?
    ;

attention_command
    : TOKEN_ATTENTION_MARKER attention_description
    ;

file_command
    : TOKEN_FILE_MARKER file_path
    ;

todo_command
    : TOKEN_TODO_MARKER todo_description
    ;

example_command
    : TOKEN_EXAMPLE_MARKER example_code
    ;

/* Text content rules */
brief_text
    : ~(TOKEN_PARAM_MARKER | TOKEN_RETURN_MARKER | TOKEN_RETURNS_MARKER | TOKEN_DEPRECATED_MARKER 
        | TOKEN_AUTHOR_MARKER | TOKEN_DATE_MARKER | TOKEN_VERSION_MARKER | TOKEN_SEE_MARKER 
        | TOKEN_ATTENTION_MARKER | TOKEN_FILE_MARKER | TOKEN_TODO_MARKER | TOKEN_EXAMPLE_MARKER | TOKEN_DOC_END)+ 
    ;

param_identifier
    : TOKEN_WORD
    ;

param_description
    : (TOKEN_NEWLINE* ~(TOKEN_PARAM_MARKER | TOKEN_DOC_END))+ 
    ;

return_description
    : (TOKEN_NEWLINE* ~(TOKEN_DEPRECATED_MARKER | TOKEN_AUTHOR_MARKER | TOKEN_DOC_END))+ 
    ;

deprecated_description
    : (TOKEN_NEWLINE* ~(TOKEN_AUTHOR_MARKER | TOKEN_DOC_END))+ 
    ;

author_name
    : (TOKEN_WORD | TOKEN_WHITESPACE)+
    ;

date_value
    : TOKEN_DATE
    ;

version_value
    : (TOKEN_WORD | TOKEN_DOT | TOKEN_DIGIT)+
    ;

see_link
    : TOKEN_WORD
    ;

see_description
    : (TOKEN_NEWLINE* ~(TOKEN_DOC_END))+ 
    ;

attention_description
    : (TOKEN_NEWLINE* ~(TOKEN_DOC_END))+ 
    ;

file_path
    : (TOKEN_WORD | TOKEN_DOT | TOKEN_DIVIDE | TOKEN_UNDERSCORE)+
    ;

todo_description
    : (TOKEN_NEWLINE* ~(TOKEN_DOC_END))+ 
    ;

example_code
    : (TOKEN_NEWLINE* ~(TOKEN_DOC_END))+ 
    ;