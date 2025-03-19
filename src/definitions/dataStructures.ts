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
  templateParams: params[] | undefined;
  superSpec: string;
}

interface ActionNode extends PSSNode {
  type: objType.ACTION;
  isAbstract: boolean;
  isPure: boolean;
  templateParams: params[] | undefined;
  superSpec: string;
}

interface InstanceNode extends PSSNode {
  type: objType.INSTANCE;
  instanceType: objType | string;
  instanceName: string;
  instanceDefaultValue: any | undefined; /* name of spec in register instances */
  instanceArrayCount: integer;
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
  baseAddress: bigint;
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
  type: objType.STRUCT | objType.STATE | objType.STREAM | objType.RESOURCE_OBJECT;
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

type PSSLangObjects = CompNode | ActionNode | InstanceNode | MemorySpaceNode | MemoryRegionNode | RegisterCompNode | RegisterGroupNode | RegisterBodyNode | RegisterDefNode | ActivityNode | EnumNode | StructNode | FunctionNode;

export { PSSLangObjects, CompNode, ActionNode, InstanceNode, MemorySpaceNode, MemoryRegionNode, RegisterCompNode, RegisterGroupNode, RegisterBodyNode, RegisterDefNode, ActivityNode, EnumNode, StructNode, FunctionNode };