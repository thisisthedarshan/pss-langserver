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

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `doxygenParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class doxygenParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `doxygenParser.documentation_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation_comment?: (ctx: Documentation_commentContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.doc_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoc_content?: (ctx: Doc_contentContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.brief_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrief_command?: (ctx: Brief_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.param_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_command?: (ctx: Param_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.return_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_command?: (ctx: Return_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.deprecated_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeprecated_command?: (ctx: Deprecated_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.author_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthor_command?: (ctx: Author_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.date_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_command?: (ctx: Date_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.version_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion_command?: (ctx: Version_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.see_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_command?: (ctx: See_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.attention_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttention_command?: (ctx: Attention_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.file_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_command?: (ctx: File_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.todo_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodo_command?: (ctx: Todo_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.example_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExample_command?: (ctx: Example_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.brief_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrief_text?: (ctx: Brief_textContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.param_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_identifier?: (ctx: Param_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.param_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_description?: (ctx: Param_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.return_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_description?: (ctx: Return_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.deprecated_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeprecated_description?: (ctx: Deprecated_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.author_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthor_name?: (ctx: Author_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.date_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_value?: (ctx: Date_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.version_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion_value?: (ctx: Version_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.see_link`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_link?: (ctx: See_linkContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.see_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_description?: (ctx: See_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.attention_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttention_description?: (ctx: Attention_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.file_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_path?: (ctx: File_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.todo_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodo_description?: (ctx: Todo_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `doxygenParser.example_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExample_code?: (ctx: Example_codeContext) => Result;
}

