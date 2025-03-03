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
import { CommonTokenStream, ParserRuleContext, Token } from "antlr4";
import pssVisitor from "../grammar/pssVisitor";
import { Action_declarationContext, Component_declarationContext, Data_declarationContext, Data_instantiationContext, Enum_declarationContext, Enum_itemContext, IdentifierContext } from "../grammar/pss";
import pss_lexer from "../grammar/pss_lexer";
import { objType, metaData } from "./helpers";
import { integer } from "vscode-languageserver";

export class visitor extends pssVisitor<void> {
  /* Data types */
  private identifiers: string[] = [];
  private astMeta: metaData[] = [];
  private tokenStream: CommonTokenStream;

  /* Getter */
  getIdentifiers(): string[] { return this.identifiers; }
  getMeta(): metaData[] { return this.astMeta; }

  constructor(tokenStream: CommonTokenStream, fileURI: string) {

    super();
    this.tokenStream = tokenStream;

    /* Visit different identifiers */

    this.visitIdentifier = (ctx: IdentifierContext): void => {
      this.identifiers.push(ctx.getText());
    };

    /* Visit all declarations and generate data */
    this.visitAction_declaration = (ctx: Action_declarationContext): void => {
      this.astMeta.push({
        keyword: ctx.action_identifier.toString(),
        info: {
          objectType: objType.ACTION,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.start.line,
            columnNumber: ctx.start.column
          },
          used: [],
          documentation: "",
          templateParams: ctx.template_param_decl_list.toString(),
          inherits: ctx.action_super_spec.toString(),
          subComponents: undefined
        }
      });
    }

    this.visitEnum_declaration = (ctx: Enum_declarationContext): void => {
      this.astMeta.push({
        keyword: ctx.enum_identifier.toString(),
        info: {
          objectType: objType.ENUM,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.start.line,
            columnNumber: ctx.start.column
          },
          used: [],
          documentation: "",
          templateParams: undefined,
          inherits: ctx.data_type.toString() || undefined,
          subComponents: ctx.enum_item_list().map(item => item.identifier.toString())
        }
      });
    }

    this.visitComponent_declaration = (ctx: Component_declarationContext): void => {
      this.astMeta.push({
        keyword: ctx.component_identifier.toString(),
        info: {
          objectType: objType.COMPONENT,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.start.line,
            columnNumber: ctx.start.column
          },
          used: [],
          documentation: "",
          templateParams: ctx.template_param_decl_list.toString(),
          inherits: ctx.component_super_spec.toString(),
          subComponents: undefined
        }
      });
    }

    this.visitData_declaration = (ctx: Data_declarationContext): void => {
      /**data_declaration:
data_type data_instantiation (TOKEN_COMMA data_instantiation)* TOKEN_SEMICOLON;
 */
      ctx.data_instantiation_list().map(dataInstance => {
        this.astMeta.push({
          keyword: dataInstance.identifier.toString(),
          info: {
            objectType: objType.DATA,
            parent: undefined,
            onLine: {
              file: fileURI,
              lineNumber: ctx.start.line,
              columnNumber: ctx.start.column
            },
            used: [],
            documentation: "",
            templateParams: dataInstance.array_dim().constant_expression.toString() || undefined,
            inherits: dataInstance.constant_expression.toString() || undefined,
            subComponents: undefined
          }
        });
      });

    }

    this.visitEnum_item = (ctx: Enum_itemContext): void => {
      this.identifiers.push(ctx.getText());
    }
  }


  private captureComments(ctx: ParserRuleContext): void {
    /* Get start token index */
    const tokenIndex = ctx.start.tokenIndex;

    /* Get comments before this rule */
    const comments = this.getCommentsBeforeToken(tokenIndex);

    if (comments.length > 0) {
      console.log(`Comments for ${ctx.getText()}:`, comments);
      /* Process comments as needed */
    }
  }

  private getInlineComments(ctx: ParserRuleContext): string[] {
    const comments: string[] = [];

    /* Check if stop exists before using it */
    if (!ctx.stop) return comments;

    const tokenIndex = ctx.stop.tokenIndex;

    /* Look at the next token */
    const nextToken = this.tokenStream.get(tokenIndex + 1);

    /* Check if it's on the hidden channel and is a comment */
    if (nextToken && nextToken.channel === Token.HIDDEN_CHANNEL) {
      const tokenType = nextToken.type;

      if (
        tokenType === pss_lexer.TOKEN_SL_COMMENT ||
        tokenType === pss_lexer.TOKEN_ML_COMMENT) {
        comments.push(nextToken.text);
      }
    }

    return comments;
  }

  private getCommentsBeforeToken(tokenIndex: number): string[] {
    const comments: string[] = [];

    /* Search for hidden channel tokens before the current token */
    let i = tokenIndex - 1;
    while (i >= 0) {
      const token = this.tokenStream.get(i);

      /* Check if token is on the hidden channel and is a comment */
      if (token.channel === Token.HIDDEN_CHANNEL) {
        const tokenType = token.type;

        /* Check if it's one of your comment types */
        if (
          tokenType === pss_lexer.TOKEN_SL_COMMENT ||
          tokenType === pss_lexer.TOKEN_ML_COMMENT) {
          comments.unshift(token.text);
        } else {
          /* Stop if we hit a non-comment hidden token (usually whitespace) */
          break;
        }
      } else {
        /* Stop if we hit a non-hidden token */
        break;
      }

      i--;
    }

    return comments;
  }

}
