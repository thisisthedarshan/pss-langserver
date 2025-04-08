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
import { getExecType, getFlowObjType, getNodeFromName, getNodeFromNameArray, getObjType, getPackedStructSize, getStructKind } from "./helpers";
import { accessMap, commentDocs, definedOn, enumItems, metaData, objType, params, PSSNode } from "../definitions/dataTypes";
import { ActionNode, AddressNode, AssignmentNode, CompNode, EnumNode, ExecNode, FlowReferenceFieldNode, FunctionNode, ImportsNode, InstanceNode, PackageNode, PSSLangObjects, RegisterBodyNode, RegisterCompNode, RegisterDefNode, RegisterGroupNode, ResourceReferenceFieldNode, StructNode, TypedefDeclNode } from "../definitions/dataStructures";
import { Abstract_action_declarationContext, Access_typeContext, Action_declarationContext, Action_extensionContext, Action_handle_declarationContext, Activity_declarationContext, Add_addr_region_nonallocatableContext, Add_addr_regionContext, Addr_claimContext, Addr_region_settingContext, Attr_fieldContext, Component_data_declarationContext, Component_declarationContext, Component_pool_declarationContext, Contiguous_addr_space_defContext, Data_declarationContext, Enum_declarationContext, Enum_itemContext, Exec_block_stmtContext, Exec_blockContext, Extend_stmtContext, Flow_ref_field_declarationContext, Function_declContext, Function_parameter_list_prototypeContext, Function_parameterContext, Function_prototypeContext, Import_class_declContext, Import_class_function_declContext, Import_functionContext, Import_stmtContext, Package_declarationContext, Procedural_assignment_stmtContext, Procedural_data_declarationContext, Procedural_functionContext, Pss_entryContext, Register_body_definitionContext, Register_comp_definitionContext, Register_comp_instanceContext, Register_definitionContext, Register_group_definitionContext, Resource_ref_field_declarationContext, Struct_body_itemContext, Struct_declarationContext, Template_param_decl_listContext, Transparent_addr_claimContext, Transparent_addr_region_defContext, Transparent_addr_space_defContext, Typedef_declarationContext } from "../grammar/pss";
import doxygenLexer from "../grammar/doxygenLexer";
import doxygenParser from "../grammar/doxygenParser";
import { doxygen_visitor } from "./visitors";
import { isAValidPSSLangObject, isValidParams } from "./typeGuards";
import { integer } from "vscode-languageserver";

export class advancedVisitor extends pssVisitor<PSSLangObjects | void> {
  /* Data types */
  private tokenStream: CommonTokenStream;
  private astObjects: PSSLangObjects[] = [];
  private currentASTHierarchy: PSSLangObjects[] = [];
  private sharedData: any = false;
  private fileDocument: string = "";

  getFileDoc = (): string => { return this.fileDocument; }
  getAstObjects = (): PSSLangObjects[] => { return this.astObjects; }

  constructor(tokenStream: CommonTokenStream, fileURI: string) {
    super();
    this.tokenStream = tokenStream;

    /* Define function to use internally */
    const addNodeToParent = (node: PSSLangObjects): void => {
      // if (this.currentASTHierarchy.length > 0) {
      //   // Add to the current parent's children
      //   const parent = this.currentASTHierarchy[this.currentASTHierarchy.length - 1];
      //   parent.children.push(node);
      // } else {
      // Top-level node
      this.astObjects.push(node);
      // }
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
    this.visitTemplate_param_decl_list = (ctx: Template_param_decl_listContext): void => {
      const templateParams: params[] = [];
      ctx.template_param_decl_list().map(templateItem => {
        const type_param = templateItem.type_param_decl();
        const value_param = templateItem.value_param_decl();
        if (type_param) {
          const genericType = type_param.generic_type_param_decl();
          const categoryType = type_param.category_type_param_decl();
          if (genericType) {
            templateParams.push({
              paramName: genericType.identifier()?.getText() ?? "",
              paramType: "undefined",
              paramDefault: genericType.type_identifier()?.getText() ?? undefined
            });
          }

          if (categoryType) {
            templateParams.push({
              paramName: categoryType.identifier()?.getText() ?? "",
              paramType: categoryType.type_category()?.getText() ?? "unknown",
              paramDefault: categoryType.type_identifier()?.getText() ?? undefined
            });
          }
        }
        if (value_param) {

          templateParams.push({
            paramName: value_param.identifier()?.getText() ?? "",
            paramType: value_param.data_type()?.getText() ?? "",
            paramDefault: value_param.constant_expression()?.getText() ?? undefined
          });
        }
      });

      /* Prepare data to be put onto shared object */
      this.sharedData = templateParams;
    }

    /* Visit data declarations */
    this.visitData_declaration = (ctx: Data_declarationContext): void => {

      /* Check if they are random and static-constants */
      let isStaticConst: boolean = false;
      let isRandom: boolean = false;
      let accessModifier: string = "";

      if (typeof this.sharedData === 'boolean') {
        isStaticConst = this.sharedData;
      } else if (Array.isArray(this.sharedData)) {
        isStaticConst = typeof this.sharedData[0] === 'boolean' ? this.sharedData[0] : false;
        isRandom = typeof this.sharedData[1] === 'boolean' ? this.sharedData[1] : false;
        accessModifier = typeof this.sharedData[2] === 'string' ? this.sharedData[2] : 'public';
      }

      /* Get other information like instance type, name, value, array count and definition location */
      const dataType: string = ctx.data_type().getText();
      /* Empty node shell for return value */
      let node: InstanceNode;

      /* There can be multiple instances, we iterate through all of them */
      ctx.data_instantiation_list().map(instance => {
        /* Get values from declaration */
        const name: string = instance.identifier().getText();
        const arrayDim: number | string = instance.array_dim()?.constant_expression()?.getText() ?? "0";
        const definedOn: definedOn = {
          file: fileURI,
          lineNumber: instance.start.line,
          columnNumber: instance.start.column
        }
        const value: string = instance.constant_expression()?.getText() ?? "";

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
    }

    /* Action related crawler */
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
      const actionName: string = ctx.action_identifier()?.getText() ?? "undefined action";

      /* Get name of the super-spec, if any */
      const superSpec: string = ctx.action_super_spec()?.type_identifier()?.getText() ?? "";

      /* Get items of the template, if any... */
      let templateParams: params[] = [];
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

      const baseNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], actionName);
      if (baseNode) {
        node = baseNode as ActionNode;
        node.isAbstract = isAbstract;
        node.templateParams = templateParams;
        node.superSpec = superSpec;
        node.definedOn = definedOn;
      }

      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctx);
      this.currentASTHierarchy.pop();
      return node;
    }


