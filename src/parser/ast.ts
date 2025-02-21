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
  return myVisitor.getIdentifiers();
}