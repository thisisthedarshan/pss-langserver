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
// Generated from ./src/grammar/antlr/doxygenLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class doxygenLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"TOKEN_DOC_START", "TOKEN_DOC_END", "TOKEN_BRIEF_MARKER", "TOKEN_PARAM_MARKER", 
		"TOKEN_RETURN_MARKER", "TOKEN_RETURNS_MARKER", "TOKEN_DEPRECATED_MARKER", 
		"TOKEN_AUTHOR_MARKER", "TOKEN_DATE_MARKER", "TOKEN_VERSION_MARKER", "TOKEN_SEE_MARKER", 
		"TOKEN_ATTENTION_MARKER", "TOKEN_FILE_MARKER", "TOKEN_TODO_MARKER", "TOKEN_EXAMPLE_MARKER", 
		"TOKEN_WORD", "TOKEN_DIGIT", "TOKEN_DATE", "TOKEN_NEWLINE", "TOKEN_WHITESPACE", 
		"TOKEN_DOT", "TOKEN_DIVIDE", "TOKEN_UNDERSCORE", "SKIP_WHITESPACE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, doxygenLexer._ATN, doxygenLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "doxygenLexer.g4"; }

	public get literalNames(): (string | null)[] { return doxygenLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return doxygenLexer.symbolicNames; }
	public get ruleNames(): string[] { return doxygenLexer.ruleNames; }

	public get serializedATN(): number[] { return doxygenLexer._serializedATN; }

	public get channelNames(): string[] { return doxygenLexer.channelNames; }

	public get modeNames(): string[] { return doxygenLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,24,297,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,3,2,69,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,83,8,
	3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,99,8,4,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,117,8,
	5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,3,6,141,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,3,7,157,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,169,
	8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
	187,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,197,8,10,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,3,11,219,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,3,12,231,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,3,13,243,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,3,14,261,8,14,1,15,4,15,264,8,15,11,15,12,15,265,
	1,16,1,16,1,17,4,17,271,8,17,11,17,12,17,272,1,18,3,18,276,8,18,1,18,1,
	18,1,19,4,19,281,8,19,11,19,12,19,282,1,20,1,20,1,21,1,21,1,22,1,22,1,23,
	4,23,292,8,23,11,23,12,23,293,1,23,1,23,0,0,24,1,1,3,2,5,3,7,4,9,5,11,6,
	13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,
	19,39,20,41,21,43,22,45,23,47,24,1,0,5,3,0,65,90,95,95,97,122,1,0,48,57,
	2,0,9,10,13,13,2,0,9,9,32,32,3,0,9,10,13,13,32,32,314,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
	0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
	1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,
	0,1,49,1,0,0,0,3,53,1,0,0,0,5,68,1,0,0,0,7,82,1,0,0,0,9,98,1,0,0,0,11,116,
	1,0,0,0,13,140,1,0,0,0,15,156,1,0,0,0,17,168,1,0,0,0,19,186,1,0,0,0,21,
	196,1,0,0,0,23,218,1,0,0,0,25,230,1,0,0,0,27,242,1,0,0,0,29,260,1,0,0,0,
	31,263,1,0,0,0,33,267,1,0,0,0,35,270,1,0,0,0,37,275,1,0,0,0,39,280,1,0,
	0,0,41,284,1,0,0,0,43,286,1,0,0,0,45,288,1,0,0,0,47,291,1,0,0,0,49,50,5,
	47,0,0,50,51,5,42,0,0,51,52,5,42,0,0,52,2,1,0,0,0,53,54,5,42,0,0,54,55,
	5,47,0,0,55,4,1,0,0,0,56,57,5,64,0,0,57,58,5,98,0,0,58,59,5,114,0,0,59,
	60,5,105,0,0,60,61,5,101,0,0,61,69,5,102,0,0,62,63,5,92,0,0,63,64,5,98,
	0,0,64,65,5,114,0,0,65,66,5,105,0,0,66,67,5,101,0,0,67,69,5,102,0,0,68,
	56,1,0,0,0,68,62,1,0,0,0,69,6,1,0,0,0,70,71,5,64,0,0,71,72,5,112,0,0,72,
	73,5,97,0,0,73,74,5,114,0,0,74,75,5,97,0,0,75,83,5,109,0,0,76,77,5,92,0,
	0,77,78,5,112,0,0,78,79,5,97,0,0,79,80,5,114,0,0,80,81,5,97,0,0,81,83,5,
	109,0,0,82,70,1,0,0,0,82,76,1,0,0,0,83,8,1,0,0,0,84,85,5,64,0,0,85,86,5,
	114,0,0,86,87,5,101,0,0,87,88,5,116,0,0,88,89,5,117,0,0,89,90,5,114,0,0,
	90,99,5,110,0,0,91,92,5,92,0,0,92,93,5,114,0,0,93,94,5,101,0,0,94,95,5,
	116,0,0,95,96,5,117,0,0,96,97,5,114,0,0,97,99,5,110,0,0,98,84,1,0,0,0,98,
	91,1,0,0,0,99,10,1,0,0,0,100,101,5,64,0,0,101,102,5,114,0,0,102,103,5,101,
	0,0,103,104,5,116,0,0,104,105,5,117,0,0,105,106,5,114,0,0,106,107,5,110,
	0,0,107,117,5,115,0,0,108,109,5,92,0,0,109,110,5,114,0,0,110,111,5,101,
	0,0,111,112,5,116,0,0,112,113,5,117,0,0,113,114,5,114,0,0,114,115,5,110,
	0,0,115,117,5,115,0,0,116,100,1,0,0,0,116,108,1,0,0,0,117,12,1,0,0,0,118,
	119,5,64,0,0,119,120,5,100,0,0,120,121,5,101,0,0,121,122,5,112,0,0,122,
	123,5,114,0,0,123,124,5,101,0,0,124,125,5,99,0,0,125,126,5,97,0,0,126,127,
	5,116,0,0,127,128,5,101,0,0,128,141,5,100,0,0,129,130,5,92,0,0,130,131,
	5,100,0,0,131,132,5,101,0,0,132,133,5,112,0,0,133,134,5,114,0,0,134,135,
	5,101,0,0,135,136,5,99,0,0,136,137,5,97,0,0,137,138,5,116,0,0,138,139,5,
	101,0,0,139,141,5,100,0,0,140,118,1,0,0,0,140,129,1,0,0,0,141,14,1,0,0,
	0,142,143,5,64,0,0,143,144,5,97,0,0,144,145,5,117,0,0,145,146,5,116,0,0,
	146,147,5,104,0,0,147,148,5,111,0,0,148,157,5,114,0,0,149,150,5,92,0,0,
	150,151,5,97,0,0,151,152,5,117,0,0,152,153,5,116,0,0,153,154,5,104,0,0,
	154,155,5,111,0,0,155,157,5,114,0,0,156,142,1,0,0,0,156,149,1,0,0,0,157,
	16,1,0,0,0,158,159,5,64,0,0,159,160,5,100,0,0,160,161,5,97,0,0,161,162,
	5,116,0,0,162,169,5,101,0,0,163,164,5,92,0,0,164,165,5,100,0,0,165,166,
	5,97,0,0,166,167,5,116,0,0,167,169,5,101,0,0,168,158,1,0,0,0,168,163,1,
	0,0,0,169,18,1,0,0,0,170,171,5,64,0,0,171,172,5,118,0,0,172,173,5,101,0,
	0,173,174,5,114,0,0,174,175,5,115,0,0,175,176,5,105,0,0,176,177,5,111,0,
	0,177,187,5,110,0,0,178,179,5,92,0,0,179,180,5,118,0,0,180,181,5,101,0,
	0,181,182,5,114,0,0,182,183,5,115,0,0,183,184,5,105,0,0,184,185,5,111,0,
	0,185,187,5,110,0,0,186,170,1,0,0,0,186,178,1,0,0,0,187,20,1,0,0,0,188,
	189,5,64,0,0,189,190,5,115,0,0,190,191,5,101,0,0,191,197,5,101,0,0,192,
	193,5,92,0,0,193,194,5,115,0,0,194,195,5,101,0,0,195,197,5,101,0,0,196,
	188,1,0,0,0,196,192,1,0,0,0,197,22,1,0,0,0,198,199,5,64,0,0,199,200,5,97,
	0,0,200,201,5,116,0,0,201,202,5,116,0,0,202,203,5,101,0,0,203,204,5,110,
	0,0,204,205,5,116,0,0,205,206,5,105,0,0,206,207,5,111,0,0,207,219,5,110,
	0,0,208,209,5,92,0,0,209,210,5,97,0,0,210,211,5,116,0,0,211,212,5,116,0,
	0,212,213,5,101,0,0,213,214,5,110,0,0,214,215,5,116,0,0,215,216,5,105,0,
	0,216,217,5,111,0,0,217,219,5,110,0,0,218,198,1,0,0,0,218,208,1,0,0,0,219,
	24,1,0,0,0,220,221,5,64,0,0,221,222,5,102,0,0,222,223,5,105,0,0,223,224,
	5,108,0,0,224,231,5,101,0,0,225,226,5,92,0,0,226,227,5,102,0,0,227,228,
	5,105,0,0,228,229,5,108,0,0,229,231,5,101,0,0,230,220,1,0,0,0,230,225,1,
	0,0,0,231,26,1,0,0,0,232,233,5,64,0,0,233,234,5,116,0,0,234,235,5,111,0,
	0,235,236,5,100,0,0,236,243,5,111,0,0,237,238,5,92,0,0,238,239,5,116,0,
	0,239,240,5,111,0,0,240,241,5,100,0,0,241,243,5,111,0,0,242,232,1,0,0,0,
	242,237,1,0,0,0,243,28,1,0,0,0,244,245,5,64,0,0,245,246,5,101,0,0,246,247,
	5,120,0,0,247,248,5,97,0,0,248,249,5,109,0,0,249,250,5,112,0,0,250,251,
	5,108,0,0,251,261,5,101,0,0,252,253,5,92,0,0,253,254,5,101,0,0,254,255,
	5,120,0,0,255,256,5,97,0,0,256,257,5,109,0,0,257,258,5,112,0,0,258,259,
	5,108,0,0,259,261,5,101,0,0,260,244,1,0,0,0,260,252,1,0,0,0,261,30,1,0,
	0,0,262,264,7,0,0,0,263,262,1,0,0,0,264,265,1,0,0,0,265,263,1,0,0,0,265,
	266,1,0,0,0,266,32,1,0,0,0,267,268,7,1,0,0,268,34,1,0,0,0,269,271,8,2,0,
	0,270,269,1,0,0,0,271,272,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,36,
	1,0,0,0,274,276,5,13,0,0,275,274,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,
	0,277,278,5,10,0,0,278,38,1,0,0,0,279,281,7,3,0,0,280,279,1,0,0,0,281,282,
	1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,40,1,0,0,0,284,285,5,46,0,0,
	285,42,1,0,0,0,286,287,5,47,0,0,287,44,1,0,0,0,288,289,5,95,0,0,289,46,
	1,0,0,0,290,292,7,4,0,0,291,290,1,0,0,0,292,293,1,0,0,0,293,291,1,0,0,0,
	293,294,1,0,0,0,294,295,1,0,0,0,295,296,6,23,0,0,296,48,1,0,0,0,19,0,68,
	82,98,116,140,156,168,186,196,218,230,242,260,265,272,275,282,293,1,6,0,
	0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!doxygenLexer.__ATN) {
			doxygenLexer.__ATN = new ATNDeserializer().deserialize(doxygenLexer._serializedATN);
		}

		return doxygenLexer.__ATN;
	}


	static DecisionsToDFA = doxygenLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}