    /**
     * @brief Visits an abstract action
     */
    this.visitAbstract_action_declaration = (ctx: Abstract_action_declarationContext): void => {

      /* Indicate its an abstract action */
      this.sharedData = true;
      /* Traverse the action declaration */
      this.visit(ctx.action_declaration());

    }


    /* Visit attr_field traversal */
    this.visitAttr_field = (ctx: Attr_fieldContext): void => {
      const accessModifier: string = ctx.access_modifier()?.getText() || "public";
      const isRandom: boolean = Boolean(ctx.TOKEN_RAND());
      /* 
          According to PSS standard, we are supposed to define both `static const` keywords 
          for it to count. So, only checking const keyword works 
      */
      const isStaticConst: boolean = Boolean(ctx.TOKEN_CONST());

      this.sharedData = [isStaticConst, isRandom, accessModifier];

      this.visit(ctx.data_declaration());

    }

    /* Visit object flow reference field declaration */
    this.visitFlow_ref_field_declaration = (ctx: Flow_ref_field_declarationContext): void => {
      /* This is creating a flow object instance of input/output type */
      const direction: 'input' | 'output' = (ctx.TOKEN_INPUT()) ? 'input' : 'output';
      const type = getFlowObjType(ctx.flow_object_type().getText());
      let node: FlowReferenceFieldNode;
      ctx.object_ref_field_list().map(objRef => {
        node = {
          type: type,
          flowDirection: direction,
          name: objRef.identifier().getText(),
          definedOn: {
            file: fileURI,
            lineNumber: objRef.identifier().start.line,
            columnNumber: objRef.identifier().start.column
          },
          comments: "",
          children: [],
          instanceArraySize: (objRef.array_dim()) ? objRef.array_dim().constant_expression()?.getText() : 0
        }
        addNodeToParent(node);
      });
    }

    /* Visit object resource reference field declaration */
    this.visitResource_ref_field_declaration = (ctx: Resource_ref_field_declarationContext): void => {
      /* This is creating a resource object instance of input/output type */
      const direction: 'lock' | 'share' = (ctx.TOKEN_LOCK()) ? 'lock' : 'share';
      let node: ResourceReferenceFieldNode;
      ctx.object_ref_field_list().map(objRef => {
        node = {
          type: objType.RESOURCE_OBJECT,
          resourceLock: direction,
          name: objRef.identifier().getText(),
          definedOn: {
            file: fileURI,
            lineNumber: objRef.identifier().start.line,
            columnNumber: objRef.identifier().start.column
          },
          comments: "",
          children: [],
          instanceArraySize: (objRef.array_dim()) ? objRef.array_dim().constant_expression()?.getText() : 0
        }
        addNodeToParent(node);
      });
    }

