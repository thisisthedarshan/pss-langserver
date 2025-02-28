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
import { CharStream, CommonTokenStream } from "antlr4";
import pss, { Enum_identifierContext, IdentifierContext, Stream_type_identifierContext } from "../grammar/pss";
import pss_lexer from "../grammar/pss_lexer";
import { visitor } from "./visitor";


export function getAutoCompleteItemsFromFile(fileContents: string): string[] {
  let inputStream = new CharStream(fileContents);
  let lexer = new pss_lexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new pss(tokenStream);
  let tree = parser.pss_entry();
  let myVisitor = new visitor();
  tree.accept(myVisitor);
  //console.log(tree);
  return [...new Set(myVisitor.getIdentifiers())];
}