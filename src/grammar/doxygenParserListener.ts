/*
 * Copyright (C) 2025 Darshan(@thisisthedarshan)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
// Generated from ./src/grammar/antlr/doxygenParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { Documentation_commentContext } from "./doxygenParser.js";
import { Doc_contentContext } from "./doxygenParser.js";
import { Brief_commandContext } from "./doxygenParser.js";
import { Param_commandContext } from "./doxygenParser.js";
import { Return_commandContext } from "./doxygenParser.js";
import { Deprecated_commandContext } from "./doxygenParser.js";
import { Author_commandContext } from "./doxygenParser.js";
import { Date_commandContext } from "./doxygenParser.js";
import { Version_commandContext } from "./doxygenParser.js";
import { See_commandContext } from "./doxygenParser.js";
import { Attention_commandContext } from "./doxygenParser.js";
import { File_commandContext } from "./doxygenParser.js";
import { Todo_commandContext } from "./doxygenParser.js";
import { Example_commandContext } from "./doxygenParser.js";
import { Brief_textContext } from "./doxygenParser.js";
import { Param_identifierContext } from "./doxygenParser.js";
import { Param_descriptionContext } from "./doxygenParser.js";
import { Return_descriptionContext } from "./doxygenParser.js";
import { Deprecated_descriptionContext } from "./doxygenParser.js";
import { Author_nameContext } from "./doxygenParser.js";
import { Date_valueContext } from "./doxygenParser.js";
import { Version_valueContext } from "./doxygenParser.js";
import { See_linkContext } from "./doxygenParser.js";
import { See_descriptionContext } from "./doxygenParser.js";
import { Attention_descriptionContext } from "./doxygenParser.js";
import { File_pathContext } from "./doxygenParser.js";
import { Todo_descriptionContext } from "./doxygenParser.js";
import { Example_codeContext } from "./doxygenParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `doxygenParser`.
 */
