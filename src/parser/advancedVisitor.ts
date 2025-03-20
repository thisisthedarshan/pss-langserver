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

import { CharStream, CommonTokenStream, ErrorNode, ParserRuleContext, ParseTree, RuleNode, TerminalNode, Token } from "antlr4";
import pssVisitor from "../grammar/pssVisitor";
import pss_lexer from "../grammar/pssLex";
import { getObjType } from "./helpers";
import { commentDocs, definedOn, metaData, objType, params, PSSNode } from "../definitions/dataTypes";
import { ActionNode, InstanceNode, PSSLangObjects } from "../definitions/dataStructures";
import { Abstract_action_declarationContext, Access_typeContext, Action_declarationContext, Activity_declarationContext, Attr_fieldContext, Data_declarationContext, Pss_entryContext, Template_param_decl_listContext } from "../grammar/pss";
import doxygenLexer from "../grammar/doxygenLexer";
import doxygenParser from "../grammar/doxygenParser";
import { doxygen_visitor } from "./visitors";
import { isAValidPSSLangObject, isValidParams } from "./typeGuards";
import { integer } from "vscode-languageserver";

export class advancedVisitor extends pssVisitor<PSSLangObjects> {
  /* Data types */
  private tokenStream: CommonTokenStream;
  private astObjects: PSSLangObjects[] = [];
  private currentASTHierarchy: PSSLangObjects[] = [];
  private fileDocument: string = "";
  private sharedData: any = false;

