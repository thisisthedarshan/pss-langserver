import { SemanticTokenModifiers, SemanticTokenTypes } from "vscode-languageserver";
import { KeywordInfo, objType } from "./dataTypes";

export const semanticTokensBuiltin: Record<string, KeywordInfo> = {
  "addr_handle_t": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.definition]
  },
  "abstract": {
    tokenType: SemanticTokenTypes.modifier,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.abstract]
  },
  "action": {
    tokenType: SemanticTokenTypes.class,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "activity": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "array": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "as": {
    tokenType: SemanticTokenTypes.operator,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "assert": {
    tokenType: SemanticTokenTypes.macro,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "atomic": {
    tokenType: SemanticTokenTypes.modifier,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "bind": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "bins": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "bit": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "body": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "bool": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "break": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "buffer": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "chandle": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "class": {
    tokenType: SemanticTokenTypes.class,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.definition]
  },
  "compile": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "component": {
    tokenType: SemanticTokenTypes.class,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "concat": {
    tokenType: SemanticTokenTypes.operator,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "const": {
    tokenType: SemanticTokenTypes.modifier,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.readonly]
  },
  "constraint": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "continue": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "cover": {
    tokenType: SemanticTokenTypes.macro,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "covergroup": {
    tokenType: SemanticTokenTypes.macro,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "coverpoint": {
    tokenType: SemanticTokenTypes.macro,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "cross": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "declaration": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "default": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "disable": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "dist": {
    tokenType: SemanticTokenTypes.operator,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "do": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "dynamic": {
    tokenType: SemanticTokenTypes.modifier,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "else": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "enum": {
    tokenType: SemanticTokenTypes.enum,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "eventually": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "exec": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "export": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "extend": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "false": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "file": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "float32": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "float64": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "forall": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "foreach": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "function": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.declaration]
  },
  "has": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "header": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "if": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "iff": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "ignore_bins": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "illegal_bins": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "import": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  }, "in": {
    tokenType: SemanticTokenTypes.operator,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "init": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "init_down": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "init_up": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "inout": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "input": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "instance": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "int": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "join_branch": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "join_first": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "join_none": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "join_select": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "list": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "lock": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "map": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  }
  , "match": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "monitor": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "null": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "output": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "override": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "package": {
    tokenType: SemanticTokenTypes.namespace,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "parallel": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "pool": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "post_solve": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "pre_body": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "pre_solve": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "private": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "protected": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "public": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "pure": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "rand": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "randomize": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "ref": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "repeat": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "replicate": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "resource": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "return": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "run_end": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "run_start": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "schedule": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "select": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "sequence": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "set": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "share": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "solve": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "state": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "static": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "stream": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "string": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "struct": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.declaration
  },
  "super": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  },
  "symbol": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "target": {
    tokenType: SemanticTokenTypes.type,
    tokenModifiers: SemanticTokenModifiers.defaultLibrary
  },
  "this": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: SemanticTokenModifiers.modification
  }
  , "true": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "typedef": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "unique": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "void": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "while": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "with": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "yield": {
    tokenType: SemanticTokenTypes.keyword,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "print": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "format": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.defaultLibrary]
  },
  "file_open": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.async]
  },
  "file_close": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.async]
  },
  "file_exists": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.async]
  },
  "file_write": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.async]
  },
  "file_read": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.async]
  },
  "urandom": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification]
  },
  "urandom_range": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification]
  },
  "read8": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "read16": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "read32": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "read64": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "write8": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "write16": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "write32": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "write64": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "error": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "fatal": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.modification, SemanticTokenModifiers.definition]
  },
  "log": {
    tokenType: SemanticTokenTypes.function,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary, SemanticTokenModifiers.documentation]
  }
  , "std_pkg": {
    tokenType: SemanticTokenTypes.namespace,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  },
  "executor_pkg": {
    tokenType: SemanticTokenTypes.namespace,
    tokenModifiers: [SemanticTokenModifiers.defaultLibrary,]
  }



}

