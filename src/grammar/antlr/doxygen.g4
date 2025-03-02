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
parser grammar doxygen;
options {tokenVocab=pss_lexer;}

parseDocComment
    : docContent
    ;

docContent
    : docLine+
    ;

docLine
    : starLine
    | commandLine 
    | contentLine
    ;

starLine
    : TOKEN_STAR_PREFIX contentElement* TOKEN_EOL
    ;

commandLine
    : TOKEN_STAR_PREFIX? TOKEN_COMMAND commandType commandContent TOKEN_EOL
    ;

commandType
    : TOKEN_PARAM
    | TOKEN_FILE
    | TOKEN_BRIEF
    | (TOKEN_RETURNS | TOKEN_RETURN)
    | TOKEN_AUTHOR
    | TOKEN_DATE
    | TOKEN_SEE
    | TOKEN_DEPRECATED
    | TOKEN_DETAILS
    | TOKEN_TODO
    | TOKEN_EXAMPLE
    | TOKEN_VERSION
    | TOKEN_ATTENTION
    ;

commandContent
    : (paramName WS+)? contentElement*
    ;

paramName
    : ID
    ;

contentLine
    : TOKEN_STAR_PREFIX? contentElement* TOKEN_EOL
    ;

contentElement
    : TOKEN_TEXT
    | markdown
    | inlineCommand
    ;

markdown
    : TOKEN_ITALIC
    | TOKEN_BOLD
    | TOKEN_BOLD_ITALIC
    | TOKEN_CODE
    | TOKEN_LINK
    ;

inlineCommand
    : TOKEN_COMMAND commandType (WS+ contentElement*)?
    ;