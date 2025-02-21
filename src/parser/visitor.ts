import { ParserRuleContext } from "antlr4";
import pssVisitor from "../grammar/pssVisitor";
import { IdentifierContext } from "../grammar/pss";

export class visitor extends pssVisitor<void> {
  private identifiers: string[] = [];
  getIdentifiers(): string[] { return this.identifiers; }
  constructor() {
    super();
    this.visitIdentifier = (ctx: IdentifierContext): void => {
      this.identifiers.push(ctx.getText());
    };
  }
}