export default class doxygenParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `doxygenParser.documentation_comment`.
	 * @param ctx the parse tree
	 */
	enterDocumentation_comment?: (ctx: Documentation_commentContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.documentation_comment`.
	 * @param ctx the parse tree
	 */
	exitDocumentation_comment?: (ctx: Documentation_commentContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.doc_content`.
	 * @param ctx the parse tree
	 */
	enterDoc_content?: (ctx: Doc_contentContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.doc_content`.
	 * @param ctx the parse tree
	 */
	exitDoc_content?: (ctx: Doc_contentContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.brief_command`.
	 * @param ctx the parse tree
	 */
	enterBrief_command?: (ctx: Brief_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.brief_command`.
	 * @param ctx the parse tree
	 */
	exitBrief_command?: (ctx: Brief_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.param_command`.
	 * @param ctx the parse tree
	 */
	enterParam_command?: (ctx: Param_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.param_command`.
	 * @param ctx the parse tree
	 */
	exitParam_command?: (ctx: Param_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.return_command`.
	 * @param ctx the parse tree
	 */
	enterReturn_command?: (ctx: Return_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.return_command`.
	 * @param ctx the parse tree
	 */
	exitReturn_command?: (ctx: Return_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.deprecated_command`.
	 * @param ctx the parse tree
	 */
	enterDeprecated_command?: (ctx: Deprecated_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.deprecated_command`.
	 * @param ctx the parse tree
	 */
	exitDeprecated_command?: (ctx: Deprecated_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.author_command`.
	 * @param ctx the parse tree
	 */
	enterAuthor_command?: (ctx: Author_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.author_command`.
	 * @param ctx the parse tree
	 */
	exitAuthor_command?: (ctx: Author_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.date_command`.
	 * @param ctx the parse tree
	 */
	enterDate_command?: (ctx: Date_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.date_command`.
	 * @param ctx the parse tree
	 */
	exitDate_command?: (ctx: Date_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.version_command`.
	 * @param ctx the parse tree
	 */
	enterVersion_command?: (ctx: Version_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.version_command`.
	 * @param ctx the parse tree
	 */
	exitVersion_command?: (ctx: Version_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.see_command`.
	 * @param ctx the parse tree
	 */
	enterSee_command?: (ctx: See_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.see_command`.
	 * @param ctx the parse tree
	 */
	exitSee_command?: (ctx: See_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.attention_command`.
	 * @param ctx the parse tree
	 */
	enterAttention_command?: (ctx: Attention_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.attention_command`.
	 * @param ctx the parse tree
	 */
	exitAttention_command?: (ctx: Attention_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.file_command`.
	 * @param ctx the parse tree
	 */
	enterFile_command?: (ctx: File_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.file_command`.
	 * @param ctx the parse tree
	 */
	exitFile_command?: (ctx: File_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.todo_command`.
	 * @param ctx the parse tree
	 */
	enterTodo_command?: (ctx: Todo_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.todo_command`.
	 * @param ctx the parse tree
	 */
	exitTodo_command?: (ctx: Todo_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.example_command`.
	 * @param ctx the parse tree
	 */
	enterExample_command?: (ctx: Example_commandContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.example_command`.
	 * @param ctx the parse tree
	 */
	exitExample_command?: (ctx: Example_commandContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.brief_text`.
	 * @param ctx the parse tree
	 */
	enterBrief_text?: (ctx: Brief_textContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.brief_text`.
	 * @param ctx the parse tree
	 */
	exitBrief_text?: (ctx: Brief_textContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.param_identifier`.
	 * @param ctx the parse tree
	 */
	enterParam_identifier?: (ctx: Param_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.param_identifier`.
	 * @param ctx the parse tree
	 */
	exitParam_identifier?: (ctx: Param_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.param_description`.
	 * @param ctx the parse tree
	 */
	enterParam_description?: (ctx: Param_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.param_description`.
	 * @param ctx the parse tree
	 */
	exitParam_description?: (ctx: Param_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.return_description`.
	 * @param ctx the parse tree
	 */
	enterReturn_description?: (ctx: Return_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.return_description`.
	 * @param ctx the parse tree
	 */
	exitReturn_description?: (ctx: Return_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.deprecated_description`.
	 * @param ctx the parse tree
	 */
	enterDeprecated_description?: (ctx: Deprecated_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.deprecated_description`.
	 * @param ctx the parse tree
	 */
	exitDeprecated_description?: (ctx: Deprecated_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.author_name`.
	 * @param ctx the parse tree
	 */
	enterAuthor_name?: (ctx: Author_nameContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.author_name`.
	 * @param ctx the parse tree
	 */
	exitAuthor_name?: (ctx: Author_nameContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.date_value`.
	 * @param ctx the parse tree
	 */
	enterDate_value?: (ctx: Date_valueContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.date_value`.
	 * @param ctx the parse tree
	 */
	exitDate_value?: (ctx: Date_valueContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.version_value`.
	 * @param ctx the parse tree
	 */
	enterVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.version_value`.
	 * @param ctx the parse tree
	 */
	exitVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.see_link`.
	 * @param ctx the parse tree
	 */
	enterSee_link?: (ctx: See_linkContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.see_link`.
	 * @param ctx the parse tree
	 */
	exitSee_link?: (ctx: See_linkContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.see_description`.
	 * @param ctx the parse tree
	 */
	enterSee_description?: (ctx: See_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.see_description`.
	 * @param ctx the parse tree
	 */
	exitSee_description?: (ctx: See_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.attention_description`.
	 * @param ctx the parse tree
	 */
	enterAttention_description?: (ctx: Attention_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.attention_description`.
	 * @param ctx the parse tree
	 */
	exitAttention_description?: (ctx: Attention_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.file_path`.
	 * @param ctx the parse tree
	 */
	enterFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.file_path`.
	 * @param ctx the parse tree
	 */
	exitFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.todo_description`.
	 * @param ctx the parse tree
	 */
	enterTodo_description?: (ctx: Todo_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.todo_description`.
	 * @param ctx the parse tree
	 */
	exitTodo_description?: (ctx: Todo_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `doxygenParser.example_code`.
	 * @param ctx the parse tree
	 */
	enterExample_code?: (ctx: Example_codeContext) => void;
	/**
	 * Exit a parse tree produced by `doxygenParser.example_code`.
	 * @param ctx the parse tree
	 */
	exitExample_code?: (ctx: Example_codeContext) => void;
}