    /* Action handle declaration visitor */
    this.visitAction_handle_declaration = (ctx: Action_handle_declarationContext): void => {
      let node: InstanceNode;
      const type: string = ctx.action_type_identifier().getText();

      ctx.action_instantiation().action_handle_identifier_list().map((instance, idx) => {
        node = {
          type: objType.ACTION_HANDLE,
          accessModifier: "local",
          instanceType: type,
          instanceDefaultValue: "",
          instanceArrayCount: ctx.action_instantiation().array_dim(idx)?.getText() ?? 0,
          isRandom: false,
          isStaticConst: false,
          name: instance.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: instance.start.line,
            columnNumber: instance.start.column
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      });

    }

    /* Registers related crawler */
    /** Register component definition visitor  */
    this.visitRegister_comp_definition = (ctx: Register_comp_definitionContext): PSSLangObjects => {
      const registerStruct: string = ctx.reg_struct_identifier().getText();
      const accessType = accessMap[ctx.access_type()?.getText().toUpperCase()] ?? "READWRITE";
      const packedStructSize: number = getPackedStructSize([...this.astObjects, ...this.currentASTHierarchy], registerStruct);
      const regLength = Number(ctx.reg_length()?.getText() ?? packedStructSize);

      const node: RegisterCompNode = {
        type: objType.REGISTER_COMP,
        accessType: accessType,
        registerLength: regLength,
        basedOnStruct: registerStruct,
        name: ctx.register_comp_identifier().getText(),
        definedOn: {
          file: fileURI,
          lineNumber: ctx.start.line,
          columnNumber: ctx.start.column
        },
        comments: "",
        children: []
      }
      addNodeToParent(node);
      return node;
    }

    /** Visit a register group definition */
    this.visitRegister_group_definition = (ctx: Register_group_definitionContext): PSSLangObjects => {
      const node: RegisterGroupNode = {
        type: objType.REGISTER_GROUP,
        baseAddress: "unknown",
        name: ctx.register_group_identifier().getText(),
        definedOn: {
          file: fileURI,
          lineNumber: ctx.register_group_identifier().start.line,
          columnNumber: ctx.register_group_identifier().start.column
        },
        comments: "",
        children: []
      }
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      ctx.register_body_definition_list().forEach(definition => {
        this.visit(definition);
      });
      this.currentASTHierarchy.pop();
      return node;
    }

    /** Visit register body definition for a register group */
    this.visitRegister_body_definition = (ctx: Register_body_definitionContext): void => {
      this.visitChildren(ctx);
    }

    /** Visit register component instance */
    this.visitRegister_comp_instance = (ctx: Register_comp_instanceContext): PSSLangObjects => {
      const node: InstanceNode = {
        type: objType.REGISTER,
        accessModifier: "private",
        instanceType: ctx.register_group_identifier().getText(),
        instanceDefaultValue: "",
        instanceArrayCount: Number(ctx.integer_number()?.getText() ?? 0),
        isRandom: false,
        isStaticConst: false,
        name: ctx.register_identifier().getText(),
        definedOn: {
          file: fileURI,
          lineNumber: ctx.register_group_identifier().start.line,
          columnNumber: ctx.register_group_identifier().start.column
        },
        comments: "",
        children: []
      }
      addNodeToParent(node);
      return node;
    }

    /** Visit register definition - Direct declaration of a register component instance */
    this.visitRegister_definition = (ctx: Register_definitionContext): PSSLangObjects => {

      const regStruct: string = ctx.reg_struct_identifier().getText();
      const accessType = accessMap[ctx.access_type()?.getText().toUpperCase()] ?? "READWRITE";
      const packedStructSize: integer = getPackedStructSize([...this.astObjects, ...this.currentASTHierarchy], regStruct);
      const regLength: number = Number(ctx.reg_length()?.integer_number()?.getText() ?? packedStructSize);
      const instanceName: string = ctx.register_identifier().getText();
      const arraySize: number = Number(ctx.integer_number()?.getText() ?? 0);
      let node: RegisterDefNode = {
        type: objType.REGISTER_DEF,
        accessType: accessType,
        registerLength: regLength,
        basedOnStruct: regStruct,
        instanceArrayCount: arraySize,
        name: instanceName,
        definedOn: {
          file: fileURI,
          lineNumber: ctx.start.line,
          columnNumber: ctx.start.column
        },
        comments: "",
        children: []
      }

      addNodeToParent(node);

      return node;
    }

    /** Future plans - use reg_set_handle to obtain base addresses */

    /** Address space related crawlers */
    /** Contiguous address space definition */
    this.visitContiguous_addr_space_def = (ctx: Contiguous_addr_space_defContext): void => {
      const addrTrait = ctx.addr_space_traits()?.getText() || "";
      let node: AddressNode;
      ctx.addr_space_identifier_list().forEach(identifier => {
        node = {
          type: objType.ADDRESS_SPACE,
          addressType: "contiguous",
          traitsStruct: addrTrait,
          size: "",
          address: "",
          isRandom: false,
          additionalTraits: [],
          name: identifier.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: identifier.start.line,
            columnNumber: identifier.start.column
          },
          comments: "",
          regions: [],
          children: []
        };
        addNodeToParent(node);
      });
    }

    /** Address Space settings */
    this.visitAddr_region_setting = (ctx: Addr_region_settingContext): void => {
      const identifier: string = ctx.addr_region_identifier().getText();
      const regionNodeRoot = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
      if (typeof (regionNodeRoot) === 'undefined') {
        return;
      }
      const regionNode: AddressNode = regionNodeRoot as AddressNode;
      if (ctx._size_i || ctx._size_e) {
        regionNode.size = ctx.integer_number()?.getText() || ctx.expression()?.getText() || "";
      } else if (ctx._addr_i || ctx._addr_e) {
        regionNode.address = ctx.integer_number()?.getText() || ctx.expression()?.getText() || "";
      } else if (ctx._trait) {
        regionNode.additionalTraits?.push({ [ctx.trait_identifier().getText()]: ctx.trait_property().getText() })
      }
    }

