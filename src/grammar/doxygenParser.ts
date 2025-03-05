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
	public static readonly TOKEN_FSLASH = 22;
	public static readonly TOKEN_UNDERSCORE = 23;
	public static readonly SKIP_WHITESPACE = 24;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_documentation_comment = 0;
	public static readonly RULE_doc_content = 1;
	public static readonly RULE_brief_command = 2;
	public static readonly RULE_param_command = 3;
	public static readonly RULE_return_command = 4;
	public static readonly RULE_deprecated_command = 5;
	public static readonly RULE_author_command = 6;
	public static readonly RULE_date_command = 7;
	public static readonly RULE_version_command = 8;
	public static readonly RULE_see_command = 9;
	public static readonly RULE_attention_command = 10;
	public static readonly RULE_file_command = 11;
	public static readonly RULE_todo_command = 12;
	public static readonly RULE_example_command = 13;
	public static readonly RULE_brief_text = 14;
	public static readonly RULE_param_identifier = 15;
	public static readonly RULE_param_description = 16;
	public static readonly RULE_return_description = 17;
	public static readonly RULE_deprecated_description = 18;
	public static readonly RULE_author_name = 19;
	public static readonly RULE_date_value = 20;
	public static readonly RULE_version_value = 21;
	public static readonly RULE_see_link = 22;
	public static readonly RULE_see_description = 23;
	public static readonly RULE_attention_description = 24;
	public static readonly RULE_file_path = 25;
	public static readonly RULE_todo_description = 26;
	public static readonly RULE_example_code = 27;
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
                                                             "TOKEN_FSLASH", 
                                                             "TOKEN_UNDERSCORE", 
                                                             "SKIP_WHITESPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"documentation_comment", "doc_content", "brief_command", "param_command", 
		"return_command", "deprecated_command", "author_command", "date_command", 
		"version_command", "see_command", "attention_command", "file_command", 
		"todo_command", "example_command", "brief_text", "param_identifier", "param_description", 
		"return_description", "deprecated_description", "author_name", "date_value", 
		"version_value", "see_link", "see_description", "attention_description", 
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
	public documentation_comment(): Documentation_commentContext {
		let localctx: Documentation_commentContext = new Documentation_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, doxygenParser.RULE_documentation_comment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(doxygenParser.TOKEN_DOC_START);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65528) !== 0)) {
				{
				{
				this.state = 57;
				this.doc_content();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
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
		this.enterRule(localctx, 2, doxygenParser.RULE_doc_content);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.brief_command();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 66;
				this.param_command();
				}
				break;
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 67;
				this.return_command();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 68;
				this.deprecated_command();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 69;
				this.author_command();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 70;
				this.date_command();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 71;
				this.version_command();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 72;
				this.see_command();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 73;
				this.attention_command();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 74;
				this.file_command();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 75;
				this.todo_command();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 76;
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
		this.enterRule(localctx, 4, doxygenParser.RULE_brief_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(doxygenParser.TOKEN_BRIEF_MARKER);
			this.state = 80;
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
		this.enterRule(localctx, 6, doxygenParser.RULE_param_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.match(doxygenParser.TOKEN_PARAM_MARKER);
			this.state = 83;
			this.param_identifier();
			this.state = 84;
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
		this.enterRule(localctx, 8, doxygenParser.RULE_return_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===6)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 87;
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
		this.enterRule(localctx, 10, doxygenParser.RULE_deprecated_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			this.match(doxygenParser.TOKEN_DEPRECATED_MARKER);
			this.state = 90;
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
		this.enterRule(localctx, 12, doxygenParser.RULE_author_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.match(doxygenParser.TOKEN_AUTHOR_MARKER);
			this.state = 93;
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
		this.enterRule(localctx, 14, doxygenParser.RULE_date_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(doxygenParser.TOKEN_DATE_MARKER);
			this.state = 96;
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
		this.enterRule(localctx, 16, doxygenParser.RULE_version_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(doxygenParser.TOKEN_VERSION_MARKER);
			this.state = 99;
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
		this.enterRule(localctx, 18, doxygenParser.RULE_see_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.match(doxygenParser.TOKEN_SEE_MARKER);
			this.state = 102;
			this.see_link();
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 103;
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
		this.enterRule(localctx, 20, doxygenParser.RULE_attention_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			this.match(doxygenParser.TOKEN_ATTENTION_MARKER);
			this.state = 107;
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
		this.enterRule(localctx, 22, doxygenParser.RULE_file_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(doxygenParser.TOKEN_FILE_MARKER);
			this.state = 110;
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
		this.enterRule(localctx, 24, doxygenParser.RULE_todo_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.match(doxygenParser.TOKEN_TODO_MARKER);
			this.state = 113;
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
		this.enterRule(localctx, 26, doxygenParser.RULE_example_command);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.match(doxygenParser.TOKEN_EXAMPLE_MARKER);
			this.state = 116;
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
		this.enterRule(localctx, 28, doxygenParser.RULE_brief_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 118;
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
				this.state = 121;
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
		this.enterRule(localctx, 30, doxygenParser.RULE_param_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
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
		this.enterRule(localctx, 32, doxygenParser.RULE_param_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 128;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 125;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 130;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
					}
					this.state = 131;
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
				this.state = 134;
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
		this.enterRule(localctx, 34, doxygenParser.RULE_return_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 139;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 136;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 141;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
					}
					this.state = 142;
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
				this.state = 145;
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
		this.enterRule(localctx, 36, doxygenParser.RULE_deprecated_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 150;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 147;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 152;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
					}
					this.state = 153;
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
				this.state = 156;
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
		this.enterRule(localctx, 38, doxygenParser.RULE_author_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 158;
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
				this.state = 161;
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
		this.enterRule(localctx, 40, doxygenParser.RULE_date_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
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
		this.enterRule(localctx, 42, doxygenParser.RULE_version_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 165;
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
				this.state = 168;
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
		this.enterRule(localctx, 44, doxygenParser.RULE_see_link);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
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
		this.enterRule(localctx, 46, doxygenParser.RULE_see_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 175;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 172;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 177;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
					}
					this.state = 178;
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
				this.state = 181;
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
		this.enterRule(localctx, 48, doxygenParser.RULE_attention_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 186;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 183;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 188;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
					}
					this.state = 189;
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
				this.state = 192;
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
		this.enterRule(localctx, 50, doxygenParser.RULE_file_path);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 194;
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
				this.state = 197;
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
		this.enterRule(localctx, 52, doxygenParser.RULE_todo_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 202;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 199;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 204;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
					}
					this.state = 205;
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
				this.state = 208;
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
		this.enterRule(localctx, 54, doxygenParser.RULE_example_code);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 217;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 213;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 210;
							this.match(doxygenParser.TOKEN_NEWLINE);
							}
							}
						}
						this.state = 215;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 216;
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
				this.state = 219;
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

	public static readonly _serializedATN: number[] = [4,1,24,222,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,5,0,59,8,0,10,0,12,0,62,9,0,1,
	0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,78,8,1,1,2,1,
	2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,
	8,1,8,1,8,1,9,1,9,1,9,3,9,105,8,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,
	12,1,12,1,13,1,13,1,13,1,14,4,14,120,8,14,11,14,12,14,121,1,15,1,15,1,16,
	5,16,127,8,16,10,16,12,16,130,9,16,1,16,4,16,133,8,16,11,16,12,16,134,1,
	17,5,17,138,8,17,10,17,12,17,141,9,17,1,17,4,17,144,8,17,11,17,12,17,145,
	1,18,5,18,149,8,18,10,18,12,18,152,9,18,1,18,4,18,155,8,18,11,18,12,18,
	156,1,19,4,19,160,8,19,11,19,12,19,161,1,20,1,20,1,21,4,21,167,8,21,11,
	21,12,21,168,1,22,1,22,1,23,5,23,174,8,23,10,23,12,23,177,9,23,1,23,4,23,
	180,8,23,11,23,12,23,181,1,24,5,24,185,8,24,10,24,12,24,188,9,24,1,24,4,
	24,191,8,24,11,24,12,24,192,1,25,4,25,196,8,25,11,25,12,25,197,1,26,5,26,
	201,8,26,10,26,12,26,204,9,26,1,26,4,26,207,8,26,11,26,12,26,208,1,27,5,
	27,212,8,27,10,27,12,27,215,9,27,1,27,4,27,218,8,27,11,27,12,27,219,1,27,
	0,0,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
	46,48,50,52,54,0,9,1,0,5,6,2,0,2,2,4,15,2,0,2,2,4,4,2,0,2,2,7,8,2,0,2,2,
	8,8,2,0,16,16,20,20,2,0,16,17,21,21,1,0,2,2,2,0,16,16,21,23,224,0,56,1,
	0,0,0,2,77,1,0,0,0,4,79,1,0,0,0,6,82,1,0,0,0,8,86,1,0,0,0,10,89,1,0,0,0,
	12,92,1,0,0,0,14,95,1,0,0,0,16,98,1,0,0,0,18,101,1,0,0,0,20,106,1,0,0,0,
	22,109,1,0,0,0,24,112,1,0,0,0,26,115,1,0,0,0,28,119,1,0,0,0,30,123,1,0,
	0,0,32,132,1,0,0,0,34,143,1,0,0,0,36,154,1,0,0,0,38,159,1,0,0,0,40,163,
	1,0,0,0,42,166,1,0,0,0,44,170,1,0,0,0,46,179,1,0,0,0,48,190,1,0,0,0,50,
	195,1,0,0,0,52,206,1,0,0,0,54,217,1,0,0,0,56,60,5,1,0,0,57,59,3,2,1,0,58,
	57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,
	1,0,0,0,63,64,5,2,0,0,64,1,1,0,0,0,65,78,3,4,2,0,66,78,3,6,3,0,67,78,3,
	8,4,0,68,78,3,10,5,0,69,78,3,12,6,0,70,78,3,14,7,0,71,78,3,16,8,0,72,78,
	3,18,9,0,73,78,3,20,10,0,74,78,3,22,11,0,75,78,3,24,12,0,76,78,3,26,13,
	0,77,65,1,0,0,0,77,66,1,0,0,0,77,67,1,0,0,0,77,68,1,0,0,0,77,69,1,0,0,0,
	77,70,1,0,0,0,77,71,1,0,0,0,77,72,1,0,0,0,77,73,1,0,0,0,77,74,1,0,0,0,77,
	75,1,0,0,0,77,76,1,0,0,0,78,3,1,0,0,0,79,80,5,3,0,0,80,81,3,28,14,0,81,
	5,1,0,0,0,82,83,5,4,0,0,83,84,3,30,15,0,84,85,3,32,16,0,85,7,1,0,0,0,86,
	87,7,0,0,0,87,88,3,34,17,0,88,9,1,0,0,0,89,90,5,7,0,0,90,91,3,36,18,0,91,
	11,1,0,0,0,92,93,5,8,0,0,93,94,3,38,19,0,94,13,1,0,0,0,95,96,5,9,0,0,96,
	97,3,40,20,0,97,15,1,0,0,0,98,99,5,10,0,0,99,100,3,42,21,0,100,17,1,0,0,
	0,101,102,5,11,0,0,102,104,3,44,22,0,103,105,3,46,23,0,104,103,1,0,0,0,
	104,105,1,0,0,0,105,19,1,0,0,0,106,107,5,12,0,0,107,108,3,48,24,0,108,21,
	1,0,0,0,109,110,5,13,0,0,110,111,3,50,25,0,111,23,1,0,0,0,112,113,5,14,
	0,0,113,114,3,52,26,0,114,25,1,0,0,0,115,116,5,15,0,0,116,117,3,54,27,0,
	117,27,1,0,0,0,118,120,8,1,0,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,
	1,0,0,0,121,122,1,0,0,0,122,29,1,0,0,0,123,124,5,16,0,0,124,31,1,0,0,0,
	125,127,5,19,0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,
	1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,133,8,2,0,0,132,128,1,0,0,0,
	133,134,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,33,1,0,0,0,136,138,
	5,19,0,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,
	0,140,142,1,0,0,0,141,139,1,0,0,0,142,144,8,3,0,0,143,139,1,0,0,0,144,145,
	1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,35,1,0,0,0,147,149,5,19,0,0,
	148,147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,
	1,0,0,0,152,150,1,0,0,0,153,155,8,4,0,0,154,150,1,0,0,0,155,156,1,0,0,0,
	156,154,1,0,0,0,156,157,1,0,0,0,157,37,1,0,0,0,158,160,7,5,0,0,159,158,
	1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,39,1,0,0,0,
	163,164,5,18,0,0,164,41,1,0,0,0,165,167,7,6,0,0,166,165,1,0,0,0,167,168,
	1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,43,1,0,0,0,170,171,5,16,0,0,
	171,45,1,0,0,0,172,174,5,19,0,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,
	1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,175,1,0,0,0,178,180,8,7,0,0,
	179,175,1,0,0,0,180,181,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,47,
	1,0,0,0,183,185,5,19,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,
	0,186,187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,191,8,7,0,0,190,186,
	1,0,0,0,191,192,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,49,1,0,0,0,
	194,196,7,8,0,0,195,194,1,0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,197,198,
	1,0,0,0,198,51,1,0,0,0,199,201,5,19,0,0,200,199,1,0,0,0,201,204,1,0,0,0,
	202,200,1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,202,1,0,0,0,205,207,
	8,7,0,0,206,202,1,0,0,0,207,208,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,
	209,53,1,0,0,0,210,212,5,19,0,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,
	1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,218,8,7,0,0,
	217,213,1,0,0,0,218,219,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,55,
	1,0,0,0,21,60,77,104,121,128,134,139,145,150,156,161,168,175,181,186,192,
	197,202,208,213,219];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!doxygenParser.__ATN) {
			doxygenParser.__ATN = new ATNDeserializer().deserialize(doxygenParser._serializedATN);
		}

		return doxygenParser.__ATN;
	}


	static DecisionsToDFA = doxygenParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

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
	public TOKEN_FSLASH_list(): TerminalNode[] {
	    	return this.getTokens(doxygenParser.TOKEN_FSLASH);
	}
	public TOKEN_FSLASH(i: number): TerminalNode {
		return this.getToken(doxygenParser.TOKEN_FSLASH, i);
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
