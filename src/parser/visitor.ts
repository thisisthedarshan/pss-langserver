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
import { Action_declarationContext, Component_declarationContext, Data_declarationContext, Data_instantiationContext, Enum_declarationContext, Enum_itemContext, Function_declContext, IdentifierContext, Procedural_functionContext, Pss_entryContext } from "../grammar/pss";
import pss_lexer from "../grammar/pss_lexer";
import { getObjType } from "./helpers";
import { integer } from "vscode-languageserver";
import { metaData, objType, params } from "../definitions/dataTypes";

export class visitor extends pssVisitor<void> {
  /* Data types */
  private identifiers: string[] = [];
  private astMeta: metaData[] = [];
  private tokenStream: CommonTokenStream;

  /* Getters */
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
        [ctx.action_identifier().identifier()?.getText()]: {
          objectType: objType.ACTION,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.action_identifier().identifier().start.line,
            columnNumber: ctx.action_identifier().identifier().start.column
          },
          used: [],
          documentation: "",
          params: ctx.template_param_decl_list()?.getText(),
          type: ctx.action_super_spec()?.getText(),
          subComponents: undefined

        }
      });
      super.visitChildren(ctx)
    }

    this.visitEnum_declaration = (ctx: Enum_declarationContext): void => {
      this.astMeta.push({
        [ctx.enum_identifier().identifier()?.getText()]:
        {
          objectType: objType.ENUM,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.enum_identifier().identifier().start.line,
            columnNumber: ctx.enum_identifier().identifier().start.column
          },
          used: [],
          documentation: "",
          params: undefined,
          type: ctx.data_type()?.getText() || undefined,
          subComponents: ctx.enum_item_list().map(item => item.identifier()?.getText())
        }
      });

      super.visitChildren(ctx)

    }

    this.visitComponent_declaration = (ctx: Component_declarationContext): void => {
      let compItems: string[] = [];
      let compDataItems: string[] = [];
      let templateParameters: params[] = [];

      if (ctx.component_body_item_list()) {
        compItems = ctx.component_body_item_list().map(compBodyItems => {
          if (compBodyItems.abstract_action_declaration()) {
            return compBodyItems.abstract_action_declaration().action_declaration().action_identifier().identifier()?.getText()
          }
          else if (compBodyItems.action_declaration()) {
            return compBodyItems.action_declaration().action_identifier().identifier()?.getText()
          }
          else if (compBodyItems.component_pool_declaration()) {
            return compBodyItems.component_pool_declaration().identifier()?.getText()
          }
          else if (compBodyItems.enum_declaration()) {
            return compBodyItems.enum_declaration().enum_identifier().identifier()?.getText()
          }
          else if (compBodyItems.export_action()) {
            return compBodyItems.export_action().action_type_identifier().type_identifier().type_identifier_elem(0)?.identifier()?.getText()
          }
          else if (compBodyItems.function_decl()) {
            return compBodyItems.function_decl().function_prototype().function_identifier().identifier()?.getText()
          }
          else if (compBodyItems.procedural_function()) {
            return compBodyItems.procedural_function().function_prototype().function_identifier().identifier()?.getText()
          }
          else if (compBodyItems.struct_declaration()) {
            return compBodyItems.struct_declaration().struct_identifier().identifier()?.getText()
          }
          else if (compBodyItems.target_template_function()) {
            return compBodyItems.target_template_function().function_prototype().function_identifier().identifier()?.getText()
          }
          else {
            return "";
          }
        });

        compDataItems = ctx.component_body_item_list().flatMap(compBodyItem => {
          if (compBodyItem.component_data_declaration()) {
            return compBodyItem.component_data_declaration().data_declaration().data_instantiation_list().map(dataInst => {
              return dataInst.identifier()?.getText();
            });
          } else {
            return [];
          }
        });
      }

      if (ctx.template_param_decl_list()) {
        if (ctx.template_param_decl_list().template_param_decl_list()) {
          templateParameters = ctx.template_param_decl_list().template_param_decl_list().map(paramDecl => {
            if (paramDecl.type_param_decl()) {
              if (paramDecl.type_param_decl().generic_type_param_decl()) {
                return {
                  paramType: getObjType("type"),
                  paramName: paramDecl.type_param_decl().generic_type_param_decl().identifier()?.getText(),
                  paramDefault: paramDecl.type_param_decl().generic_type_param_decl().type_identifier().type_identifier_elem(0)?.identifier()?.getText()
                };
              } else {
                const typeParamDecl = paramDecl.type_param_decl().category_type_param_decl();
                const typeCategory = typeParamDecl.type_category();

                let objStr = typeCategory.struct_kind()
                  ? (typeCategory.struct_kind().object_kind()
                    ? typeCategory.struct_kind().object_kind()?.getText()
                    : typeCategory.struct_kind()?.getText())
                  : typeCategory.getText();

                return {
                  paramType: getObjType(objStr),
                  paramName: typeParamDecl.identifier()?.getText(),
                  paramDefault: typeParamDecl.type_identifier().type_identifier_elem(0)?.identifier()?.getText()
                };
              }
            } else {
              return {
                paramType: getObjType(paramDecl.value_param_decl().data_type().type_identifier().type_identifier_elem(0)?.identifier()?.getText()),
                paramName: paramDecl.value_param_decl().identifier()?.getText(),
                paramDefault: paramDecl.value_param_decl().constant_expression().expression()?.getText()
              };
            }
          });
        }
      }

      const compItemsFiltered = compItems;//.filter(item => item !== "" && !(Array.isArray(item) && item.length === 0));
      const compDataItemsFiltered = compDataItems;//.filter(item => item !== "" && !(Array.isArray(item) && item.length === 0));

      this.astMeta.push({
        [ctx.component_identifier().identifier()?.getText()]:
        {
          objectType: objType.COMPONENT,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.component_identifier().identifier().start.line,
            columnNumber: ctx.component_identifier().identifier().start.column
          },
          used: [],
          documentation: "",
          params: templateParameters,
          type: ctx.component_super_spec()?.type_identifier()?.type_identifier_elem(0)?.identifier()?.getText() || undefined,
          subComponents: [...compItemsFiltered, ...compDataItemsFiltered]
        }
      });

      super.visitChildren(ctx)
    }

    this.visitData_declaration = (ctx: Data_declarationContext): void => {
      if (ctx.data_instantiation_list()) {
        ctx.data_instantiation_list().map(dataInstance => {
          this.astMeta.push({
            [dataInstance.identifier()?.getText()]:
            {
              objectType: objType.DATA,
              parent: undefined,
              onLine: {
                file: fileURI,
                lineNumber: dataInstance.identifier().start.line,
                columnNumber: dataInstance.identifier().start.column
              },
              used: [],
              documentation: "",
              params: dataInstance.array_dim().constant_expression()?.getText() || undefined,
              type: dataInstance.constant_expression()?.getText() || undefined,
              subComponents: undefined
            }
          });
        });
      }
      else {
        this.astMeta.push({
          [ctx.data_instantiation(0).identifier()?.getText()]:
          {
            objectType: objType.DATA,
            parent: undefined,
            onLine: {
              file: fileURI,
              lineNumber: ctx.data_instantiation(0).identifier().start.line,
              columnNumber: ctx.data_instantiation(0).identifier().start.column
            },
            used: [],
            documentation: "",
            params: ctx.data_instantiation(0).array_dim().constant_expression()?.getText() || undefined,
            type: ctx.data_instantiation(0).constant_expression()?.getText() || undefined,
            subComponents: undefined
          }
        });
      }

      super.visitChildren(ctx)
    }

    this.visitProcedural_function = (ctx: Procedural_functionContext): void => {
      this.astMeta.push({
        [ctx.function_prototype().function_identifier().identifier()?.getText()]:
        {
          objectType: objType.PROCEDURAL_FUNCTION,
          parent: undefined,
          onLine: {
            file: fileURI,
            lineNumber: ctx.function_prototype().function_identifier().identifier().start.line,
            columnNumber: ctx.function_prototype().function_identifier().identifier().start.column
          },
          used: [],
          documentation: "",
          params: ctx.function_prototype().function_parameter_list_prototype().function_parameter_list().map(paramList => {
            let dataType: string = paramList.data_type()
              ? paramList.data_type()?.getText()
              : paramList.type_category()
                ? (
                  paramList.type_category().struct_kind()?.object_kind()?.getText() ||
                  paramList.type_category().struct_kind()?.getText() ||
                  paramList.type_category()?.getText()
                )
                : paramList.TOKEN_STRUCT()
                  ? paramList.TOKEN_STRUCT()?.getText()
                  : paramList.TOKEN_TYPE()?.getText();
            return {
              paramType: getObjType(dataType),
              paramName: paramList.identifier()?.getText(),
              paramDefault: paramList.constant_expression().expression()?.getText()
            }
          }),
          type: ctx.function_prototype().function_return_type()?.getText(),
          subComponents: undefined
        }
      });

      super.visitChildren(ctx)
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