export const semanticTokenTypes: Record<keyof typeof objType, KeywordInfo> = {
  NONE: { tokenType: SemanticTokenTypes.variable, tokenModifiers: [] },
  COMPONENT: { tokenType: SemanticTokenTypes.class, tokenModifiers: [SemanticTokenModifiers.defaultLibrary] },
  ACTION: { tokenType: SemanticTokenTypes.function, tokenModifiers: [SemanticTokenModifiers.async] },
  FUNCTION: { tokenType: SemanticTokenTypes.function, tokenModifiers: [] },
  PROCEDURAL_FUNCTION: { tokenType: SemanticTokenTypes.function, tokenModifiers: [SemanticTokenModifiers.declaration] },
  ENUM: { tokenType: SemanticTokenTypes.enum, tokenModifiers: [] },
  REGISTER_BODY_ITEM: { tokenType: SemanticTokenTypes.variable, tokenModifiers: [] },
  REGISTER_GROUP: { tokenType: SemanticTokenTypes.struct, tokenModifiers: [] },
  BUFFER: { tokenType: SemanticTokenTypes.struct, tokenModifiers: [] },
  STRUCT: { tokenType: SemanticTokenTypes.struct, tokenModifiers: [] },
  RESOURCE_OBJECT: { tokenType: SemanticTokenTypes.class, tokenModifiers: [SemanticTokenModifiers.readonly] },
  PACKAGE: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  MONITOR: { tokenType: SemanticTokenTypes.class, tokenModifiers: [SemanticTokenModifiers.abstract] },
  CONSTRAINT: { tokenType: SemanticTokenTypes.keyword, tokenModifiers: [] },
  DATA: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  TYPEDEF: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  CHANDLE: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  INTEGER: { tokenType: SemanticTokenTypes.number, tokenModifiers: [] },
  BIT: { tokenType: SemanticTokenTypes.keyword, tokenModifiers: [] },
  STRING: { tokenType: SemanticTokenTypes.string, tokenModifiers: [] },
  BOOL: { tokenType: SemanticTokenTypes.keyword, tokenModifiers: [] },
  FLOAT32: { tokenType: SemanticTokenTypes.number, tokenModifiers: [] },
  FLOAT64: { tokenType: SemanticTokenTypes.number, tokenModifiers: [] },
  REF: { tokenType: SemanticTokenTypes.keyword, tokenModifiers: [SemanticTokenModifiers.modification] },
  ARRAY: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  LIST: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  MAP: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  SET: { tokenType: SemanticTokenTypes.type, tokenModifiers: [] },
  UNKNOWN: { tokenType: SemanticTokenTypes.type, tokenModifiers: [SemanticTokenModifiers.deprecated] },
  ACTIVITY: { tokenType: SemanticTokenTypes.class, tokenModifiers: [] },
  REGISTER_COMP: { tokenType: SemanticTokenTypes.class, tokenModifiers: [] },
  REGISTER_DEF: { tokenType: SemanticTokenTypes.interface, tokenModifiers: [] },
  REGISTER: { tokenType: SemanticTokenTypes.interface, tokenModifiers: [] },
  STATE: { tokenType: SemanticTokenTypes.property, tokenModifiers: [] },
  STREAM: { tokenType: SemanticTokenTypes.typeParameter, tokenModifiers: [] },
  INSTANCE: { tokenType: SemanticTokenTypes.variable, tokenModifiers: [] },
  MEMORY_SPACE: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  MEMORY_REGION: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  MEMORY_CLAIM: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  VARARGS: { tokenType: SemanticTokenTypes.modifier, tokenModifiers: [] },
  POOLS: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [SemanticTokenModifiers.async] },
  TEMPLATE_ITEM: { tokenType: SemanticTokenTypes.property, tokenModifiers: [] },
  ACTION_HANDLE: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  ADDRESS_SPACE: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  ADDRESS_REGION: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  ADDRESS_CLAIM: { tokenType: SemanticTokenTypes.namespace, tokenModifiers: [] },
  STRUCT_ITEM: { tokenType: SemanticTokenTypes.struct, tokenModifiers: [] },
  EXEC_PRESOLVE: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_POSTSOLVE: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_PREBODY: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_BODY: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_HEADER: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_DECLARATION: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_RUNSTART: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_RUNEND: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_INITDOWN: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_INITUP: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_INIT: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_TARGET: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  EXEC_FILE: { tokenType: SemanticTokenTypes.method, tokenModifiers: [] },
  CALL_SUPER: { tokenType: SemanticTokenTypes.event, tokenModifiers: [SemanticTokenModifiers.defaultLibrary] },
  IMPORT: { tokenType: SemanticTokenTypes.macro, tokenModifiers: [] },
  ASSIGNMENT: { tokenType: SemanticTokenTypes.variable, tokenModifiers: [] },
  FUNCTION_CALL: { tokenType: SemanticTokenTypes.function, tokenModifiers: [SemanticTokenModifiers.definition] },
  PARAMETER: { tokenType: SemanticTokenTypes.parameter, tokenModifiers: [] }
};
