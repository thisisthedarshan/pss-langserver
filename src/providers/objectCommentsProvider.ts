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

import { AssignmentNode, CompNode, FunctionCallNode, FunctionNode, InstanceNode, PSSLangObjects, RegisterCompNode, RegisterDefNode, RegisterGroupNode } from "../definitions/dataStructures";
import { objType } from "../definitions/dataTypes";
import { generateComponentComment, generateInstanceComment, generateAssignmentComment, generateRegisterCompComment, generateRegisterGroupComment, generateRegisterDefComment, generateFunctionComment, generateDefaultComment, generateAssignmentCommentMarkdown, generateComponentCommentMarkdown, generateDefaultCommentMarkdown, generateFunctionCommentMarkdown, generateInstanceCommentMarkdown, generateRegisterCompCommentMarkdown, generateRegisterDefCommentMarkdown, generateRegisterGroupCommentMarkdown, generateFunctionCallCommentMarkdown } from "./objectCommentsHelper";

export function createCommentsFromNode(node: PSSLangObjects): string {
  switch (node.type) {
    case objType.COMPONENT:
      return generateComponentComment(node as CompNode);
    case objType.INSTANCE:
      return generateInstanceComment(node as InstanceNode);
    case objType.ASSIGNMENT:
      return generateAssignmentComment(node as AssignmentNode);
    case objType.REGISTER_COMP:
      return generateRegisterCompComment(node as RegisterCompNode);
    case objType.REGISTER_GROUP:
      return generateRegisterGroupComment(node as RegisterGroupNode);
    case objType.REGISTER_DEF:
      return generateRegisterDefComment(node as RegisterDefNode);
    case objType.FUNCTION:
      return generateFunctionComment(node as FunctionNode);
    default:
      return generateDefaultComment(node);
  }
}
export function createCommentsFromNodeMarkdown(node: PSSLangObjects): string {
  switch (node.type) {
    case objType.COMPONENT:
      return generateComponentCommentMarkdown(node as CompNode);
    case objType.INSTANCE:
      return generateInstanceCommentMarkdown(node as InstanceNode);
    case objType.ASSIGNMENT:
      return generateAssignmentCommentMarkdown(node as AssignmentNode);
    case objType.REGISTER_COMP:
      return generateRegisterCompCommentMarkdown(node as RegisterCompNode);
    case objType.REGISTER_GROUP:
      return generateRegisterGroupCommentMarkdown(node as RegisterGroupNode);
    case objType.REGISTER_DEF:
      return generateRegisterDefCommentMarkdown(node as RegisterDefNode);
    case objType.FUNCTION:
      return generateFunctionCommentMarkdown(node as FunctionNode);
    case objType.FUNCTION_CALL:
      return generateFunctionCallCommentMarkdown(node as FunctionCallNode);
    default:
      return generateDefaultCommentMarkdown(node);
  }
}