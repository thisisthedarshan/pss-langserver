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
// Generated from ./src/grammar/antlr/doxygenParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import doxygenParserListener from "./doxygenParserListener.js";
import doxygenParserVisitor from "./doxygenParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class doxygenParser extends Parser {
	public static readonly TOKEN_DOC_START = 1;
	public static readonly TOKEN_DOC_END = 2;
	public static readonly TOKEN_BRIEF_MARKER = 3;
	public static readonly TOKEN_PARAM_MARKER = 4;
	public static readonly TOKEN_RETURN_MARKER = 5;
	public static readonly TOKEN_RETURNS_MARKER = 6;
	public static readonly TOKEN_DEPRECATED_MARKER = 7;
	public static readonly TOKEN_AUTHOR_MARKER = 8;
	public static readonly TOKEN_DATE_MARKER = 9;
	public static readonly TOKEN_VERSION_MARKER = 10;
	public static readonly TOKEN_SEE_MARKER = 11;
	public static readonly TOKEN_ATTENTION_MARKER = 12;
	public static readonly TOKEN_FILE_MARKER = 13;
	public static readonly TOKEN_TODO_MARKER = 14;
	public static readonly TOKEN_EXAMPLE_MARKER = 15;
	public static readonly TOKEN_WORD = 16;
	public static readonly TOKEN_DIGIT = 17;
	public static readonly TOKEN_DATE = 18;
	public static readonly TOKEN_NEWLINE = 19;
	public static readonly TOKEN_WHITESPACE = 20;
	public static readonly TOKEN_DOT = 21;
	public static readonly TOKEN_DIVIDE = 22;
	public static readonly TOKEN_UNDERSCORE = 23;
	public static readonly SKIP_WHITESPACE = 24;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_file_doc_comment = 0;
	public static readonly RULE_documentation_comment = 1;
	public static readonly RULE_doc_content = 2;
	public static readonly RULE_brief_command = 3;
	public static readonly RULE_param_command = 4;
	public static readonly RULE_return_command = 5;
	public static readonly RULE_deprecated_command = 6;
	public static readonly RULE_author_command = 7;
	public static readonly RULE_date_command = 8;
	public static readonly RULE_version_command = 9;
	public static readonly RULE_see_command = 10;
	public static readonly RULE_attention_command = 11;
	public static readonly RULE_file_command = 12;
	public static readonly RULE_todo_command = 13;
	public static readonly RULE_example_command = 14;
	public static readonly RULE_brief_text = 15;
	public static readonly RULE_param_identifier = 16;
	public static readonly RULE_param_description = 17;
	public static readonly RULE_return_description = 18;
	public static readonly RULE_deprecated_description = 19;
	public static readonly RULE_author_name = 20;
	public static readonly RULE_date_value = 21;
	public static readonly RULE_version_value = 22;
	public static readonly RULE_see_link = 23;
	public static readonly RULE_see_description = 24;
	public static readonly RULE_attention_description = 25;
	public static readonly RULE_file_path = 26;
	public static readonly RULE_todo_description = 27;
	public static readonly RULE_example_code = 28;
	public static readonly literalNames: (string | null)[] = [ null, "'/**'", 
                                                            "'*/'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'.'", 
                                                            "'/'", "'_'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TOKEN_DOC_START", 
                                                             "TOKEN_DOC_END", 
                                                             "TOKEN_BRIEF_MARKER", 
                                                             "TOKEN_PARAM_MARKER", 
                                                             "TOKEN_RETURN_MARKER", 
                                                             "TOKEN_RETURNS_MARKER", 
                                                             "TOKEN_DEPRECATED_MARKER", 
                                                             "TOKEN_AUTHOR_MARKER", 
                                                             "TOKEN_DATE_MARKER", 
                                                             "TOKEN_VERSION_MARKER", 
                                                             "TOKEN_SEE_MARKER", 
                                                             "TOKEN_ATTENTION_MARKER", 
                                                             "TOKEN_FILE_MARKER", 
                                                             "TOKEN_TODO_MARKER", 
                                                             "TOKEN_EXAMPLE_MARKER", 
                                                             "TOKEN_WORD", 
                                                             "TOKEN_DIGIT", 
                                                             "TOKEN_DATE", 
                                                             "TOKEN_NEWLINE", 
                                                             "TOKEN_WHITESPACE", 
                                                             "TOKEN_DOT", 
                                                             "TOKEN_DIVIDE", 
                                                             "TOKEN_UNDERSCORE", 
                                                             "SKIP_WHITESPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file_doc_comment", "documentation_comment", "doc_content", "brief_command", 
		"param_command", "return_command", "deprecated_command", "author_command", 
		"date_command", "version_command", "see_command", "attention_command", 
		"file_command", "todo_command", "example_command", "brief_text", "param_identifier", 
		"param_description", "return_description", "deprecated_description", "author_name", 
		"date_value", "version_value", "see_link", "see_description", "attention_description", 
		"file_path", "todo_description", "example_code",
	];
	public get grammarFileName(): string { return "doxygenParser.g4"; }
	public get literalNames(): (string | null)[] { return doxygenParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return doxygenParser.symbolicNames; }
	public get ruleNames(): string[] { return doxygenParser.ruleNames; }
	public get serializedATN(): number[] { return doxygenParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, doxygenParser._ATN, doxygenParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file_doc_comment(): File_doc_commentContext {
		let localctx: File_doc_commentContext = new File_doc_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, doxygenParser.RULE_file_doc_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.documentation_comment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public documentation_comment(): Documentation_commentContext {
		let localctx: Documentation_commentContext = new Documentation_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, doxygenParser.RULE_documentation_comment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(doxygenParser.TOKEN_DOC_START);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65528) !== 0)) {
				{
				{
				this.state = 61;
				this.doc_content();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.match(doxygenParser.TOKEN_DOC_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doc_content(): Doc_contentContext {
		let localctx: Doc_contentContext = new Doc_contentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, doxygenParser.RULE_doc_content);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.brief_command();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.param_command();
				}
				break;
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
				this.return_command();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 72;
				this.deprecated_command();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 73;
				this.author_command();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 74;
				this.date_command();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 75;
				this.version_command();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 76;
				this.see_command();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 77;
				this.attention_command();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 78;
				this.file_command();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 79;
				this.todo_command();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 80;
				this.example_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brief_command(): Brief_commandContext {
		let localctx: Brief_commandContext = new Brief_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, doxygenParser.RULE_brief_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(doxygenParser.TOKEN_BRIEF_MARKER);
			this.state = 84;
			this.brief_text();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public param_command(): Param_commandContext {
		let localctx: Param_commandContext = new Param_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, doxygenParser.RULE_param_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(doxygenParser.TOKEN_PARAM_MARKER);
			this.state = 87;
			this.param_identifier();
			this.state = 88;
			this.param_description();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_command(): Return_commandContext {
		let localctx: Return_commandContext = new Return_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, doxygenParser.RULE_return_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 91;
			this.return_description();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deprecated_command(): Deprecated_commandContext {
		let localctx: Deprecated_commandContext = new Deprecated_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, doxygenParser.RULE_deprecated_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this.match(doxygenParser.TOKEN_DEPRECATED_MARKER);
			this.state = 94;
			this.deprecated_description();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public author_command(): Author_commandContext {
		let localctx: Author_commandContext = new Author_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, doxygenParser.RULE_author_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.match(doxygenParser.TOKEN_AUTHOR_MARKER);
			this.state = 97;
			this.author_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public date_command(): Date_commandContext {
		let localctx: Date_commandContext = new Date_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, doxygenParser.RULE_date_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this.match(doxygenParser.TOKEN_DATE_MARKER);
			this.state = 100;
			this.date_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public version_command(): Version_commandContext {
		let localctx: Version_commandContext = new Version_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, doxygenParser.RULE_version_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this.match(doxygenParser.TOKEN_VERSION_MARKER);
			this.state = 103;
			this.version_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public see_command(): See_commandContext {
		let localctx: See_commandContext = new See_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, doxygenParser.RULE_see_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			this.match(doxygenParser.TOKEN_SEE_MARKER);
			this.state = 106;
			this.see_link();
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 107;
				this.see_description();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attention_command(): Attention_commandContext {
		let localctx: Attention_commandContext = new Attention_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, doxygenParser.RULE_attention_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(doxygenParser.TOKEN_ATTENTION_MARKER);
			this.state = 111;
			this.attention_description();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file_command(): File_commandContext {
		let localctx: File_commandContext = new File_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, doxygenParser.RULE_file_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(doxygenParser.TOKEN_FILE_MARKER);
			this.state = 114;
			this.file_path();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public todo_command(): Todo_commandContext {
		let localctx: Todo_commandContext = new Todo_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, doxygenParser.RULE_todo_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(doxygenParser.TOKEN_TODO_MARKER);
			this.state = 117;
			this.todo_description();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public example_command(): Example_commandContext {
		let localctx: Example_commandContext = new Example_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, doxygenParser.RULE_example_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.match(doxygenParser.TOKEN_EXAMPLE_MARKER);
			this.state = 120;
			this.example_code();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public brief_text(): Brief_textContext {
		let localctx: Brief_textContext = new Brief_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, doxygenParser.RULE_brief_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 122;
					_la = this._input.LA(1);
					if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 65524) !== 0)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public param_identifier(): Param_identifierContext {
		let localctx: Param_identifierContext = new Param_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, doxygenParser.RULE_param_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this.match(doxygenParser.TOKEN_WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public param_description(): Param_descriptionContext {
		let localctx: Param_descriptionContext = new Param_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, doxygenParser.RULE_param_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 132;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 129;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 134;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
					}
					this.state = 135;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2 || _la===4) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_description(): Return_descriptionContext {
		let localctx: Return_descriptionContext = new Return_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, doxygenParser.RULE_return_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 143;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 140;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 145;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
					}
					this.state = 146;
					_la = this._input.LA(1);
					if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 388) !== 0)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deprecated_description(): Deprecated_descriptionContext {
		let localctx: Deprecated_descriptionContext = new Deprecated_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, doxygenParser.RULE_deprecated_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 154;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 151;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 156;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
					}
					this.state = 157;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2 || _la===8) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public author_name(): Author_nameContext {
		let localctx: Author_nameContext = new Author_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, doxygenParser.RULE_author_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 162;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===20)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===16 || _la===20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public date_value(): Date_valueContext {
		let localctx: Date_valueContext = new Date_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, doxygenParser.RULE_date_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.match(doxygenParser.TOKEN_DATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public version_value(): Version_valueContext {
		let localctx: Version_valueContext = new Version_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, doxygenParser.RULE_version_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 169;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2293760) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2293760) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public see_link(): See_linkContext {
		let localctx: See_linkContext = new See_linkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, doxygenParser.RULE_see_link);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this.match(doxygenParser.TOKEN_WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public see_description(): See_descriptionContext {
		let localctx: See_descriptionContext = new See_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, doxygenParser.RULE_see_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 176;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 181;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
					}
					this.state = 182;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attention_description(): Attention_descriptionContext {
		let localctx: Attention_descriptionContext = new Attention_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, doxygenParser.RULE_attention_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 190;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 187;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 192;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
					}
					this.state = 193;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file_path(): File_pathContext {
		let localctx: File_pathContext = new File_pathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, doxygenParser.RULE_file_path);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 198;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14745600) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14745600) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public todo_description(): Todo_descriptionContext {
		let localctx: Todo_descriptionContext = new Todo_descriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, doxygenParser.RULE_todo_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 206;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 203;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 208;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 209;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public example_code(): Example_codeContext {
		let localctx: Example_codeContext = new Example_codeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, doxygenParser.RULE_example_code);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 217;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 214;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 219;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 220;
					_la = this._input.LA(1);
					if(_la<=0 || _la===2) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,24,226,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,1,0,1,0,1,1,1,1,5,1,63,8,1,10,
	1,12,1,66,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,
	2,82,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,
	7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,3,10,109,8,10,1,11,1,11,1,11,1,
	12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,4,15,124,8,15,11,15,12,
	15,125,1,16,1,16,1,17,5,17,131,8,17,10,17,12,17,134,9,17,1,17,4,17,137,
	8,17,11,17,12,17,138,1,18,5,18,142,8,18,10,18,12,18,145,9,18,1,18,4,18,
	148,8,18,11,18,12,18,149,1,19,5,19,153,8,19,10,19,12,19,156,9,19,1,19,4,
	19,159,8,19,11,19,12,19,160,1,20,4,20,164,8,20,11,20,12,20,165,1,21,1,21,
	1,22,4,22,171,8,22,11,22,12,22,172,1,23,1,23,1,24,5,24,178,8,24,10,24,12,
	24,181,9,24,1,24,4,24,184,8,24,11,24,12,24,185,1,25,5,25,189,8,25,10,25,
	12,25,192,9,25,1,25,4,25,195,8,25,11,25,12,25,196,1,26,4,26,200,8,26,11,
	26,12,26,201,1,27,5,27,205,8,27,10,27,12,27,208,9,27,1,27,4,27,211,8,27,
	11,27,12,27,212,1,28,5,28,216,8,28,10,28,12,28,219,9,28,1,28,4,28,222,8,
	28,11,28,12,28,223,1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,9,1,0,5,6,2,0,2,2,4,15,2,0,
	2,2,4,4,2,0,2,2,7,8,2,0,2,2,8,8,2,0,16,16,20,20,2,0,16,17,21,21,1,0,2,2,
	2,0,16,16,21,23,227,0,58,1,0,0,0,2,60,1,0,0,0,4,81,1,0,0,0,6,83,1,0,0,0,
	8,86,1,0,0,0,10,90,1,0,0,0,12,93,1,0,0,0,14,96,1,0,0,0,16,99,1,0,0,0,18,
	102,1,0,0,0,20,105,1,0,0,0,22,110,1,0,0,0,24,113,1,0,0,0,26,116,1,0,0,0,
	28,119,1,0,0,0,30,123,1,0,0,0,32,127,1,0,0,0,34,136,1,0,0,0,36,147,1,0,
	0,0,38,158,1,0,0,0,40,163,1,0,0,0,42,167,1,0,0,0,44,170,1,0,0,0,46,174,
	1,0,0,0,48,183,1,0,0,0,50,194,1,0,0,0,52,199,1,0,0,0,54,210,1,0,0,0,56,
	221,1,0,0,0,58,59,3,2,1,0,59,1,1,0,0,0,60,64,5,1,0,0,61,63,3,4,2,0,62,61,
	1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,64,1,
	0,0,0,67,68,5,2,0,0,68,3,1,0,0,0,69,82,3,6,3,0,70,82,3,8,4,0,71,82,3,10,
	5,0,72,82,3,12,6,0,73,82,3,14,7,0,74,82,3,16,8,0,75,82,3,18,9,0,76,82,3,
	20,10,0,77,82,3,22,11,0,78,82,3,24,12,0,79,82,3,26,13,0,80,82,3,28,14,0,
	81,69,1,0,0,0,81,70,1,0,0,0,81,71,1,0,0,0,81,72,1,0,0,0,81,73,1,0,0,0,81,
	74,1,0,0,0,81,75,1,0,0,0,81,76,1,0,0,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,
	1,0,0,0,81,80,1,0,0,0,82,5,1,0,0,0,83,84,5,3,0,0,84,85,3,30,15,0,85,7,1,
	0,0,0,86,87,5,4,0,0,87,88,3,32,16,0,88,89,3,34,17,0,89,9,1,0,0,0,90,91,
	7,0,0,0,91,92,3,36,18,0,92,11,1,0,0,0,93,94,5,7,0,0,94,95,3,38,19,0,95,
	13,1,0,0,0,96,97,5,8,0,0,97,98,3,40,20,0,98,15,1,0,0,0,99,100,5,9,0,0,100,
	101,3,42,21,0,101,17,1,0,0,0,102,103,5,10,0,0,103,104,3,44,22,0,104,19,
	1,0,0,0,105,106,5,11,0,0,106,108,3,46,23,0,107,109,3,48,24,0,108,107,1,
	0,0,0,108,109,1,0,0,0,109,21,1,0,0,0,110,111,5,12,0,0,111,112,3,50,25,0,
	112,23,1,0,0,0,113,114,5,13,0,0,114,115,3,52,26,0,115,25,1,0,0,0,116,117,
	5,14,0,0,117,118,3,54,27,0,118,27,1,0,0,0,119,120,5,15,0,0,120,121,3,56,
	28,0,121,29,1,0,0,0,122,124,8,1,0,0,123,122,1,0,0,0,124,125,1,0,0,0,125,
	123,1,0,0,0,125,126,1,0,0,0,126,31,1,0,0,0,127,128,5,16,0,0,128,33,1,0,
	0,0,129,131,5,19,0,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,
	133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,137,8,2,0,0,136,132,1,0,
	0,0,137,138,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,35,1,0,0,0,140,
	142,5,19,0,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,
	0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,148,8,3,0,0,147,143,1,0,0,0,148,
	149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,37,1,0,0,0,151,153,5,19,
	0,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,
	157,1,0,0,0,156,154,1,0,0,0,157,159,8,4,0,0,158,154,1,0,0,0,159,160,1,0,
	0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,39,1,0,0,0,162,164,7,5,0,0,163,
	162,1,0,0,0,164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,41,1,0,
	0,0,167,168,5,18,0,0,168,43,1,0,0,0,169,171,7,6,0,0,170,169,1,0,0,0,171,
	172,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,45,1,0,0,0,174,175,5,16,
	0,0,175,47,1,0,0,0,176,178,5,19,0,0,177,176,1,0,0,0,178,181,1,0,0,0,179,
	177,1,0,0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,182,184,8,7,
	0,0,183,179,1,0,0,0,184,185,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,
	49,1,0,0,0,187,189,5,19,0,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,
	0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,195,8,7,0,0,194,
	190,1,0,0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,51,1,0,
	0,0,198,200,7,8,0,0,199,198,1,0,0,0,200,201,1,0,0,0,201,199,1,0,0,0,201,
	202,1,0,0,0,202,53,1,0,0,0,203,205,5,19,0,0,204,203,1,0,0,0,205,208,1,0,
	0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,
	211,8,7,0,0,210,206,1,0,0,0,211,212,1,0,0,0,212,210,1,0,0,0,212,213,1,0,
	0,0,213,55,1,0,0,0,214,216,5,19,0,0,215,214,1,0,0,0,216,219,1,0,0,0,217,
	215,1,0,0,0,217,218,1,0,0,0,218,220,1,0,0,0,219,217,1,0,0,0,220,222,8,7,
	0,0,221,217,1,0,0,0,222,223,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,
	57,1,0,0,0,21,64,81,108,125,132,138,143,149,154,160,165,172,179,185,190,
	196,201,206,212,217,223];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!doxygenParser.__ATN) {
			doxygenParser.__ATN = new ATNDeserializer().deserialize(doxygenParser._serializedATN);
		}

		return doxygenParser.__ATN;
	}


	static DecisionsToDFA = doxygenParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class File_doc_commentContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public documentation_comment(): Documentation_commentContext {
		return this.getTypedRuleContext(Documentation_commentContext, 0) as Documentation_commentContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_file_doc_comment;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterFile_doc_comment) {
	 		listener.enterFile_doc_comment(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitFile_doc_comment) {
	 		listener.exitFile_doc_comment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitFile_doc_comment) {
			return visitor.visitFile_doc_comment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Documentation_commentContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DOC_START(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_START, 0);
	}
	public TOKEN_DOC_END(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, 0);
	}
	public doc_content_list(): Doc_contentContext[] {
		return this.getTypedRuleContexts(Doc_contentContext) as Doc_contentContext[];
	}
	public doc_content(i: number): Doc_contentContext {
		return this.getTypedRuleContext(Doc_contentContext, i) as Doc_contentContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_documentation_comment;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDocumentation_comment) {
	 		listener.enterDocumentation_comment(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDocumentation_comment) {
	 		listener.exitDocumentation_comment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDocumentation_comment) {
			return visitor.visitDocumentation_comment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Doc_contentContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public brief_command(): Brief_commandContext {
		return this.getTypedRuleContext(Brief_commandContext, 0) as Brief_commandContext;
	}
	public param_command(): Param_commandContext {
		return this.getTypedRuleContext(Param_commandContext, 0) as Param_commandContext;
	}
	public return_command(): Return_commandContext {
		return this.getTypedRuleContext(Return_commandContext, 0) as Return_commandContext;
	}
	public deprecated_command(): Deprecated_commandContext {
		return this.getTypedRuleContext(Deprecated_commandContext, 0) as Deprecated_commandContext;
	}
	public author_command(): Author_commandContext {
		return this.getTypedRuleContext(Author_commandContext, 0) as Author_commandContext;
	}
	public date_command(): Date_commandContext {
		return this.getTypedRuleContext(Date_commandContext, 0) as Date_commandContext;
	}
	public version_command(): Version_commandContext {
		return this.getTypedRuleContext(Version_commandContext, 0) as Version_commandContext;
	}
	public see_command(): See_commandContext {
		return this.getTypedRuleContext(See_commandContext, 0) as See_commandContext;
	}
	public attention_command(): Attention_commandContext {
		return this.getTypedRuleContext(Attention_commandContext, 0) as Attention_commandContext;
	}
	public file_command(): File_commandContext {
		return this.getTypedRuleContext(File_commandContext, 0) as File_commandContext;
	}
	public todo_command(): Todo_commandContext {
		return this.getTypedRuleContext(Todo_commandContext, 0) as Todo_commandContext;
	}
	public example_command(): Example_commandContext {
		return this.getTypedRuleContext(Example_commandContext, 0) as Example_commandContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_doc_content;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDoc_content) {
	 		listener.enterDoc_content(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDoc_content) {
	 		listener.exitDoc_content(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDoc_content) {
			return visitor.visitDoc_content(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brief_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_BRIEF_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_BRIEF_MARKER, 0);
	}
	public brief_text(): Brief_textContext {
		return this.getTypedRuleContext(Brief_textContext, 0) as Brief_textContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_brief_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterBrief_command) {
	 		listener.enterBrief_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitBrief_command) {
	 		listener.exitBrief_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitBrief_command) {
			return visitor.visitBrief_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_PARAM_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_PARAM_MARKER, 0);
	}
	public param_identifier(): Param_identifierContext {
		return this.getTypedRuleContext(Param_identifierContext, 0) as Param_identifierContext;
	}
	public param_description(): Param_descriptionContext {
		return this.getTypedRuleContext(Param_descriptionContext, 0) as Param_descriptionContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_param_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterParam_command) {
	 		listener.enterParam_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitParam_command) {
	 		listener.exitParam_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitParam_command) {
			return visitor.visitParam_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public return_description(): Return_descriptionContext {
		return this.getTypedRuleContext(Return_descriptionContext, 0) as Return_descriptionContext;
	}
	public TOKEN_RETURN_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_RETURN_MARKER, 0);
	}
	public TOKEN_RETURNS_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_RETURNS_MARKER, 0);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_return_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterReturn_command) {
	 		listener.enterReturn_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitReturn_command) {
	 		listener.exitReturn_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitReturn_command) {
			return visitor.visitReturn_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Deprecated_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DEPRECATED_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DEPRECATED_MARKER, 0);
	}
	public deprecated_description(): Deprecated_descriptionContext {
		return this.getTypedRuleContext(Deprecated_descriptionContext, 0) as Deprecated_descriptionContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_deprecated_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDeprecated_command) {
	 		listener.enterDeprecated_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDeprecated_command) {
	 		listener.exitDeprecated_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDeprecated_command) {
			return visitor.visitDeprecated_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Author_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_AUTHOR_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_AUTHOR_MARKER, 0);
	}
	public author_name(): Author_nameContext {
		return this.getTypedRuleContext(Author_nameContext, 0) as Author_nameContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_author_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterAuthor_command) {
	 		listener.enterAuthor_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitAuthor_command) {
	 		listener.exitAuthor_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitAuthor_command) {
			return visitor.visitAuthor_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Date_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DATE_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DATE_MARKER, 0);
	}
	public date_value(): Date_valueContext {
		return this.getTypedRuleContext(Date_valueContext, 0) as Date_valueContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_date_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDate_command) {
	 		listener.enterDate_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDate_command) {
	 		listener.exitDate_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDate_command) {
			return visitor.visitDate_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Version_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_VERSION_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_VERSION_MARKER, 0);
	}
	public version_value(): Version_valueContext {
		return this.getTypedRuleContext(Version_valueContext, 0) as Version_valueContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_version_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterVersion_command) {
	 		listener.enterVersion_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitVersion_command) {
	 		listener.exitVersion_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitVersion_command) {
			return visitor.visitVersion_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class See_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_SEE_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_SEE_MARKER, 0);
	}
	public see_link(): See_linkContext {
		return this.getTypedRuleContext(See_linkContext, 0) as See_linkContext;
	}
	public see_description(): See_descriptionContext {
		return this.getTypedRuleContext(See_descriptionContext, 0) as See_descriptionContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_see_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterSee_command) {
	 		listener.enterSee_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitSee_command) {
	 		listener.exitSee_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitSee_command) {
			return visitor.visitSee_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attention_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_ATTENTION_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_ATTENTION_MARKER, 0);
	}
	public attention_description(): Attention_descriptionContext {
		return this.getTypedRuleContext(Attention_descriptionContext, 0) as Attention_descriptionContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_attention_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterAttention_command) {
	 		listener.enterAttention_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitAttention_command) {
	 		listener.exitAttention_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitAttention_command) {
			return visitor.visitAttention_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_FILE_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_FILE_MARKER, 0);
	}
	public file_path(): File_pathContext {
		return this.getTypedRuleContext(File_pathContext, 0) as File_pathContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_file_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterFile_command) {
	 		listener.enterFile_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitFile_command) {
	 		listener.exitFile_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitFile_command) {
			return visitor.visitFile_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Todo_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_TODO_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_TODO_MARKER, 0);
	}
	public todo_description(): Todo_descriptionContext {
		return this.getTypedRuleContext(Todo_descriptionContext, 0) as Todo_descriptionContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_todo_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterTodo_command) {
	 		listener.enterTodo_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitTodo_command) {
	 		listener.exitTodo_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitTodo_command) {
			return visitor.visitTodo_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Example_commandContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_EXAMPLE_MARKER(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_EXAMPLE_MARKER, 0);
	}
	public example_code(): Example_codeContext {
		return this.getTypedRuleContext(Example_codeContext, 0) as Example_codeContext;
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_example_command;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterExample_command) {
	 		listener.enterExample_command(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitExample_command) {
	 		listener.exitExample_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitExample_command) {
			return visitor.visitExample_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Brief_textContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_PARAM_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_PARAM_MARKER);
	}
	public TOKEN_PARAM_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_PARAM_MARKER, i);
	}
	public TOKEN_RETURN_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_RETURN_MARKER);
	}
	public TOKEN_RETURN_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_RETURN_MARKER, i);
	}
	public TOKEN_RETURNS_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_RETURNS_MARKER);
	}
	public TOKEN_RETURNS_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_RETURNS_MARKER, i);
	}
	public TOKEN_DEPRECATED_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DEPRECATED_MARKER);
	}
	public TOKEN_DEPRECATED_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DEPRECATED_MARKER, i);
	}
	public TOKEN_AUTHOR_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_AUTHOR_MARKER);
	}
	public TOKEN_AUTHOR_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_AUTHOR_MARKER, i);
	}
	public TOKEN_DATE_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DATE_MARKER);
	}
	public TOKEN_DATE_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DATE_MARKER, i);
	}
	public TOKEN_VERSION_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_VERSION_MARKER);
	}
	public TOKEN_VERSION_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_VERSION_MARKER, i);
	}
	public TOKEN_SEE_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_SEE_MARKER);
	}
	public TOKEN_SEE_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_SEE_MARKER, i);
	}
	public TOKEN_ATTENTION_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_ATTENTION_MARKER);
	}
	public TOKEN_ATTENTION_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_ATTENTION_MARKER, i);
	}
	public TOKEN_FILE_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_FILE_MARKER);
	}
	public TOKEN_FILE_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_FILE_MARKER, i);
	}
	public TOKEN_TODO_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_TODO_MARKER);
	}
	public TOKEN_TODO_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_TODO_MARKER, i);
	}
	public TOKEN_EXAMPLE_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_EXAMPLE_MARKER);
	}
	public TOKEN_EXAMPLE_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_EXAMPLE_MARKER, i);
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_brief_text;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterBrief_text) {
	 		listener.enterBrief_text(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitBrief_text) {
	 		listener.exitBrief_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitBrief_text) {
			return visitor.visitBrief_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_identifierContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_WORD(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WORD, 0);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_param_identifier;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterParam_identifier) {
	 		listener.enterParam_identifier(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitParam_identifier) {
	 		listener.exitParam_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitParam_identifier) {
			return visitor.visitParam_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_PARAM_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_PARAM_MARKER);
	}
	public TOKEN_PARAM_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_PARAM_MARKER, i);
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_param_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterParam_description) {
	 		listener.enterParam_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitParam_description) {
	 		listener.exitParam_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitParam_description) {
			return visitor.visitParam_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DEPRECATED_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DEPRECATED_MARKER);
	}
	public TOKEN_DEPRECATED_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DEPRECATED_MARKER, i);
	}
	public TOKEN_AUTHOR_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_AUTHOR_MARKER);
	}
	public TOKEN_AUTHOR_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_AUTHOR_MARKER, i);
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_return_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterReturn_description) {
	 		listener.enterReturn_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitReturn_description) {
	 		listener.exitReturn_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitReturn_description) {
			return visitor.visitReturn_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Deprecated_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_AUTHOR_MARKER_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_AUTHOR_MARKER);
	}
	public TOKEN_AUTHOR_MARKER(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_AUTHOR_MARKER, i);
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_deprecated_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDeprecated_description) {
	 		listener.enterDeprecated_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDeprecated_description) {
	 		listener.exitDeprecated_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDeprecated_description) {
			return visitor.visitDeprecated_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Author_nameContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_WORD_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_WORD);
	}
	public TOKEN_WORD(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WORD, i);
	}
	public TOKEN_WHITESPACE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_WHITESPACE);
	}
	public TOKEN_WHITESPACE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WHITESPACE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_author_name;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterAuthor_name) {
	 		listener.enterAuthor_name(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitAuthor_name) {
	 		listener.exitAuthor_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitAuthor_name) {
			return visitor.visitAuthor_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Date_valueContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DATE(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DATE, 0);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_date_value;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterDate_value) {
	 		listener.enterDate_value(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitDate_value) {
	 		listener.exitDate_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitDate_value) {
			return visitor.visitDate_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Version_valueContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_WORD_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_WORD);
	}
	public TOKEN_WORD(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WORD, i);
	}
	public TOKEN_DOT_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOT);
	}
	public TOKEN_DOT(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOT, i);
	}
	public TOKEN_DIGIT_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DIGIT);
	}
	public TOKEN_DIGIT(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DIGIT, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_version_value;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterVersion_value) {
	 		listener.enterVersion_value(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitVersion_value) {
	 		listener.exitVersion_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitVersion_value) {
			return visitor.visitVersion_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class See_linkContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_WORD(): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WORD, 0);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_see_link;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterSee_link) {
	 		listener.enterSee_link(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitSee_link) {
	 		listener.exitSee_link(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitSee_link) {
			return visitor.visitSee_link(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class See_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_see_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterSee_description) {
	 		listener.enterSee_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitSee_description) {
	 		listener.exitSee_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitSee_description) {
			return visitor.visitSee_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attention_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_attention_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterAttention_description) {
	 		listener.enterAttention_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitAttention_description) {
	 		listener.exitAttention_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitAttention_description) {
			return visitor.visitAttention_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_pathContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_WORD_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_WORD);
	}
	public TOKEN_WORD(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_WORD, i);
	}
	public TOKEN_DOT_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOT);
	}
	public TOKEN_DOT(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOT, i);
	}
	public TOKEN_DIVIDE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DIVIDE);
	}
	public TOKEN_DIVIDE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DIVIDE, i);
	}
	public TOKEN_UNDERSCORE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_UNDERSCORE);
	}
	public TOKEN_UNDERSCORE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_UNDERSCORE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_file_path;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterFile_path) {
	 		listener.enterFile_path(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitFile_path) {
	 		listener.exitFile_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitFile_path) {
			return visitor.visitFile_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Todo_descriptionContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_todo_description;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterTodo_description) {
	 		listener.enterTodo_description(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitTodo_description) {
	 		listener.exitTodo_description(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitTodo_description) {
			return visitor.visitTodo_description(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Example_codeContext extends ParserRuleContext {
	constructor(parser?: doxygenParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TOKEN_DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_DOC_END);
	}
	public TOKEN_DOC_END(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_DOC_END, i);
	}
	public TOKEN_NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_NEWLINE);
	}
	public TOKEN_NEWLINE(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return doxygenParser.RULE_example_code;
	}
	public enterRule(listener: doxygenParserListener): void {
	    if(listener.enterExample_code) {
	 		listener.enterExample_code(this);
		}
	}
	public exitRule(listener: doxygenParserListener): void {
	    if(listener.exitExample_code) {
	 		listener.exitExample_code(this);
		}
	}
	// @Override
	public accept<Result>(visitor: doxygenParserVisitor<Result>): Result {
		if (visitor.visitExample_code) {
			return visitor.visitExample_code(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
