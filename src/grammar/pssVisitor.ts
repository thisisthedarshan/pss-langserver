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
// Generated from ./src/grammar/antlr/pss.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { Pss_entryContext } from "./pss.js";
import { PssContext } from "./pss.js";
import { Package_bodyContext } from "./pss.js";
import { Action_declarationContext } from "./pss.js";
import { Abstract_action_declarationContext } from "./pss.js";
import { Action_super_specContext } from "./pss.js";
import { Action_body_itemContext } from "./pss.js";
import { Action_field_declarationContext } from "./pss.js";
import { Object_ref_field_declarationContext } from "./pss.js";
import { Flow_ref_field_declarationContext } from "./pss.js";
import { Resource_ref_field_declarationContext } from "./pss.js";
import { Flow_object_typeContext } from "./pss.js";
import { Resource_object_typeContext } from "./pss.js";
import { Object_ref_fieldContext } from "./pss.js";
import { Action_handle_declarationContext } from "./pss.js";
import { Action_instantiationContext } from "./pss.js";
import { Activity_data_fieldContext } from "./pss.js";
import { Activity_scheduling_constraintContext } from "./pss.js";
import { Activity_declarationContext } from "./pss.js";
import { Activity_stmtContext } from "./pss.js";
import { Labeled_activity_stmtContext } from "./pss.js";
import { Activity_action_traversal_stmtContext } from "./pss.js";
import { Inline_constraints_or_emptyContext } from "./pss.js";
import { Activity_sequence_block_stmtContext } from "./pss.js";
import { Activity_parallel_stmtContext } from "./pss.js";
import { Activity_schedule_stmtContext } from "./pss.js";
import { Activity_join_specContext } from "./pss.js";
import { Activity_join_branchContext } from "./pss.js";
import { Activity_join_selectContext } from "./pss.js";
import { Activity_join_noneContext } from "./pss.js";
import { Activity_join_firstContext } from "./pss.js";
import { Activity_repeat_stmtContext } from "./pss.js";
import { Activity_foreach_stmtContext } from "./pss.js";
import { Activity_select_stmtContext } from "./pss.js";
import { Select_branchContext } from "./pss.js";
import { Activity_if_else_stmtContext } from "./pss.js";
import { Activity_match_stmtContext } from "./pss.js";
import { Match_expressionContext } from "./pss.js";
import { Match_choiceContext } from "./pss.js";
import { Activity_replicate_stmtContext } from "./pss.js";
import { Activity_super_stmtContext } from "./pss.js";
import { Activity_atomic_block_stmtContext } from "./pss.js";
import { Activity_bind_stmtContext } from "./pss.js";
import { Activity_bind_item_or_listContext } from "./pss.js";
import { Activity_constraint_stmtContext } from "./pss.js";
import { Symbol_declarationContext } from "./pss.js";
import { Symbol_paramlistContext } from "./pss.js";
import { Symbol_paramContext } from "./pss.js";
import { Cover_stmtContext } from "./pss.js";
import { Monitor_declarationContext } from "./pss.js";
import { Abstract_monitor_declarationContext } from "./pss.js";
import { Monitor_super_specContext } from "./pss.js";
import { Monitor_body_itemContext } from "./pss.js";
import { Monitor_field_declarationContext } from "./pss.js";
import { Monitor_activity_declarationContext } from "./pss.js";
import { Monitor_activity_stmtContext } from "./pss.js";
import { Labeled_monitor_activity_stmtContext } from "./pss.js";
import { Monitor_handle_declarationContext } from "./pss.js";
import { Monitor_instantiationContext } from "./pss.js";
import { Monitor_activity_sequence_block_stmtContext } from "./pss.js";
import { Monitor_activity_concat_stmtContext } from "./pss.js";
import { Monitor_activity_eventually_stmtContext } from "./pss.js";
import { Monitor_activity_overlap_stmtContext } from "./pss.js";
import { Monitor_activity_select_stmtContext } from "./pss.js";
import { Monitor_activity_schedule_stmtContext } from "./pss.js";
import { Monitor_activity_monitor_traversal_stmtContext } from "./pss.js";
import { Monitor_inline_constraints_or_emptyContext } from "./pss.js";
import { Monitor_activity_constraint_stmtContext } from "./pss.js";
import { Monitor_constraint_declarationContext } from "./pss.js";
import { Monitor_constraint_setContext } from "./pss.js";
import { Monitor_constraint_blockContext } from "./pss.js";
import { Monitor_constraint_body_itemContext } from "./pss.js";
import { Component_declarationContext } from "./pss.js";
import { Component_super_specContext } from "./pss.js";
import { Component_body_itemContext } from "./pss.js";
import { Component_data_declarationContext } from "./pss.js";
import { Component_pool_declarationContext } from "./pss.js";
import { Object_bind_stmtContext } from "./pss.js";
import { Object_bind_item_or_listContext } from "./pss.js";
import { Object_bind_item_pathContext } from "./pss.js";
import { Component_path_elemContext } from "./pss.js";
import { Object_bind_itemContext } from "./pss.js";
import { Package_body_compile_ifContext } from "./pss.js";
import { Monitor_body_compile_ifContext } from "./pss.js";
import { Action_body_compile_ifContext } from "./pss.js";
import { Component_body_compile_ifContext } from "./pss.js";
import { Struct_body_compile_ifContext } from "./pss.js";
import { Procedural_compile_ifContext } from "./pss.js";
import { Constraint_body_compile_ifContext } from "./pss.js";
import { Covergroup_body_compile_ifContext } from "./pss.js";
import { Override_compile_ifContext } from "./pss.js";
import { Package_body_compile_if_itemContext } from "./pss.js";
import { Action_body_compile_if_itemContext } from "./pss.js";
import { Monitor_body_compile_if_itemContext } from "./pss.js";
import { Component_body_compile_if_itemContext } from "./pss.js";
import { Struct_body_compile_if_itemContext } from "./pss.js";
import { Procedural_compile_if_stmtContext } from "./pss.js";
import { Constraint_body_compile_if_itemContext } from "./pss.js";
import { Covergroup_body_compile_if_itemContext } from "./pss.js";
import { Override_compile_if_stmtContext } from "./pss.js";
import { Compile_has_exprContext } from "./pss.js";
import { Compile_assert_stmtContext } from "./pss.js";
import { Constraint_declarationContext } from "./pss.js";
import { Constraint_setContext } from "./pss.js";
import { Constraint_blockContext } from "./pss.js";
import { Constraint_body_itemContext } from "./pss.js";
import { Expression_constraint_itemContext } from "./pss.js";
import { Foreach_constraint_itemContext } from "./pss.js";
import { Forall_constraint_itemContext } from "./pss.js";
import { If_constraint_itemContext } from "./pss.js";
import { Implication_constraint_itemContext } from "./pss.js";
import { Unique_constraint_itemContext } from "./pss.js";
import { Dist_directiveContext } from "./pss.js";
import { Dist_listContext } from "./pss.js";
import { Dist_itemContext } from "./pss.js";
import { Dist_weightContext } from "./pss.js";
import { Covergroup_declarationContext } from "./pss.js";
import { Covergroup_portContext } from "./pss.js";
import { Covergroup_body_itemContext } from "./pss.js";
import { Covergroup_optionContext } from "./pss.js";
import { Covergroup_instantiationContext } from "./pss.js";
import { Inline_covergroupContext } from "./pss.js";
import { Covergroup_type_instantiationContext } from "./pss.js";
import { Covergroup_portmap_listContext } from "./pss.js";
import { Covergroup_portmapContext } from "./pss.js";
import { Covergroup_options_or_emptyContext } from "./pss.js";
import { Covergroup_coverpointContext } from "./pss.js";
import { Bins_or_emptyContext } from "./pss.js";
import { Covergroup_coverpoint_body_itemContext } from "./pss.js";
import { Covergroup_coverpoint_binspecContext } from "./pss.js";
import { Coverpoint_binsContext } from "./pss.js";
import { Covergroup_range_listContext } from "./pss.js";
import { Covergroup_value_rangeContext } from "./pss.js";
import { Bins_keywordContext } from "./pss.js";
import { Covergroup_expressionContext } from "./pss.js";
import { Covergroup_crossContext } from "./pss.js";
import { Cross_item_or_nullContext } from "./pss.js";
import { Covergroup_cross_body_itemContext } from "./pss.js";
import { Covergroup_cross_binspecContext } from "./pss.js";
import { Data_declarationContext } from "./pss.js";
import { Data_instantiationContext } from "./pss.js";
import { Array_dimContext } from "./pss.js";
import { Attr_fieldContext } from "./pss.js";
import { Access_modifierContext } from "./pss.js";
import { Attr_groupContext } from "./pss.js";
import { Data_typeContext } from "./pss.js";
import { Scalar_data_typeContext } from "./pss.js";
import { Casting_typeContext } from "./pss.js";
import { Chandle_typeContext } from "./pss.js";
import { Integer_typeContext } from "./pss.js";
import { Integer_atom_typeContext } from "./pss.js";
import { Domain_open_range_listContext } from "./pss.js";
import { Domain_open_range_valueContext } from "./pss.js";
import { String_typeContext } from "./pss.js";
import { Bool_typeContext } from "./pss.js";
import { Enum_declarationContext } from "./pss.js";
import { Enum_itemContext } from "./pss.js";
import { Enum_typeContext } from "./pss.js";
import { Float_typeContext } from "./pss.js";
import { Collection_typeContext } from "./pss.js";
import { Array_size_expressionContext } from "./pss.js";
import { Reference_typeContext } from "./pss.js";
import { Typedef_declarationContext } from "./pss.js";
import { Exec_block_stmtContext } from "./pss.js";
import { Exec_blockContext } from "./pss.js";
import { Exec_kindContext } from "./pss.js";
import { Exec_stmtContext } from "./pss.js";
import { Exec_super_stmtContext } from "./pss.js";
import { Target_code_exec_blockContext } from "./pss.js";
import { Target_file_exec_blockContext } from "./pss.js";
import { Constant_expressionContext } from "./pss.js";
import { ExpressionContext } from "./pss.js";
import { Logical_expressionContext } from "./pss.js";
import { Equality_expressionContext } from "./pss.js";
import { Relational_expressionContext } from "./pss.js";
import { Bitwise_expressionContext } from "./pss.js";
import { Shift_expressionContext } from "./pss.js";
import { Additive_expressionContext } from "./pss.js";
import { Multiplicative_expressionContext } from "./pss.js";
import { Power_expressionContext } from "./pss.js";
import { Unary_expressionContext } from "./pss.js";
import { Conditional_expressionContext } from "./pss.js";
import { PrimaryContext } from "./pss.js";
import { Unary_operatorContext } from "./pss.js";
import { Power_opContext } from "./pss.js";
import { Binary_operatorContext } from "./pss.js";
import { Assign_opContext } from "./pss.js";
import { Parenthesis_expressionsContext } from "./pss.js";
import { Mul_divContext } from "./pss.js";
import { Add_subContext } from "./pss.js";
import { ShiftingContext } from "./pss.js";
import { In_statementsContext } from "./pss.js";
import { Logical_compareContext } from "./pss.js";
import { Equality_compareContext } from "./pss.js";
import { Bitwise_andContext } from "./pss.js";
import { Bitwise_xorContext } from "./pss.js";
import { Bitwise_orContext } from "./pss.js";
import { Logical_andContext } from "./pss.js";
import { Logical_orContext } from "./pss.js";
import { Open_range_valueContext } from "./pss.js";
import { In_expressionContext } from "./pss.js";
import { Open_range_listContext } from "./pss.js";
import { Collection_expressionContext } from "./pss.js";
import { Cast_expressionContext } from "./pss.js";
import { Ref_pathContext } from "./pss.js";
import { SliceContext } from "./pss.js";
import { Static_ref_pathContext } from "./pss.js";
import { Bit_sliceContext } from "./pss.js";
import { String_sliceContext } from "./pss.js";
import { Function_callContext } from "./pss.js";
import { Function_ref_pathContext } from "./pss.js";
import { Function_paramsContext } from "./pss.js";
import { Symbol_callContext } from "./pss.js";
import { Function_parameter_listContext } from "./pss.js";
import { Expression_listContext } from "./pss.js";
import { String_literalContext } from "./pss.js";
import { Filename_stringContext } from "./pss.js";
import { Action_extensionContext } from "./pss.js";
import { CommentsContext } from "./pss.js";
import { Import_functionContext } from "./pss.js";
import { Target_template_functionContext } from "./pss.js";
import { Import_class_declContext } from "./pss.js";
import { Import_class_extendsContext } from "./pss.js";
import { Import_class_function_declContext } from "./pss.js";
import { Export_actionContext } from "./pss.js";
import { Procedural_functionContext } from "./pss.js";
import { Function_declContext } from "./pss.js";
import { Platform_qualifierContext } from "./pss.js";
import { Function_prototypeContext } from "./pss.js";
import { Function_return_typeContext } from "./pss.js";
import { Function_parameter_list_prototypeContext } from "./pss.js";
import { Function_parameterContext } from "./pss.js";
import { Function_parameter_dirContext } from "./pss.js";
import { Varargs_parameterContext } from "./pss.js";
import { Function_call_paramsContext } from "./pss.js";
import { IdentifierContext } from "./pss.js";
import { Hierarchical_id_listContext } from "./pss.js";
import { Hierarchical_idContext } from "./pss.js";
import { Member_path_elemContext } from "./pss.js";
import { Action_identifierContext } from "./pss.js";
import { Action_handle_identifierContext } from "./pss.js";
import { Component_identifierContext } from "./pss.js";
import { Covercross_identifierContext } from "./pss.js";
import { Covergroup_identifierContext } from "./pss.js";
import { Coverpoint_identifierContext } from "./pss.js";
import { Enum_identifierContext } from "./pss.js";
import { Function_identifierContext } from "./pss.js";
import { Import_class_identifierContext } from "./pss.js";
import { Index_identifierContext } from "./pss.js";
import { Iterator_identifierContext } from "./pss.js";
import { Label_identifierContext } from "./pss.js";
import { Language_identifierContext } from "./pss.js";
import { Monitor_identifierContext } from "./pss.js";
import { Package_identifierContext } from "./pss.js";
import { Struct_identifierContext } from "./pss.js";
import { Struct_kind_identifierContext } from "./pss.js";
import { Symbol_identifierContext } from "./pss.js";
import { Type_identifierContext } from "./pss.js";
import { Type_identifier_elemContext } from "./pss.js";
import { Action_type_identifierContext } from "./pss.js";
import { Buffer_type_identifierContext } from "./pss.js";
import { Component_type_identifierContext } from "./pss.js";
import { Covergroup_type_identifierContext } from "./pss.js";
import { Enum_type_identifierContext } from "./pss.js";
import { Monitor_type_identifierContext } from "./pss.js";
import { Resource_type_identifierContext } from "./pss.js";
import { State_type_identifierContext } from "./pss.js";
import { Stream_type_identifierContext } from "./pss.js";
import { Entity_type_identifierContext } from "./pss.js";
import { NumberContext } from "./pss.js";
import { Integer_numberContext } from "./pss.js";
import { Based_bin_numberContext } from "./pss.js";
import { Based_oct_numberContext } from "./pss.js";
import { Based_dec_numberContext } from "./pss.js";
import { Based_hex_numberContext } from "./pss.js";
import { Floating_point_numberContext } from "./pss.js";
import { Unsigned_numberContext } from "./pss.js";
import { Floating_point_dec_numberContext } from "./pss.js";
import { Floating_point_sci_numberContext } from "./pss.js";
import { Aggregate_literalContext } from "./pss.js";
import { Empty_aggregate_literalContext } from "./pss.js";
import { Value_list_literalContext } from "./pss.js";
import { Map_literalContext } from "./pss.js";
import { Map_literal_itemContext } from "./pss.js";
import { Struct_literalContext } from "./pss.js";
import { Struct_literal_itemContext } from "./pss.js";
import { Bool_literalContext } from "./pss.js";
import { Null_refContext } from "./pss.js";
import { Override_declarationContext } from "./pss.js";
import { Override_stmtContext } from "./pss.js";
import { Type_overrideContext } from "./pss.js";
import { Instance_overrideContext } from "./pss.js";
import { Package_declarationContext } from "./pss.js";
import { Package_id_pathContext } from "./pss.js";
import { Package_body_itemContext } from "./pss.js";
import { Import_stmtContext } from "./pss.js";
import { Package_import_patternContext } from "./pss.js";
import { Package_import_qualifierContext } from "./pss.js";
import { Package_import_wildcardContext } from "./pss.js";
import { Package_import_aliasContext } from "./pss.js";
import { Extend_stmtContext } from "./pss.js";
import { Const_field_declarationContext } from "./pss.js";
import { Stmt_terminatorContext } from "./pss.js";
import { Procedural_stmtContext } from "./pss.js";
import { Procedural_sequence_block_stmtContext } from "./pss.js";
import { Procedural_data_declarationContext } from "./pss.js";
import { Procedural_data_instantiationContext } from "./pss.js";
import { Procedural_assignment_stmtContext } from "./pss.js";
import { Procedural_void_function_call_stmtContext } from "./pss.js";
import { Procedural_return_stmtContext } from "./pss.js";
import { Procedural_repeat_stmtContext } from "./pss.js";
import { Procedural_foreach_stmtContext } from "./pss.js";
import { Procedural_if_else_stmtContext } from "./pss.js";
import { Procedural_match_stmtContext } from "./pss.js";
import { Procedural_match_choiceContext } from "./pss.js";
import { Procedural_break_stmtContext } from "./pss.js";
import { Procedural_continue_stmtContext } from "./pss.js";
import { Procedural_randomization_stmtContext } from "./pss.js";
import { Procedural_randomization_targetContext } from "./pss.js";
import { Procedural_randomization_termContext } from "./pss.js";
import { Procedural_yield_stmtContext } from "./pss.js";
import { Struct_declarationContext } from "./pss.js";
import { Struct_kindContext } from "./pss.js";
import { Object_kindContext } from "./pss.js";
import { Struct_super_specContext } from "./pss.js";
import { Struct_body_itemContext } from "./pss.js";
import { Template_param_decl_listContext } from "./pss.js";
import { Template_param_declContext } from "./pss.js";
import { Type_param_declContext } from "./pss.js";
import { Generic_type_param_declContext } from "./pss.js";
import { Category_type_param_declContext } from "./pss.js";
import { Type_restrictionContext } from "./pss.js";
import { Type_categoryContext } from "./pss.js";
import { Value_param_declContext } from "./pss.js";
import { Template_param_value_listContext } from "./pss.js";
import { Template_param_valueContext } from "./pss.js";
import { Addr_region_identifierContext } from "./pss.js";
import { Addr_handle_identifierContext } from "./pss.js";
import { Addr_space_identifierContext } from "./pss.js";
import { Addr_space_traitsContext } from "./pss.js";
import { Claim_identifierContext } from "./pss.js";
import { Trait_identifierContext } from "./pss.js";
import { OffsetContext } from "./pss.js";
import { Trait_propertyContext } from "./pss.js";
import { Number_identifierContext } from "./pss.js";
import { Bool_identifierContext } from "./pss.js";
import { Contiguous_addr_space_defContext } from "./pss.js";
import { Addr_claimContext } from "./pss.js";
import { Transparent_addr_space_defContext } from "./pss.js";
import { Transparent_addr_region_defContext } from "./pss.js";
import { Addr_region_settingContext } from "./pss.js";
import { Transparent_addr_claimContext } from "./pss.js";
import { Add_addr_region_nonallocatableContext } from "./pss.js";
import { Add_addr_regionContext } from "./pss.js";
import { Make_handle_from_claimContext } from "./pss.js";
import { Make_handle_from_handleContext } from "./pss.js";
import { Addr_valueContext } from "./pss.js";
import { Addr_value_solveContext } from "./pss.js";
import { Addr_value_absContext } from "./pss.js";
import { Mem_opsContext } from "./pss.js";
import { Addr_space_defContext } from "./pss.js";
import { Addr_region_defContext } from "./pss.js";
import { Register_identifierContext } from "./pss.js";
import { Register_comp_identifierContext } from "./pss.js";
import { Register_group_identifierContext } from "./pss.js";
import { Reg_struct_identifierContext } from "./pss.js";
import { Value_identifierContext } from "./pss.js";
import { Mask_struct_identifierContext } from "./pss.js";
import { Value_struct_identifierContext } from "./pss.js";
import { Mask_identifierContext } from "./pss.js";
import { Field_identifierContext } from "./pss.js";
import { Names_list_identifierContext } from "./pss.js";
import { Value_list_identifierContext } from "./pss.js";
import { Access_typeContext } from "./pss.js";
import { Reg_lengthContext } from "./pss.js";
import { Register_comp_definitionContext } from "./pss.js";
import { Register_group_definitionContext } from "./pss.js";
import { Register_body_definitionContext } from "./pss.js";
import { Register_comp_instanceContext } from "./pss.js";
import { Register_definitionContext } from "./pss.js";
import { Function_offset_of_instance_defContext } from "./pss.js";
import { Function_offset_of_instance_arr_defContext } from "./pss.js";
import { Offset_match_stmtsContext } from "./pss.js";
import { If_else_stmtsContext } from "./pss.js";
import { Reg_match_stmtsContext } from "./pss.js";
import { Offset_return_itemsContext } from "./pss.js";
import { Offset_returnsContext } from "./pss.js";
import { Reg_function_callsContext } from "./pss.js";
import { Register_operation_callContext } from "./pss.js";
import { Reg_readContext } from "./pss.js";
import { Reg_writeContext } from "./pss.js";
import { Reg_read_valContext } from "./pss.js";
import { Reg_write_valContext } from "./pss.js";
import { Reg_write_maskedContext } from "./pss.js";
import { Reg_write_val_maskedContext } from "./pss.js";
import { Reg_write_fieldContext } from "./pss.js";
import { Reg_write_fieldsContext } from "./pss.js";
import { Reg_set_handleContext } from "./pss.js";
import { Reg_declarationsContext } from "./pss.js";
import { File_doc_commentContext } from "./pss.js";
import { Documentation_commentContext } from "./pss.js";
import { Doc_contentContext } from "./pss.js";
import { Brief_commandContext } from "./pss.js";
import { Param_commandContext } from "./pss.js";
import { Return_commandContext } from "./pss.js";
import { Deprecated_commandContext } from "./pss.js";
import { Author_commandContext } from "./pss.js";
import { Date_commandContext } from "./pss.js";
import { Version_commandContext } from "./pss.js";
import { See_commandContext } from "./pss.js";
import { Attention_commandContext } from "./pss.js";
import { File_commandContext } from "./pss.js";
import { Todo_commandContext } from "./pss.js";
import { Example_commandContext } from "./pss.js";
import { Brief_textContext } from "./pss.js";
import { Param_identifierContext } from "./pss.js";
import { Param_descriptionContext } from "./pss.js";
import { Return_descriptionContext } from "./pss.js";
import { Deprecated_descriptionContext } from "./pss.js";
import { Author_nameContext } from "./pss.js";
import { Date_valueContext } from "./pss.js";
import { Version_valueContext } from "./pss.js";
import { See_linkContext } from "./pss.js";
import { See_descriptionContext } from "./pss.js";
import { Attention_descriptionContext } from "./pss.js";
import { File_pathContext } from "./pss.js";
import { Todo_descriptionContext } from "./pss.js";
import { Example_codeContext } from "./pss.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `pss`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class pssVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `pss.pss_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPss_entry?: (ctx: Pss_entryContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.pss`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPss?: (ctx: PssContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body?: (ctx: Package_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_declaration?: (ctx: Action_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.abstract_action_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstract_action_declaration?: (ctx: Abstract_action_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_super_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_super_spec?: (ctx: Action_super_specContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_body_item?: (ctx: Action_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_field_declaration?: (ctx: Action_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_ref_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_ref_field_declaration?: (ctx: Object_ref_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.flow_ref_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_ref_field_declaration?: (ctx: Flow_ref_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.resource_ref_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_ref_field_declaration?: (ctx: Resource_ref_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.flow_object_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_object_type?: (ctx: Flow_object_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.resource_object_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_object_type?: (ctx: Resource_object_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_ref_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_ref_field?: (ctx: Object_ref_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_handle_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_handle_declaration?: (ctx: Action_handle_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_instantiation?: (ctx: Action_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_data_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_data_field?: (ctx: Activity_data_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_scheduling_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_scheduling_constraint?: (ctx: Activity_scheduling_constraintContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_declaration?: (ctx: Activity_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_stmt?: (ctx: Activity_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.labeled_activity_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeled_activity_stmt?: (ctx: Labeled_activity_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_action_traversal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_action_traversal_stmt?: (ctx: Activity_action_traversal_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_constraints_or_empty?: (ctx: Inline_constraints_or_emptyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_sequence_block_stmt?: (ctx: Activity_sequence_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_parallel_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_parallel_stmt?: (ctx: Activity_parallel_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_schedule_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_schedule_stmt?: (ctx: Activity_schedule_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_join_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_join_spec?: (ctx: Activity_join_specContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_join_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_join_branch?: (ctx: Activity_join_branchContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_join_select`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_join_select?: (ctx: Activity_join_selectContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_join_none`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_join_none?: (ctx: Activity_join_noneContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_join_first`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_join_first?: (ctx: Activity_join_firstContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_repeat_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_repeat_stmt?: (ctx: Activity_repeat_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_foreach_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_foreach_stmt?: (ctx: Activity_foreach_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_select_stmt?: (ctx: Activity_select_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.select_branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_branch?: (ctx: Select_branchContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_if_else_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_if_else_stmt?: (ctx: Activity_if_else_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_match_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_match_stmt?: (ctx: Activity_match_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.match_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_expression?: (ctx: Match_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.match_choice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_choice?: (ctx: Match_choiceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_replicate_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_replicate_stmt?: (ctx: Activity_replicate_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_super_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_super_stmt?: (ctx: Activity_super_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_atomic_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_atomic_block_stmt?: (ctx: Activity_atomic_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_bind_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_bind_stmt?: (ctx: Activity_bind_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_bind_item_or_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_bind_item_or_list?: (ctx: Activity_bind_item_or_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.activity_constraint_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivity_constraint_stmt?: (ctx: Activity_constraint_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.symbol_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol_declaration?: (ctx: Symbol_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.symbol_paramlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol_paramlist?: (ctx: Symbol_paramlistContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.symbol_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol_param?: (ctx: Symbol_paramContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.cover_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCover_stmt?: (ctx: Cover_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_declaration?: (ctx: Monitor_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.abstract_monitor_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstract_monitor_declaration?: (ctx: Abstract_monitor_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_super_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_super_spec?: (ctx: Monitor_super_specContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_body_item?: (ctx: Monitor_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_field_declaration?: (ctx: Monitor_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_declaration?: (ctx: Monitor_activity_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_stmt?: (ctx: Monitor_activity_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.labeled_monitor_activity_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeled_monitor_activity_stmt?: (ctx: Labeled_monitor_activity_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_handle_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_handle_declaration?: (ctx: Monitor_handle_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_instantiation?: (ctx: Monitor_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_sequence_block_stmt?: (ctx: Monitor_activity_sequence_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_concat_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_concat_stmt?: (ctx: Monitor_activity_concat_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_eventually_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_eventually_stmt?: (ctx: Monitor_activity_eventually_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_overlap_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_overlap_stmt?: (ctx: Monitor_activity_overlap_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_select_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_select_stmt?: (ctx: Monitor_activity_select_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_schedule_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_schedule_stmt?: (ctx: Monitor_activity_schedule_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_monitor_traversal_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_monitor_traversal_stmt?: (ctx: Monitor_activity_monitor_traversal_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_inline_constraints_or_empty?: (ctx: Monitor_inline_constraints_or_emptyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_activity_constraint_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_activity_constraint_stmt?: (ctx: Monitor_activity_constraint_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_constraint_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_constraint_declaration?: (ctx: Monitor_constraint_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_constraint_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_constraint_set?: (ctx: Monitor_constraint_setContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_constraint_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_constraint_block?: (ctx: Monitor_constraint_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_constraint_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_constraint_body_item?: (ctx: Monitor_constraint_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_declaration?: (ctx: Component_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_super_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_super_spec?: (ctx: Component_super_specContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_body_item?: (ctx: Component_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_data_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_data_declaration?: (ctx: Component_data_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_pool_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_pool_declaration?: (ctx: Component_pool_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_bind_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_bind_stmt?: (ctx: Object_bind_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_bind_item_or_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_bind_item_or_list?: (ctx: Object_bind_item_or_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_bind_item_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_bind_item_path?: (ctx: Object_bind_item_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_path_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_path_elem?: (ctx: Component_path_elemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_bind_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_bind_item?: (ctx: Object_bind_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body_compile_if?: (ctx: Package_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_body_compile_if?: (ctx: Monitor_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_body_compile_if?: (ctx: Action_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_body_compile_if?: (ctx: Component_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_body_compile_if?: (ctx: Struct_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_compile_if?: (ctx: Procedural_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_body_compile_if?: (ctx: Constraint_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_body_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_body_compile_if?: (ctx: Covergroup_body_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.override_compile_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride_compile_if?: (ctx: Override_compile_ifContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body_compile_if_item?: (ctx: Package_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_body_compile_if_item?: (ctx: Action_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_body_compile_if_item?: (ctx: Monitor_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_body_compile_if_item?: (ctx: Component_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_body_compile_if_item?: (ctx: Struct_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_compile_if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_compile_if_stmt?: (ctx: Procedural_compile_if_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_body_compile_if_item?: (ctx: Constraint_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_body_compile_if_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_body_compile_if_item?: (ctx: Covergroup_body_compile_if_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.override_compile_if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride_compile_if_stmt?: (ctx: Override_compile_if_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.compile_has_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompile_has_expr?: (ctx: Compile_has_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.compile_assert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompile_assert_stmt?: (ctx: Compile_assert_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_declaration?: (ctx: Constraint_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_set?: (ctx: Constraint_setContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_block?: (ctx: Constraint_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constraint_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint_body_item?: (ctx: Constraint_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.expression_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_constraint_item?: (ctx: Expression_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.foreach_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeach_constraint_item?: (ctx: Foreach_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.forall_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForall_constraint_item?: (ctx: Forall_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.if_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_constraint_item?: (ctx: If_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.implication_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplication_constraint_item?: (ctx: Implication_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.unique_constraint_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnique_constraint_item?: (ctx: Unique_constraint_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.dist_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDist_directive?: (ctx: Dist_directiveContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.dist_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDist_list?: (ctx: Dist_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.dist_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDist_item?: (ctx: Dist_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.dist_weight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDist_weight?: (ctx: Dist_weightContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_declaration?: (ctx: Covergroup_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_port?: (ctx: Covergroup_portContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_body_item?: (ctx: Covergroup_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_option?: (ctx: Covergroup_optionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_instantiation?: (ctx: Covergroup_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.inline_covergroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_covergroup?: (ctx: Inline_covergroupContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_type_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_type_instantiation?: (ctx: Covergroup_type_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_portmap_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_portmap_list?: (ctx: Covergroup_portmap_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_portmap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_portmap?: (ctx: Covergroup_portmapContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_options_or_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_options_or_empty?: (ctx: Covergroup_options_or_emptyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_coverpoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_coverpoint?: (ctx: Covergroup_coverpointContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bins_or_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBins_or_empty?: (ctx: Bins_or_emptyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_coverpoint_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_coverpoint_body_item?: (ctx: Covergroup_coverpoint_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_coverpoint_binspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_coverpoint_binspec?: (ctx: Covergroup_coverpoint_binspecContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.coverpoint_bins`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoverpoint_bins?: (ctx: Coverpoint_binsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_range_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_range_list?: (ctx: Covergroup_range_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_value_range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_value_range?: (ctx: Covergroup_value_rangeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bins_keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBins_keyword?: (ctx: Bins_keywordContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_expression?: (ctx: Covergroup_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_cross`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_cross?: (ctx: Covergroup_crossContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.cross_item_or_null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCross_item_or_null?: (ctx: Cross_item_or_nullContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_cross_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_cross_body_item?: (ctx: Covergroup_cross_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_cross_binspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_cross_binspec?: (ctx: Covergroup_cross_binspecContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.data_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_declaration?: (ctx: Data_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.data_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_instantiation?: (ctx: Data_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.array_dim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_dim?: (ctx: Array_dimContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.attr_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_field?: (ctx: Attr_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.access_modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_modifier?: (ctx: Access_modifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.attr_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr_group?: (ctx: Attr_groupContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.data_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_type?: (ctx: Data_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.scalar_data_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar_data_type?: (ctx: Scalar_data_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.casting_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCasting_type?: (ctx: Casting_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.chandle_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChandle_type?: (ctx: Chandle_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.integer_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_type?: (ctx: Integer_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.integer_atom_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_atom_type?: (ctx: Integer_atom_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.domain_open_range_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomain_open_range_list?: (ctx: Domain_open_range_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.domain_open_range_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomain_open_range_value?: (ctx: Domain_open_range_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.string_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_type?: (ctx: String_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bool_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_type?: (ctx: Bool_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.enum_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_declaration?: (ctx: Enum_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.enum_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_item?: (ctx: Enum_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.enum_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_type?: (ctx: Enum_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.float_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_type?: (ctx: Float_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.collection_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_type?: (ctx: Collection_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.array_size_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_size_expression?: (ctx: Array_size_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reference_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference_type?: (ctx: Reference_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.typedef_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedef_declaration?: (ctx: Typedef_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.exec_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_block_stmt?: (ctx: Exec_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.exec_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_block?: (ctx: Exec_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.exec_kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_kind?: (ctx: Exec_kindContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.exec_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_stmt?: (ctx: Exec_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.exec_super_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_super_stmt?: (ctx: Exec_super_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.target_code_exec_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_code_exec_block?: (ctx: Target_code_exec_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.target_file_exec_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_file_exec_block?: (ctx: Target_file_exec_blockContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_expression?: (ctx: Constant_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.logical_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_expression?: (ctx: Logical_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bitwise_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_expression?: (ctx: Bitwise_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.power_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower_expression?: (ctx: Power_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.power_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower_op?: (ctx: Power_opContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.binary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_operator?: (ctx: Binary_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.assign_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_op?: (ctx: Assign_opContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.parenthesis_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesis_expressions?: (ctx: Parenthesis_expressionsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.mul_div`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul_div?: (ctx: Mul_divContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.add_sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_sub?: (ctx: Add_subContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.shifting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShifting?: (ctx: ShiftingContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.in_statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_statements?: (ctx: In_statementsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.logical_compare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_compare?: (ctx: Logical_compareContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.equality_compare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_compare?: (ctx: Equality_compareContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bitwise_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_and?: (ctx: Bitwise_andContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bitwise_xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_xor?: (ctx: Bitwise_xorContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_or?: (ctx: Bitwise_orContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.logical_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_and?: (ctx: Logical_andContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.logical_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_or?: (ctx: Logical_orContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.open_range_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_range_value?: (ctx: Open_range_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.in_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_expression?: (ctx: In_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.open_range_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_range_list?: (ctx: Open_range_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.collection_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_expression?: (ctx: Collection_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.cast_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast_expression?: (ctx: Cast_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.ref_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef_path?: (ctx: Ref_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlice?: (ctx: SliceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.static_ref_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatic_ref_path?: (ctx: Static_ref_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bit_slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBit_slice?: (ctx: Bit_sliceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.string_slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_slice?: (ctx: String_sliceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_ref_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_ref_path?: (ctx: Function_ref_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_params?: (ctx: Function_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.symbol_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol_call?: (ctx: Symbol_callContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameter_list?: (ctx: Function_parameter_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.filename_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilename_string?: (ctx: Filename_stringContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_extension?: (ctx: Action_extensionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.comments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComments?: (ctx: CommentsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_function?: (ctx: Import_functionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.target_template_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_template_function?: (ctx: Target_template_functionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_class_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_class_decl?: (ctx: Import_class_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_class_extends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_class_extends?: (ctx: Import_class_extendsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_class_function_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_class_function_decl?: (ctx: Import_class_function_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.export_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExport_action?: (ctx: Export_actionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_function?: (ctx: Procedural_functionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_decl?: (ctx: Function_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.platform_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlatform_qualifier?: (ctx: Platform_qualifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_prototype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_prototype?: (ctx: Function_prototypeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_return_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_return_type?: (ctx: Function_return_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_parameter_list_prototype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameter_list_prototype?: (ctx: Function_parameter_list_prototypeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameter?: (ctx: Function_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_parameter_dir`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameter_dir?: (ctx: Function_parameter_dirContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.varargs_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarargs_parameter?: (ctx: Varargs_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_call_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call_params?: (ctx: Function_call_paramsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.hierarchical_id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_id_list?: (ctx: Hierarchical_id_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.hierarchical_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchical_id?: (ctx: Hierarchical_idContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.member_path_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_path_elem?: (ctx: Member_path_elemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_identifier?: (ctx: Action_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_handle_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_handle_identifier?: (ctx: Action_handle_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_identifier?: (ctx: Component_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covercross_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovercross_identifier?: (ctx: Covercross_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_identifier?: (ctx: Covergroup_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.coverpoint_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoverpoint_identifier?: (ctx: Coverpoint_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.enum_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_identifier?: (ctx: Enum_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_identifier?: (ctx: Function_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_class_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_class_identifier?: (ctx: Import_class_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.index_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_identifier?: (ctx: Index_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.iterator_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterator_identifier?: (ctx: Iterator_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.label_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_identifier?: (ctx: Label_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.language_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguage_identifier?: (ctx: Language_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_identifier?: (ctx: Monitor_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_identifier?: (ctx: Package_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_identifier?: (ctx: Struct_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_kind_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_kind_identifier?: (ctx: Struct_kind_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.symbol_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol_identifier?: (ctx: Symbol_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_identifier?: (ctx: Type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_identifier_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_identifier_elem?: (ctx: Type_identifier_elemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.action_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction_type_identifier?: (ctx: Action_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.buffer_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuffer_type_identifier?: (ctx: Buffer_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.component_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent_type_identifier?: (ctx: Component_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.covergroup_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCovergroup_type_identifier?: (ctx: Covergroup_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.enum_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_type_identifier?: (ctx: Enum_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.monitor_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonitor_type_identifier?: (ctx: Monitor_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.resource_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource_type_identifier?: (ctx: Resource_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.state_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_type_identifier?: (ctx: State_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.stream_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStream_type_identifier?: (ctx: Stream_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.entity_type_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_type_identifier?: (ctx: Entity_type_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.integer_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_number?: (ctx: Integer_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.based_bin_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBased_bin_number?: (ctx: Based_bin_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.based_oct_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBased_oct_number?: (ctx: Based_oct_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.based_dec_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBased_dec_number?: (ctx: Based_dec_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.based_hex_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBased_hex_number?: (ctx: Based_hex_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.floating_point_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_number?: (ctx: Floating_point_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.unsigned_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsigned_number?: (ctx: Unsigned_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.floating_point_dec_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_dec_number?: (ctx: Floating_point_dec_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.floating_point_sci_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_sci_number?: (ctx: Floating_point_sci_numberContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.aggregate_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_literal?: (ctx: Aggregate_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.empty_aggregate_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_aggregate_literal?: (ctx: Empty_aggregate_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.value_list_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_list_literal?: (ctx: Value_list_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.map_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_literal?: (ctx: Map_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.map_literal_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_literal_item?: (ctx: Map_literal_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_literal?: (ctx: Struct_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_literal_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_literal_item?: (ctx: Struct_literal_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bool_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_literal?: (ctx: Bool_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.null_ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_ref?: (ctx: Null_refContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.override_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride_declaration?: (ctx: Override_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.override_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverride_stmt?: (ctx: Override_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_override?: (ctx: Type_overrideContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.instance_override`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstance_override?: (ctx: Instance_overrideContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_declaration?: (ctx: Package_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_id_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_id_path?: (ctx: Package_id_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_body_item?: (ctx: Package_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.import_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_import_pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_import_pattern?: (ctx: Package_import_patternContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_import_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_import_qualifier?: (ctx: Package_import_qualifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_import_wildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_import_wildcard?: (ctx: Package_import_wildcardContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.package_import_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackage_import_alias?: (ctx: Package_import_aliasContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.extend_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtend_stmt?: (ctx: Extend_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.const_field_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_field_declaration?: (ctx: Const_field_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.stmt_terminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_terminator?: (ctx: Stmt_terminatorContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_stmt?: (ctx: Procedural_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_sequence_block_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_sequence_block_stmt?: (ctx: Procedural_sequence_block_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_data_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_data_declaration?: (ctx: Procedural_data_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_data_instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_data_instantiation?: (ctx: Procedural_data_instantiationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_assignment_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_assignment_stmt?: (ctx: Procedural_assignment_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_void_function_call_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_void_function_call_stmt?: (ctx: Procedural_void_function_call_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_return_stmt?: (ctx: Procedural_return_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_repeat_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_repeat_stmt?: (ctx: Procedural_repeat_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_foreach_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_foreach_stmt?: (ctx: Procedural_foreach_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_if_else_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_if_else_stmt?: (ctx: Procedural_if_else_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_match_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_match_stmt?: (ctx: Procedural_match_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_match_choice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_match_choice?: (ctx: Procedural_match_choiceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_break_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_break_stmt?: (ctx: Procedural_break_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_continue_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_continue_stmt?: (ctx: Procedural_continue_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_randomization_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_randomization_stmt?: (ctx: Procedural_randomization_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_randomization_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_randomization_target?: (ctx: Procedural_randomization_targetContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_randomization_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_randomization_term?: (ctx: Procedural_randomization_termContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.procedural_yield_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedural_yield_stmt?: (ctx: Procedural_yield_stmtContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_declaration?: (ctx: Struct_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_kind?: (ctx: Struct_kindContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.object_kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_kind?: (ctx: Object_kindContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_super_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_super_spec?: (ctx: Struct_super_specContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.struct_body_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_body_item?: (ctx: Struct_body_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.template_param_decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_param_decl_list?: (ctx: Template_param_decl_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.template_param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_param_decl?: (ctx: Template_param_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_param_decl?: (ctx: Type_param_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.generic_type_param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneric_type_param_decl?: (ctx: Generic_type_param_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.category_type_param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCategory_type_param_decl?: (ctx: Category_type_param_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_restriction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_restriction?: (ctx: Type_restrictionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.type_category`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_category?: (ctx: Type_categoryContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.value_param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_param_decl?: (ctx: Value_param_declContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.template_param_value_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_param_value_list?: (ctx: Template_param_value_listContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.template_param_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_param_value?: (ctx: Template_param_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_region_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_region_identifier?: (ctx: Addr_region_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_handle_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_handle_identifier?: (ctx: Addr_handle_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_space_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_space_identifier?: (ctx: Addr_space_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_space_traits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_space_traits?: (ctx: Addr_space_traitsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.claim_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClaim_identifier?: (ctx: Claim_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.trait_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrait_identifier?: (ctx: Trait_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.trait_property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrait_property?: (ctx: Trait_propertyContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.number_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_identifier?: (ctx: Number_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.bool_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_identifier?: (ctx: Bool_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.contiguous_addr_space_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContiguous_addr_space_def?: (ctx: Contiguous_addr_space_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_claim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_claim?: (ctx: Addr_claimContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.transparent_addr_space_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransparent_addr_space_def?: (ctx: Transparent_addr_space_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.transparent_addr_region_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransparent_addr_region_def?: (ctx: Transparent_addr_region_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_region_setting`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_region_setting?: (ctx: Addr_region_settingContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.transparent_addr_claim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransparent_addr_claim?: (ctx: Transparent_addr_claimContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.add_addr_region_nonallocatable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_addr_region_nonallocatable?: (ctx: Add_addr_region_nonallocatableContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.add_addr_region`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_addr_region?: (ctx: Add_addr_regionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.make_handle_from_claim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMake_handle_from_claim?: (ctx: Make_handle_from_claimContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.make_handle_from_handle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMake_handle_from_handle?: (ctx: Make_handle_from_handleContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_value?: (ctx: Addr_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_value_solve`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_value_solve?: (ctx: Addr_value_solveContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_value_abs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_value_abs?: (ctx: Addr_value_absContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.mem_ops`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMem_ops?: (ctx: Mem_opsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_space_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_space_def?: (ctx: Addr_space_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.addr_region_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddr_region_def?: (ctx: Addr_region_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_identifier?: (ctx: Register_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_comp_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_comp_identifier?: (ctx: Register_comp_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_group_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_group_identifier?: (ctx: Register_group_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_struct_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_struct_identifier?: (ctx: Reg_struct_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.value_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_identifier?: (ctx: Value_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.mask_struct_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMask_struct_identifier?: (ctx: Mask_struct_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.value_struct_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_struct_identifier?: (ctx: Value_struct_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.mask_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMask_identifier?: (ctx: Mask_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.field_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_identifier?: (ctx: Field_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.names_list_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNames_list_identifier?: (ctx: Names_list_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.value_list_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_list_identifier?: (ctx: Value_list_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.access_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccess_type?: (ctx: Access_typeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_length`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_length?: (ctx: Reg_lengthContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_comp_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_comp_definition?: (ctx: Register_comp_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_group_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_group_definition?: (ctx: Register_group_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_body_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_body_definition?: (ctx: Register_body_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_comp_instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_comp_instance?: (ctx: Register_comp_instanceContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_definition?: (ctx: Register_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_offset_of_instance_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_offset_of_instance_def?: (ctx: Function_offset_of_instance_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.function_offset_of_instance_arr_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_offset_of_instance_arr_def?: (ctx: Function_offset_of_instance_arr_defContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.offset_match_stmts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset_match_stmts?: (ctx: Offset_match_stmtsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.if_else_stmts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_else_stmts?: (ctx: If_else_stmtsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_match_stmts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_match_stmts?: (ctx: Reg_match_stmtsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.offset_return_items`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset_return_items?: (ctx: Offset_return_itemsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.offset_returns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset_returns?: (ctx: Offset_returnsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_function_calls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_function_calls?: (ctx: Reg_function_callsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.register_operation_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_operation_call?: (ctx: Register_operation_callContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_read`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_read?: (ctx: Reg_readContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write?: (ctx: Reg_writeContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_read_val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_read_val?: (ctx: Reg_read_valContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write_val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write_val?: (ctx: Reg_write_valContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write_masked`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write_masked?: (ctx: Reg_write_maskedContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write_val_masked`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write_val_masked?: (ctx: Reg_write_val_maskedContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write_field?: (ctx: Reg_write_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_write_fields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_write_fields?: (ctx: Reg_write_fieldsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_set_handle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_set_handle?: (ctx: Reg_set_handleContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.reg_declarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_declarations?: (ctx: Reg_declarationsContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.file_doc_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_doc_comment?: (ctx: File_doc_commentContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.documentation_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation_comment?: (ctx: Documentation_commentContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.doc_content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoc_content?: (ctx: Doc_contentContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.brief_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrief_command?: (ctx: Brief_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.param_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_command?: (ctx: Param_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.return_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_command?: (ctx: Return_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.deprecated_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeprecated_command?: (ctx: Deprecated_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.author_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthor_command?: (ctx: Author_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.date_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_command?: (ctx: Date_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.version_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion_command?: (ctx: Version_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.see_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_command?: (ctx: See_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.attention_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttention_command?: (ctx: Attention_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.file_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_command?: (ctx: File_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.todo_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodo_command?: (ctx: Todo_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.example_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExample_command?: (ctx: Example_commandContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.brief_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrief_text?: (ctx: Brief_textContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.param_identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_identifier?: (ctx: Param_identifierContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.param_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_description?: (ctx: Param_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.return_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_description?: (ctx: Return_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.deprecated_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeprecated_description?: (ctx: Deprecated_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.author_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthor_name?: (ctx: Author_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.date_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_value?: (ctx: Date_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.version_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion_value?: (ctx: Version_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.see_link`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_link?: (ctx: See_linkContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.see_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSee_description?: (ctx: See_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.attention_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttention_description?: (ctx: Attention_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.file_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_path?: (ctx: File_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.todo_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodo_description?: (ctx: Todo_descriptionContext) => Result;
	/**
	 * Visit a parse tree produced by `pss.example_code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExample_code?: (ctx: Example_codeContext) => Result;
}

