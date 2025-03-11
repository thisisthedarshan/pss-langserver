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

import {ParseTreeListener} from "antlr4";


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
import { Inout_dataContext } from "./pss.js";
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
import { Conditional_expressionContext } from "./pss.js";
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
import { Addr_region_settingContext } from "./pss.js";
import { Addr_claimContext } from "./pss.js";
import { Transparent_addr_space_defContext } from "./pss.js";
import { Transparent_addr_region_defContext } from "./pss.js";
import { Transparent_addr_region_settingContext } from "./pss.js";
import { Transparent_addr_claimContext } from "./pss.js";
import { Add_addr_region_nonallocatableContext } from "./pss.js";
import { Add_addr_regionContext } from "./pss.js";
import { Make_handle_from_claimContext } from "./pss.js";
import { Make_handle_from_handleContext } from "./pss.js";
import { Addr_valueContext } from "./pss.js";
import { Addr_value_solveContext } from "./pss.js";
import { Addr_value_absContext } from "./pss.js";
import { Mem_opsContext } from "./pss.js";
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
 * This interface defines a complete listener for a parse tree produced by
 * `pss`.
 */
export default class pssListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pss.pss_entry`.
	 * @param ctx the parse tree
	 */
	enterPss_entry?: (ctx: Pss_entryContext) => void;
	/**
	 * Exit a parse tree produced by `pss.pss_entry`.
	 * @param ctx the parse tree
	 */
	exitPss_entry?: (ctx: Pss_entryContext) => void;
	/**
	 * Enter a parse tree produced by `pss.pss`.
	 * @param ctx the parse tree
	 */
	enterPss?: (ctx: PssContext) => void;
	/**
	 * Exit a parse tree produced by `pss.pss`.
	 * @param ctx the parse tree
	 */
	exitPss?: (ctx: PssContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_body`.
	 * @param ctx the parse tree
	 */
	enterPackage_body?: (ctx: Package_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_body`.
	 * @param ctx the parse tree
	 */
	exitPackage_body?: (ctx: Package_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_declaration`.
	 * @param ctx the parse tree
	 */
	enterAction_declaration?: (ctx: Action_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_declaration`.
	 * @param ctx the parse tree
	 */
	exitAction_declaration?: (ctx: Action_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.abstract_action_declaration`.
	 * @param ctx the parse tree
	 */
	enterAbstract_action_declaration?: (ctx: Abstract_action_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.abstract_action_declaration`.
	 * @param ctx the parse tree
	 */
	exitAbstract_action_declaration?: (ctx: Abstract_action_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_super_spec`.
	 * @param ctx the parse tree
	 */
	enterAction_super_spec?: (ctx: Action_super_specContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_super_spec`.
	 * @param ctx the parse tree
	 */
	exitAction_super_spec?: (ctx: Action_super_specContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_body_item`.
	 * @param ctx the parse tree
	 */
	enterAction_body_item?: (ctx: Action_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_body_item`.
	 * @param ctx the parse tree
	 */
	exitAction_body_item?: (ctx: Action_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterAction_field_declaration?: (ctx: Action_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitAction_field_declaration?: (ctx: Action_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterObject_ref_field_declaration?: (ctx: Object_ref_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitObject_ref_field_declaration?: (ctx: Object_ref_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.flow_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterFlow_ref_field_declaration?: (ctx: Flow_ref_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.flow_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitFlow_ref_field_declaration?: (ctx: Flow_ref_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.resource_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterResource_ref_field_declaration?: (ctx: Resource_ref_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.resource_ref_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitResource_ref_field_declaration?: (ctx: Resource_ref_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.flow_object_type`.
	 * @param ctx the parse tree
	 */
	enterFlow_object_type?: (ctx: Flow_object_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.flow_object_type`.
	 * @param ctx the parse tree
	 */
	exitFlow_object_type?: (ctx: Flow_object_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.resource_object_type`.
	 * @param ctx the parse tree
	 */
	enterResource_object_type?: (ctx: Resource_object_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.resource_object_type`.
	 * @param ctx the parse tree
	 */
	exitResource_object_type?: (ctx: Resource_object_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_ref_field`.
	 * @param ctx the parse tree
	 */
	enterObject_ref_field?: (ctx: Object_ref_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_ref_field`.
	 * @param ctx the parse tree
	 */
	exitObject_ref_field?: (ctx: Object_ref_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_handle_declaration`.
	 * @param ctx the parse tree
	 */
	enterAction_handle_declaration?: (ctx: Action_handle_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_handle_declaration`.
	 * @param ctx the parse tree
	 */
	exitAction_handle_declaration?: (ctx: Action_handle_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_instantiation`.
	 * @param ctx the parse tree
	 */
	enterAction_instantiation?: (ctx: Action_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_instantiation`.
	 * @param ctx the parse tree
	 */
	exitAction_instantiation?: (ctx: Action_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_data_field`.
	 * @param ctx the parse tree
	 */
	enterActivity_data_field?: (ctx: Activity_data_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_data_field`.
	 * @param ctx the parse tree
	 */
	exitActivity_data_field?: (ctx: Activity_data_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_scheduling_constraint`.
	 * @param ctx the parse tree
	 */
	enterActivity_scheduling_constraint?: (ctx: Activity_scheduling_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_scheduling_constraint`.
	 * @param ctx the parse tree
	 */
	exitActivity_scheduling_constraint?: (ctx: Activity_scheduling_constraintContext) => void;
	/**
	 * Enter a parse tree produced by `pss.inout_data`.
	 * @param ctx the parse tree
	 */
	enterInout_data?: (ctx: Inout_dataContext) => void;
	/**
	 * Exit a parse tree produced by `pss.inout_data`.
	 * @param ctx the parse tree
	 */
	exitInout_data?: (ctx: Inout_dataContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_declaration`.
	 * @param ctx the parse tree
	 */
	enterActivity_declaration?: (ctx: Activity_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_declaration`.
	 * @param ctx the parse tree
	 */
	exitActivity_declaration?: (ctx: Activity_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_stmt?: (ctx: Activity_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_stmt?: (ctx: Activity_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.labeled_activity_stmt`.
	 * @param ctx the parse tree
	 */
	enterLabeled_activity_stmt?: (ctx: Labeled_activity_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.labeled_activity_stmt`.
	 * @param ctx the parse tree
	 */
	exitLabeled_activity_stmt?: (ctx: Labeled_activity_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_action_traversal_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_action_traversal_stmt?: (ctx: Activity_action_traversal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_action_traversal_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_action_traversal_stmt?: (ctx: Activity_action_traversal_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 */
	enterInline_constraints_or_empty?: (ctx: Inline_constraints_or_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 */
	exitInline_constraints_or_empty?: (ctx: Inline_constraints_or_emptyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_sequence_block_stmt?: (ctx: Activity_sequence_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_sequence_block_stmt?: (ctx: Activity_sequence_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_parallel_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_parallel_stmt?: (ctx: Activity_parallel_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_parallel_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_parallel_stmt?: (ctx: Activity_parallel_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_schedule_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_schedule_stmt?: (ctx: Activity_schedule_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_schedule_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_schedule_stmt?: (ctx: Activity_schedule_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_join_spec`.
	 * @param ctx the parse tree
	 */
	enterActivity_join_spec?: (ctx: Activity_join_specContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_join_spec`.
	 * @param ctx the parse tree
	 */
	exitActivity_join_spec?: (ctx: Activity_join_specContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_join_branch`.
	 * @param ctx the parse tree
	 */
	enterActivity_join_branch?: (ctx: Activity_join_branchContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_join_branch`.
	 * @param ctx the parse tree
	 */
	exitActivity_join_branch?: (ctx: Activity_join_branchContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_join_select`.
	 * @param ctx the parse tree
	 */
	enterActivity_join_select?: (ctx: Activity_join_selectContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_join_select`.
	 * @param ctx the parse tree
	 */
	exitActivity_join_select?: (ctx: Activity_join_selectContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_join_none`.
	 * @param ctx the parse tree
	 */
	enterActivity_join_none?: (ctx: Activity_join_noneContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_join_none`.
	 * @param ctx the parse tree
	 */
	exitActivity_join_none?: (ctx: Activity_join_noneContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_join_first`.
	 * @param ctx the parse tree
	 */
	enterActivity_join_first?: (ctx: Activity_join_firstContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_join_first`.
	 * @param ctx the parse tree
	 */
	exitActivity_join_first?: (ctx: Activity_join_firstContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_repeat_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_repeat_stmt?: (ctx: Activity_repeat_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_repeat_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_repeat_stmt?: (ctx: Activity_repeat_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_foreach_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_foreach_stmt?: (ctx: Activity_foreach_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_foreach_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_foreach_stmt?: (ctx: Activity_foreach_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_select_stmt?: (ctx: Activity_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_select_stmt?: (ctx: Activity_select_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.select_branch`.
	 * @param ctx the parse tree
	 */
	enterSelect_branch?: (ctx: Select_branchContext) => void;
	/**
	 * Exit a parse tree produced by `pss.select_branch`.
	 * @param ctx the parse tree
	 */
	exitSelect_branch?: (ctx: Select_branchContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_if_else_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_if_else_stmt?: (ctx: Activity_if_else_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_if_else_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_if_else_stmt?: (ctx: Activity_if_else_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_match_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_match_stmt?: (ctx: Activity_match_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_match_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_match_stmt?: (ctx: Activity_match_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.match_expression`.
	 * @param ctx the parse tree
	 */
	enterMatch_expression?: (ctx: Match_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.match_expression`.
	 * @param ctx the parse tree
	 */
	exitMatch_expression?: (ctx: Match_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.match_choice`.
	 * @param ctx the parse tree
	 */
	enterMatch_choice?: (ctx: Match_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.match_choice`.
	 * @param ctx the parse tree
	 */
	exitMatch_choice?: (ctx: Match_choiceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_replicate_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_replicate_stmt?: (ctx: Activity_replicate_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_replicate_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_replicate_stmt?: (ctx: Activity_replicate_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_super_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_super_stmt?: (ctx: Activity_super_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_super_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_super_stmt?: (ctx: Activity_super_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_atomic_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_atomic_block_stmt?: (ctx: Activity_atomic_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_atomic_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_atomic_block_stmt?: (ctx: Activity_atomic_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_bind_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_bind_stmt?: (ctx: Activity_bind_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_bind_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_bind_stmt?: (ctx: Activity_bind_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_bind_item_or_list`.
	 * @param ctx the parse tree
	 */
	enterActivity_bind_item_or_list?: (ctx: Activity_bind_item_or_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_bind_item_or_list`.
	 * @param ctx the parse tree
	 */
	exitActivity_bind_item_or_list?: (ctx: Activity_bind_item_or_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.activity_constraint_stmt`.
	 * @param ctx the parse tree
	 */
	enterActivity_constraint_stmt?: (ctx: Activity_constraint_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.activity_constraint_stmt`.
	 * @param ctx the parse tree
	 */
	exitActivity_constraint_stmt?: (ctx: Activity_constraint_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.symbol_declaration`.
	 * @param ctx the parse tree
	 */
	enterSymbol_declaration?: (ctx: Symbol_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.symbol_declaration`.
	 * @param ctx the parse tree
	 */
	exitSymbol_declaration?: (ctx: Symbol_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.symbol_paramlist`.
	 * @param ctx the parse tree
	 */
	enterSymbol_paramlist?: (ctx: Symbol_paramlistContext) => void;
	/**
	 * Exit a parse tree produced by `pss.symbol_paramlist`.
	 * @param ctx the parse tree
	 */
	exitSymbol_paramlist?: (ctx: Symbol_paramlistContext) => void;
	/**
	 * Enter a parse tree produced by `pss.symbol_param`.
	 * @param ctx the parse tree
	 */
	enterSymbol_param?: (ctx: Symbol_paramContext) => void;
	/**
	 * Exit a parse tree produced by `pss.symbol_param`.
	 * @param ctx the parse tree
	 */
	exitSymbol_param?: (ctx: Symbol_paramContext) => void;
	/**
	 * Enter a parse tree produced by `pss.cover_stmt`.
	 * @param ctx the parse tree
	 */
	enterCover_stmt?: (ctx: Cover_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.cover_stmt`.
	 * @param ctx the parse tree
	 */
	exitCover_stmt?: (ctx: Cover_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_declaration`.
	 * @param ctx the parse tree
	 */
	enterMonitor_declaration?: (ctx: Monitor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_declaration`.
	 * @param ctx the parse tree
	 */
	exitMonitor_declaration?: (ctx: Monitor_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.abstract_monitor_declaration`.
	 * @param ctx the parse tree
	 */
	enterAbstract_monitor_declaration?: (ctx: Abstract_monitor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.abstract_monitor_declaration`.
	 * @param ctx the parse tree
	 */
	exitAbstract_monitor_declaration?: (ctx: Abstract_monitor_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_super_spec`.
	 * @param ctx the parse tree
	 */
	enterMonitor_super_spec?: (ctx: Monitor_super_specContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_super_spec`.
	 * @param ctx the parse tree
	 */
	exitMonitor_super_spec?: (ctx: Monitor_super_specContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_body_item`.
	 * @param ctx the parse tree
	 */
	enterMonitor_body_item?: (ctx: Monitor_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_body_item`.
	 * @param ctx the parse tree
	 */
	exitMonitor_body_item?: (ctx: Monitor_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterMonitor_field_declaration?: (ctx: Monitor_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitMonitor_field_declaration?: (ctx: Monitor_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_declaration`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_declaration?: (ctx: Monitor_activity_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_declaration`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_declaration?: (ctx: Monitor_activity_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_stmt?: (ctx: Monitor_activity_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_stmt?: (ctx: Monitor_activity_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.labeled_monitor_activity_stmt`.
	 * @param ctx the parse tree
	 */
	enterLabeled_monitor_activity_stmt?: (ctx: Labeled_monitor_activity_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.labeled_monitor_activity_stmt`.
	 * @param ctx the parse tree
	 */
	exitLabeled_monitor_activity_stmt?: (ctx: Labeled_monitor_activity_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_handle_declaration`.
	 * @param ctx the parse tree
	 */
	enterMonitor_handle_declaration?: (ctx: Monitor_handle_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_handle_declaration`.
	 * @param ctx the parse tree
	 */
	exitMonitor_handle_declaration?: (ctx: Monitor_handle_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_instantiation`.
	 * @param ctx the parse tree
	 */
	enterMonitor_instantiation?: (ctx: Monitor_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_instantiation`.
	 * @param ctx the parse tree
	 */
	exitMonitor_instantiation?: (ctx: Monitor_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_sequence_block_stmt?: (ctx: Monitor_activity_sequence_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_sequence_block_stmt?: (ctx: Monitor_activity_sequence_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_concat_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_concat_stmt?: (ctx: Monitor_activity_concat_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_concat_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_concat_stmt?: (ctx: Monitor_activity_concat_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_eventually_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_eventually_stmt?: (ctx: Monitor_activity_eventually_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_eventually_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_eventually_stmt?: (ctx: Monitor_activity_eventually_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_overlap_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_overlap_stmt?: (ctx: Monitor_activity_overlap_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_overlap_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_overlap_stmt?: (ctx: Monitor_activity_overlap_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_select_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_select_stmt?: (ctx: Monitor_activity_select_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_select_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_select_stmt?: (ctx: Monitor_activity_select_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_schedule_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_schedule_stmt?: (ctx: Monitor_activity_schedule_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_schedule_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_schedule_stmt?: (ctx: Monitor_activity_schedule_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_monitor_traversal_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_monitor_traversal_stmt?: (ctx: Monitor_activity_monitor_traversal_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_monitor_traversal_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_monitor_traversal_stmt?: (ctx: Monitor_activity_monitor_traversal_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 */
	enterMonitor_inline_constraints_or_empty?: (ctx: Monitor_inline_constraints_or_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_inline_constraints_or_empty`.
	 * @param ctx the parse tree
	 */
	exitMonitor_inline_constraints_or_empty?: (ctx: Monitor_inline_constraints_or_emptyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_activity_constraint_stmt`.
	 * @param ctx the parse tree
	 */
	enterMonitor_activity_constraint_stmt?: (ctx: Monitor_activity_constraint_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_activity_constraint_stmt`.
	 * @param ctx the parse tree
	 */
	exitMonitor_activity_constraint_stmt?: (ctx: Monitor_activity_constraint_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_constraint_declaration`.
	 * @param ctx the parse tree
	 */
	enterMonitor_constraint_declaration?: (ctx: Monitor_constraint_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_constraint_declaration`.
	 * @param ctx the parse tree
	 */
	exitMonitor_constraint_declaration?: (ctx: Monitor_constraint_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_constraint_set`.
	 * @param ctx the parse tree
	 */
	enterMonitor_constraint_set?: (ctx: Monitor_constraint_setContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_constraint_set`.
	 * @param ctx the parse tree
	 */
	exitMonitor_constraint_set?: (ctx: Monitor_constraint_setContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_constraint_block`.
	 * @param ctx the parse tree
	 */
	enterMonitor_constraint_block?: (ctx: Monitor_constraint_blockContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_constraint_block`.
	 * @param ctx the parse tree
	 */
	exitMonitor_constraint_block?: (ctx: Monitor_constraint_blockContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_constraint_body_item`.
	 * @param ctx the parse tree
	 */
	enterMonitor_constraint_body_item?: (ctx: Monitor_constraint_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_constraint_body_item`.
	 * @param ctx the parse tree
	 */
	exitMonitor_constraint_body_item?: (ctx: Monitor_constraint_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_declaration`.
	 * @param ctx the parse tree
	 */
	enterComponent_declaration?: (ctx: Component_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_declaration`.
	 * @param ctx the parse tree
	 */
	exitComponent_declaration?: (ctx: Component_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_super_spec`.
	 * @param ctx the parse tree
	 */
	enterComponent_super_spec?: (ctx: Component_super_specContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_super_spec`.
	 * @param ctx the parse tree
	 */
	exitComponent_super_spec?: (ctx: Component_super_specContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_body_item`.
	 * @param ctx the parse tree
	 */
	enterComponent_body_item?: (ctx: Component_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_body_item`.
	 * @param ctx the parse tree
	 */
	exitComponent_body_item?: (ctx: Component_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_data_declaration`.
	 * @param ctx the parse tree
	 */
	enterComponent_data_declaration?: (ctx: Component_data_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_data_declaration`.
	 * @param ctx the parse tree
	 */
	exitComponent_data_declaration?: (ctx: Component_data_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_pool_declaration`.
	 * @param ctx the parse tree
	 */
	enterComponent_pool_declaration?: (ctx: Component_pool_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_pool_declaration`.
	 * @param ctx the parse tree
	 */
	exitComponent_pool_declaration?: (ctx: Component_pool_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_bind_stmt`.
	 * @param ctx the parse tree
	 */
	enterObject_bind_stmt?: (ctx: Object_bind_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_bind_stmt`.
	 * @param ctx the parse tree
	 */
	exitObject_bind_stmt?: (ctx: Object_bind_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_bind_item_or_list`.
	 * @param ctx the parse tree
	 */
	enterObject_bind_item_or_list?: (ctx: Object_bind_item_or_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_bind_item_or_list`.
	 * @param ctx the parse tree
	 */
	exitObject_bind_item_or_list?: (ctx: Object_bind_item_or_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_bind_item_path`.
	 * @param ctx the parse tree
	 */
	enterObject_bind_item_path?: (ctx: Object_bind_item_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_bind_item_path`.
	 * @param ctx the parse tree
	 */
	exitObject_bind_item_path?: (ctx: Object_bind_item_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_path_elem`.
	 * @param ctx the parse tree
	 */
	enterComponent_path_elem?: (ctx: Component_path_elemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_path_elem`.
	 * @param ctx the parse tree
	 */
	exitComponent_path_elem?: (ctx: Component_path_elemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_bind_item`.
	 * @param ctx the parse tree
	 */
	enterObject_bind_item?: (ctx: Object_bind_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_bind_item`.
	 * @param ctx the parse tree
	 */
	exitObject_bind_item?: (ctx: Object_bind_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterPackage_body_compile_if?: (ctx: Package_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitPackage_body_compile_if?: (ctx: Package_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterMonitor_body_compile_if?: (ctx: Monitor_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitMonitor_body_compile_if?: (ctx: Monitor_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterAction_body_compile_if?: (ctx: Action_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitAction_body_compile_if?: (ctx: Action_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterComponent_body_compile_if?: (ctx: Component_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitComponent_body_compile_if?: (ctx: Component_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterStruct_body_compile_if?: (ctx: Struct_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitStruct_body_compile_if?: (ctx: Struct_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_compile_if`.
	 * @param ctx the parse tree
	 */
	enterProcedural_compile_if?: (ctx: Procedural_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_compile_if`.
	 * @param ctx the parse tree
	 */
	exitProcedural_compile_if?: (ctx: Procedural_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterConstraint_body_compile_if?: (ctx: Constraint_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitConstraint_body_compile_if?: (ctx: Constraint_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_body_compile_if`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_body_compile_if?: (ctx: Covergroup_body_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_body_compile_if`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_body_compile_if?: (ctx: Covergroup_body_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.override_compile_if`.
	 * @param ctx the parse tree
	 */
	enterOverride_compile_if?: (ctx: Override_compile_ifContext) => void;
	/**
	 * Exit a parse tree produced by `pss.override_compile_if`.
	 * @param ctx the parse tree
	 */
	exitOverride_compile_if?: (ctx: Override_compile_ifContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_body_compile_if_item?: (ctx: Package_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_body_compile_if_item?: (ctx: Package_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterAction_body_compile_if_item?: (ctx: Action_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitAction_body_compile_if_item?: (ctx: Action_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterMonitor_body_compile_if_item?: (ctx: Monitor_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitMonitor_body_compile_if_item?: (ctx: Monitor_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterComponent_body_compile_if_item?: (ctx: Component_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitComponent_body_compile_if_item?: (ctx: Component_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterStruct_body_compile_if_item?: (ctx: Struct_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitStruct_body_compile_if_item?: (ctx: Struct_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_compile_if_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_compile_if_stmt?: (ctx: Procedural_compile_if_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_compile_if_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_compile_if_stmt?: (ctx: Procedural_compile_if_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterConstraint_body_compile_if_item?: (ctx: Constraint_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitConstraint_body_compile_if_item?: (ctx: Constraint_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_body_compile_if_item?: (ctx: Covergroup_body_compile_if_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_body_compile_if_item`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_body_compile_if_item?: (ctx: Covergroup_body_compile_if_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.override_compile_if_stmt`.
	 * @param ctx the parse tree
	 */
	enterOverride_compile_if_stmt?: (ctx: Override_compile_if_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.override_compile_if_stmt`.
	 * @param ctx the parse tree
	 */
	exitOverride_compile_if_stmt?: (ctx: Override_compile_if_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.compile_has_expr`.
	 * @param ctx the parse tree
	 */
	enterCompile_has_expr?: (ctx: Compile_has_exprContext) => void;
	/**
	 * Exit a parse tree produced by `pss.compile_has_expr`.
	 * @param ctx the parse tree
	 */
	exitCompile_has_expr?: (ctx: Compile_has_exprContext) => void;
	/**
	 * Enter a parse tree produced by `pss.compile_assert_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompile_assert_stmt?: (ctx: Compile_assert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.compile_assert_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompile_assert_stmt?: (ctx: Compile_assert_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstraint_declaration?: (ctx: Constraint_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstraint_declaration?: (ctx: Constraint_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_set`.
	 * @param ctx the parse tree
	 */
	enterConstraint_set?: (ctx: Constraint_setContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_set`.
	 * @param ctx the parse tree
	 */
	exitConstraint_set?: (ctx: Constraint_setContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_block`.
	 * @param ctx the parse tree
	 */
	enterConstraint_block?: (ctx: Constraint_blockContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_block`.
	 * @param ctx the parse tree
	 */
	exitConstraint_block?: (ctx: Constraint_blockContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constraint_body_item`.
	 * @param ctx the parse tree
	 */
	enterConstraint_body_item?: (ctx: Constraint_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constraint_body_item`.
	 * @param ctx the parse tree
	 */
	exitConstraint_body_item?: (ctx: Constraint_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.expression_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterExpression_constraint_item?: (ctx: Expression_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.expression_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitExpression_constraint_item?: (ctx: Expression_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.foreach_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterForeach_constraint_item?: (ctx: Foreach_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.foreach_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitForeach_constraint_item?: (ctx: Foreach_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.forall_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterForall_constraint_item?: (ctx: Forall_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.forall_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitForall_constraint_item?: (ctx: Forall_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.if_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterIf_constraint_item?: (ctx: If_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.if_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitIf_constraint_item?: (ctx: If_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.implication_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterImplication_constraint_item?: (ctx: Implication_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.implication_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitImplication_constraint_item?: (ctx: Implication_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.unique_constraint_item`.
	 * @param ctx the parse tree
	 */
	enterUnique_constraint_item?: (ctx: Unique_constraint_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.unique_constraint_item`.
	 * @param ctx the parse tree
	 */
	exitUnique_constraint_item?: (ctx: Unique_constraint_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.dist_directive`.
	 * @param ctx the parse tree
	 */
	enterDist_directive?: (ctx: Dist_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `pss.dist_directive`.
	 * @param ctx the parse tree
	 */
	exitDist_directive?: (ctx: Dist_directiveContext) => void;
	/**
	 * Enter a parse tree produced by `pss.dist_list`.
	 * @param ctx the parse tree
	 */
	enterDist_list?: (ctx: Dist_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.dist_list`.
	 * @param ctx the parse tree
	 */
	exitDist_list?: (ctx: Dist_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.dist_item`.
	 * @param ctx the parse tree
	 */
	enterDist_item?: (ctx: Dist_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.dist_item`.
	 * @param ctx the parse tree
	 */
	exitDist_item?: (ctx: Dist_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.dist_weight`.
	 * @param ctx the parse tree
	 */
	enterDist_weight?: (ctx: Dist_weightContext) => void;
	/**
	 * Exit a parse tree produced by `pss.dist_weight`.
	 * @param ctx the parse tree
	 */
	exitDist_weight?: (ctx: Dist_weightContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_declaration`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_declaration?: (ctx: Covergroup_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_declaration`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_declaration?: (ctx: Covergroup_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_port`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_port?: (ctx: Covergroup_portContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_port`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_port?: (ctx: Covergroup_portContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_body_item`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_body_item?: (ctx: Covergroup_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_body_item`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_body_item?: (ctx: Covergroup_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_option`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_option?: (ctx: Covergroup_optionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_option`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_option?: (ctx: Covergroup_optionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_instantiation`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_instantiation?: (ctx: Covergroup_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_instantiation`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_instantiation?: (ctx: Covergroup_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.inline_covergroup`.
	 * @param ctx the parse tree
	 */
	enterInline_covergroup?: (ctx: Inline_covergroupContext) => void;
	/**
	 * Exit a parse tree produced by `pss.inline_covergroup`.
	 * @param ctx the parse tree
	 */
	exitInline_covergroup?: (ctx: Inline_covergroupContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_type_instantiation`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_type_instantiation?: (ctx: Covergroup_type_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_type_instantiation`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_type_instantiation?: (ctx: Covergroup_type_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_portmap_list`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_portmap_list?: (ctx: Covergroup_portmap_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_portmap_list`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_portmap_list?: (ctx: Covergroup_portmap_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_portmap`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_portmap?: (ctx: Covergroup_portmapContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_portmap`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_portmap?: (ctx: Covergroup_portmapContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_options_or_empty`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_options_or_empty?: (ctx: Covergroup_options_or_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_options_or_empty`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_options_or_empty?: (ctx: Covergroup_options_or_emptyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_coverpoint`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_coverpoint?: (ctx: Covergroup_coverpointContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_coverpoint`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_coverpoint?: (ctx: Covergroup_coverpointContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bins_or_empty`.
	 * @param ctx the parse tree
	 */
	enterBins_or_empty?: (ctx: Bins_or_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bins_or_empty`.
	 * @param ctx the parse tree
	 */
	exitBins_or_empty?: (ctx: Bins_or_emptyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_coverpoint_body_item`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_coverpoint_body_item?: (ctx: Covergroup_coverpoint_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_coverpoint_body_item`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_coverpoint_body_item?: (ctx: Covergroup_coverpoint_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_coverpoint_binspec`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_coverpoint_binspec?: (ctx: Covergroup_coverpoint_binspecContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_coverpoint_binspec`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_coverpoint_binspec?: (ctx: Covergroup_coverpoint_binspecContext) => void;
	/**
	 * Enter a parse tree produced by `pss.coverpoint_bins`.
	 * @param ctx the parse tree
	 */
	enterCoverpoint_bins?: (ctx: Coverpoint_binsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.coverpoint_bins`.
	 * @param ctx the parse tree
	 */
	exitCoverpoint_bins?: (ctx: Coverpoint_binsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_range_list`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_range_list?: (ctx: Covergroup_range_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_range_list`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_range_list?: (ctx: Covergroup_range_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_value_range`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_value_range?: (ctx: Covergroup_value_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_value_range`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_value_range?: (ctx: Covergroup_value_rangeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bins_keyword`.
	 * @param ctx the parse tree
	 */
	enterBins_keyword?: (ctx: Bins_keywordContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bins_keyword`.
	 * @param ctx the parse tree
	 */
	exitBins_keyword?: (ctx: Bins_keywordContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_expression`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_expression?: (ctx: Covergroup_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_expression`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_expression?: (ctx: Covergroup_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_cross`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_cross?: (ctx: Covergroup_crossContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_cross`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_cross?: (ctx: Covergroup_crossContext) => void;
	/**
	 * Enter a parse tree produced by `pss.cross_item_or_null`.
	 * @param ctx the parse tree
	 */
	enterCross_item_or_null?: (ctx: Cross_item_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `pss.cross_item_or_null`.
	 * @param ctx the parse tree
	 */
	exitCross_item_or_null?: (ctx: Cross_item_or_nullContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_cross_body_item`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_cross_body_item?: (ctx: Covergroup_cross_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_cross_body_item`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_cross_body_item?: (ctx: Covergroup_cross_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_cross_binspec`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_cross_binspec?: (ctx: Covergroup_cross_binspecContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_cross_binspec`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_cross_binspec?: (ctx: Covergroup_cross_binspecContext) => void;
	/**
	 * Enter a parse tree produced by `pss.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration?: (ctx: Data_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration?: (ctx: Data_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.data_instantiation`.
	 * @param ctx the parse tree
	 */
	enterData_instantiation?: (ctx: Data_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.data_instantiation`.
	 * @param ctx the parse tree
	 */
	exitData_instantiation?: (ctx: Data_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.array_dim`.
	 * @param ctx the parse tree
	 */
	enterArray_dim?: (ctx: Array_dimContext) => void;
	/**
	 * Exit a parse tree produced by `pss.array_dim`.
	 * @param ctx the parse tree
	 */
	exitArray_dim?: (ctx: Array_dimContext) => void;
	/**
	 * Enter a parse tree produced by `pss.attr_field`.
	 * @param ctx the parse tree
	 */
	enterAttr_field?: (ctx: Attr_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `pss.attr_field`.
	 * @param ctx the parse tree
	 */
	exitAttr_field?: (ctx: Attr_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `pss.access_modifier`.
	 * @param ctx the parse tree
	 */
	enterAccess_modifier?: (ctx: Access_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.access_modifier`.
	 * @param ctx the parse tree
	 */
	exitAccess_modifier?: (ctx: Access_modifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.attr_group`.
	 * @param ctx the parse tree
	 */
	enterAttr_group?: (ctx: Attr_groupContext) => void;
	/**
	 * Exit a parse tree produced by `pss.attr_group`.
	 * @param ctx the parse tree
	 */
	exitAttr_group?: (ctx: Attr_groupContext) => void;
	/**
	 * Enter a parse tree produced by `pss.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.scalar_data_type`.
	 * @param ctx the parse tree
	 */
	enterScalar_data_type?: (ctx: Scalar_data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.scalar_data_type`.
	 * @param ctx the parse tree
	 */
	exitScalar_data_type?: (ctx: Scalar_data_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.casting_type`.
	 * @param ctx the parse tree
	 */
	enterCasting_type?: (ctx: Casting_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.casting_type`.
	 * @param ctx the parse tree
	 */
	exitCasting_type?: (ctx: Casting_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.chandle_type`.
	 * @param ctx the parse tree
	 */
	enterChandle_type?: (ctx: Chandle_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.chandle_type`.
	 * @param ctx the parse tree
	 */
	exitChandle_type?: (ctx: Chandle_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.integer_atom_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_atom_type?: (ctx: Integer_atom_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.integer_atom_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_atom_type?: (ctx: Integer_atom_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.domain_open_range_list`.
	 * @param ctx the parse tree
	 */
	enterDomain_open_range_list?: (ctx: Domain_open_range_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.domain_open_range_list`.
	 * @param ctx the parse tree
	 */
	exitDomain_open_range_list?: (ctx: Domain_open_range_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.domain_open_range_value`.
	 * @param ctx the parse tree
	 */
	enterDomain_open_range_value?: (ctx: Domain_open_range_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.domain_open_range_value`.
	 * @param ctx the parse tree
	 */
	exitDomain_open_range_value?: (ctx: Domain_open_range_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.string_type`.
	 * @param ctx the parse tree
	 */
	enterString_type?: (ctx: String_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.string_type`.
	 * @param ctx the parse tree
	 */
	exitString_type?: (ctx: String_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bool_type`.
	 * @param ctx the parse tree
	 */
	enterBool_type?: (ctx: Bool_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bool_type`.
	 * @param ctx the parse tree
	 */
	exitBool_type?: (ctx: Bool_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.enum_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_declaration?: (ctx: Enum_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.enum_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_declaration?: (ctx: Enum_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.enum_item`.
	 * @param ctx the parse tree
	 */
	enterEnum_item?: (ctx: Enum_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.enum_item`.
	 * @param ctx the parse tree
	 */
	exitEnum_item?: (ctx: Enum_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.enum_type`.
	 * @param ctx the parse tree
	 */
	enterEnum_type?: (ctx: Enum_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.enum_type`.
	 * @param ctx the parse tree
	 */
	exitEnum_type?: (ctx: Enum_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.float_type`.
	 * @param ctx the parse tree
	 */
	enterFloat_type?: (ctx: Float_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.float_type`.
	 * @param ctx the parse tree
	 */
	exitFloat_type?: (ctx: Float_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.collection_type`.
	 * @param ctx the parse tree
	 */
	enterCollection_type?: (ctx: Collection_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.collection_type`.
	 * @param ctx the parse tree
	 */
	exitCollection_type?: (ctx: Collection_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.array_size_expression`.
	 * @param ctx the parse tree
	 */
	enterArray_size_expression?: (ctx: Array_size_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.array_size_expression`.
	 * @param ctx the parse tree
	 */
	exitArray_size_expression?: (ctx: Array_size_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reference_type`.
	 * @param ctx the parse tree
	 */
	enterReference_type?: (ctx: Reference_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reference_type`.
	 * @param ctx the parse tree
	 */
	exitReference_type?: (ctx: Reference_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.typedef_declaration`.
	 * @param ctx the parse tree
	 */
	enterTypedef_declaration?: (ctx: Typedef_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.typedef_declaration`.
	 * @param ctx the parse tree
	 */
	exitTypedef_declaration?: (ctx: Typedef_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.exec_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_block_stmt?: (ctx: Exec_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.exec_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_block_stmt?: (ctx: Exec_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.exec_block`.
	 * @param ctx the parse tree
	 */
	enterExec_block?: (ctx: Exec_blockContext) => void;
	/**
	 * Exit a parse tree produced by `pss.exec_block`.
	 * @param ctx the parse tree
	 */
	exitExec_block?: (ctx: Exec_blockContext) => void;
	/**
	 * Enter a parse tree produced by `pss.exec_kind`.
	 * @param ctx the parse tree
	 */
	enterExec_kind?: (ctx: Exec_kindContext) => void;
	/**
	 * Exit a parse tree produced by `pss.exec_kind`.
	 * @param ctx the parse tree
	 */
	exitExec_kind?: (ctx: Exec_kindContext) => void;
	/**
	 * Enter a parse tree produced by `pss.exec_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.exec_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.exec_super_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_super_stmt?: (ctx: Exec_super_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.exec_super_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_super_stmt?: (ctx: Exec_super_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.target_code_exec_block`.
	 * @param ctx the parse tree
	 */
	enterTarget_code_exec_block?: (ctx: Target_code_exec_blockContext) => void;
	/**
	 * Exit a parse tree produced by `pss.target_code_exec_block`.
	 * @param ctx the parse tree
	 */
	exitTarget_code_exec_block?: (ctx: Target_code_exec_blockContext) => void;
	/**
	 * Enter a parse tree produced by `pss.target_file_exec_block`.
	 * @param ctx the parse tree
	 */
	enterTarget_file_exec_block?: (ctx: Target_file_exec_blockContext) => void;
	/**
	 * Exit a parse tree produced by `pss.target_file_exec_block`.
	 * @param ctx the parse tree
	 */
	exitTarget_file_exec_block?: (ctx: Target_file_exec_blockContext) => void;
	/**
	 * Enter a parse tree produced by `pss.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `pss.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `pss.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `pss.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `pss.power_op`.
	 * @param ctx the parse tree
	 */
	enterPower_op?: (ctx: Power_opContext) => void;
	/**
	 * Exit a parse tree produced by `pss.power_op`.
	 * @param ctx the parse tree
	 */
	exitPower_op?: (ctx: Power_opContext) => void;
	/**
	 * Enter a parse tree produced by `pss.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `pss.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `pss.assign_op`.
	 * @param ctx the parse tree
	 */
	enterAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Exit a parse tree produced by `pss.assign_op`.
	 * @param ctx the parse tree
	 */
	exitAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Enter a parse tree produced by `pss.parenthesis_expressions`.
	 * @param ctx the parse tree
	 */
	enterParenthesis_expressions?: (ctx: Parenthesis_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.parenthesis_expressions`.
	 * @param ctx the parse tree
	 */
	exitParenthesis_expressions?: (ctx: Parenthesis_expressionsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.mul_div`.
	 * @param ctx the parse tree
	 */
	enterMul_div?: (ctx: Mul_divContext) => void;
	/**
	 * Exit a parse tree produced by `pss.mul_div`.
	 * @param ctx the parse tree
	 */
	exitMul_div?: (ctx: Mul_divContext) => void;
	/**
	 * Enter a parse tree produced by `pss.add_sub`.
	 * @param ctx the parse tree
	 */
	enterAdd_sub?: (ctx: Add_subContext) => void;
	/**
	 * Exit a parse tree produced by `pss.add_sub`.
	 * @param ctx the parse tree
	 */
	exitAdd_sub?: (ctx: Add_subContext) => void;
	/**
	 * Enter a parse tree produced by `pss.shifting`.
	 * @param ctx the parse tree
	 */
	enterShifting?: (ctx: ShiftingContext) => void;
	/**
	 * Exit a parse tree produced by `pss.shifting`.
	 * @param ctx the parse tree
	 */
	exitShifting?: (ctx: ShiftingContext) => void;
	/**
	 * Enter a parse tree produced by `pss.in_statements`.
	 * @param ctx the parse tree
	 */
	enterIn_statements?: (ctx: In_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.in_statements`.
	 * @param ctx the parse tree
	 */
	exitIn_statements?: (ctx: In_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.logical_compare`.
	 * @param ctx the parse tree
	 */
	enterLogical_compare?: (ctx: Logical_compareContext) => void;
	/**
	 * Exit a parse tree produced by `pss.logical_compare`.
	 * @param ctx the parse tree
	 */
	exitLogical_compare?: (ctx: Logical_compareContext) => void;
	/**
	 * Enter a parse tree produced by `pss.equality_compare`.
	 * @param ctx the parse tree
	 */
	enterEquality_compare?: (ctx: Equality_compareContext) => void;
	/**
	 * Exit a parse tree produced by `pss.equality_compare`.
	 * @param ctx the parse tree
	 */
	exitEquality_compare?: (ctx: Equality_compareContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bitwise_and`.
	 * @param ctx the parse tree
	 */
	enterBitwise_and?: (ctx: Bitwise_andContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bitwise_and`.
	 * @param ctx the parse tree
	 */
	exitBitwise_and?: (ctx: Bitwise_andContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	enterBitwise_xor?: (ctx: Bitwise_xorContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	exitBitwise_xor?: (ctx: Bitwise_xorContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterBitwise_or?: (ctx: Bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitBitwise_or?: (ctx: Bitwise_orContext) => void;
	/**
	 * Enter a parse tree produced by `pss.logical_and`.
	 * @param ctx the parse tree
	 */
	enterLogical_and?: (ctx: Logical_andContext) => void;
	/**
	 * Exit a parse tree produced by `pss.logical_and`.
	 * @param ctx the parse tree
	 */
	exitLogical_and?: (ctx: Logical_andContext) => void;
	/**
	 * Enter a parse tree produced by `pss.logical_or`.
	 * @param ctx the parse tree
	 */
	enterLogical_or?: (ctx: Logical_orContext) => void;
	/**
	 * Exit a parse tree produced by `pss.logical_or`.
	 * @param ctx the parse tree
	 */
	exitLogical_or?: (ctx: Logical_orContext) => void;
	/**
	 * Enter a parse tree produced by `pss.open_range_value`.
	 * @param ctx the parse tree
	 */
	enterOpen_range_value?: (ctx: Open_range_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.open_range_value`.
	 * @param ctx the parse tree
	 */
	exitOpen_range_value?: (ctx: Open_range_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.in_expression`.
	 * @param ctx the parse tree
	 */
	enterIn_expression?: (ctx: In_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.in_expression`.
	 * @param ctx the parse tree
	 */
	exitIn_expression?: (ctx: In_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.open_range_list`.
	 * @param ctx the parse tree
	 */
	enterOpen_range_list?: (ctx: Open_range_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.open_range_list`.
	 * @param ctx the parse tree
	 */
	exitOpen_range_list?: (ctx: Open_range_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.collection_expression`.
	 * @param ctx the parse tree
	 */
	enterCollection_expression?: (ctx: Collection_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.collection_expression`.
	 * @param ctx the parse tree
	 */
	exitCollection_expression?: (ctx: Collection_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.cast_expression`.
	 * @param ctx the parse tree
	 */
	enterCast_expression?: (ctx: Cast_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.cast_expression`.
	 * @param ctx the parse tree
	 */
	exitCast_expression?: (ctx: Cast_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.ref_path`.
	 * @param ctx the parse tree
	 */
	enterRef_path?: (ctx: Ref_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.ref_path`.
	 * @param ctx the parse tree
	 */
	exitRef_path?: (ctx: Ref_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.slice`.
	 * @param ctx the parse tree
	 */
	enterSlice?: (ctx: SliceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.slice`.
	 * @param ctx the parse tree
	 */
	exitSlice?: (ctx: SliceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.static_ref_path`.
	 * @param ctx the parse tree
	 */
	enterStatic_ref_path?: (ctx: Static_ref_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.static_ref_path`.
	 * @param ctx the parse tree
	 */
	exitStatic_ref_path?: (ctx: Static_ref_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bit_slice`.
	 * @param ctx the parse tree
	 */
	enterBit_slice?: (ctx: Bit_sliceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bit_slice`.
	 * @param ctx the parse tree
	 */
	exitBit_slice?: (ctx: Bit_sliceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.string_slice`.
	 * @param ctx the parse tree
	 */
	enterString_slice?: (ctx: String_sliceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.string_slice`.
	 * @param ctx the parse tree
	 */
	exitString_slice?: (ctx: String_sliceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_ref_path`.
	 * @param ctx the parse tree
	 */
	enterFunction_ref_path?: (ctx: Function_ref_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_ref_path`.
	 * @param ctx the parse tree
	 */
	exitFunction_ref_path?: (ctx: Function_ref_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_params?: (ctx: Function_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_params?: (ctx: Function_paramsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.symbol_call`.
	 * @param ctx the parse tree
	 */
	enterSymbol_call?: (ctx: Symbol_callContext) => void;
	/**
	 * Exit a parse tree produced by `pss.symbol_call`.
	 * @param ctx the parse tree
	 */
	exitSymbol_call?: (ctx: Symbol_callContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter_list?: (ctx: Function_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter_list?: (ctx: Function_parameter_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.filename_string`.
	 * @param ctx the parse tree
	 */
	enterFilename_string?: (ctx: Filename_stringContext) => void;
	/**
	 * Exit a parse tree produced by `pss.filename_string`.
	 * @param ctx the parse tree
	 */
	exitFilename_string?: (ctx: Filename_stringContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_extension`.
	 * @param ctx the parse tree
	 */
	enterAction_extension?: (ctx: Action_extensionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_extension`.
	 * @param ctx the parse tree
	 */
	exitAction_extension?: (ctx: Action_extensionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_function`.
	 * @param ctx the parse tree
	 */
	enterImport_function?: (ctx: Import_functionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_function`.
	 * @param ctx the parse tree
	 */
	exitImport_function?: (ctx: Import_functionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.target_template_function`.
	 * @param ctx the parse tree
	 */
	enterTarget_template_function?: (ctx: Target_template_functionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.target_template_function`.
	 * @param ctx the parse tree
	 */
	exitTarget_template_function?: (ctx: Target_template_functionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_class_decl`.
	 * @param ctx the parse tree
	 */
	enterImport_class_decl?: (ctx: Import_class_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_class_decl`.
	 * @param ctx the parse tree
	 */
	exitImport_class_decl?: (ctx: Import_class_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_class_extends`.
	 * @param ctx the parse tree
	 */
	enterImport_class_extends?: (ctx: Import_class_extendsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_class_extends`.
	 * @param ctx the parse tree
	 */
	exitImport_class_extends?: (ctx: Import_class_extendsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_class_function_decl`.
	 * @param ctx the parse tree
	 */
	enterImport_class_function_decl?: (ctx: Import_class_function_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_class_function_decl`.
	 * @param ctx the parse tree
	 */
	exitImport_class_function_decl?: (ctx: Import_class_function_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.export_action`.
	 * @param ctx the parse tree
	 */
	enterExport_action?: (ctx: Export_actionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.export_action`.
	 * @param ctx the parse tree
	 */
	exitExport_action?: (ctx: Export_actionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_function`.
	 * @param ctx the parse tree
	 */
	enterProcedural_function?: (ctx: Procedural_functionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_function`.
	 * @param ctx the parse tree
	 */
	exitProcedural_function?: (ctx: Procedural_functionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_decl`.
	 * @param ctx the parse tree
	 */
	enterFunction_decl?: (ctx: Function_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_decl`.
	 * @param ctx the parse tree
	 */
	exitFunction_decl?: (ctx: Function_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.platform_qualifier`.
	 * @param ctx the parse tree
	 */
	enterPlatform_qualifier?: (ctx: Platform_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.platform_qualifier`.
	 * @param ctx the parse tree
	 */
	exitPlatform_qualifier?: (ctx: Platform_qualifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_return_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_return_type?: (ctx: Function_return_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_return_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_return_type?: (ctx: Function_return_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_parameter_list_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter_list_prototype?: (ctx: Function_parameter_list_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_parameter_list_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter_list_prototype?: (ctx: Function_parameter_list_prototypeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_parameter`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_parameter`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_parameter_dir`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter_dir?: (ctx: Function_parameter_dirContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_parameter_dir`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter_dir?: (ctx: Function_parameter_dirContext) => void;
	/**
	 * Enter a parse tree produced by `pss.varargs_parameter`.
	 * @param ctx the parse tree
	 */
	enterVarargs_parameter?: (ctx: Varargs_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `pss.varargs_parameter`.
	 * @param ctx the parse tree
	 */
	exitVarargs_parameter?: (ctx: Varargs_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_call_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_params?: (ctx: Function_call_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_call_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_params?: (ctx: Function_call_paramsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.hierarchical_id_list`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_id_list?: (ctx: Hierarchical_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.hierarchical_id_list`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_id_list?: (ctx: Hierarchical_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.hierarchical_id`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_id?: (ctx: Hierarchical_idContext) => void;
	/**
	 * Exit a parse tree produced by `pss.hierarchical_id`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_id?: (ctx: Hierarchical_idContext) => void;
	/**
	 * Enter a parse tree produced by `pss.member_path_elem`.
	 * @param ctx the parse tree
	 */
	enterMember_path_elem?: (ctx: Member_path_elemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.member_path_elem`.
	 * @param ctx the parse tree
	 */
	exitMember_path_elem?: (ctx: Member_path_elemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_identifier`.
	 * @param ctx the parse tree
	 */
	enterAction_identifier?: (ctx: Action_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_identifier`.
	 * @param ctx the parse tree
	 */
	exitAction_identifier?: (ctx: Action_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_handle_identifier`.
	 * @param ctx the parse tree
	 */
	enterAction_handle_identifier?: (ctx: Action_handle_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_handle_identifier`.
	 * @param ctx the parse tree
	 */
	exitAction_handle_identifier?: (ctx: Action_handle_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_identifier`.
	 * @param ctx the parse tree
	 */
	enterComponent_identifier?: (ctx: Component_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_identifier`.
	 * @param ctx the parse tree
	 */
	exitComponent_identifier?: (ctx: Component_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covercross_identifier`.
	 * @param ctx the parse tree
	 */
	enterCovercross_identifier?: (ctx: Covercross_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covercross_identifier`.
	 * @param ctx the parse tree
	 */
	exitCovercross_identifier?: (ctx: Covercross_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_identifier?: (ctx: Covergroup_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_identifier?: (ctx: Covergroup_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.coverpoint_identifier`.
	 * @param ctx the parse tree
	 */
	enterCoverpoint_identifier?: (ctx: Coverpoint_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.coverpoint_identifier`.
	 * @param ctx the parse tree
	 */
	exitCoverpoint_identifier?: (ctx: Coverpoint_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.enum_identifier`.
	 * @param ctx the parse tree
	 */
	enterEnum_identifier?: (ctx: Enum_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.enum_identifier`.
	 * @param ctx the parse tree
	 */
	exitEnum_identifier?: (ctx: Enum_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_identifier`.
	 * @param ctx the parse tree
	 */
	enterFunction_identifier?: (ctx: Function_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_identifier`.
	 * @param ctx the parse tree
	 */
	exitFunction_identifier?: (ctx: Function_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_class_identifier`.
	 * @param ctx the parse tree
	 */
	enterImport_class_identifier?: (ctx: Import_class_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_class_identifier`.
	 * @param ctx the parse tree
	 */
	exitImport_class_identifier?: (ctx: Import_class_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.index_identifier`.
	 * @param ctx the parse tree
	 */
	enterIndex_identifier?: (ctx: Index_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.index_identifier`.
	 * @param ctx the parse tree
	 */
	exitIndex_identifier?: (ctx: Index_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.iterator_identifier`.
	 * @param ctx the parse tree
	 */
	enterIterator_identifier?: (ctx: Iterator_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.iterator_identifier`.
	 * @param ctx the parse tree
	 */
	exitIterator_identifier?: (ctx: Iterator_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.label_identifier`.
	 * @param ctx the parse tree
	 */
	enterLabel_identifier?: (ctx: Label_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.label_identifier`.
	 * @param ctx the parse tree
	 */
	exitLabel_identifier?: (ctx: Label_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.language_identifier`.
	 * @param ctx the parse tree
	 */
	enterLanguage_identifier?: (ctx: Language_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.language_identifier`.
	 * @param ctx the parse tree
	 */
	exitLanguage_identifier?: (ctx: Language_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_identifier`.
	 * @param ctx the parse tree
	 */
	enterMonitor_identifier?: (ctx: Monitor_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_identifier`.
	 * @param ctx the parse tree
	 */
	exitMonitor_identifier?: (ctx: Monitor_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_identifier`.
	 * @param ctx the parse tree
	 */
	enterPackage_identifier?: (ctx: Package_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_identifier`.
	 * @param ctx the parse tree
	 */
	exitPackage_identifier?: (ctx: Package_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_identifier`.
	 * @param ctx the parse tree
	 */
	enterStruct_identifier?: (ctx: Struct_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_identifier`.
	 * @param ctx the parse tree
	 */
	exitStruct_identifier?: (ctx: Struct_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_kind_identifier`.
	 * @param ctx the parse tree
	 */
	enterStruct_kind_identifier?: (ctx: Struct_kind_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_kind_identifier`.
	 * @param ctx the parse tree
	 */
	exitStruct_kind_identifier?: (ctx: Struct_kind_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.symbol_identifier`.
	 * @param ctx the parse tree
	 */
	enterSymbol_identifier?: (ctx: Symbol_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.symbol_identifier`.
	 * @param ctx the parse tree
	 */
	exitSymbol_identifier?: (ctx: Symbol_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_identifier`.
	 * @param ctx the parse tree
	 */
	enterType_identifier?: (ctx: Type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_identifier`.
	 * @param ctx the parse tree
	 */
	exitType_identifier?: (ctx: Type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_identifier_elem`.
	 * @param ctx the parse tree
	 */
	enterType_identifier_elem?: (ctx: Type_identifier_elemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_identifier_elem`.
	 * @param ctx the parse tree
	 */
	exitType_identifier_elem?: (ctx: Type_identifier_elemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.action_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterAction_type_identifier?: (ctx: Action_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.action_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitAction_type_identifier?: (ctx: Action_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.buffer_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterBuffer_type_identifier?: (ctx: Buffer_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.buffer_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitBuffer_type_identifier?: (ctx: Buffer_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.component_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterComponent_type_identifier?: (ctx: Component_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.component_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitComponent_type_identifier?: (ctx: Component_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.covergroup_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_type_identifier?: (ctx: Covergroup_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.covergroup_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_type_identifier?: (ctx: Covergroup_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.enum_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterEnum_type_identifier?: (ctx: Enum_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.enum_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitEnum_type_identifier?: (ctx: Enum_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.monitor_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterMonitor_type_identifier?: (ctx: Monitor_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.monitor_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitMonitor_type_identifier?: (ctx: Monitor_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.resource_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterResource_type_identifier?: (ctx: Resource_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.resource_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitResource_type_identifier?: (ctx: Resource_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.state_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterState_type_identifier?: (ctx: State_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.state_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitState_type_identifier?: (ctx: State_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.stream_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterStream_type_identifier?: (ctx: Stream_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.stream_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitStream_type_identifier?: (ctx: Stream_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.entity_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterEntity_type_identifier?: (ctx: Entity_type_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.entity_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitEntity_type_identifier?: (ctx: Entity_type_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.integer_number`.
	 * @param ctx the parse tree
	 */
	enterInteger_number?: (ctx: Integer_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.integer_number`.
	 * @param ctx the parse tree
	 */
	exitInteger_number?: (ctx: Integer_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.based_bin_number`.
	 * @param ctx the parse tree
	 */
	enterBased_bin_number?: (ctx: Based_bin_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.based_bin_number`.
	 * @param ctx the parse tree
	 */
	exitBased_bin_number?: (ctx: Based_bin_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.based_oct_number`.
	 * @param ctx the parse tree
	 */
	enterBased_oct_number?: (ctx: Based_oct_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.based_oct_number`.
	 * @param ctx the parse tree
	 */
	exitBased_oct_number?: (ctx: Based_oct_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.based_dec_number`.
	 * @param ctx the parse tree
	 */
	enterBased_dec_number?: (ctx: Based_dec_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.based_dec_number`.
	 * @param ctx the parse tree
	 */
	exitBased_dec_number?: (ctx: Based_dec_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.based_hex_number`.
	 * @param ctx the parse tree
	 */
	enterBased_hex_number?: (ctx: Based_hex_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.based_hex_number`.
	 * @param ctx the parse tree
	 */
	exitBased_hex_number?: (ctx: Based_hex_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.floating_point_number`.
	 * @param ctx the parse tree
	 */
	enterFloating_point_number?: (ctx: Floating_point_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.floating_point_number`.
	 * @param ctx the parse tree
	 */
	exitFloating_point_number?: (ctx: Floating_point_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.unsigned_number`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_number?: (ctx: Unsigned_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.unsigned_number`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_number?: (ctx: Unsigned_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.floating_point_dec_number`.
	 * @param ctx the parse tree
	 */
	enterFloating_point_dec_number?: (ctx: Floating_point_dec_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.floating_point_dec_number`.
	 * @param ctx the parse tree
	 */
	exitFloating_point_dec_number?: (ctx: Floating_point_dec_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.floating_point_sci_number`.
	 * @param ctx the parse tree
	 */
	enterFloating_point_sci_number?: (ctx: Floating_point_sci_numberContext) => void;
	/**
	 * Exit a parse tree produced by `pss.floating_point_sci_number`.
	 * @param ctx the parse tree
	 */
	exitFloating_point_sci_number?: (ctx: Floating_point_sci_numberContext) => void;
	/**
	 * Enter a parse tree produced by `pss.aggregate_literal`.
	 * @param ctx the parse tree
	 */
	enterAggregate_literal?: (ctx: Aggregate_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.aggregate_literal`.
	 * @param ctx the parse tree
	 */
	exitAggregate_literal?: (ctx: Aggregate_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.empty_aggregate_literal`.
	 * @param ctx the parse tree
	 */
	enterEmpty_aggregate_literal?: (ctx: Empty_aggregate_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.empty_aggregate_literal`.
	 * @param ctx the parse tree
	 */
	exitEmpty_aggregate_literal?: (ctx: Empty_aggregate_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.value_list_literal`.
	 * @param ctx the parse tree
	 */
	enterValue_list_literal?: (ctx: Value_list_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.value_list_literal`.
	 * @param ctx the parse tree
	 */
	exitValue_list_literal?: (ctx: Value_list_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.map_literal`.
	 * @param ctx the parse tree
	 */
	enterMap_literal?: (ctx: Map_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.map_literal`.
	 * @param ctx the parse tree
	 */
	exitMap_literal?: (ctx: Map_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.map_literal_item`.
	 * @param ctx the parse tree
	 */
	enterMap_literal_item?: (ctx: Map_literal_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.map_literal_item`.
	 * @param ctx the parse tree
	 */
	exitMap_literal_item?: (ctx: Map_literal_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_literal`.
	 * @param ctx the parse tree
	 */
	enterStruct_literal?: (ctx: Struct_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_literal`.
	 * @param ctx the parse tree
	 */
	exitStruct_literal?: (ctx: Struct_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_literal_item`.
	 * @param ctx the parse tree
	 */
	enterStruct_literal_item?: (ctx: Struct_literal_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_literal_item`.
	 * @param ctx the parse tree
	 */
	exitStruct_literal_item?: (ctx: Struct_literal_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bool_literal`.
	 * @param ctx the parse tree
	 */
	enterBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bool_literal`.
	 * @param ctx the parse tree
	 */
	exitBool_literal?: (ctx: Bool_literalContext) => void;
	/**
	 * Enter a parse tree produced by `pss.null_ref`.
	 * @param ctx the parse tree
	 */
	enterNull_ref?: (ctx: Null_refContext) => void;
	/**
	 * Exit a parse tree produced by `pss.null_ref`.
	 * @param ctx the parse tree
	 */
	exitNull_ref?: (ctx: Null_refContext) => void;
	/**
	 * Enter a parse tree produced by `pss.override_declaration`.
	 * @param ctx the parse tree
	 */
	enterOverride_declaration?: (ctx: Override_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.override_declaration`.
	 * @param ctx the parse tree
	 */
	exitOverride_declaration?: (ctx: Override_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.override_stmt`.
	 * @param ctx the parse tree
	 */
	enterOverride_stmt?: (ctx: Override_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.override_stmt`.
	 * @param ctx the parse tree
	 */
	exitOverride_stmt?: (ctx: Override_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_override`.
	 * @param ctx the parse tree
	 */
	enterType_override?: (ctx: Type_overrideContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_override`.
	 * @param ctx the parse tree
	 */
	exitType_override?: (ctx: Type_overrideContext) => void;
	/**
	 * Enter a parse tree produced by `pss.instance_override`.
	 * @param ctx the parse tree
	 */
	enterInstance_override?: (ctx: Instance_overrideContext) => void;
	/**
	 * Exit a parse tree produced by `pss.instance_override`.
	 * @param ctx the parse tree
	 */
	exitInstance_override?: (ctx: Instance_overrideContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_declaration?: (ctx: Package_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_declaration?: (ctx: Package_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_id_path`.
	 * @param ctx the parse tree
	 */
	enterPackage_id_path?: (ctx: Package_id_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_id_path`.
	 * @param ctx the parse tree
	 */
	exitPackage_id_path?: (ctx: Package_id_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_body_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_body_item?: (ctx: Package_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_body_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_body_item?: (ctx: Package_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_import_pattern`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_pattern?: (ctx: Package_import_patternContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_import_pattern`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_pattern?: (ctx: Package_import_patternContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_import_qualifier`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_qualifier?: (ctx: Package_import_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_import_qualifier`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_qualifier?: (ctx: Package_import_qualifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_import_wildcard`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_wildcard?: (ctx: Package_import_wildcardContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_import_wildcard`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_wildcard?: (ctx: Package_import_wildcardContext) => void;
	/**
	 * Enter a parse tree produced by `pss.package_import_alias`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_alias?: (ctx: Package_import_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `pss.package_import_alias`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_alias?: (ctx: Package_import_aliasContext) => void;
	/**
	 * Enter a parse tree produced by `pss.extend_stmt`.
	 * @param ctx the parse tree
	 */
	enterExtend_stmt?: (ctx: Extend_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.extend_stmt`.
	 * @param ctx the parse tree
	 */
	exitExtend_stmt?: (ctx: Extend_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.const_field_declaration`.
	 * @param ctx the parse tree
	 */
	enterConst_field_declaration?: (ctx: Const_field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.const_field_declaration`.
	 * @param ctx the parse tree
	 */
	exitConst_field_declaration?: (ctx: Const_field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.stmt_terminator`.
	 * @param ctx the parse tree
	 */
	enterStmt_terminator?: (ctx: Stmt_terminatorContext) => void;
	/**
	 * Exit a parse tree produced by `pss.stmt_terminator`.
	 * @param ctx the parse tree
	 */
	exitStmt_terminator?: (ctx: Stmt_terminatorContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_stmt?: (ctx: Procedural_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_stmt?: (ctx: Procedural_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_sequence_block_stmt?: (ctx: Procedural_sequence_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_sequence_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_sequence_block_stmt?: (ctx: Procedural_sequence_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_data_declaration`.
	 * @param ctx the parse tree
	 */
	enterProcedural_data_declaration?: (ctx: Procedural_data_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_data_declaration`.
	 * @param ctx the parse tree
	 */
	exitProcedural_data_declaration?: (ctx: Procedural_data_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_data_instantiation`.
	 * @param ctx the parse tree
	 */
	enterProcedural_data_instantiation?: (ctx: Procedural_data_instantiationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_data_instantiation`.
	 * @param ctx the parse tree
	 */
	exitProcedural_data_instantiation?: (ctx: Procedural_data_instantiationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_assignment_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_assignment_stmt?: (ctx: Procedural_assignment_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_assignment_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_assignment_stmt?: (ctx: Procedural_assignment_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_void_function_call_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_void_function_call_stmt?: (ctx: Procedural_void_function_call_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_void_function_call_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_void_function_call_stmt?: (ctx: Procedural_void_function_call_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_return_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_return_stmt?: (ctx: Procedural_return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_return_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_return_stmt?: (ctx: Procedural_return_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_repeat_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_repeat_stmt?: (ctx: Procedural_repeat_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_repeat_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_repeat_stmt?: (ctx: Procedural_repeat_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_foreach_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_foreach_stmt?: (ctx: Procedural_foreach_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_foreach_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_foreach_stmt?: (ctx: Procedural_foreach_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_if_else_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_if_else_stmt?: (ctx: Procedural_if_else_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_if_else_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_if_else_stmt?: (ctx: Procedural_if_else_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_match_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_match_stmt?: (ctx: Procedural_match_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_match_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_match_stmt?: (ctx: Procedural_match_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_match_choice`.
	 * @param ctx the parse tree
	 */
	enterProcedural_match_choice?: (ctx: Procedural_match_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_match_choice`.
	 * @param ctx the parse tree
	 */
	exitProcedural_match_choice?: (ctx: Procedural_match_choiceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_break_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_break_stmt?: (ctx: Procedural_break_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_break_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_break_stmt?: (ctx: Procedural_break_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_continue_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_continue_stmt?: (ctx: Procedural_continue_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_continue_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_continue_stmt?: (ctx: Procedural_continue_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_randomization_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_randomization_stmt?: (ctx: Procedural_randomization_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_randomization_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_randomization_stmt?: (ctx: Procedural_randomization_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_randomization_target`.
	 * @param ctx the parse tree
	 */
	enterProcedural_randomization_target?: (ctx: Procedural_randomization_targetContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_randomization_target`.
	 * @param ctx the parse tree
	 */
	exitProcedural_randomization_target?: (ctx: Procedural_randomization_targetContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_randomization_term`.
	 * @param ctx the parse tree
	 */
	enterProcedural_randomization_term?: (ctx: Procedural_randomization_termContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_randomization_term`.
	 * @param ctx the parse tree
	 */
	exitProcedural_randomization_term?: (ctx: Procedural_randomization_termContext) => void;
	/**
	 * Enter a parse tree produced by `pss.procedural_yield_stmt`.
	 * @param ctx the parse tree
	 */
	enterProcedural_yield_stmt?: (ctx: Procedural_yield_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `pss.procedural_yield_stmt`.
	 * @param ctx the parse tree
	 */
	exitProcedural_yield_stmt?: (ctx: Procedural_yield_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_kind`.
	 * @param ctx the parse tree
	 */
	enterStruct_kind?: (ctx: Struct_kindContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_kind`.
	 * @param ctx the parse tree
	 */
	exitStruct_kind?: (ctx: Struct_kindContext) => void;
	/**
	 * Enter a parse tree produced by `pss.object_kind`.
	 * @param ctx the parse tree
	 */
	enterObject_kind?: (ctx: Object_kindContext) => void;
	/**
	 * Exit a parse tree produced by `pss.object_kind`.
	 * @param ctx the parse tree
	 */
	exitObject_kind?: (ctx: Object_kindContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_super_spec`.
	 * @param ctx the parse tree
	 */
	enterStruct_super_spec?: (ctx: Struct_super_specContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_super_spec`.
	 * @param ctx the parse tree
	 */
	exitStruct_super_spec?: (ctx: Struct_super_specContext) => void;
	/**
	 * Enter a parse tree produced by `pss.struct_body_item`.
	 * @param ctx the parse tree
	 */
	enterStruct_body_item?: (ctx: Struct_body_itemContext) => void;
	/**
	 * Exit a parse tree produced by `pss.struct_body_item`.
	 * @param ctx the parse tree
	 */
	exitStruct_body_item?: (ctx: Struct_body_itemContext) => void;
	/**
	 * Enter a parse tree produced by `pss.template_param_decl_list`.
	 * @param ctx the parse tree
	 */
	enterTemplate_param_decl_list?: (ctx: Template_param_decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.template_param_decl_list`.
	 * @param ctx the parse tree
	 */
	exitTemplate_param_decl_list?: (ctx: Template_param_decl_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.template_param_decl`.
	 * @param ctx the parse tree
	 */
	enterTemplate_param_decl?: (ctx: Template_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.template_param_decl`.
	 * @param ctx the parse tree
	 */
	exitTemplate_param_decl?: (ctx: Template_param_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_param_decl`.
	 * @param ctx the parse tree
	 */
	enterType_param_decl?: (ctx: Type_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_param_decl`.
	 * @param ctx the parse tree
	 */
	exitType_param_decl?: (ctx: Type_param_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.generic_type_param_decl`.
	 * @param ctx the parse tree
	 */
	enterGeneric_type_param_decl?: (ctx: Generic_type_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.generic_type_param_decl`.
	 * @param ctx the parse tree
	 */
	exitGeneric_type_param_decl?: (ctx: Generic_type_param_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.category_type_param_decl`.
	 * @param ctx the parse tree
	 */
	enterCategory_type_param_decl?: (ctx: Category_type_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.category_type_param_decl`.
	 * @param ctx the parse tree
	 */
	exitCategory_type_param_decl?: (ctx: Category_type_param_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_restriction`.
	 * @param ctx the parse tree
	 */
	enterType_restriction?: (ctx: Type_restrictionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_restriction`.
	 * @param ctx the parse tree
	 */
	exitType_restriction?: (ctx: Type_restrictionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.type_category`.
	 * @param ctx the parse tree
	 */
	enterType_category?: (ctx: Type_categoryContext) => void;
	/**
	 * Exit a parse tree produced by `pss.type_category`.
	 * @param ctx the parse tree
	 */
	exitType_category?: (ctx: Type_categoryContext) => void;
	/**
	 * Enter a parse tree produced by `pss.value_param_decl`.
	 * @param ctx the parse tree
	 */
	enterValue_param_decl?: (ctx: Value_param_declContext) => void;
	/**
	 * Exit a parse tree produced by `pss.value_param_decl`.
	 * @param ctx the parse tree
	 */
	exitValue_param_decl?: (ctx: Value_param_declContext) => void;
	/**
	 * Enter a parse tree produced by `pss.template_param_value_list`.
	 * @param ctx the parse tree
	 */
	enterTemplate_param_value_list?: (ctx: Template_param_value_listContext) => void;
	/**
	 * Exit a parse tree produced by `pss.template_param_value_list`.
	 * @param ctx the parse tree
	 */
	exitTemplate_param_value_list?: (ctx: Template_param_value_listContext) => void;
	/**
	 * Enter a parse tree produced by `pss.template_param_value`.
	 * @param ctx the parse tree
	 */
	enterTemplate_param_value?: (ctx: Template_param_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.template_param_value`.
	 * @param ctx the parse tree
	 */
	exitTemplate_param_value?: (ctx: Template_param_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_region_identifier`.
	 * @param ctx the parse tree
	 */
	enterAddr_region_identifier?: (ctx: Addr_region_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_region_identifier`.
	 * @param ctx the parse tree
	 */
	exitAddr_region_identifier?: (ctx: Addr_region_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_handle_identifier`.
	 * @param ctx the parse tree
	 */
	enterAddr_handle_identifier?: (ctx: Addr_handle_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_handle_identifier`.
	 * @param ctx the parse tree
	 */
	exitAddr_handle_identifier?: (ctx: Addr_handle_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_space_identifier`.
	 * @param ctx the parse tree
	 */
	enterAddr_space_identifier?: (ctx: Addr_space_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_space_identifier`.
	 * @param ctx the parse tree
	 */
	exitAddr_space_identifier?: (ctx: Addr_space_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_space_traits`.
	 * @param ctx the parse tree
	 */
	enterAddr_space_traits?: (ctx: Addr_space_traitsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_space_traits`.
	 * @param ctx the parse tree
	 */
	exitAddr_space_traits?: (ctx: Addr_space_traitsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.claim_identifier`.
	 * @param ctx the parse tree
	 */
	enterClaim_identifier?: (ctx: Claim_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.claim_identifier`.
	 * @param ctx the parse tree
	 */
	exitClaim_identifier?: (ctx: Claim_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.trait_identifier`.
	 * @param ctx the parse tree
	 */
	enterTrait_identifier?: (ctx: Trait_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.trait_identifier`.
	 * @param ctx the parse tree
	 */
	exitTrait_identifier?: (ctx: Trait_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `pss.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;
	/**
	 * Enter a parse tree produced by `pss.trait_property`.
	 * @param ctx the parse tree
	 */
	enterTrait_property?: (ctx: Trait_propertyContext) => void;
	/**
	 * Exit a parse tree produced by `pss.trait_property`.
	 * @param ctx the parse tree
	 */
	exitTrait_property?: (ctx: Trait_propertyContext) => void;
	/**
	 * Enter a parse tree produced by `pss.number_identifier`.
	 * @param ctx the parse tree
	 */
	enterNumber_identifier?: (ctx: Number_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.number_identifier`.
	 * @param ctx the parse tree
	 */
	exitNumber_identifier?: (ctx: Number_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.bool_identifier`.
	 * @param ctx the parse tree
	 */
	enterBool_identifier?: (ctx: Bool_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.bool_identifier`.
	 * @param ctx the parse tree
	 */
	exitBool_identifier?: (ctx: Bool_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.contiguous_addr_space_def`.
	 * @param ctx the parse tree
	 */
	enterContiguous_addr_space_def?: (ctx: Contiguous_addr_space_defContext) => void;
	/**
	 * Exit a parse tree produced by `pss.contiguous_addr_space_def`.
	 * @param ctx the parse tree
	 */
	exitContiguous_addr_space_def?: (ctx: Contiguous_addr_space_defContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_region_setting`.
	 * @param ctx the parse tree
	 */
	enterAddr_region_setting?: (ctx: Addr_region_settingContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_region_setting`.
	 * @param ctx the parse tree
	 */
	exitAddr_region_setting?: (ctx: Addr_region_settingContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_claim`.
	 * @param ctx the parse tree
	 */
	enterAddr_claim?: (ctx: Addr_claimContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_claim`.
	 * @param ctx the parse tree
	 */
	exitAddr_claim?: (ctx: Addr_claimContext) => void;
	/**
	 * Enter a parse tree produced by `pss.transparent_addr_space_def`.
	 * @param ctx the parse tree
	 */
	enterTransparent_addr_space_def?: (ctx: Transparent_addr_space_defContext) => void;
	/**
	 * Exit a parse tree produced by `pss.transparent_addr_space_def`.
	 * @param ctx the parse tree
	 */
	exitTransparent_addr_space_def?: (ctx: Transparent_addr_space_defContext) => void;
	/**
	 * Enter a parse tree produced by `pss.transparent_addr_region_def`.
	 * @param ctx the parse tree
	 */
	enterTransparent_addr_region_def?: (ctx: Transparent_addr_region_defContext) => void;
	/**
	 * Exit a parse tree produced by `pss.transparent_addr_region_def`.
	 * @param ctx the parse tree
	 */
	exitTransparent_addr_region_def?: (ctx: Transparent_addr_region_defContext) => void;
	/**
	 * Enter a parse tree produced by `pss.transparent_addr_region_setting`.
	 * @param ctx the parse tree
	 */
	enterTransparent_addr_region_setting?: (ctx: Transparent_addr_region_settingContext) => void;
	/**
	 * Exit a parse tree produced by `pss.transparent_addr_region_setting`.
	 * @param ctx the parse tree
	 */
	exitTransparent_addr_region_setting?: (ctx: Transparent_addr_region_settingContext) => void;
	/**
	 * Enter a parse tree produced by `pss.transparent_addr_claim`.
	 * @param ctx the parse tree
	 */
	enterTransparent_addr_claim?: (ctx: Transparent_addr_claimContext) => void;
	/**
	 * Exit a parse tree produced by `pss.transparent_addr_claim`.
	 * @param ctx the parse tree
	 */
	exitTransparent_addr_claim?: (ctx: Transparent_addr_claimContext) => void;
	/**
	 * Enter a parse tree produced by `pss.add_addr_region_nonallocatable`.
	 * @param ctx the parse tree
	 */
	enterAdd_addr_region_nonallocatable?: (ctx: Add_addr_region_nonallocatableContext) => void;
	/**
	 * Exit a parse tree produced by `pss.add_addr_region_nonallocatable`.
	 * @param ctx the parse tree
	 */
	exitAdd_addr_region_nonallocatable?: (ctx: Add_addr_region_nonallocatableContext) => void;
	/**
	 * Enter a parse tree produced by `pss.add_addr_region`.
	 * @param ctx the parse tree
	 */
	enterAdd_addr_region?: (ctx: Add_addr_regionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.add_addr_region`.
	 * @param ctx the parse tree
	 */
	exitAdd_addr_region?: (ctx: Add_addr_regionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.make_handle_from_claim`.
	 * @param ctx the parse tree
	 */
	enterMake_handle_from_claim?: (ctx: Make_handle_from_claimContext) => void;
	/**
	 * Exit a parse tree produced by `pss.make_handle_from_claim`.
	 * @param ctx the parse tree
	 */
	exitMake_handle_from_claim?: (ctx: Make_handle_from_claimContext) => void;
	/**
	 * Enter a parse tree produced by `pss.make_handle_from_handle`.
	 * @param ctx the parse tree
	 */
	enterMake_handle_from_handle?: (ctx: Make_handle_from_handleContext) => void;
	/**
	 * Exit a parse tree produced by `pss.make_handle_from_handle`.
	 * @param ctx the parse tree
	 */
	exitMake_handle_from_handle?: (ctx: Make_handle_from_handleContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_value`.
	 * @param ctx the parse tree
	 */
	enterAddr_value?: (ctx: Addr_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_value`.
	 * @param ctx the parse tree
	 */
	exitAddr_value?: (ctx: Addr_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_value_solve`.
	 * @param ctx the parse tree
	 */
	enterAddr_value_solve?: (ctx: Addr_value_solveContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_value_solve`.
	 * @param ctx the parse tree
	 */
	exitAddr_value_solve?: (ctx: Addr_value_solveContext) => void;
	/**
	 * Enter a parse tree produced by `pss.addr_value_abs`.
	 * @param ctx the parse tree
	 */
	enterAddr_value_abs?: (ctx: Addr_value_absContext) => void;
	/**
	 * Exit a parse tree produced by `pss.addr_value_abs`.
	 * @param ctx the parse tree
	 */
	exitAddr_value_abs?: (ctx: Addr_value_absContext) => void;
	/**
	 * Enter a parse tree produced by `pss.mem_ops`.
	 * @param ctx the parse tree
	 */
	enterMem_ops?: (ctx: Mem_opsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.mem_ops`.
	 * @param ctx the parse tree
	 */
	exitMem_ops?: (ctx: Mem_opsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_identifier`.
	 * @param ctx the parse tree
	 */
	enterRegister_identifier?: (ctx: Register_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_identifier`.
	 * @param ctx the parse tree
	 */
	exitRegister_identifier?: (ctx: Register_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_comp_identifier`.
	 * @param ctx the parse tree
	 */
	enterRegister_comp_identifier?: (ctx: Register_comp_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_comp_identifier`.
	 * @param ctx the parse tree
	 */
	exitRegister_comp_identifier?: (ctx: Register_comp_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_group_identifier`.
	 * @param ctx the parse tree
	 */
	enterRegister_group_identifier?: (ctx: Register_group_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_group_identifier`.
	 * @param ctx the parse tree
	 */
	exitRegister_group_identifier?: (ctx: Register_group_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_struct_identifier`.
	 * @param ctx the parse tree
	 */
	enterReg_struct_identifier?: (ctx: Reg_struct_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_struct_identifier`.
	 * @param ctx the parse tree
	 */
	exitReg_struct_identifier?: (ctx: Reg_struct_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.value_identifier`.
	 * @param ctx the parse tree
	 */
	enterValue_identifier?: (ctx: Value_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.value_identifier`.
	 * @param ctx the parse tree
	 */
	exitValue_identifier?: (ctx: Value_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.mask_struct_identifier`.
	 * @param ctx the parse tree
	 */
	enterMask_struct_identifier?: (ctx: Mask_struct_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.mask_struct_identifier`.
	 * @param ctx the parse tree
	 */
	exitMask_struct_identifier?: (ctx: Mask_struct_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.value_struct_identifier`.
	 * @param ctx the parse tree
	 */
	enterValue_struct_identifier?: (ctx: Value_struct_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.value_struct_identifier`.
	 * @param ctx the parse tree
	 */
	exitValue_struct_identifier?: (ctx: Value_struct_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.mask_identifier`.
	 * @param ctx the parse tree
	 */
	enterMask_identifier?: (ctx: Mask_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.mask_identifier`.
	 * @param ctx the parse tree
	 */
	exitMask_identifier?: (ctx: Mask_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.field_identifier`.
	 * @param ctx the parse tree
	 */
	enterField_identifier?: (ctx: Field_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.field_identifier`.
	 * @param ctx the parse tree
	 */
	exitField_identifier?: (ctx: Field_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.names_list_identifier`.
	 * @param ctx the parse tree
	 */
	enterNames_list_identifier?: (ctx: Names_list_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.names_list_identifier`.
	 * @param ctx the parse tree
	 */
	exitNames_list_identifier?: (ctx: Names_list_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.value_list_identifier`.
	 * @param ctx the parse tree
	 */
	enterValue_list_identifier?: (ctx: Value_list_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.value_list_identifier`.
	 * @param ctx the parse tree
	 */
	exitValue_list_identifier?: (ctx: Value_list_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.access_type`.
	 * @param ctx the parse tree
	 */
	enterAccess_type?: (ctx: Access_typeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.access_type`.
	 * @param ctx the parse tree
	 */
	exitAccess_type?: (ctx: Access_typeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_length`.
	 * @param ctx the parse tree
	 */
	enterReg_length?: (ctx: Reg_lengthContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_length`.
	 * @param ctx the parse tree
	 */
	exitReg_length?: (ctx: Reg_lengthContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_comp_definition`.
	 * @param ctx the parse tree
	 */
	enterRegister_comp_definition?: (ctx: Register_comp_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_comp_definition`.
	 * @param ctx the parse tree
	 */
	exitRegister_comp_definition?: (ctx: Register_comp_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_group_definition`.
	 * @param ctx the parse tree
	 */
	enterRegister_group_definition?: (ctx: Register_group_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_group_definition`.
	 * @param ctx the parse tree
	 */
	exitRegister_group_definition?: (ctx: Register_group_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_body_definition`.
	 * @param ctx the parse tree
	 */
	enterRegister_body_definition?: (ctx: Register_body_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_body_definition`.
	 * @param ctx the parse tree
	 */
	exitRegister_body_definition?: (ctx: Register_body_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_comp_instance`.
	 * @param ctx the parse tree
	 */
	enterRegister_comp_instance?: (ctx: Register_comp_instanceContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_comp_instance`.
	 * @param ctx the parse tree
	 */
	exitRegister_comp_instance?: (ctx: Register_comp_instanceContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_definition`.
	 * @param ctx the parse tree
	 */
	enterRegister_definition?: (ctx: Register_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_definition`.
	 * @param ctx the parse tree
	 */
	exitRegister_definition?: (ctx: Register_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_offset_of_instance_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_offset_of_instance_def?: (ctx: Function_offset_of_instance_defContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_offset_of_instance_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_offset_of_instance_def?: (ctx: Function_offset_of_instance_defContext) => void;
	/**
	 * Enter a parse tree produced by `pss.function_offset_of_instance_arr_def`.
	 * @param ctx the parse tree
	 */
	enterFunction_offset_of_instance_arr_def?: (ctx: Function_offset_of_instance_arr_defContext) => void;
	/**
	 * Exit a parse tree produced by `pss.function_offset_of_instance_arr_def`.
	 * @param ctx the parse tree
	 */
	exitFunction_offset_of_instance_arr_def?: (ctx: Function_offset_of_instance_arr_defContext) => void;
	/**
	 * Enter a parse tree produced by `pss.offset_match_stmts`.
	 * @param ctx the parse tree
	 */
	enterOffset_match_stmts?: (ctx: Offset_match_stmtsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.offset_match_stmts`.
	 * @param ctx the parse tree
	 */
	exitOffset_match_stmts?: (ctx: Offset_match_stmtsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.if_else_stmts`.
	 * @param ctx the parse tree
	 */
	enterIf_else_stmts?: (ctx: If_else_stmtsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.if_else_stmts`.
	 * @param ctx the parse tree
	 */
	exitIf_else_stmts?: (ctx: If_else_stmtsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_match_stmts`.
	 * @param ctx the parse tree
	 */
	enterReg_match_stmts?: (ctx: Reg_match_stmtsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_match_stmts`.
	 * @param ctx the parse tree
	 */
	exitReg_match_stmts?: (ctx: Reg_match_stmtsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.offset_return_items`.
	 * @param ctx the parse tree
	 */
	enterOffset_return_items?: (ctx: Offset_return_itemsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.offset_return_items`.
	 * @param ctx the parse tree
	 */
	exitOffset_return_items?: (ctx: Offset_return_itemsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_function_calls`.
	 * @param ctx the parse tree
	 */
	enterReg_function_calls?: (ctx: Reg_function_callsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_function_calls`.
	 * @param ctx the parse tree
	 */
	exitReg_function_calls?: (ctx: Reg_function_callsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.register_operation_call`.
	 * @param ctx the parse tree
	 */
	enterRegister_operation_call?: (ctx: Register_operation_callContext) => void;
	/**
	 * Exit a parse tree produced by `pss.register_operation_call`.
	 * @param ctx the parse tree
	 */
	exitRegister_operation_call?: (ctx: Register_operation_callContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_read`.
	 * @param ctx the parse tree
	 */
	enterReg_read?: (ctx: Reg_readContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_read`.
	 * @param ctx the parse tree
	 */
	exitReg_read?: (ctx: Reg_readContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write`.
	 * @param ctx the parse tree
	 */
	enterReg_write?: (ctx: Reg_writeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write`.
	 * @param ctx the parse tree
	 */
	exitReg_write?: (ctx: Reg_writeContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_read_val`.
	 * @param ctx the parse tree
	 */
	enterReg_read_val?: (ctx: Reg_read_valContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_read_val`.
	 * @param ctx the parse tree
	 */
	exitReg_read_val?: (ctx: Reg_read_valContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write_val`.
	 * @param ctx the parse tree
	 */
	enterReg_write_val?: (ctx: Reg_write_valContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write_val`.
	 * @param ctx the parse tree
	 */
	exitReg_write_val?: (ctx: Reg_write_valContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write_masked`.
	 * @param ctx the parse tree
	 */
	enterReg_write_masked?: (ctx: Reg_write_maskedContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write_masked`.
	 * @param ctx the parse tree
	 */
	exitReg_write_masked?: (ctx: Reg_write_maskedContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write_val_masked`.
	 * @param ctx the parse tree
	 */
	enterReg_write_val_masked?: (ctx: Reg_write_val_maskedContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write_val_masked`.
	 * @param ctx the parse tree
	 */
	exitReg_write_val_masked?: (ctx: Reg_write_val_maskedContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write_field`.
	 * @param ctx the parse tree
	 */
	enterReg_write_field?: (ctx: Reg_write_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write_field`.
	 * @param ctx the parse tree
	 */
	exitReg_write_field?: (ctx: Reg_write_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_write_fields`.
	 * @param ctx the parse tree
	 */
	enterReg_write_fields?: (ctx: Reg_write_fieldsContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_write_fields`.
	 * @param ctx the parse tree
	 */
	exitReg_write_fields?: (ctx: Reg_write_fieldsContext) => void;
	/**
	 * Enter a parse tree produced by `pss.reg_set_handle`.
	 * @param ctx the parse tree
	 */
	enterReg_set_handle?: (ctx: Reg_set_handleContext) => void;
	/**
	 * Exit a parse tree produced by `pss.reg_set_handle`.
	 * @param ctx the parse tree
	 */
	exitReg_set_handle?: (ctx: Reg_set_handleContext) => void;
	/**
	 * Enter a parse tree produced by `pss.file_doc_comment`.
	 * @param ctx the parse tree
	 */
	enterFile_doc_comment?: (ctx: File_doc_commentContext) => void;
	/**
	 * Exit a parse tree produced by `pss.file_doc_comment`.
	 * @param ctx the parse tree
	 */
	exitFile_doc_comment?: (ctx: File_doc_commentContext) => void;
	/**
	 * Enter a parse tree produced by `pss.documentation_comment`.
	 * @param ctx the parse tree
	 */
	enterDocumentation_comment?: (ctx: Documentation_commentContext) => void;
	/**
	 * Exit a parse tree produced by `pss.documentation_comment`.
	 * @param ctx the parse tree
	 */
	exitDocumentation_comment?: (ctx: Documentation_commentContext) => void;
	/**
	 * Enter a parse tree produced by `pss.doc_content`.
	 * @param ctx the parse tree
	 */
	enterDoc_content?: (ctx: Doc_contentContext) => void;
	/**
	 * Exit a parse tree produced by `pss.doc_content`.
	 * @param ctx the parse tree
	 */
	exitDoc_content?: (ctx: Doc_contentContext) => void;
	/**
	 * Enter a parse tree produced by `pss.brief_command`.
	 * @param ctx the parse tree
	 */
	enterBrief_command?: (ctx: Brief_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.brief_command`.
	 * @param ctx the parse tree
	 */
	exitBrief_command?: (ctx: Brief_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.param_command`.
	 * @param ctx the parse tree
	 */
	enterParam_command?: (ctx: Param_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.param_command`.
	 * @param ctx the parse tree
	 */
	exitParam_command?: (ctx: Param_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.return_command`.
	 * @param ctx the parse tree
	 */
	enterReturn_command?: (ctx: Return_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.return_command`.
	 * @param ctx the parse tree
	 */
	exitReturn_command?: (ctx: Return_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.deprecated_command`.
	 * @param ctx the parse tree
	 */
	enterDeprecated_command?: (ctx: Deprecated_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.deprecated_command`.
	 * @param ctx the parse tree
	 */
	exitDeprecated_command?: (ctx: Deprecated_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.author_command`.
	 * @param ctx the parse tree
	 */
	enterAuthor_command?: (ctx: Author_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.author_command`.
	 * @param ctx the parse tree
	 */
	exitAuthor_command?: (ctx: Author_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.date_command`.
	 * @param ctx the parse tree
	 */
	enterDate_command?: (ctx: Date_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.date_command`.
	 * @param ctx the parse tree
	 */
	exitDate_command?: (ctx: Date_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.version_command`.
	 * @param ctx the parse tree
	 */
	enterVersion_command?: (ctx: Version_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.version_command`.
	 * @param ctx the parse tree
	 */
	exitVersion_command?: (ctx: Version_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.see_command`.
	 * @param ctx the parse tree
	 */
	enterSee_command?: (ctx: See_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.see_command`.
	 * @param ctx the parse tree
	 */
	exitSee_command?: (ctx: See_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.attention_command`.
	 * @param ctx the parse tree
	 */
	enterAttention_command?: (ctx: Attention_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.attention_command`.
	 * @param ctx the parse tree
	 */
	exitAttention_command?: (ctx: Attention_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.file_command`.
	 * @param ctx the parse tree
	 */
	enterFile_command?: (ctx: File_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.file_command`.
	 * @param ctx the parse tree
	 */
	exitFile_command?: (ctx: File_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.todo_command`.
	 * @param ctx the parse tree
	 */
	enterTodo_command?: (ctx: Todo_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.todo_command`.
	 * @param ctx the parse tree
	 */
	exitTodo_command?: (ctx: Todo_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.example_command`.
	 * @param ctx the parse tree
	 */
	enterExample_command?: (ctx: Example_commandContext) => void;
	/**
	 * Exit a parse tree produced by `pss.example_command`.
	 * @param ctx the parse tree
	 */
	exitExample_command?: (ctx: Example_commandContext) => void;
	/**
	 * Enter a parse tree produced by `pss.brief_text`.
	 * @param ctx the parse tree
	 */
	enterBrief_text?: (ctx: Brief_textContext) => void;
	/**
	 * Exit a parse tree produced by `pss.brief_text`.
	 * @param ctx the parse tree
	 */
	exitBrief_text?: (ctx: Brief_textContext) => void;
	/**
	 * Enter a parse tree produced by `pss.param_identifier`.
	 * @param ctx the parse tree
	 */
	enterParam_identifier?: (ctx: Param_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `pss.param_identifier`.
	 * @param ctx the parse tree
	 */
	exitParam_identifier?: (ctx: Param_identifierContext) => void;
	/**
	 * Enter a parse tree produced by `pss.param_description`.
	 * @param ctx the parse tree
	 */
	enterParam_description?: (ctx: Param_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.param_description`.
	 * @param ctx the parse tree
	 */
	exitParam_description?: (ctx: Param_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.return_description`.
	 * @param ctx the parse tree
	 */
	enterReturn_description?: (ctx: Return_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.return_description`.
	 * @param ctx the parse tree
	 */
	exitReturn_description?: (ctx: Return_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.deprecated_description`.
	 * @param ctx the parse tree
	 */
	enterDeprecated_description?: (ctx: Deprecated_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.deprecated_description`.
	 * @param ctx the parse tree
	 */
	exitDeprecated_description?: (ctx: Deprecated_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.author_name`.
	 * @param ctx the parse tree
	 */
	enterAuthor_name?: (ctx: Author_nameContext) => void;
	/**
	 * Exit a parse tree produced by `pss.author_name`.
	 * @param ctx the parse tree
	 */
	exitAuthor_name?: (ctx: Author_nameContext) => void;
	/**
	 * Enter a parse tree produced by `pss.date_value`.
	 * @param ctx the parse tree
	 */
	enterDate_value?: (ctx: Date_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.date_value`.
	 * @param ctx the parse tree
	 */
	exitDate_value?: (ctx: Date_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.version_value`.
	 * @param ctx the parse tree
	 */
	enterVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Exit a parse tree produced by `pss.version_value`.
	 * @param ctx the parse tree
	 */
	exitVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Enter a parse tree produced by `pss.see_link`.
	 * @param ctx the parse tree
	 */
	enterSee_link?: (ctx: See_linkContext) => void;
	/**
	 * Exit a parse tree produced by `pss.see_link`.
	 * @param ctx the parse tree
	 */
	exitSee_link?: (ctx: See_linkContext) => void;
	/**
	 * Enter a parse tree produced by `pss.see_description`.
	 * @param ctx the parse tree
	 */
	enterSee_description?: (ctx: See_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.see_description`.
	 * @param ctx the parse tree
	 */
	exitSee_description?: (ctx: See_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.attention_description`.
	 * @param ctx the parse tree
	 */
	enterAttention_description?: (ctx: Attention_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.attention_description`.
	 * @param ctx the parse tree
	 */
	exitAttention_description?: (ctx: Attention_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.file_path`.
	 * @param ctx the parse tree
	 */
	enterFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Exit a parse tree produced by `pss.file_path`.
	 * @param ctx the parse tree
	 */
	exitFile_path?: (ctx: File_pathContext) => void;
	/**
	 * Enter a parse tree produced by `pss.todo_description`.
	 * @param ctx the parse tree
	 */
	enterTodo_description?: (ctx: Todo_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `pss.todo_description`.
	 * @param ctx the parse tree
	 */
	exitTodo_description?: (ctx: Todo_descriptionContext) => void;
	/**
	 * Enter a parse tree produced by `pss.example_code`.
	 * @param ctx the parse tree
	 */
	enterExample_code?: (ctx: Example_codeContext) => void;
	/**
	 * Exit a parse tree produced by `pss.example_code`.
	 * @param ctx the parse tree
	 */
	exitExample_code?: (ctx: Example_codeContext) => void;
}

