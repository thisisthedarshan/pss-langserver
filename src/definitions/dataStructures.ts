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
import { integer } from "vscode-languageserver/node";
import { enumItems, objType, params, PSSNode, traits } from "./dataTypes";

interface CompNode extends PSSNode {
  type: objType.COMPONENT;
  isPure: boolean;
  templateParams: params[];
  superSpec: string;
}

interface ActionNode extends PSSNode {
  type: objType.ACTION;
  isAbstract: boolean;
  templateParams: params[];
  superSpec: string;
}

interface InstanceNode extends PSSNode {
  type: objType.INSTANCE | objType;
  accessModifier: string;
  instanceType: objType | string;
  instanceDefaultValue: string; /* name of spec in register instances */
  instanceArrayCount: number | string;
  isRandom: boolean;
  isStaticConst: boolean;
}

interface MemorySpaceNode extends PSSNode {
  type: objType.MEMORY_SPACE;
  memTraits: traits[];
}

interface MemoryRegionNode extends PSSNode {
  type: objType.MEMORY_REGION;
  size: integer;
  address: bigint;
  regionTraits: traits[];
}

interface RegisterCompNode extends PSSNode {
  type: objType.REGISTER_COMP;
  accessType: "READONLY" | "READWRITE" | "WRITEONLY";
  registerLength: integer;
  basedOnStruct: string;
}

interface RegisterGroupNode extends PSSNode {
  type: objType.REGISTER_GROUP;
  baseAddress: string;
}

interface RegisterBodyNode extends PSSNode {
  type: objType.REGISTER_BODY_ITEM;
}

interface RegisterDefNode extends PSSNode {
  type: objType.REGISTER_DEF;
  accessType: "READONLY" | "READWRITE" | "WRITEONLY";
  registerLength: integer;
  basedOnStruct: string;
  instanceArrayCount: integer;
}

interface ActivityNode extends PSSNode {
  type: objType.ACTIVITY;
}

interface EnumNode extends PSSNode {
  type: objType.ENUM;
  dataType: string;
  enumItems: enumItems[];
}

interface StructNode extends PSSNode {
  type: objType.STRUCT | objType.BUFFER | objType.STATE | objType.STREAM | objType.RESOURCE_OBJECT;
  templateParams: params[];
  superSpec: string;
}

interface FunctionNode extends PSSNode {
  type: objType.FUNCTION;
  platformQualifier: "target" | "solve";
  isPure: boolean;
  isStatic: boolean;
  returnType: string;
  parameters: params[];
}

interface FlowReferenceFieldNode extends PSSNode {
  type: objType.BUFFER | objType.STREAM | objType.STATE | objType.POOLS;
  flowDirection: 'input' | 'output';
  instanceArraySize: number | string;
}

interface ResourceReferenceFieldNode extends PSSNode {
  type: objType.RESOURCE_OBJECT;
  resourceLock: 'lock' | 'share';
  instanceArraySize: number | string;
}

interface AddressNode extends PSSNode {
  type: objType.ADDRESS_SPACE | objType.ADDRESS_REGION | objType.ADDRESS_CLAIM;
  isRandom: boolean;
  addressType: "contiguous" | "transparent";
  traitsStruct: string;
  size: number | string;
  address: string;
  regions: { [trait: string]: "allocatable" | "non-allocatable" }[]; /** For [identifier]: "allocatable | non-allocatable" */
  additionalTraits: { [trait: string]: string }[];
}

interface ExecNode extends PSSNode {
  type: objType.EXEC_PRESOLVE | objType.EXEC_POSTSOLVE | objType.EXEC_PREBODY | objType.EXEC_BODY | objType.EXEC_HEADER | objType.EXEC_DECLARATION | objType.EXEC_RUNSTART | objType.EXEC_RUNEND | objType.EXEC_INITDOWN | objType.EXEC_INITUP | objType.EXEC_INIT;
  execType: "target" | "file" | "regular";
  content: string; /** Only when language or filename is present */
}

interface PackageNode extends PSSNode {
  type: objType.PACKAGE;
  path: string; /** The identifiers after main identifier, which are preceded by scope operator */
}

interface StructKindNode extends PSSNode {
  type: objType.STRUCT | objType.STREAM | objType.STATE | objType.RESOURCE_OBJECT;
  template: params[];
  superSpec: string;
}

interface TypedefDeclNode extends PSSNode {
  type: objType.TYPEDEF;
  dataType: string;
}

interface ImportsNode extends PSSNode {
  type: objType.IMPORT;
  importType: string; /* Contains if import is package, class or function */
  features: string; /* Contains function prototype or imported functions */
}

interface AssignmentNode extends PSSNode {
  type: objType.ASSIGNMENT;
  operation: string; /* Assignment operation being performed */
  value: string; /* This is the expression or calling function name */
  dataType: string;
}

type PSSLangObjects = PSSNode | CompNode | ActionNode | InstanceNode | MemorySpaceNode | MemoryRegionNode | RegisterCompNode | RegisterGroupNode | RegisterBodyNode | RegisterDefNode | ActivityNode | EnumNode | StructNode | FunctionNode | FlowReferenceFieldNode | ResourceReferenceFieldNode | AddressNode | ExecNode | PackageNode | StructKindNode | TypedefDeclNode | ImportsNode | AssignmentNode;

export { PSSLangObjects, CompNode, ActionNode, InstanceNode, MemorySpaceNode, MemoryRegionNode, RegisterCompNode, RegisterGroupNode, RegisterBodyNode, RegisterDefNode, ActivityNode, EnumNode, StructNode, FunctionNode, FlowReferenceFieldNode, ResourceReferenceFieldNode, AddressNode, ExecNode, PackageNode, StructKindNode, TypedefDeclNode, ImportsNode, AssignmentNode };