    /** Visit address claim */
    this.visitAddr_claim = (ctx: Addr_claimContext): void => {
      const isRand: boolean = Boolean(ctx.TOKEN_RAND());
      const traitIdentifier: string = ctx.trait_identifier()?.getText() || "";
      ctx.claim_identifier_list().forEach(claim => {
        const node: AddressNode = {
          type: objType.ADDRESS_CLAIM,
          isRandom: isRand,
          name: claim.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: claim.start.line,
            columnNumber: claim.start.column
          },
          comments: "",
          children: [],
          addressType: "contiguous",
          traitsStruct: traitIdentifier,
          size: "",
          address: "",
          regions: [],
          additionalTraits: []
        };
        addNodeToParent(node);
      });

    }

    /** Visit transparent address space definition */
    this.visitTransparent_addr_space_def = (ctx: Transparent_addr_space_defContext): void => {
      const traitsIdentifier: string = ctx.addr_space_traits()?.getText() || "";
      let node: AddressNode;
      ctx.addr_space_identifier_list().forEach(id => {
        node = {
          type: objType.ADDRESS_SPACE,
          addressType: "transparent",
          traitsStruct: traitsIdentifier,
          size: "",
          address: "",
          isRandom: false,
          additionalTraits: [],
          name: id.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: id.start.line,
            columnNumber: id.start.column
          },
          comments: "",
          regions: [],
          children: []
        };
        addNodeToParent(node);
      });
    }

    /** Visit transparent address region definition */
    this.visitTransparent_addr_region_def = (ctx: Transparent_addr_region_defContext): void => {
      const traitsIdentifier: string = ctx.addr_space_traits()?.getText() || "";
      ctx.addr_region_identifier_list().forEach(identifier => {
        let node: AddressNode = {
          type: objType.ADDRESS_REGION,
          isRandom: false,
          addressType: "transparent",
          traitsStruct: traitsIdentifier,
          size: "",
          address: "",
          regions: [],
          additionalTraits: [],
          name: identifier.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: identifier.start.line,
            columnNumber: identifier.start.column
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      });

    }

    /** Visitor for transparent address claim */
    this.visitTransparent_addr_claim = (ctx: Transparent_addr_claimContext): void => {
      const isRand: boolean = Boolean(ctx.TOKEN_RAND());
      const traitIdentifier: string = ctx.trait_identifier()?.getText() || "";
      ctx.claim_identifier_list().forEach(identifier => {
        const node: AddressNode = {
          type: objType.ADDRESS_CLAIM,
          isRandom: isRand,
          addressType: "transparent",
          traitsStruct: traitIdentifier,
          size: "",
          address: "",
          regions: [],
          additionalTraits: [],
          name: identifier.getText(),
          definedOn: {
            file: fileURI,
            lineNumber: identifier.start.line,
            columnNumber: identifier.start.column
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      });
    }

    /** Add regions -> Non-allocatable */
    this.visitAdd_addr_region_nonallocatable = (ctx: Add_addr_region_nonallocatableContext): void => {
      const identifier: string = ctx.addr_space_identifier().getText();
      const regionIdentifier: string = ctx.addr_region_identifier().getText();
      const nodeRoot = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
      if (nodeRoot) {
        const node: AddressNode = nodeRoot as AddressNode;
        node.regions.push({ [regionIdentifier]: "non-allocatable" });
      }
      if (ctx.addr_handle_identifier()) {
        const nodeBase = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], ctx.addr_handle_identifier().getText());
        if (nodeBase) {
          const node: InstanceNode = nodeBase as InstanceNode;
          /** Do something here, like setting the value? */
          node.instanceDefaultValue = `value of ${identifier} region (non-allocatable)`;
        }
      }
    }

    /** Add regions -> Allocatable */
    this.visitAdd_addr_region = (ctx: Add_addr_regionContext): void => {
      const identifier: string = ctx.addr_space_identifier().getText();
      const regionIdentifier: string = ctx.addr_region_identifier().getText();
      const nodeRoot = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
      if (nodeRoot) {
        const node: AddressNode = nodeRoot as AddressNode;
        node.regions.push({ [regionIdentifier]: "allocatable" });
      }
      if (ctx.addr_handle_identifier()) {
        const nodeBase = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], ctx.addr_handle_identifier().getText());
        if (nodeBase) {
          const node: InstanceNode = nodeBase as InstanceNode;
          /** Do something here, like setting the value? */
          node.instanceDefaultValue = `value of ${identifier} region`;
        }
      }
    }

    /* Component Related crawler */

    /* Visit the component declaration */
    this.visitComponent_declaration = (ctx: Component_declarationContext): PSSLangObjects => {
      const isPure: boolean = Boolean(ctx.TOKEN_PURE());
      const name: string = ctx.component_identifier().getText();
      var params: params[] = [];
      if (ctx.template_param_decl_list()) {
        this.sharedData = name;
        this.visit(ctx.template_param_decl_list());
        params = this.sharedData as params[];
      }
      const superSpec: string = ctx.component_super_spec()?.type_identifier()?.getText() || "";
      const baseNode = getNodeFromNameArray([...this.currentASTHierarchy, ...this.astObjects], name);
      let node: CompNode;
      if (baseNode) {
        node = baseNode as CompNode;
        node.isPure = isPure;
        node.templateParams = params;
        node.superSpec = superSpec;
        node.definedOn = {
          file: fileURI,
          lineNumber: ctx.component_identifier().start.line,
          columnNumber: ctx.component_identifier().start.column
        };
        node.comments = "";
      } else {
        node = {
          type: objType.COMPONENT,
          isPure: isPure,
          templateParams: params,
          superSpec: superSpec,
          name: name,
          definedOn: {
            file: fileURI,
            lineNumber: ctx.component_identifier().start.line,
            columnNumber: ctx.component_identifier().start.column
          },
          comments: "",
          children: []
        }
      }
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctx);
      this.currentASTHierarchy.pop();
      return node;
    }

    /** Visit data declarations done on a component level */
    this.visitComponent_data_declaration = (ctx: Component_data_declarationContext): void => {
      const accessModifier: string = ctx.access_modifier()?.getText() ?? "public";
      const isStatic: boolean = Boolean(ctx.TOKEN_STATIC());
      this.sharedData[0] = isStatic;
      this.sharedData[1] = false;
      this.sharedData[2] = accessModifier;
      this.visit(ctx.data_declaration());
    }

    /** Visit component pool declaration */
    this.visitComponent_pool_declaration = (ctx: Component_pool_declarationContext): void => {
      const node: InstanceNode = {
        type: objType.POOLS,
        accessModifier: "public",
        instanceType: ctx.type_identifier().getText(),
        instanceDefaultValue: "",
        instanceArrayCount: ctx.expression()?.getText() ?? "",
        isRandom: false,
        isStaticConst: false,
        name: ctx.identifier().getText(),
        definedOn: {
          file: fileURI,
          lineNumber: ctx.identifier().start.line,
          columnNumber: ctx.identifier().start.column
        },
        comments: "",
        children: []
      };
      addNodeToParent(node);
    }

    /** Visit exec block statements - 3 types - regular, target and file */
    this.visitExec_block_stmt = (ctx: Exec_block_stmtContext): void => {
      if (ctx.exec_block()) {
        this.visit(ctx.exec_block());
      } else if (ctx.target_code_exec_block()) {
        /** For target language */
        const node: ExecNode = {
          type: getExecType(ctx.target_code_exec_block().exec_kind()?.getText() ?? ""),
          content: ctx.target_code_exec_block().string_literal().getText(),
          name: `${ctx.target_code_exec_block().exec_kind().getText()} - ${ctx.target_code_exec_block().language_identifier().getText()}`,
          definedOn: {
            file: fileURI,
            lineNumber: ctx.target_code_exec_block().start.line,
            columnNumber: ctx.target_code_exec_block().start.column
          },
          comments: "",
          children: [],
          execType: "target"
        };
        addNodeToParent(node);
      }
      else if (ctx.target_file_exec_block()) {
        /** For target language */
        const node: ExecNode = {
          type: objType.EXEC_POSTSOLVE, /** Since file is generated after solving */
          content: ctx.target_file_exec_block().string_literal().getText(),
          name: ctx.target_file_exec_block().filename_string().getText(),
          definedOn: {
            file: fileURI,
            lineNumber: ctx.target_file_exec_block().start.line,
            columnNumber: ctx.target_file_exec_block().start.column
          },
          comments: "",
          children: [],
          execType: "file"
        };
        addNodeToParent(node);
      }
    }

    /** Exec block visitor */
    this.visitExec_block = (ctx: Exec_blockContext): void => {
      let contents: string = "";
      if (ctx.exec_stmt_list()) {
        ctx.exec_stmt_list().forEach(stmt => {
          contents += (stmt.getText() + '\n');
        });
      }
      const node: ExecNode = {
        type: getExecType(ctx.exec_kind()?.getText() || ""),
        execType: "regular",
        content: contents,
        name: "",
        definedOn: {
          file: fileURI,
          lineNumber: ctx.exec_kind().start.line,
          columnNumber: ctx.exec_kind().start.column
        },
        comments: "",
        children: []
      }
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctx);
      this.currentASTHierarchy.pop();
    }

    /** Visit package statements */
    this.visitPackage_declaration = (ctx: Package_declarationContext): PSSLangObjects => {
      const identifier: string = ctx.package_identifier().getText();
      let path: string = "";
      for (let idx = 1; idx < ctx.package_id_path_list().length; idx++) {
        path += `:: ${ctx.package_id_path(idx).getText()}`;
      }
      const node: PackageNode = {
        type: objType.PACKAGE,
        path: path,
        name: identifier,
        definedOn: {
          file: fileURI,
          lineNumber: ctx.package_identifier().start.line,
          columnNumber: ctx.package_identifier().start.column
        },
        comments: "",
        children: []
      };
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctx);
      this.currentASTHierarchy.pop();
      return node;
    }

    /** Visit struct declaration */
    this.visitStruct_declaration = (ctd: Struct_declarationContext): PSSLangObjects => {
      const identifier = ctd.struct_identifier().getText();
      let templateParams: params[] = [];
      if (ctd.template_param_decl_list()) {
        this.visit(ctd.template_param_decl_list());
        templateParams = this.sharedData as params[];
      }
      let node: StructNode = {
        type: getStructKind(ctd.struct_kind().getText()),
        superSpec: ctd.struct_super_spec()?.getText() ?? "",
        name: identifier,
        definedOn: {
          file: fileURI,
          lineNumber: ctd.start.line,
          columnNumber: ctd.start.column
        },
        comments: "",
        templateParams: templateParams,
        children: []
      }
      const rootNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
      if (rootNode) {
        node = rootNode as StructNode;
        node.type = getStructKind(ctd.struct_kind().getText());
        node.superSpec = ctd.struct_super_spec()?.getText() ?? "";
        node.definedOn = {
          file: fileURI,
          lineNumber: ctd.start.line,
          columnNumber: ctd.start.column
        };
        node.comments = "";
        node.templateParams = templateParams;
      }
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(ctd);
      this.currentASTHierarchy.pop();
      return node;
    }

    /** Visit typedef declaration */
    this.visitTypedef_declaration = (d: Typedef_declarationContext): void => {
      const node: TypedefDeclNode = {
        type: objType.TYPEDEF,
        dataType: d.data_type().getText(),
        name: d.identifier().getText(),
        definedOn: {
          file: fileURI,
          lineNumber: d.identifier().start.line,
          columnNumber: d.identifier().start.column
        },
        comments: "",
        children: []
      };
      addNodeToParent(node);
    }

    /** Visit enum declaration */
    this.visitEnum_declaration = (d: Enum_declarationContext): void => {
      const identifier: string = d.enum_identifier().getText();
      const dataType: string = d.data_type()?.getText() ?? "int"; /** We assume the base type to be of type int */
      let enumItems: enumItems[] = [];
      d.enum_item_list()?.forEach((enumItem, idx) => {
        this.sharedData = idx;
        /** The below logic is helpful  */
        if (enumItems.length > 0) {
          this.sharedData = enumItems[enumItems.length - 1].value + 1;
        }
        this.visit(enumItem);
        enumItems.push(this.sharedData as enumItems);
      });
      const baseNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
      let node: EnumNode = {
        type: objType.ENUM,
        dataType: dataType,
        enumItems: enumItems,
        name: identifier,
        definedOn: {
          file: fileURI,
          lineNumber: d.enum_identifier().start.line,
          columnNumber: d.enum_identifier().start.column
        },
        comments: "",
        children: []
      };
      if (baseNode) {
        node = baseNode as EnumNode;
        node.definedOn = {
          file: fileURI,
          lineNumber: d.enum_identifier().start.line,
          columnNumber: d.enum_identifier().start.column
        };
        node.dataType = dataType;
        node.enumItems = [...node.enumItems, ...enumItems];
      }

      addNodeToParent(node);

    }

    /** Visitor for enum items */
    this.visitEnum_item = (d: Enum_itemContext): void => {
      let item: enumItems = {
        name: d.identifier().getText(),
        value: Number(d.integer_number()?.getText() ?? this.sharedData as number),
        definedOn: {
          file: fileURI,
          lineNumber: d.identifier().start.line,
          columnNumber: d.identifier().start.column
        }
      };
      this.sharedData = item;
    }

    /** Visitor for function parameter */
    this.visitFunction_parameter = (d: Function_parameterContext): void => {
      let param: params = {
        paramType: `${d.function_parameter_dir()?.getText() ?? d.TOKEN_CONST()?.getText() ?? ""}`,
        paramName: d.identifier()?.getText() ?? d.user_type().getText().trim().split(/\s+/)[1],
        paramDefault: d.constant_expression()?.getText() ?? ""
      }
      if (d.data_type()) {
        /** First scenario - data type is given */
        param.paramType += `${d.data_type().getText()}`;
      } else if (d.user_type()) {
        /* 2nd scenario - user defined data type */
        param.paramType += `${d.user_type().getText().trim().split(/\s+/)[0]}`;
      }
      else {
        /** 3rd scenario */
        param.paramType = `${d.TOKEN_CONST()?.getText() ?? ""} ${d.TOKEN_TYPE()?.getText() ?? d.type_category()?.getText() ?? d.TOKEN_STRUCT()?.getText() ?? ""}`
      }
      this.sharedData = param;
    }

    /** Visitor for function parameter list prototype */
    this.visitFunction_parameter_list_prototype = (d: Function_parameter_list_prototypeContext): void => {
      const params: params[] = [];
      d.function_parameter_list().forEach(param => {
        this.visit(param);
        params.push(this.sharedData as params);
      });
      if (d.varargs_parameter()) {
        const vararg = d.varargs_parameter();
        const dataType: string = vararg.data_type()?.getText() ?? vararg.TOKEN_TYPE()?.getText() ?? vararg.type_category()?.getText() ?? vararg.TOKEN_STRUCT()?.getText() ?? "";
        params.push({
          paramType: "...args",
          paramName: d.varargs_parameter().identifier().getText(),
          paramDefault: dataType /** This is just for reference */
        });
      }
      this.sharedData = params;
    }

    /** Visitor for function prototype */
    this.visitFunction_prototype = (d: Function_prototypeContext): void => {
      const returnType: string = d.function_return_type().getText();
      const identifier: string = d.function_identifier().getText();
      const definedOn: definedOn = {
        file: fileURI,
        lineNumber: d.function_identifier().start.line,
        columnNumber: d.function_identifier().start.column
      }
      this.visit(d.function_parameter_list_prototype());
      const params: params[] = this.sharedData as params[];
      this.sharedData[0] = returnType;
      this.sharedData[1] = identifier;
      this.sharedData[2] = params;
      this.sharedData[3] = definedOn;
    }

    /** Visitor for function declaration */
    this.visitFunction_decl = (d: Function_declContext): void => {
      const platformQualifier = (d.platform_qualifier()?.getText() ?? 'target') === 'solve' ? 'solve' : 'target';
      const isPure: boolean = Boolean(d.TOKEN_PURE());
      const isStatic: boolean = Boolean(d.TOKEN_STATIC());
      this.visit(d.function_prototype());
      const returnType: string = this.sharedData[0] as string;
      const identifier: string = this.sharedData[1] as string;
      const params: params[] = this.sharedData[2] as params[];
      const definedOn: definedOn = this.sharedData[3] as definedOn;
      const node: FunctionNode = {
        type: objType.FUNCTION,
        platformQualifier: platformQualifier,
        isPure: isPure,
        isStatic: isStatic,
        returnType: returnType,
        parameters: params,
        name: identifier,
        definedOn: definedOn,
        comments: "",
        children: []
      };
      addNodeToParent(node);
    }

    /** Visitor for procedural function */
    this.visitProcedural_function = (d: Procedural_functionContext): void => {
      const platformQualifier = (d.platform_qualifier()?.getText() ?? 'target') === 'solve' ? 'solve' : 'target';
      const isPure: boolean = Boolean(d.TOKEN_PURE());
      const isStatic: boolean = Boolean(d.TOKEN_STATIC());
      this.visit(d.function_prototype());
      const returnType: string = this.sharedData[0] as string;
      const identifier: string = this.sharedData[1] as string;
      const params: params[] = this.sharedData[2] as params[];
      const definedOn: definedOn = this.sharedData[3] as definedOn;
      const node: FunctionNode = {
        type: objType.FUNCTION,
        platformQualifier: platformQualifier,
        isPure: isPure,
        isStatic: isStatic,
        returnType: returnType,
        parameters: params,
        name: identifier,
        definedOn: definedOn,
        comments: "",
        children: []
      };
      addNodeToParent(node);
      this.currentASTHierarchy.push(node);
      this.visitChildren(d);
      this.currentASTHierarchy.pop();
    }

    /** Visitor for procedural statements */

    /** Visit procedural data declaration */
    this.visitProcedural_data_declaration = (d: Procedural_data_declarationContext): void => {
      let dataType: string;
      if (d.data_type()) {
        dataType = d.data_type().getText();
      }
      else if (d.user_type()) {
        const dataInfo: string[] = d.user_type().getText().trim().split(/\s+/);
        dataType = dataInfo[0];
        const dataID: string = dataInfo[1];
        const trimmed = d.user_type().getText().trimStart();
        const firstSpace = trimmed.indexOf(' ');
        const offsetOfDataID: number = (firstSpace === -1) ? 0 : firstSpace + 1 + (d.user_type().getText().length - trimmed.length);
        const node: InstanceNode = {
          type: objType.INSTANCE,
          accessModifier: "",
          instanceType: dataType,
          instanceDefaultValue: d.constant_expression()?.getText() ?? "",
          instanceArrayCount: d.array_dim()?.constant_expression()?.getText() ?? "",
          isRandom: false,
          isStaticConst: false,
          name: dataID,
          definedOn: {
            file: fileURI,
            lineNumber: d.user_type().start.line,
            columnNumber: d.user_type().start.column + offsetOfDataID /** Adjusting to start from data type + space */
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      } else {
        dataType = "unknown";
      }

      d.procedural_data_instantiation_list()?.forEach(inst => {
        const node: InstanceNode = {
          type: objType.INSTANCE,
          accessModifier: "",
          instanceType: dataType,
          instanceDefaultValue: inst.constant_expression()?.getText() ?? "",
          instanceArrayCount: inst.array_dim()?.constant_expression()?.getText() ?? "",
          isRandom: false,
          isStaticConst: false,
          name: inst.identifier().getText(),
          definedOn: {
            file: fileURI,
            lineNumber: inst.start.line,
            columnNumber: inst.start.column
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      });
    }

    /** Visit procedural assignment */
    this.visitProcedural_assignment_stmt = (d: Procedural_assignment_stmtContext): void => {
      let node: AssignmentNode = {
        type: objType.ASSIGNMENT,
        operation: "=",
        value: "",
        name: "",
        dataType: "",
        definedOn: {
          file: fileURI,
          lineNumber: d.start.line,
          columnNumber: d.start.column
        },
        comments: "",
        children: []
      };

      const refPath = d.ref_path();
      const identifier = d.identifier();
      const expression = d.expression();
      const funcCall = d.function_call();

      if (refPath) {
        node.name = refPath.getText();
        node.value = d.expression().getText();
        node.dataType = "ref";
      } else if (identifier && expression) {
        node.name = d.identifier().getText();
        node.value = d.expression().getText();
        const result = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], node.name);
        const nodeParent = (result) ? result as InstanceNode : undefined
        node.dataType = nodeParent?.instanceType ?? d.data_type()?.getText() ?? "";
      } else if (identifier && funcCall) {
        node.name = d.identifier().getText();
        node.value = d.function_call().function_identifier().getText();
        const result = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], node.name);
        const nodeParent = (result) ? result as InstanceNode : undefined
        node.dataType = d.data_type()?.getText() ?? nodeParent?.instanceType ?? "";
      }

      addNodeToParent(node);
    }

    /** Import statement visitors */
    this.visitImport_function = (d: Import_functionContext): void => {
      let identifier: string = "";
      let content: string = "";
      let definedOn: definedOn;
      const platformQualifier = (d.platform_qualifier()?.getText() ?? 'target') === 'solve' ? 'solve' : 'target';
      const languageIdentifier: string = d.language_identifier()?.getText() ?? "";
      if (d.function_prototype()) {
        this.visit(d.function_prototype());
        const params: params[] = this.sharedData[2] as params[];
        identifier = this.sharedData[1];
        content = `${this.sharedData[0]} (${params.map(par =>
          `${par.paramType}:${par.paramName}${par.paramDefault.length > 0 ? ' = ' + par.paramDefault : ''}`
        ).join(', ')})`;
        definedOn = this.sharedData[3] as definedOn;
      } else {
        identifier = d.type_identifier().getText();
        definedOn = {
          file: fileURI,
          lineNumber: d.type_identifier().start.line,
          columnNumber: d.type_identifier().start.column
        }
      }
      const node: ImportsNode = {
        type: objType.IMPORT,
        importType: "function",
        features: content,
        name: identifier,
        definedOn: definedOn,
        comments: "",
        children: []
      }
      addNodeToParent(node);
    }

    this.visitImport_stmt = (d: Import_stmtContext): PSSLangObjects => {
      const node: ImportsNode = {
        type: objType.IMPORT,
        importType: "package",
        features: d.package_import_pattern().package_import_qualifier()?.getText() ?? "",
        name: d.package_import_pattern().type_identifier().type_identifier_elem(0).getText(),
        definedOn: {
          file: fileURI,
          lineNumber: d.package_import_pattern().type_identifier().type_identifier_elem(0).start.line,
          columnNumber: d.package_import_pattern().type_identifier().type_identifier_elem(0).start.column
        },
        comments: "",
        children: []
      }
      addNodeToParent(node);
      return node;
    }


    /** Visit extend statements */
    /** extend action */
    this.visitAction_extension = (d: Action_extensionContext): void => {
      const actionIdentifier: string = d.action_identifier().getText();
      const baseNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], actionIdentifier);
      let node: ActionNode;
      if (baseNode) {
        /** This basically  */
        node = baseNode as ActionNode;
      } else {
        node = {
          type: objType.ACTION,
          isAbstract: false,
          templateParams: [],
          superSpec: "",
          name: actionIdentifier,
          definedOn: {
            file: fileURI,
            lineNumber: d.action_identifier().start.line,
            columnNumber: d.action_identifier().start.column
          },
          comments: "",
          children: []
        };
        addNodeToParent(node);
      }
      this.currentASTHierarchy.push(node);
      this.visitChildren(d);
      this.currentASTHierarchy.pop();
    }

    /** Extend statement visitor */
    this.visitExtend_stmt = (d: Extend_stmtContext): void => {
      if (d.action_extension()) {
        this.visit(d.action_extension());
      } else if (d.TOKEN_COMPONENT()) {
        /** This means the visitor is looking at an extend component statement */
        const identifier: string = d.component_identifier().getText();
        const baseNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
        let compNode: CompNode;
        if (baseNode) {
          compNode = baseNode as CompNode;
        } else {
          compNode = {
            type: objType.COMPONENT,
            isPure: false,
            templateParams: [],
            superSpec: "",
            name: identifier,
            definedOn: {
              file: fileURI,
              lineNumber: d.component_identifier().start.line,
              columnNumber: d.component_identifier().start.column
            },
            comments: "",
            children: []
          }
          addNodeToParent(compNode);
        }
        this.currentASTHierarchy.push(compNode);
        this.visitChildren(d);
        this.currentASTHierarchy.pop();

      } else if (d.TOKEN_ENUM()) {
        /** We are looking at enum extension */
        let enumItems: enumItems[] = [];
        d.enum_item_list()?.forEach((enumItem, idx) => {
          this.sharedData = idx;
          /** The below logic is helpful  */
          if (enumItems.length > 0) {
            this.sharedData = enumItems[enumItems.length - 1].value + 1;
          }
          this.visit(enumItem);
          enumItems.push(this.sharedData as enumItems);
        });
        const identifier = d.enum_identifier().getText();
        const baseNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
        let node: EnumNode;
        if (baseNode) {
          node = baseNode as EnumNode;
        } else {
          node = {
            type: objType.ENUM,
            dataType: "",
            enumItems: enumItems,
            name: identifier,
            definedOn: {
              file: fileURI,
              lineNumber: d.enum_identifier().start.line,
              columnNumber: d.enum_identifier().start.column
            },
            comments: "",
            children: []
          }
        }
        addNodeToParent(node);
      } else {
        /* This is essentially extending the struct */
        const identifier: string = d.struct_kind_identifier().getText();
        const rootNode = getNodeFromNameArray([...this.astObjects, ...this.currentASTHierarchy], identifier);
        let baseNode: StructNode;
        if (rootNode) {
          baseNode = rootNode as StructNode;
        } else {
          baseNode = {
            type: getStructKind(identifier),
            templateParams: [],
            superSpec: "",
            name: identifier,
            definedOn: {
              file: fileURI,
              lineNumber: d.struct_kind_identifier().start.line,
              columnNumber: d.struct_kind_identifier().start.column
            },
            comments: "",
            children: []
          }
          addNodeToParent(baseNode);
        }
        this.currentASTHierarchy.push(baseNode);
        this.visitChildren(d);
        this.currentASTHierarchy.pop();
      }
    }

  } /** End Super */

}
