// Copyright (c) 2024-25 Darshan(@thisisthedarshan)
// Licensed under the MIT License. See LICENSE file for details.
import { builtInSignatures } from "../definitions/builtinFunctions";

export function isWithinCommentBlock(document: { lineAt: (arg0: any) => { (): any; new(): any; text: string; }; }, lineNumber: any) {
  for (let i = lineNumber; i >= 0; i--) {
    const lineText = document.lineAt(i).text.trim();

    if ((lineText.startsWith('/*') || lineText.startsWith("/**")) && !lineText.endsWith('*/')) {
      return true;  // Found the start of an unclosed block comment
    }
    if (lineText.endsWith('*/')) {
      return false;  // Found the end of the block comment
    }
  }
  return false;
}