  constructor(tokenStream: CommonTokenStream, fileURI: string) {
    super();
    this.tokenStream = tokenStream;

    /* Define function to use internally */
    const addNodeToParent = (node: PSSLangObjects): void => {
      if (this.currentASTHierarchy.length > 0) {
        // Add to the current parent's children
        const parent = this.currentASTHierarchy[this.currentASTHierarchy.length - 1];
        parent.children.push(node);
      } else {
        // Top-level node
        this.astObjects.push(node);
      }
    };

    /* Visit the start of the file */
    this.visitPss_entry = (ctx: Pss_entryContext): PSSLangObjects => {
      if (ctx.file_doc_comment()?.documentation_comment()) {
        const fileURL = new URL(fileURI);
        const filePath = fileURL.pathname.split('/').pop;
        const fileName: string = (filePath === undefined) ? '' : filePath.toString();
        let inputStream = new CharStream(ctx.file_doc_comment().documentation_comment().getText());
        let doxygenLex = new doxygenLexer(inputStream);
        let tokenStream = new CommonTokenStream(doxygenLex);
        let parser = new doxygenParser(tokenStream);
        parser.removeErrorListeners();
        let doxygenVisitor = new doxygen_visitor(fileName, true);
        let docsTree = parser.documentation_comment();
        docsTree.accept(doxygenVisitor);
        this.fileDocument = doxygenVisitor.getComment() as string;
      }
      this.visitChildren(ctx);
      return this.astObjects[0];
    }


    /* Template visitor that visits template items and returns it through shared object */
    this.visitTemplate_param_decl_list = (ctx: Template_param_decl_listContext): PSSLangObjects => {
      const templateParams: params[] = [];
      ctx.template_param_decl_list().map(templateItem => {
        const type_param = templateItem.type_param_decl();
        const value_param = templateItem.value_param_decl();
        if (type_param) {
          const genericType = type_param.generic_type_param_decl();
          const categoryType = type_param.category_type_param_decl();
          if (genericType) {
            templateParams.push({
              paramName: genericType.identifier().getText() || "",
              paramType: "undefined",
              paramDefault: genericType.type_identifier()?.getText() || undefined
            });
          }

          if (categoryType) {
            templateParams.push({
              paramName: categoryType.identifier().getText() || "",
              paramType: categoryType.type_category().getText() || "unknown",
              paramDefault: categoryType.type_identifier()?.getText() || undefined
            });
          }
        }
        if (value_param) {

          templateParams.push({
            paramName: value_param.identifier().getText() || "",
            paramType: value_param.data_type().getText() || "",
            paramDefault: value_param.constant_expression()?.getText() || undefined
          });
        }
      });

      const definedOn: definedOn = {
        file: fileURI,
        lineNumber: ctx.start.line,
        columnNumber: ctx.start.column
      }

      let node: PSSNode = {
        type: objType.TEMPLATE_ITEM,
        name: this.sharedData as string || "",
        definedOn: definedOn,
        comments: "",
        children: []
      };

      /* Prepare data to be put onto shared object */
      this.sharedData = templateParams;
      return node;
    }

    /* Visit data declarations */
    this.visitData_declaration = (ctx: Data_declarationContext): PSSLangObjects => {

      /* Check if they are random and static-constants */
      let isStaticConst: boolean = false;
      let isRandom: boolean = false;
      let accessModifier: string = "";

      if (typeof (this.sharedData) === 'boolean') {
        isStaticConst = this.sharedData as boolean;
      } else if (Array.isArray(this.sharedData)
        && typeof (this.sharedData[0]) === 'boolean'
        && typeof (this.sharedData[1]) === 'boolean') {
        isStaticConst = this.sharedData[0] as boolean;
        isRandom = this.sharedData[1] as boolean;
        if (typeof (this.sharedData[2]) == 'string') {
          accessModifier = this.sharedData[2] as string;
        }
      }

      /* Get other information like instance type, name, value, array count and definition location */
      const dataType: string = ctx.data_type().getText();
      /* Empty node shell for return value */
      let node: InstanceNode = {
        type: objType.INSTANCE,
        instanceType: dataType,
        instanceDefaultValue: undefined,
        instanceArrayCount: "",
        isRandom: false,
        isStaticConst: false,
        name: "",
        definedOn: undefined,
        comments: "",
        children: [],
        accessModifier: accessModifier
      };

      /* There can be multiple instances, we iterate through all of them */
      ctx.data_instantiation_list().map(instance => {
        /* Get values from declaration */
        const name: string = instance.identifier().getText();
        const arrayDim: number | string = instance.array_dim()?.constant_expression().getText() || "0";
        const definedOn: definedOn = {
          file: fileURI,
          lineNumber: instance.start.line,
          columnNumber: instance.start.column
        }
        const value: string = instance.constant_expression()?.getText() || "";

        /* Generate node from the data obtained */
        const instanceNode: InstanceNode = {
          type: objType.INSTANCE,
          instanceType: dataType,
          instanceDefaultValue: value,
          instanceArrayCount: arrayDim,
          isRandom: isRandom,
          isStaticConst: isStaticConst,
          name: name,
          definedOn: definedOn,
          comments: "",
          children: [],
          accessModifier: accessModifier
        }
        addNodeToParent(instanceNode); /* Whenever we visit a data declaration, its always an end node */
      });

      return node;
    }

    /**
     * @brief This is the logic to visit an action declaration.
     */
    this.visitAction_declaration = (ctx: Action_declarationContext): PSSLangObjects => {
      /* Prepare data to be put onto the AST */

      /* Check if it is an abstract action - set when the visitor visits the abstract action declaration */
      let isAbstract: boolean = false;
      if (typeof (this.sharedData) === 'boolean') {
        isAbstract = this.sharedData as boolean;
        this.sharedData = false;
      }

      /* Get name of the action */
      const actionName: string = (ctx.action_identifier()) ? ctx.action_identifier().getText() : "undefined action";

      /* Get name of the super-spec, if any */
      const superSpec: string = (ctx.action_super_spec()) ? ctx.action_super_spec().type_identifier()?.getText() : "";

      /* Get items of the template, if any... */
      let templateParams: params[] | undefined = undefined;
      if (ctx.template_param_decl_list()) {
        this.sharedData = `for ${actionName}`;
        this.visit(ctx.template_param_decl_list());
        if (Array.isArray(this.sharedData) && isValidParams(this.sharedData[0])) {
          templateParams = this.sharedData as params[];
        }
      }

      /* Get definition location */
      let definedOn: definedOn = {
        file: fileURI,
        lineNumber: ctx.action_identifier().start.line,
        columnNumber: ctx.action_identifier().start.column
      }

      /* Load the data onto ast */
      let node: ActionNode = {
        name: actionName,
        type: objType.ACTION,
        isAbstract: isAbstract,
        templateParams: templateParams,
        superSpec: superSpec,
        definedOn: definedOn,
        comments: "",
        children: []
      };

      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctx);
      this.currentASTHierarchy.pop();
      return node;
    }


    /**
     * @brief Visits an abstract action
     */
    this.visitAbstract_action_declaration = (ctx: Abstract_action_declarationContext): PSSLangObjects => {

      /* Indicate its an abstract action */
      this.sharedData = true;
      /* Traverse the action declaration */
      let node = this.visit(ctx.action_declaration());

      return node;
    }


    /* Visit attr_field traversal */
    this.visitAttr_field = (ctx: Attr_fieldContext): PSSLangObjects => {
      const accessModifier: string = ctx.access_modifier()?.getText() || "public";
      const isRandom: boolean = (ctx.TOKEN_RAND()) ? true : false;
      /* 
          According to PSS standard, we are supposed to define both `static const` keywords 
          for it to count. So, only checking const keyword works 
      */
      const isStaticConst: boolean = (ctx.TOKEN_CONST()) ? true : false;

      this.sharedData = [isStaticConst, isRandom, accessModifier];

      return this.visit(ctx.data_declaration());

    }

  }

}
