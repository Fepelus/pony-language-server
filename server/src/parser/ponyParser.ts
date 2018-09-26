// Generated from src/parser/pony.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { ponyListener } from './ponyListener';

export class ponyParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly T__29=30;
	public static readonly T__30=31;
	public static readonly T__31=32;
	public static readonly T__32=33;
	public static readonly T__33=34;
	public static readonly T__34=35;
	public static readonly T__35=36;
	public static readonly T__36=37;
	public static readonly T__37=38;
	public static readonly T__38=39;
	public static readonly T__39=40;
	public static readonly T__40=41;
	public static readonly T__41=42;
	public static readonly T__42=43;
	public static readonly T__43=44;
	public static readonly T__44=45;
	public static readonly T__45=46;
	public static readonly T__46=47;
	public static readonly T__47=48;
	public static readonly T__48=49;
	public static readonly T__49=50;
	public static readonly T__50=51;
	public static readonly T__51=52;
	public static readonly T__52=53;
	public static readonly T__53=54;
	public static readonly T__54=55;
	public static readonly T__55=56;
	public static readonly T__56=57;
	public static readonly T__57=58;
	public static readonly T__58=59;
	public static readonly T__59=60;
	public static readonly T__60=61;
	public static readonly T__61=62;
	public static readonly T__62=63;
	public static readonly T__63=64;
	public static readonly T__64=65;
	public static readonly T__65=66;
	public static readonly T__66=67;
	public static readonly T__67=68;
	public static readonly T__68=69;
	public static readonly T__69=70;
	public static readonly T__70=71;
	public static readonly T__71=72;
	public static readonly T__72=73;
	public static readonly T__73=74;
	public static readonly T__74=75;
	public static readonly T__75=76;
	public static readonly T__76=77;
	public static readonly T__77=78;
	public static readonly T__78=79;
	public static readonly T__79=80;
	public static readonly T__80=81;
	public static readonly T__81=82;
	public static readonly T__82=83;
	public static readonly T__83=84;
	public static readonly T__84=85;
	public static readonly T__85=86;
	public static readonly T__86=87;
	public static readonly T__87=88;
	public static readonly T__88=89;
	public static readonly T__89=90;
	public static readonly T__90=91;
	public static readonly T__91=92;
	public static readonly T__92=93;
	public static readonly T__93=94;
	public static readonly T__94=95;
	public static readonly T__95=96;
	public static readonly T__96=97;
	public static readonly T__97=98;
	public static readonly T__98=99;
	public static readonly T__99=100;
	public static readonly T__100=101;
	public static readonly T__101=102;
	public static readonly T__102=103;
	public static readonly T__103=104;
	public static readonly T__104=105;
	public static readonly T__105=106;
	public static readonly T__106=107;
	public static readonly T__107=108;
	public static readonly T__108=109;
	public static readonly T__109=110;
	public static readonly T__110=111;
	public static readonly T__111=112;
	public static readonly T__112=113;
	public static readonly T__113=114;
	public static readonly T__114=115;
	public static readonly T__115=116;
	public static readonly ID=117;
	public static readonly INT=118;
	public static readonly FLOAT=119;
	public static readonly STRING=120;
	public static readonly LPAREN_NEW=121;
	public static readonly LSQUARE_NEW=122;
	public static readonly MINUS_NEW=123;
	public static readonly MINUS_TILDE_NEW=124;
	public static readonly LINECOMMENT=125;
	public static readonly NESTEDCOMMENT=126;
	public static readonly WS=127;
	public static readonly NEWLINE=128;
	public static readonly RULE_module = 0;
	public static readonly RULE_use = 1;
	public static readonly RULE_use_ffi = 2;
	public static readonly RULE_class_def = 3;
	public static readonly RULE_members = 4;
	public static readonly RULE_field = 5;
	public static readonly RULE_method = 6;
	public static readonly RULE_annotatedrawseq = 7;
	public static readonly RULE_rawseq = 8;
	public static readonly RULE_exprseq = 9;
	public static readonly RULE_nextexprseq = 10;
	public static readonly RULE_nosemi = 11;
	public static readonly RULE_semiexpr = 12;
	public static readonly RULE_jump = 13;
	public static readonly RULE_nextassignment = 14;
	public static readonly RULE_assignment = 15;
	public static readonly RULE_nextinfix = 16;
	public static readonly RULE_infix = 17;
	public static readonly RULE_isop = 18;
	public static readonly RULE_binop = 19;
	public static readonly RULE_nextterm = 20;
	public static readonly RULE_term = 21;
	public static readonly RULE_withelem = 22;
	public static readonly RULE_caseexpr = 23;
	public static readonly RULE_elseiftype = 24;
	public static readonly RULE_iftype = 25;
	public static readonly RULE_elseifdef = 26;
	public static readonly RULE_elseif = 27;
	public static readonly RULE_idseq = 28;
	public static readonly RULE_idseq_in_seq = 29;
	public static readonly RULE_nextpattern = 30;
	public static readonly RULE_pattern = 31;
	public static readonly RULE_nextparampattern = 32;
	public static readonly RULE_parampattern = 33;
	public static readonly RULE_nextpostfix = 34;
	public static readonly RULE_postfix = 35;
	public static readonly RULE_call = 36;
	public static readonly RULE_chain = 37;
	public static readonly RULE_tilde = 38;
	public static readonly RULE_dot = 39;
	public static readonly RULE_nextatom = 40;
	public static readonly RULE_atom = 41;
	public static readonly RULE_tuple = 42;
	public static readonly RULE_lambdacaptures = 43;
	public static readonly RULE_lambdacapture = 44;
	public static readonly RULE_lambdaparams = 45;
	public static readonly RULE_lambdaparam = 46;
	public static readonly RULE_positional = 47;
	public static readonly RULE_named = 48;
	public static readonly RULE_namedarg = 49;
	public static readonly RULE_type = 50;
	public static readonly RULE_atomtype = 51;
	public static readonly RULE_barelambdatype = 52;
	public static readonly RULE_lambdatype = 53;
	public static readonly RULE_tupletype = 54;
	public static readonly RULE_infixtype = 55;
	public static readonly RULE_isecttype = 56;
	public static readonly RULE_uniontype = 57;
	public static readonly RULE_nominal = 58;
	public static readonly RULE_gencap = 59;
	public static readonly RULE_cap = 60;
	public static readonly RULE_typeargs = 61;
	public static readonly RULE_typeparams = 62;
	public static readonly RULE_params = 63;
	public static readonly RULE_typeparam = 64;
	public static readonly RULE_typearg = 65;
	public static readonly RULE_literal = 66;
	public static readonly RULE_param = 67;
	public static readonly RULE_antlr_0 = 68;
	public static readonly RULE_antlr_1 = 69;
	public static readonly RULE_antlr_2 = 70;
	public static readonly RULE_antlr_3 = 71;
	public static readonly RULE_antlr_4 = 72;
	public static readonly RULE_identifier = 73;
	public static readonly ruleNames: string[] = [
		"module", "use", "use_ffi", "class_def", "members", "field", "method", 
		"annotatedrawseq", "rawseq", "exprseq", "nextexprseq", "nosemi", "semiexpr", 
		"jump", "nextassignment", "assignment", "nextinfix", "infix", "isop", 
		"binop", "nextterm", "term", "withelem", "caseexpr", "elseiftype", "iftype", 
		"elseifdef", "elseif", "idseq", "idseq_in_seq", "nextpattern", "pattern", 
		"nextparampattern", "parampattern", "nextpostfix", "postfix", "call", 
		"chain", "tilde", "dot", "nextatom", "atom", "tuple", "lambdacaptures", 
		"lambdacapture", "lambdaparams", "lambdaparam", "positional", "named", 
		"namedarg", "type", "atomtype", "barelambdatype", "lambdatype", "tupletype", 
		"infixtype", "isecttype", "uniontype", "nominal", "gencap", "cap", "typeargs", 
		"typeparams", "params", "typeparam", "typearg", "literal", "param", "antlr_0", 
		"antlr_1", "antlr_2", "antlr_3", "antlr_4", "identifier"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'use'", "'='", "'if'", "'@'", "'('", "')'", "'?'", "'type'", 
		"'interface'", "'trait'", "'primitive'", "'struct'", "'class'", "'actor'", 
		"'\\'", "','", "'is'", "'var'", "'let'", "'embed'", "':'", "'fun'", "'be'", 
		"'new'", "'=>'", "';'", "'return'", "'break'", "'continue'", "'error'", 
		"'compile_intrinsic'", "'compile_error'", "'isnt'", "'and'", "'or'", "'xor'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'+~'", "'-~'", "'*~'", "'/~'", "'%~'", 
		"'<<'", "'>>'", "'<<~'", "'>>~'", "'=='", "'!='", "'<'", "'<='", "'>='", 
		"'>'", "'==~'", "'!=~'", "'<~'", "'<=~'", "'>=~'", "'>~'", "'then'", "'else'", 
		"'end'", "'ifdef'", "'iftype'", "'match'", "'while'", "'do'", "'repeat'", 
		"'until'", "'for'", "'in'", "'with'", "'try'", "'recover'", "'consume'", 
		"'#'", "'|'", "'elseif'", "'<:'", "'not'", "'addressof'", "'digestof'", 
		"'.>'", "'~'", "'.'", "'this'", "'as'", "']'", "'object'", "'{'", "'}'", 
		"'@{'", "'__loc'", "'['", "'where'", "'->'", "'^'", "'!'", "'&'", "'#read'", 
		"'#send'", "'#share'", "'#alias'", "'#any'", "'iso'", "'trn'", "'ref'", 
		"'val'", "'box'", "'tag'", "'...'", "'true'", "'false'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "ID", "INT", "FLOAT", 
		"STRING", "LPAREN_NEW", "LSQUARE_NEW", "MINUS_NEW", "MINUS_TILDE_NEW", 
		"LINECOMMENT", "NESTEDCOMMENT", "WS", "NEWLINE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ponyParser._LITERAL_NAMES, ponyParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ponyParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "pony.g4"; }

	@Override
	public get ruleNames(): string[] { return ponyParser.ruleNames; }

	@Override
	public get serializedATN(): string { return ponyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ponyParser._ATN, this);
	}
	@RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ponyParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.STRING) {
				{
				this.state = 148;
				this.match(ponyParser.STRING);
				}
			}

			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__0) {
				{
				{
				this.state = 151;
				this.use();
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__7) | (1 << ponyParser.T__8) | (1 << ponyParser.T__9) | (1 << ponyParser.T__10) | (1 << ponyParser.T__11) | (1 << ponyParser.T__12) | (1 << ponyParser.T__13))) !== 0)) {
				{
				{
				this.state = 157;
				this.class_def();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public use(): UseContext {
		let _localctx: UseContext = new UseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ponyParser.RULE_use);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(ponyParser.T__0);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.ID) {
				{
				this.state = 164;
				this.identifier();
				this.state = 165;
				this.match(ponyParser.T__1);
				}
			}

			this.state = 171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.STRING:
				{
				this.state = 169;
				this.match(ponyParser.STRING);
				}
				break;
			case ponyParser.T__3:
				{
				this.state = 170;
				this.use_ffi();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__2) {
				{
				this.state = 173;
				this.match(ponyParser.T__2);
				this.state = 174;
				this.infix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public use_ffi(): Use_ffiContext {
		let _localctx: Use_ffiContext = new Use_ffiContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ponyParser.RULE_use_ffi);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(ponyParser.T__3);
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				{
				this.state = 178;
				this.identifier();
				}
				break;
			case ponyParser.STRING:
				{
				this.state = 179;
				this.match(ponyParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 182;
			this.typeargs();
			this.state = 183;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__113 || _la===ponyParser.ID) {
				{
				this.state = 184;
				this.params();
				}
			}

			this.state = 187;
			this.match(ponyParser.T__5);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 188;
				this.match(ponyParser.T__6);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public class_def(): Class_defContext {
		let _localctx: Class_defContext = new Class_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ponyParser.RULE_class_def);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__7) | (1 << ponyParser.T__8) | (1 << ponyParser.T__9) | (1 << ponyParser.T__10) | (1 << ponyParser.T__11) | (1 << ponyParser.T__12) | (1 << ponyParser.T__13))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 192;
				this.match(ponyParser.T__14);
				this.state = 193;
				this.identifier();
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 194;
					this.match(ponyParser.T__15);
					this.state = 195;
					this.identifier();
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 201;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__3) {
				{
				this.state = 205;
				this.match(ponyParser.T__3);
				}
			}

			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
				{
				this.state = 208;
				this.cap();
				}
			}

			this.state = 211;
			this.identifier();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
				{
				this.state = 212;
				this.typeparams();
				}
			}

			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__16) {
				{
				this.state = 215;
				this.match(ponyParser.T__16);
				this.state = 216;
				this.type();
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.STRING) {
				{
				this.state = 219;
				this.match(ponyParser.STRING);
				}
			}

			this.state = 222;
			this.members();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public members(): MembersContext {
		let _localctx: MembersContext = new MembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ponyParser.RULE_members);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19))) !== 0)) {
				{
				{
				this.state = 224;
				this.field();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__21) | (1 << ponyParser.T__22) | (1 << ponyParser.T__23))) !== 0)) {
				{
				{
				this.state = 230;
				this.method();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ponyParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 237;
			this.identifier();
			this.state = 238;
			this.match(ponyParser.T__20);
			this.state = 239;
			this.type();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 240;
				this.match(ponyParser.T__1);
				this.state = 241;
				this.infix();
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.STRING) {
				{
				this.state = 244;
				this.match(ponyParser.STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ponyParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__21) | (1 << ponyParser.T__22) | (1 << ponyParser.T__23))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 248;
				this.match(ponyParser.T__14);
				this.state = 249;
				this.identifier();
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 250;
					this.match(ponyParser.T__15);
					this.state = 251;
					this.identifier();
					}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 257;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
				{
				this.state = 261;
				this.cap();
				}
				break;
			case ponyParser.T__3:
				{
				this.state = 262;
				this.match(ponyParser.T__3);
				}
				break;
			case ponyParser.ID:
				break;
			default:
				break;
			}
			this.state = 265;
			this.identifier();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
				{
				this.state = 266;
				this.typeparams();
				}
			}

			this.state = 269;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__113 || _la===ponyParser.ID) {
				{
				this.state = 270;
				this.params();
				}
			}

			this.state = 273;
			this.match(ponyParser.T__5);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 274;
				this.match(ponyParser.T__20);
				this.state = 275;
				this.type();
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 278;
				this.match(ponyParser.T__6);
				}
			}

			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.STRING) {
				{
				this.state = 281;
				this.match(ponyParser.STRING);
				}
			}

			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__24) {
				{
				this.state = 284;
				this.match(ponyParser.T__24);
				this.state = 285;
				this.rawseq();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotatedrawseq(): AnnotatedrawseqContext {
		let _localctx: AnnotatedrawseqContext = new AnnotatedrawseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ponyParser.RULE_annotatedrawseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 288;
				this.match(ponyParser.T__14);
				this.state = 289;
				this.identifier();
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 290;
					this.match(ponyParser.T__15);
					this.state = 291;
					this.identifier();
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 297;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				{
				this.state = 301;
				this.exprseq();
				}
				break;
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
				{
				this.state = 302;
				this.jump();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawseq(): RawseqContext {
		let _localctx: RawseqContext = new RawseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ponyParser.RULE_rawseq);
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.exprseq();
				}
				break;
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.jump();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exprseq(): ExprseqContext {
		let _localctx: ExprseqContext = new ExprseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ponyParser.RULE_exprseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.assignment();
			this.state = 312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__25:
				{
				this.state = 310;
				this.semiexpr();
				}
				break;
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				{
				this.state = 311;
				this.nosemi();
				}
				break;
			case ponyParser.EOF:
			case ponyParser.T__5:
			case ponyParser.T__7:
			case ponyParser.T__8:
			case ponyParser.T__9:
			case ponyParser.T__10:
			case ponyParser.T__11:
			case ponyParser.T__12:
			case ponyParser.T__13:
			case ponyParser.T__15:
			case ponyParser.T__21:
			case ponyParser.T__22:
			case ponyParser.T__23:
			case ponyParser.T__24:
			case ponyParser.T__62:
			case ponyParser.T__63:
			case ponyParser.T__64:
			case ponyParser.T__69:
			case ponyParser.T__71:
			case ponyParser.T__79:
			case ponyParser.T__80:
			case ponyParser.T__90:
			case ponyParser.T__93:
			case ponyParser.T__97:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextexprseq(): NextexprseqContext {
		let _localctx: NextexprseqContext = new NextexprseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ponyParser.RULE_nextexprseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.nextassignment();
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__25:
				{
				this.state = 315;
				this.semiexpr();
				}
				break;
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				{
				this.state = 316;
				this.nosemi();
				}
				break;
			case ponyParser.EOF:
			case ponyParser.T__5:
			case ponyParser.T__7:
			case ponyParser.T__8:
			case ponyParser.T__9:
			case ponyParser.T__10:
			case ponyParser.T__11:
			case ponyParser.T__12:
			case ponyParser.T__13:
			case ponyParser.T__15:
			case ponyParser.T__21:
			case ponyParser.T__22:
			case ponyParser.T__23:
			case ponyParser.T__24:
			case ponyParser.T__62:
			case ponyParser.T__63:
			case ponyParser.T__64:
			case ponyParser.T__69:
			case ponyParser.T__71:
			case ponyParser.T__79:
			case ponyParser.T__80:
			case ponyParser.T__90:
			case ponyParser.T__93:
			case ponyParser.T__97:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nosemi(): NosemiContext {
		let _localctx: NosemiContext = new NosemiContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ponyParser.RULE_nosemi);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.nextexprseq();
				}
				break;
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.jump();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public semiexpr(): SemiexprContext {
		let _localctx: SemiexprContext = new SemiexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ponyParser.RULE_semiexpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(ponyParser.T__25);
			this.state = 326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__70:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				{
				this.state = 324;
				this.exprseq();
				}
				break;
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
				{
				this.state = 325;
				this.jump();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jump(): JumpContext {
		let _localctx: JumpContext = new JumpContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ponyParser.RULE_jump);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if ( !(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (ponyParser.T__26 - 27)) | (1 << (ponyParser.T__27 - 27)) | (1 << (ponyParser.T__28 - 27)) | (1 << (ponyParser.T__29 - 27)) | (1 << (ponyParser.T__30 - 27)) | (1 << (ponyParser.T__31 - 27)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
				{
				this.state = 329;
				this.rawseq();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextassignment(): NextassignmentContext {
		let _localctx: NextassignmentContext = new NextassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ponyParser.RULE_nextassignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.nextinfix();
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 333;
				this.match(ponyParser.T__1);
				this.state = 334;
				this.assignment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ponyParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.infix();
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 338;
				this.match(ponyParser.T__1);
				this.state = 339;
				this.assignment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextinfix(): NextinfixContext {
		let _localctx: NextinfixContext = new NextinfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ponyParser.RULE_nextinfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.nextterm();
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__16 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ponyParser.T__32 - 33)) | (1 << (ponyParser.T__33 - 33)) | (1 << (ponyParser.T__34 - 33)) | (1 << (ponyParser.T__35 - 33)) | (1 << (ponyParser.T__36 - 33)) | (1 << (ponyParser.T__37 - 33)) | (1 << (ponyParser.T__38 - 33)) | (1 << (ponyParser.T__39 - 33)) | (1 << (ponyParser.T__40 - 33)) | (1 << (ponyParser.T__41 - 33)) | (1 << (ponyParser.T__42 - 33)) | (1 << (ponyParser.T__43 - 33)) | (1 << (ponyParser.T__44 - 33)) | (1 << (ponyParser.T__45 - 33)) | (1 << (ponyParser.T__46 - 33)) | (1 << (ponyParser.T__47 - 33)) | (1 << (ponyParser.T__48 - 33)) | (1 << (ponyParser.T__49 - 33)) | (1 << (ponyParser.T__50 - 33)) | (1 << (ponyParser.T__51 - 33)) | (1 << (ponyParser.T__52 - 33)) | (1 << (ponyParser.T__53 - 33)) | (1 << (ponyParser.T__54 - 33)) | (1 << (ponyParser.T__55 - 33)) | (1 << (ponyParser.T__56 - 33)) | (1 << (ponyParser.T__57 - 33)) | (1 << (ponyParser.T__58 - 33)) | (1 << (ponyParser.T__59 - 33)) | (1 << (ponyParser.T__60 - 33)) | (1 << (ponyParser.T__61 - 33)))) !== 0) || _la===ponyParser.T__89) {
				{
				{
				this.state = 343;
				this.antlr_0();
				}
				}
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infix(): InfixContext {
		let _localctx: InfixContext = new InfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ponyParser.RULE_infix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.term();
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__16 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ponyParser.T__32 - 33)) | (1 << (ponyParser.T__33 - 33)) | (1 << (ponyParser.T__34 - 33)) | (1 << (ponyParser.T__35 - 33)) | (1 << (ponyParser.T__36 - 33)) | (1 << (ponyParser.T__37 - 33)) | (1 << (ponyParser.T__38 - 33)) | (1 << (ponyParser.T__39 - 33)) | (1 << (ponyParser.T__40 - 33)) | (1 << (ponyParser.T__41 - 33)) | (1 << (ponyParser.T__42 - 33)) | (1 << (ponyParser.T__43 - 33)) | (1 << (ponyParser.T__44 - 33)) | (1 << (ponyParser.T__45 - 33)) | (1 << (ponyParser.T__46 - 33)) | (1 << (ponyParser.T__47 - 33)) | (1 << (ponyParser.T__48 - 33)) | (1 << (ponyParser.T__49 - 33)) | (1 << (ponyParser.T__50 - 33)) | (1 << (ponyParser.T__51 - 33)) | (1 << (ponyParser.T__52 - 33)) | (1 << (ponyParser.T__53 - 33)) | (1 << (ponyParser.T__54 - 33)) | (1 << (ponyParser.T__55 - 33)) | (1 << (ponyParser.T__56 - 33)) | (1 << (ponyParser.T__57 - 33)) | (1 << (ponyParser.T__58 - 33)) | (1 << (ponyParser.T__59 - 33)) | (1 << (ponyParser.T__60 - 33)) | (1 << (ponyParser.T__61 - 33)))) !== 0) || _la===ponyParser.T__89) {
				{
				{
				this.state = 350;
				this.antlr_1();
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public isop(): IsopContext {
		let _localctx: IsopContext = new IsopContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ponyParser.RULE_isop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__16 || _la===ponyParser.T__32) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 357;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public binop(): BinopContext {
		let _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ponyParser.RULE_binop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if ( !(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ponyParser.T__33 - 34)) | (1 << (ponyParser.T__34 - 34)) | (1 << (ponyParser.T__35 - 34)) | (1 << (ponyParser.T__36 - 34)) | (1 << (ponyParser.T__37 - 34)) | (1 << (ponyParser.T__38 - 34)) | (1 << (ponyParser.T__39 - 34)) | (1 << (ponyParser.T__40 - 34)) | (1 << (ponyParser.T__41 - 34)) | (1 << (ponyParser.T__42 - 34)) | (1 << (ponyParser.T__43 - 34)) | (1 << (ponyParser.T__44 - 34)) | (1 << (ponyParser.T__45 - 34)) | (1 << (ponyParser.T__46 - 34)) | (1 << (ponyParser.T__47 - 34)) | (1 << (ponyParser.T__48 - 34)) | (1 << (ponyParser.T__49 - 34)) | (1 << (ponyParser.T__50 - 34)) | (1 << (ponyParser.T__51 - 34)) | (1 << (ponyParser.T__52 - 34)) | (1 << (ponyParser.T__53 - 34)) | (1 << (ponyParser.T__54 - 34)) | (1 << (ponyParser.T__55 - 34)) | (1 << (ponyParser.T__56 - 34)) | (1 << (ponyParser.T__57 - 34)) | (1 << (ponyParser.T__58 - 34)) | (1 << (ponyParser.T__59 - 34)) | (1 << (ponyParser.T__60 - 34)) | (1 << (ponyParser.T__61 - 34)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 360;
				this.match(ponyParser.T__6);
				}
			}

			this.state = 363;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextterm(): NexttermContext {
		let _localctx: NexttermContext = new NexttermContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ponyParser.RULE_nextterm);
		let _la: number;
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.match(ponyParser.T__2);
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 366;
					this.match(ponyParser.T__14);
					this.state = 367;
					this.identifier();
					this.state = 372;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 368;
						this.match(ponyParser.T__15);
						this.state = 369;
						this.identifier();
						}
						}
						this.state = 374;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 375;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 379;
				this.rawseq();
				this.state = 380;
				this.match(ponyParser.T__62);
				this.state = 381;
				this.rawseq();
				this.state = 385;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 382;
					this.elseif();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 383;
					this.match(ponyParser.T__63);
					this.state = 384;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 387;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__65:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.match(ponyParser.T__65);
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 390;
					this.match(ponyParser.T__14);
					this.state = 391;
					this.identifier();
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 392;
						this.match(ponyParser.T__15);
						this.state = 393;
						this.identifier();
						}
						}
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 399;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 403;
				this.infix();
				this.state = 404;
				this.match(ponyParser.T__62);
				this.state = 405;
				this.rawseq();
				this.state = 409;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 406;
					this.elseifdef();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 407;
					this.match(ponyParser.T__63);
					this.state = 408;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 411;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__66:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
				this.match(ponyParser.T__66);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 414;
					this.match(ponyParser.T__14);
					this.state = 415;
					this.identifier();
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 416;
						this.match(ponyParser.T__15);
						this.state = 417;
						this.identifier();
						}
						}
						this.state = 422;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 423;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 427;
				this.iftype();
				this.state = 431;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 428;
					this.elseiftype();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 429;
					this.match(ponyParser.T__63);
					this.state = 430;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 433;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__67:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 435;
				this.match(ponyParser.T__67);
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 436;
					this.match(ponyParser.T__14);
					this.state = 437;
					this.identifier();
					this.state = 442;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 438;
						this.match(ponyParser.T__15);
						this.state = 439;
						this.identifier();
						}
						}
						this.state = 444;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 445;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 449;
				this.rawseq();
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__79) {
					{
					{
					this.state = 450;
					this.caseexpr();
					}
					}
					this.state = 455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 456;
					this.match(ponyParser.T__63);
					this.state = 457;
					this.annotatedrawseq();
					}
				}

				this.state = 460;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__68:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 462;
				this.match(ponyParser.T__68);
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 463;
					this.match(ponyParser.T__14);
					this.state = 464;
					this.identifier();
					this.state = 469;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 465;
						this.match(ponyParser.T__15);
						this.state = 466;
						this.identifier();
						}
						}
						this.state = 471;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 472;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 476;
				this.rawseq();
				this.state = 477;
				this.match(ponyParser.T__69);
				this.state = 478;
				this.rawseq();
				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 479;
					this.match(ponyParser.T__63);
					this.state = 480;
					this.annotatedrawseq();
					}
				}

				this.state = 483;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__70:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 485;
				this.match(ponyParser.T__70);
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 486;
					this.match(ponyParser.T__14);
					this.state = 487;
					this.identifier();
					this.state = 492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 488;
						this.match(ponyParser.T__15);
						this.state = 489;
						this.identifier();
						}
						}
						this.state = 494;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 495;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 499;
				this.rawseq();
				this.state = 500;
				this.match(ponyParser.T__71);
				this.state = 501;
				this.annotatedrawseq();
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 502;
					this.match(ponyParser.T__63);
					this.state = 503;
					this.annotatedrawseq();
					}
				}

				this.state = 506;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__72:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 508;
				this.match(ponyParser.T__72);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 509;
					this.match(ponyParser.T__14);
					this.state = 510;
					this.identifier();
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 511;
						this.match(ponyParser.T__15);
						this.state = 512;
						this.identifier();
						}
						}
						this.state = 517;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 518;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 522;
				this.idseq();
				this.state = 523;
				this.match(ponyParser.T__73);
				this.state = 524;
				this.rawseq();
				this.state = 525;
				this.match(ponyParser.T__69);
				this.state = 526;
				this.rawseq();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 527;
					this.match(ponyParser.T__63);
					this.state = 528;
					this.annotatedrawseq();
					}
				}

				this.state = 531;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__74:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 533;
				this.match(ponyParser.T__74);
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 534;
					this.match(ponyParser.T__14);
					this.state = 535;
					this.identifier();
					this.state = 540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 536;
						this.match(ponyParser.T__15);
						this.state = 537;
						this.identifier();
						}
						}
						this.state = 542;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 543;
					this.match(ponyParser.T__14);
					}
				}

				{
				this.state = 547;
				this.withelem();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 548;
					this.match(ponyParser.T__15);
					this.state = 549;
					this.withelem();
					}
					}
					this.state = 554;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 555;
				this.match(ponyParser.T__69);
				this.state = 556;
				this.rawseq();
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 557;
					this.match(ponyParser.T__63);
					this.state = 558;
					this.annotatedrawseq();
					}
				}

				this.state = 561;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__75:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 563;
				this.match(ponyParser.T__75);
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 564;
					this.match(ponyParser.T__14);
					this.state = 565;
					this.identifier();
					this.state = 570;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 566;
						this.match(ponyParser.T__15);
						this.state = 567;
						this.identifier();
						}
						}
						this.state = 572;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 573;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 577;
				this.rawseq();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 578;
					this.match(ponyParser.T__63);
					this.state = 579;
					this.annotatedrawseq();
					}
				}

				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__62) {
					{
					this.state = 582;
					this.match(ponyParser.T__62);
					this.state = 583;
					this.annotatedrawseq();
					}
				}

				this.state = 586;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__76:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 588;
				this.match(ponyParser.T__76);
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 589;
					this.match(ponyParser.T__14);
					this.state = 590;
					this.identifier();
					this.state = 595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 591;
						this.match(ponyParser.T__15);
						this.state = 592;
						this.identifier();
						}
						}
						this.state = 597;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 598;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 602;
					this.cap();
					}
				}

				this.state = 605;
				this.rawseq();
				this.state = 606;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__77:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 608;
				this.match(ponyParser.T__77);
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 609;
					this.cap();
					}
				}

				this.state = 612;
				this.term();
				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 613;
				this.nextpattern();
				}
				break;
			case ponyParser.T__78:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 614;
				this.match(ponyParser.T__78);
				this.state = 615;
				this.postfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ponyParser.RULE_term);
		let _la: number;
		try {
			this.state = 869;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.match(ponyParser.T__2);
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 619;
					this.match(ponyParser.T__14);
					this.state = 620;
					this.identifier();
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 621;
						this.match(ponyParser.T__15);
						this.state = 622;
						this.identifier();
						}
						}
						this.state = 627;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 628;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 632;
				this.rawseq();
				this.state = 633;
				this.match(ponyParser.T__62);
				this.state = 634;
				this.rawseq();
				this.state = 638;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 635;
					this.elseif();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 636;
					this.match(ponyParser.T__63);
					this.state = 637;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 640;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__65:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 642;
				this.match(ponyParser.T__65);
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 643;
					this.match(ponyParser.T__14);
					this.state = 644;
					this.identifier();
					this.state = 649;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 645;
						this.match(ponyParser.T__15);
						this.state = 646;
						this.identifier();
						}
						}
						this.state = 651;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 652;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 656;
				this.infix();
				this.state = 657;
				this.match(ponyParser.T__62);
				this.state = 658;
				this.rawseq();
				this.state = 662;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 659;
					this.elseifdef();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 660;
					this.match(ponyParser.T__63);
					this.state = 661;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 664;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__66:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(ponyParser.T__66);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 667;
					this.match(ponyParser.T__14);
					this.state = 668;
					this.identifier();
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 669;
						this.match(ponyParser.T__15);
						this.state = 670;
						this.identifier();
						}
						}
						this.state = 675;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 676;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 680;
				this.iftype();
				this.state = 684;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.T__80:
					{
					this.state = 681;
					this.elseiftype();
					}
					break;
				case ponyParser.T__63:
					{
					{
					this.state = 682;
					this.match(ponyParser.T__63);
					this.state = 683;
					this.annotatedrawseq();
					}
					}
					break;
				case ponyParser.T__64:
					break;
				default:
					break;
				}
				this.state = 686;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__67:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 688;
				this.match(ponyParser.T__67);
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 689;
					this.match(ponyParser.T__14);
					this.state = 690;
					this.identifier();
					this.state = 695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 691;
						this.match(ponyParser.T__15);
						this.state = 692;
						this.identifier();
						}
						}
						this.state = 697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 698;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 702;
				this.rawseq();
				this.state = 706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__79) {
					{
					{
					this.state = 703;
					this.caseexpr();
					}
					}
					this.state = 708;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 709;
					this.match(ponyParser.T__63);
					this.state = 710;
					this.annotatedrawseq();
					}
				}

				this.state = 713;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__68:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 715;
				this.match(ponyParser.T__68);
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 716;
					this.match(ponyParser.T__14);
					this.state = 717;
					this.identifier();
					this.state = 722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 718;
						this.match(ponyParser.T__15);
						this.state = 719;
						this.identifier();
						}
						}
						this.state = 724;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 725;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 729;
				this.rawseq();
				this.state = 730;
				this.match(ponyParser.T__69);
				this.state = 731;
				this.rawseq();
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 732;
					this.match(ponyParser.T__63);
					this.state = 733;
					this.annotatedrawseq();
					}
				}

				this.state = 736;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__70:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 738;
				this.match(ponyParser.T__70);
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 739;
					this.match(ponyParser.T__14);
					this.state = 740;
					this.identifier();
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 741;
						this.match(ponyParser.T__15);
						this.state = 742;
						this.identifier();
						}
						}
						this.state = 747;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 748;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 752;
				this.rawseq();
				this.state = 753;
				this.match(ponyParser.T__71);
				this.state = 754;
				this.annotatedrawseq();
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 755;
					this.match(ponyParser.T__63);
					this.state = 756;
					this.annotatedrawseq();
					}
				}

				this.state = 759;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__72:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 761;
				this.match(ponyParser.T__72);
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 762;
					this.match(ponyParser.T__14);
					this.state = 763;
					this.identifier();
					this.state = 768;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 764;
						this.match(ponyParser.T__15);
						this.state = 765;
						this.identifier();
						}
						}
						this.state = 770;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 771;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 775;
				this.idseq();
				this.state = 776;
				this.match(ponyParser.T__73);
				this.state = 777;
				this.rawseq();
				this.state = 778;
				this.match(ponyParser.T__69);
				this.state = 779;
				this.rawseq();
				this.state = 782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 780;
					this.match(ponyParser.T__63);
					this.state = 781;
					this.annotatedrawseq();
					}
				}

				this.state = 784;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__74:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 786;
				this.match(ponyParser.T__74);
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 787;
					this.match(ponyParser.T__14);
					this.state = 788;
					this.identifier();
					this.state = 793;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 789;
						this.match(ponyParser.T__15);
						this.state = 790;
						this.identifier();
						}
						}
						this.state = 795;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 796;
					this.match(ponyParser.T__14);
					}
				}

				{
				this.state = 800;
				this.withelem();
				this.state = 805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 801;
					this.match(ponyParser.T__15);
					this.state = 802;
					this.withelem();
					}
					}
					this.state = 807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 808;
				this.match(ponyParser.T__69);
				this.state = 809;
				this.rawseq();
				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 810;
					this.match(ponyParser.T__63);
					this.state = 811;
					this.annotatedrawseq();
					}
				}

				this.state = 814;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__75:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 816;
				this.match(ponyParser.T__75);
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 817;
					this.match(ponyParser.T__14);
					this.state = 818;
					this.identifier();
					this.state = 823;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 819;
						this.match(ponyParser.T__15);
						this.state = 820;
						this.identifier();
						}
						}
						this.state = 825;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 826;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 830;
				this.rawseq();
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__63) {
					{
					this.state = 831;
					this.match(ponyParser.T__63);
					this.state = 832;
					this.annotatedrawseq();
					}
				}

				this.state = 837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__62) {
					{
					this.state = 835;
					this.match(ponyParser.T__62);
					this.state = 836;
					this.annotatedrawseq();
					}
				}

				this.state = 839;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__76:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 841;
				this.match(ponyParser.T__76);
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 842;
					this.match(ponyParser.T__14);
					this.state = 843;
					this.identifier();
					this.state = 848;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 844;
						this.match(ponyParser.T__15);
						this.state = 845;
						this.identifier();
						}
						}
						this.state = 850;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 851;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 855;
					this.cap();
					}
				}

				this.state = 858;
				this.rawseq();
				this.state = 859;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__77:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 861;
				this.match(ponyParser.T__77);
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 862;
					this.cap();
					}
				}

				this.state = 865;
				this.term();
				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 866;
				this.pattern();
				}
				break;
			case ponyParser.T__78:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 867;
				this.match(ponyParser.T__78);
				this.state = 868;
				this.postfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withelem(): WithelemContext {
		let _localctx: WithelemContext = new WithelemContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ponyParser.RULE_withelem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.idseq();
			this.state = 872;
			this.match(ponyParser.T__1);
			this.state = 873;
			this.rawseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseexpr(): CaseexprContext {
		let _localctx: CaseexprContext = new CaseexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ponyParser.RULE_caseexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(ponyParser.T__79);
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 876;
				this.match(ponyParser.T__14);
				this.state = 877;
				this.identifier();
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 878;
					this.match(ponyParser.T__15);
					this.state = 879;
					this.identifier();
					}
					}
					this.state = 884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 885;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19))) !== 0) || _la===ponyParser.T__37 || _la===ponyParser.T__42 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (ponyParser.T__82 - 83)) | (1 << (ponyParser.T__83 - 83)) | (1 << (ponyParser.T__84 - 83)) | (1 << (ponyParser.T__88 - 83)) | (1 << (ponyParser.T__91 - 83)) | (1 << (ponyParser.T__92 - 83)) | (1 << (ponyParser.T__94 - 83)) | (1 << (ponyParser.T__95 - 83)) | (1 << (ponyParser.T__96 - 83)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
				{
				this.state = 889;
				this.pattern();
				}
			}

			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__2) {
				{
				this.state = 892;
				this.match(ponyParser.T__2);
				this.state = 893;
				this.rawseq();
				}
			}

			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__24) {
				{
				this.state = 896;
				this.match(ponyParser.T__24);
				this.state = 897;
				this.rawseq();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseiftype(): ElseiftypeContext {
		let _localctx: ElseiftypeContext = new ElseiftypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ponyParser.RULE_elseiftype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.match(ponyParser.T__80);
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 901;
				this.match(ponyParser.T__14);
				this.state = 902;
				this.identifier();
				this.state = 907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 903;
					this.match(ponyParser.T__15);
					this.state = 904;
					this.identifier();
					}
					}
					this.state = 909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 910;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 914;
			this.iftype();
			this.state = 918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__80:
				{
				this.state = 915;
				this.elseiftype();
				}
				break;
			case ponyParser.T__63:
				{
				{
				this.state = 916;
				this.match(ponyParser.T__63);
				this.state = 917;
				this.annotatedrawseq();
				}
				}
				break;
			case ponyParser.T__64:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public iftype(): IftypeContext {
		let _localctx: IftypeContext = new IftypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ponyParser.RULE_iftype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.type();
			this.state = 921;
			this.match(ponyParser.T__81);
			this.state = 922;
			this.type();
			this.state = 923;
			this.match(ponyParser.T__62);
			this.state = 924;
			this.rawseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseifdef(): ElseifdefContext {
		let _localctx: ElseifdefContext = new ElseifdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ponyParser.RULE_elseifdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.match(ponyParser.T__80);
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 927;
				this.match(ponyParser.T__14);
				this.state = 928;
				this.identifier();
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 929;
					this.match(ponyParser.T__15);
					this.state = 930;
					this.identifier();
					}
					}
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 936;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 940;
			this.infix();
			this.state = 941;
			this.match(ponyParser.T__62);
			this.state = 942;
			this.rawseq();
			this.state = 946;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__80:
				{
				this.state = 943;
				this.elseifdef();
				}
				break;
			case ponyParser.T__63:
				{
				{
				this.state = 944;
				this.match(ponyParser.T__63);
				this.state = 945;
				this.annotatedrawseq();
				}
				}
				break;
			case ponyParser.T__64:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseif(): ElseifContext {
		let _localctx: ElseifContext = new ElseifContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ponyParser.RULE_elseif);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.match(ponyParser.T__80);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__14) {
				{
				this.state = 949;
				this.match(ponyParser.T__14);
				this.state = 950;
				this.identifier();
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 951;
					this.match(ponyParser.T__15);
					this.state = 952;
					this.identifier();
					}
					}
					this.state = 957;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 958;
				this.match(ponyParser.T__14);
				}
			}

			this.state = 962;
			this.rawseq();
			this.state = 963;
			this.match(ponyParser.T__62);
			this.state = 964;
			this.rawseq();
			this.state = 968;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__80:
				{
				this.state = 965;
				this.elseif();
				}
				break;
			case ponyParser.T__63:
				{
				{
				this.state = 966;
				this.match(ponyParser.T__63);
				this.state = 967;
				this.annotatedrawseq();
				}
				}
				break;
			case ponyParser.T__64:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public idseq(): IdseqContext {
		let _localctx: IdseqContext = new IdseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ponyParser.RULE_idseq);
		let _la: number;
		try {
			this.state = 982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 970;
				this.identifier();
				}
				break;
			case ponyParser.T__4:
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 971;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 972;
				this.idseq_in_seq();
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 973;
					this.match(ponyParser.T__15);
					this.state = 974;
					this.idseq_in_seq();
					}
					}
					this.state = 979;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 980;
				this.match(ponyParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public idseq_in_seq(): Idseq_in_seqContext {
		let _localctx: Idseq_in_seqContext = new Idseq_in_seqContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ponyParser.RULE_idseq_in_seq);
		let _la: number;
		try {
			this.state = 996;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this.identifier();
				}
				break;
			case ponyParser.T__4:
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 986;
				this.idseq_in_seq();
				this.state = 991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 987;
					this.match(ponyParser.T__15);
					this.state = 988;
					this.idseq_in_seq();
					}
					}
					this.state = 993;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 994;
				this.match(ponyParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextpattern(): NextpatternContext {
		let _localctx: NextpatternContext = new NextpatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ponyParser.RULE_nextpattern);
		let _la: number;
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 998;
				_la = this._input.LA(1);
				if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 999;
				this.identifier();
				this.state = 1002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1000;
					this.match(ponyParser.T__20);
					this.state = 1001;
					this.type();
					}
				}

				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1004;
				this.nextparampattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ponyParser.RULE_pattern);
		let _la: number;
		try {
			this.state = 1014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				_la = this._input.LA(1);
				if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1008;
				this.identifier();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1009;
					this.match(ponyParser.T__20);
					this.state = 1010;
					this.type();
					}
				}

				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.parampattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextparampattern(): NextparampatternContext {
		let _localctx: NextparampatternContext = new NextparampatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ponyParser.RULE_nextparampattern);
		let _la: number;
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1016;
				_la = this._input.LA(1);
				if ( !(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (ponyParser.T__82 - 83)) | (1 << (ponyParser.T__83 - 83)) | (1 << (ponyParser.T__84 - 83)))) !== 0) || _la===ponyParser.MINUS_NEW || _la===ponyParser.MINUS_TILDE_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1017;
				this.parampattern();
				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.nextpostfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parampattern(): ParampatternContext {
		let _localctx: ParampatternContext = new ParampatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ponyParser.RULE_parampattern);
		let _la: number;
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__37:
			case ponyParser.T__42:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__37 || _la===ponyParser.T__42 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (ponyParser.T__82 - 83)) | (1 << (ponyParser.T__83 - 83)) | (1 << (ponyParser.T__84 - 83)))) !== 0) || _la===ponyParser.MINUS_NEW || _la===ponyParser.MINUS_TILDE_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1022;
				this.parampattern();
				}
				break;
			case ponyParser.T__3:
			case ponyParser.T__4:
			case ponyParser.T__88:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__96:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1023;
				this.postfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextpostfix(): NextpostfixContext {
		let _localctx: NextpostfixContext = new NextpostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ponyParser.RULE_nextpostfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			this.nextatom();
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__4 || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (ponyParser.T__85 - 86)) | (1 << (ponyParser.T__86 - 86)) | (1 << (ponyParser.T__87 - 86)) | (1 << (ponyParser.T__96 - 86)))) !== 0)) {
				{
				{
				this.state = 1027;
				this.antlr_2();
				}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfix(): PostfixContext {
		let _localctx: PostfixContext = new PostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ponyParser.RULE_postfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.atom();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__4 || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (ponyParser.T__85 - 86)) | (1 << (ponyParser.T__86 - 86)) | (1 << (ponyParser.T__87 - 86)) | (1 << (ponyParser.T__96 - 86)))) !== 0)) {
				{
				{
				this.state = 1034;
				this.antlr_3();
				}
				}
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ponyParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.match(ponyParser.T__4);
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
				{
				this.state = 1041;
				this.positional();
				}
			}

			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__97) {
				{
				this.state = 1044;
				this.named();
				}
			}

			this.state = 1047;
			this.match(ponyParser.T__5);
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 1048;
				this.match(ponyParser.T__6);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public chain(): ChainContext {
		let _localctx: ChainContext = new ChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ponyParser.RULE_chain);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.match(ponyParser.T__85);
			this.state = 1052;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tilde(): TildeContext {
		let _localctx: TildeContext = new TildeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ponyParser.RULE_tilde);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.match(ponyParser.T__86);
			this.state = 1055;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dot(): DotContext {
		let _localctx: DotContext = new DotContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ponyParser.RULE_dot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(ponyParser.T__87);
			this.state = 1058;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nextatom(): NextatomContext {
		let _localctx: NextatomContext = new NextatomContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ponyParser.RULE_nextatom);
		let _la: number;
		try {
			this.state = 1213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
				this.identifier();
				}
				break;
			case ponyParser.T__88:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1061;
				this.match(ponyParser.T__88);
				}
				break;
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1062;
				this.literal();
				}
				break;
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1063;
				this.match(ponyParser.LPAREN_NEW);
				this.state = 1064;
				this.rawseq();
				this.state = 1066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__15) {
					{
					this.state = 1065;
					this.tuple();
					}
				}

				this.state = 1068;
				this.match(ponyParser.T__5);
				}
				break;
			case ponyParser.LSQUARE_NEW:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1070;
				this.match(ponyParser.LSQUARE_NEW);
				this.state = 1075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__89) {
					{
					this.state = 1071;
					this.match(ponyParser.T__89);
					this.state = 1072;
					this.type();
					this.state = 1073;
					this.match(ponyParser.T__20);
					}
				}

				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
					{
					this.state = 1077;
					this.rawseq();
					}
				}

				this.state = 1080;
				this.match(ponyParser.T__90);
				}
				break;
			case ponyParser.T__91:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1081;
				this.match(ponyParser.T__91);
				this.state = 1093;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1082;
					this.match(ponyParser.T__14);
					this.state = 1083;
					this.identifier();
					this.state = 1088;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1084;
						this.match(ponyParser.T__15);
						this.state = 1085;
						this.identifier();
						}
						}
						this.state = 1090;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1091;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1095;
					this.cap();
					}
				}

				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__16) {
					{
					this.state = 1098;
					this.match(ponyParser.T__16);
					this.state = 1099;
					this.type();
					}
				}

				this.state = 1102;
				this.members();
				this.state = 1103;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__92:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1105;
				this.match(ponyParser.T__92);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1106;
					this.match(ponyParser.T__14);
					this.state = 1107;
					this.identifier();
					this.state = 1112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1108;
						this.match(ponyParser.T__15);
						this.state = 1109;
						this.identifier();
						}
						}
						this.state = 1114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1115;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1119;
					this.cap();
					}
				}

				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1122;
					this.identifier();
					}
				}

				this.state = 1126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
					{
					this.state = 1125;
					this.typeparams();
					}
				}

				this.state = 1128;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1129;
					this.lambdaparams();
					}
				}

				this.state = 1132;
				this.match(ponyParser.T__5);
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) {
					{
					this.state = 1133;
					this.lambdacaptures();
					}
				}

				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1136;
					this.match(ponyParser.T__20);
					this.state = 1137;
					this.type();
					}
				}

				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1140;
					this.match(ponyParser.T__6);
					}
				}

				this.state = 1143;
				this.match(ponyParser.T__24);
				this.state = 1144;
				this.rawseq();
				this.state = 1145;
				this.match(ponyParser.T__93);
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1146;
					this.cap();
					}
				}

				}
				break;
			case ponyParser.T__94:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1149;
				this.match(ponyParser.T__94);
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1150;
					this.match(ponyParser.T__14);
					this.state = 1151;
					this.identifier();
					this.state = 1156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1152;
						this.match(ponyParser.T__15);
						this.state = 1153;
						this.identifier();
						}
						}
						this.state = 1158;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1159;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1163;
					this.cap();
					}
				}

				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1166;
					this.identifier();
					}
				}

				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
					{
					this.state = 1169;
					this.typeparams();
					}
				}

				this.state = 1172;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1173;
					this.lambdaparams();
					}
				}

				this.state = 1176;
				this.match(ponyParser.T__5);
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) {
					{
					this.state = 1177;
					this.lambdacaptures();
					}
				}

				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1180;
					this.match(ponyParser.T__20);
					this.state = 1181;
					this.type();
					}
				}

				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1184;
					this.match(ponyParser.T__6);
					}
				}

				this.state = 1187;
				this.match(ponyParser.T__24);
				this.state = 1188;
				this.rawseq();
				this.state = 1189;
				this.match(ponyParser.T__93);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1190;
					this.cap();
					}
				}

				}
				break;
			case ponyParser.T__3:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1193;
				this.match(ponyParser.T__3);
				this.state = 1196;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.ID:
					{
					this.state = 1194;
					this.identifier();
					}
					break;
				case ponyParser.STRING:
					{
					this.state = 1195;
					this.match(ponyParser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96) {
					{
					this.state = 1198;
					this.typeargs();
					}
				}

				this.state = 1201;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
					{
					this.state = 1202;
					this.positional();
					}
				}

				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__97) {
					{
					this.state = 1205;
					this.named();
					}
				}

				this.state = 1208;
				this.match(ponyParser.T__5);
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1209;
					this.match(ponyParser.T__6);
					}
				}

				}
				break;
			case ponyParser.T__95:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1212;
				this.match(ponyParser.T__95);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ponyParser.RULE_atom);
		let _la: number;
		try {
			this.state = 1368;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1215;
				this.identifier();
				}
				break;
			case ponyParser.T__88:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1216;
				this.match(ponyParser.T__88);
				}
				break;
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1217;
				this.literal();
				}
				break;
			case ponyParser.T__4:
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1218;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1219;
				this.rawseq();
				this.state = 1221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__15) {
					{
					this.state = 1220;
					this.tuple();
					}
				}

				this.state = 1223;
				this.match(ponyParser.T__5);
				}
				break;
			case ponyParser.T__96:
			case ponyParser.LSQUARE_NEW:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1225;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__89) {
					{
					this.state = 1226;
					this.match(ponyParser.T__89);
					this.state = 1227;
					this.type();
					this.state = 1228;
					this.match(ponyParser.T__20);
					}
				}

				this.state = 1233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
					{
					this.state = 1232;
					this.rawseq();
					}
				}

				this.state = 1235;
				this.match(ponyParser.T__90);
				}
				break;
			case ponyParser.T__91:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1236;
				this.match(ponyParser.T__91);
				this.state = 1248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1237;
					this.match(ponyParser.T__14);
					this.state = 1238;
					this.identifier();
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1239;
						this.match(ponyParser.T__15);
						this.state = 1240;
						this.identifier();
						}
						}
						this.state = 1245;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1246;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1250;
					this.cap();
					}
				}

				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__16) {
					{
					this.state = 1253;
					this.match(ponyParser.T__16);
					this.state = 1254;
					this.type();
					}
				}

				this.state = 1257;
				this.members();
				this.state = 1258;
				this.match(ponyParser.T__64);
				}
				break;
			case ponyParser.T__92:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1260;
				this.match(ponyParser.T__92);
				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1261;
					this.match(ponyParser.T__14);
					this.state = 1262;
					this.identifier();
					this.state = 1267;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1263;
						this.match(ponyParser.T__15);
						this.state = 1264;
						this.identifier();
						}
						}
						this.state = 1269;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1270;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1274;
					this.cap();
					}
				}

				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1277;
					this.identifier();
					}
				}

				this.state = 1281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
					{
					this.state = 1280;
					this.typeparams();
					}
				}

				this.state = 1283;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1284;
					this.lambdaparams();
					}
				}

				this.state = 1287;
				this.match(ponyParser.T__5);
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) {
					{
					this.state = 1288;
					this.lambdacaptures();
					}
				}

				this.state = 1293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1291;
					this.match(ponyParser.T__20);
					this.state = 1292;
					this.type();
					}
				}

				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1295;
					this.match(ponyParser.T__6);
					}
				}

				this.state = 1298;
				this.match(ponyParser.T__24);
				this.state = 1299;
				this.rawseq();
				this.state = 1300;
				this.match(ponyParser.T__93);
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1301;
					this.cap();
					}
				}

				}
				break;
			case ponyParser.T__94:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1304;
				this.match(ponyParser.T__94);
				this.state = 1316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__14) {
					{
					this.state = 1305;
					this.match(ponyParser.T__14);
					this.state = 1306;
					this.identifier();
					this.state = 1311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ponyParser.T__15) {
						{
						{
						this.state = 1307;
						this.match(ponyParser.T__15);
						this.state = 1308;
						this.identifier();
						}
						}
						this.state = 1313;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1314;
					this.match(ponyParser.T__14);
					}
				}

				this.state = 1319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1318;
					this.cap();
					}
				}

				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1321;
					this.identifier();
					}
				}

				this.state = 1325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
					{
					this.state = 1324;
					this.typeparams();
					}
				}

				this.state = 1327;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.ID) {
					{
					this.state = 1328;
					this.lambdaparams();
					}
				}

				this.state = 1331;
				this.match(ponyParser.T__5);
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) {
					{
					this.state = 1332;
					this.lambdacaptures();
					}
				}

				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__20) {
					{
					this.state = 1335;
					this.match(ponyParser.T__20);
					this.state = 1336;
					this.type();
					}
				}

				this.state = 1340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1339;
					this.match(ponyParser.T__6);
					}
				}

				this.state = 1342;
				this.match(ponyParser.T__24);
				this.state = 1343;
				this.rawseq();
				this.state = 1344;
				this.match(ponyParser.T__93);
				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
					{
					this.state = 1345;
					this.cap();
					}
				}

				}
				break;
			case ponyParser.T__3:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1348;
				this.match(ponyParser.T__3);
				this.state = 1351;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.ID:
					{
					this.state = 1349;
					this.identifier();
					}
					break;
				case ponyParser.STRING:
					{
					this.state = 1350;
					this.match(ponyParser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__96) {
					{
					this.state = 1353;
					this.typeargs();
					}
				}

				this.state = 1356;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ponyParser.T__2) | (1 << ponyParser.T__3) | (1 << ponyParser.T__4) | (1 << ponyParser.T__17) | (1 << ponyParser.T__18) | (1 << ponyParser.T__19) | (1 << ponyParser.T__26) | (1 << ponyParser.T__27) | (1 << ponyParser.T__28) | (1 << ponyParser.T__29) | (1 << ponyParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ponyParser.T__31 - 32)) | (1 << (ponyParser.T__37 - 32)) | (1 << (ponyParser.T__42 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ponyParser.T__65 - 66)) | (1 << (ponyParser.T__66 - 66)) | (1 << (ponyParser.T__67 - 66)) | (1 << (ponyParser.T__68 - 66)) | (1 << (ponyParser.T__70 - 66)) | (1 << (ponyParser.T__72 - 66)) | (1 << (ponyParser.T__74 - 66)) | (1 << (ponyParser.T__75 - 66)) | (1 << (ponyParser.T__76 - 66)) | (1 << (ponyParser.T__77 - 66)) | (1 << (ponyParser.T__78 - 66)) | (1 << (ponyParser.T__82 - 66)) | (1 << (ponyParser.T__83 - 66)) | (1 << (ponyParser.T__84 - 66)) | (1 << (ponyParser.T__88 - 66)) | (1 << (ponyParser.T__91 - 66)) | (1 << (ponyParser.T__92 - 66)) | (1 << (ponyParser.T__94 - 66)) | (1 << (ponyParser.T__95 - 66)) | (1 << (ponyParser.T__96 - 66)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.ID - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)) | (1 << (ponyParser.LPAREN_NEW - 115)) | (1 << (ponyParser.LSQUARE_NEW - 115)) | (1 << (ponyParser.MINUS_NEW - 115)) | (1 << (ponyParser.MINUS_TILDE_NEW - 115)))) !== 0)) {
					{
					this.state = 1357;
					this.positional();
					}
				}

				this.state = 1361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__97) {
					{
					this.state = 1360;
					this.named();
					}
				}

				this.state = 1363;
				this.match(ponyParser.T__5);
				this.state = 1365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__6) {
					{
					this.state = 1364;
					this.match(ponyParser.T__6);
					}
				}

				}
				break;
			case ponyParser.T__95:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1367;
				this.match(ponyParser.T__95);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ponyParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1370;
			this.match(ponyParser.T__15);
			this.state = 1371;
			this.rawseq();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1372;
				this.match(ponyParser.T__15);
				this.state = 1373;
				this.rawseq();
				}
				}
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdacaptures(): LambdacapturesContext {
		let _localctx: LambdacapturesContext = new LambdacapturesContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ponyParser.RULE_lambdacaptures);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1379;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				{
				this.state = 1380;
				this.lambdacapture();
				}
				break;
			case ponyParser.T__88:
				{
				this.state = 1381;
				this.match(ponyParser.T__88);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1384;
				this.match(ponyParser.T__15);
				this.state = 1387;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.ID:
					{
					this.state = 1385;
					this.lambdacapture();
					}
					break;
				case ponyParser.T__88:
					{
					this.state = 1386;
					this.match(ponyParser.T__88);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 1393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1394;
			this.match(ponyParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdacapture(): LambdacaptureContext {
		let _localctx: LambdacaptureContext = new LambdacaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ponyParser.RULE_lambdacapture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			this.identifier();
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 1397;
				this.match(ponyParser.T__20);
				this.state = 1398;
				this.type();
				}
			}

			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 1401;
				this.match(ponyParser.T__1);
				this.state = 1402;
				this.infix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaparams(): LambdaparamsContext {
		let _localctx: LambdaparamsContext = new LambdaparamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ponyParser.RULE_lambdaparams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this.lambdaparam();
			this.state = 1410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1406;
				this.match(ponyParser.T__15);
				this.state = 1407;
				this.lambdaparam();
				}
				}
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaparam(): LambdaparamContext {
		let _localctx: LambdaparamContext = new LambdaparamContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ponyParser.RULE_lambdaparam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.identifier();
			this.state = 1416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 1414;
				this.match(ponyParser.T__20);
				this.state = 1415;
				this.type();
				}
			}

			this.state = 1420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 1418;
				this.match(ponyParser.T__1);
				this.state = 1419;
				this.infix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public positional(): PositionalContext {
		let _localctx: PositionalContext = new PositionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ponyParser.RULE_positional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this.rawseq();
			this.state = 1427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1423;
				this.match(ponyParser.T__15);
				this.state = 1424;
				this.rawseq();
				}
				}
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public named(): NamedContext {
		let _localctx: NamedContext = new NamedContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ponyParser.RULE_named);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(ponyParser.T__97);
			this.state = 1431;
			this.namedarg();
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1432;
				this.match(ponyParser.T__15);
				this.state = 1433;
				this.namedarg();
				}
				}
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namedarg(): NamedargContext {
		let _localctx: NamedargContext = new NamedargContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ponyParser.RULE_namedarg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.identifier();
			this.state = 1440;
			this.match(ponyParser.T__1);
			this.state = 1441;
			this.rawseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ponyParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.atomtype();
			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__98) {
				{
				this.state = 1444;
				this.match(ponyParser.T__98);
				this.state = 1445;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public atomtype(): AtomtypeContext {
		let _localctx: AtomtypeContext = new AtomtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ponyParser.RULE_atomtype);
		let _la: number;
		try {
			this.state = 1460;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__88:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1448;
				this.match(ponyParser.T__88);
				}
				break;
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1449;
				this.cap();
				}
				break;
			case ponyParser.T__4:
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1450;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1451;
				this.infixtype();
				this.state = 1453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===ponyParser.T__15) {
					{
					this.state = 1452;
					this.tupletype();
					}
				}

				this.state = 1455;
				this.match(ponyParser.T__5);
				}
				break;
			case ponyParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1457;
				this.nominal();
				}
				break;
			case ponyParser.T__92:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1458;
				this.lambdatype();
				}
				break;
			case ponyParser.T__94:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1459;
				this.barelambdatype();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public barelambdatype(): BarelambdatypeContext {
		let _localctx: BarelambdatypeContext = new BarelambdatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ponyParser.RULE_barelambdatype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.match(ponyParser.T__94);
			this.state = 1464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
				{
				this.state = 1463;
				this.cap();
				}
			}

			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.ID) {
				{
				this.state = 1466;
				this.identifier();
				}
			}

			this.state = 1470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
				{
				this.state = 1469;
				this.typeparams();
				}
			}

			this.state = 1472;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__4 || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (ponyParser.T__88 - 89)) | (1 << (ponyParser.T__92 - 89)) | (1 << (ponyParser.T__94 - 89)) | (1 << (ponyParser.T__107 - 89)) | (1 << (ponyParser.T__108 - 89)) | (1 << (ponyParser.T__109 - 89)) | (1 << (ponyParser.T__110 - 89)) | (1 << (ponyParser.T__111 - 89)) | (1 << (ponyParser.T__112 - 89)) | (1 << (ponyParser.ID - 89)))) !== 0) || _la===ponyParser.LPAREN_NEW) {
				{
				this.state = 1473;
				this.type();
				this.state = 1478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 1474;
					this.match(ponyParser.T__15);
					this.state = 1475;
					this.type();
					}
					}
					this.state = 1480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1483;
			this.match(ponyParser.T__5);
			this.state = 1486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 1484;
				this.match(ponyParser.T__20);
				this.state = 1485;
				this.type();
				}
			}

			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 1488;
				this.match(ponyParser.T__6);
				}
			}

			this.state = 1491;
			this.match(ponyParser.T__93);
			this.state = 1494;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
				{
				this.state = 1492;
				this.cap();
				}
				break;
			case ponyParser.T__102:
			case ponyParser.T__103:
			case ponyParser.T__104:
			case ponyParser.T__105:
			case ponyParser.T__106:
				{
				this.state = 1493;
				this.gencap();
				}
				break;
			case ponyParser.EOF:
			case ponyParser.T__0:
			case ponyParser.T__1:
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__5:
			case ponyParser.T__6:
			case ponyParser.T__7:
			case ponyParser.T__8:
			case ponyParser.T__9:
			case ponyParser.T__10:
			case ponyParser.T__11:
			case ponyParser.T__12:
			case ponyParser.T__13:
			case ponyParser.T__15:
			case ponyParser.T__16:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__20:
			case ponyParser.T__21:
			case ponyParser.T__22:
			case ponyParser.T__23:
			case ponyParser.T__24:
			case ponyParser.T__25:
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
			case ponyParser.T__32:
			case ponyParser.T__33:
			case ponyParser.T__34:
			case ponyParser.T__35:
			case ponyParser.T__36:
			case ponyParser.T__37:
			case ponyParser.T__38:
			case ponyParser.T__39:
			case ponyParser.T__40:
			case ponyParser.T__41:
			case ponyParser.T__42:
			case ponyParser.T__43:
			case ponyParser.T__44:
			case ponyParser.T__45:
			case ponyParser.T__46:
			case ponyParser.T__47:
			case ponyParser.T__48:
			case ponyParser.T__49:
			case ponyParser.T__50:
			case ponyParser.T__51:
			case ponyParser.T__52:
			case ponyParser.T__53:
			case ponyParser.T__54:
			case ponyParser.T__55:
			case ponyParser.T__56:
			case ponyParser.T__57:
			case ponyParser.T__58:
			case ponyParser.T__59:
			case ponyParser.T__60:
			case ponyParser.T__61:
			case ponyParser.T__62:
			case ponyParser.T__63:
			case ponyParser.T__64:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__69:
			case ponyParser.T__70:
			case ponyParser.T__71:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__79:
			case ponyParser.T__80:
			case ponyParser.T__81:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__89:
			case ponyParser.T__90:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__93:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__97:
			case ponyParser.T__98:
			case ponyParser.T__99:
			case ponyParser.T__100:
			case ponyParser.T__101:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				break;
			default:
				break;
			}
			this.state = 1497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__99 || _la===ponyParser.T__100) {
				{
				this.state = 1496;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__99 || _la===ponyParser.T__100) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdatype(): LambdatypeContext {
		let _localctx: LambdatypeContext = new LambdatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ponyParser.RULE_lambdatype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			this.match(ponyParser.T__92);
			this.state = 1501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) {
				{
				this.state = 1500;
				this.cap();
				}
			}

			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.ID) {
				{
				this.state = 1503;
				this.identifier();
				}
			}

			this.state = 1507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) {
				{
				this.state = 1506;
				this.typeparams();
				}
			}

			this.state = 1509;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__4 || _la===ponyParser.LPAREN_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__4 || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (ponyParser.T__88 - 89)) | (1 << (ponyParser.T__92 - 89)) | (1 << (ponyParser.T__94 - 89)) | (1 << (ponyParser.T__107 - 89)) | (1 << (ponyParser.T__108 - 89)) | (1 << (ponyParser.T__109 - 89)) | (1 << (ponyParser.T__110 - 89)) | (1 << (ponyParser.T__111 - 89)) | (1 << (ponyParser.T__112 - 89)) | (1 << (ponyParser.ID - 89)))) !== 0) || _la===ponyParser.LPAREN_NEW) {
				{
				this.state = 1510;
				this.type();
				this.state = 1515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ponyParser.T__15) {
					{
					{
					this.state = 1511;
					this.match(ponyParser.T__15);
					this.state = 1512;
					this.type();
					}
					}
					this.state = 1517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1520;
			this.match(ponyParser.T__5);
			this.state = 1523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 1521;
				this.match(ponyParser.T__20);
				this.state = 1522;
				this.type();
				}
			}

			this.state = 1526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__6) {
				{
				this.state = 1525;
				this.match(ponyParser.T__6);
				}
			}

			this.state = 1528;
			this.match(ponyParser.T__93);
			this.state = 1531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
				{
				this.state = 1529;
				this.cap();
				}
				break;
			case ponyParser.T__102:
			case ponyParser.T__103:
			case ponyParser.T__104:
			case ponyParser.T__105:
			case ponyParser.T__106:
				{
				this.state = 1530;
				this.gencap();
				}
				break;
			case ponyParser.EOF:
			case ponyParser.T__0:
			case ponyParser.T__1:
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__5:
			case ponyParser.T__6:
			case ponyParser.T__7:
			case ponyParser.T__8:
			case ponyParser.T__9:
			case ponyParser.T__10:
			case ponyParser.T__11:
			case ponyParser.T__12:
			case ponyParser.T__13:
			case ponyParser.T__15:
			case ponyParser.T__16:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__20:
			case ponyParser.T__21:
			case ponyParser.T__22:
			case ponyParser.T__23:
			case ponyParser.T__24:
			case ponyParser.T__25:
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
			case ponyParser.T__32:
			case ponyParser.T__33:
			case ponyParser.T__34:
			case ponyParser.T__35:
			case ponyParser.T__36:
			case ponyParser.T__37:
			case ponyParser.T__38:
			case ponyParser.T__39:
			case ponyParser.T__40:
			case ponyParser.T__41:
			case ponyParser.T__42:
			case ponyParser.T__43:
			case ponyParser.T__44:
			case ponyParser.T__45:
			case ponyParser.T__46:
			case ponyParser.T__47:
			case ponyParser.T__48:
			case ponyParser.T__49:
			case ponyParser.T__50:
			case ponyParser.T__51:
			case ponyParser.T__52:
			case ponyParser.T__53:
			case ponyParser.T__54:
			case ponyParser.T__55:
			case ponyParser.T__56:
			case ponyParser.T__57:
			case ponyParser.T__58:
			case ponyParser.T__59:
			case ponyParser.T__60:
			case ponyParser.T__61:
			case ponyParser.T__62:
			case ponyParser.T__63:
			case ponyParser.T__64:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__69:
			case ponyParser.T__70:
			case ponyParser.T__71:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__79:
			case ponyParser.T__80:
			case ponyParser.T__81:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__89:
			case ponyParser.T__90:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__93:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__97:
			case ponyParser.T__98:
			case ponyParser.T__99:
			case ponyParser.T__100:
			case ponyParser.T__101:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				break;
			default:
				break;
			}
			this.state = 1534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__99 || _la===ponyParser.T__100) {
				{
				this.state = 1533;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__99 || _la===ponyParser.T__100) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tupletype(): TupletypeContext {
		let _localctx: TupletypeContext = new TupletypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ponyParser.RULE_tupletype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1536;
			this.match(ponyParser.T__15);
			this.state = 1537;
			this.infixtype();
			this.state = 1542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1538;
				this.match(ponyParser.T__15);
				this.state = 1539;
				this.infixtype();
				}
				}
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infixtype(): InfixtypeContext {
		let _localctx: InfixtypeContext = new InfixtypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ponyParser.RULE_infixtype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1545;
			this.type();
			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__79 || _la===ponyParser.T__101) {
				{
				{
				this.state = 1546;
				this.antlr_4();
				}
				}
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public isecttype(): IsecttypeContext {
		let _localctx: IsecttypeContext = new IsecttypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ponyParser.RULE_isecttype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1552;
			this.match(ponyParser.T__101);
			this.state = 1553;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public uniontype(): UniontypeContext {
		let _localctx: UniontypeContext = new UniontypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ponyParser.RULE_uniontype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1555;
			this.match(ponyParser.T__79);
			this.state = 1556;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nominal(): NominalContext {
		let _localctx: NominalContext = new NominalContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ponyParser.RULE_nominal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.identifier();
			this.state = 1561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__87) {
				{
				this.state = 1559;
				this.match(ponyParser.T__87);
				this.state = 1560;
				this.identifier();
				}
			}

			this.state = 1564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__96) {
				{
				this.state = 1563;
				this.typeargs();
				}
			}

			this.state = 1568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
				{
				this.state = 1566;
				this.cap();
				}
				break;
			case ponyParser.T__102:
			case ponyParser.T__103:
			case ponyParser.T__104:
			case ponyParser.T__105:
			case ponyParser.T__106:
				{
				this.state = 1567;
				this.gencap();
				}
				break;
			case ponyParser.EOF:
			case ponyParser.T__0:
			case ponyParser.T__1:
			case ponyParser.T__2:
			case ponyParser.T__3:
			case ponyParser.T__5:
			case ponyParser.T__6:
			case ponyParser.T__7:
			case ponyParser.T__8:
			case ponyParser.T__9:
			case ponyParser.T__10:
			case ponyParser.T__11:
			case ponyParser.T__12:
			case ponyParser.T__13:
			case ponyParser.T__15:
			case ponyParser.T__16:
			case ponyParser.T__17:
			case ponyParser.T__18:
			case ponyParser.T__19:
			case ponyParser.T__20:
			case ponyParser.T__21:
			case ponyParser.T__22:
			case ponyParser.T__23:
			case ponyParser.T__24:
			case ponyParser.T__25:
			case ponyParser.T__26:
			case ponyParser.T__27:
			case ponyParser.T__28:
			case ponyParser.T__29:
			case ponyParser.T__30:
			case ponyParser.T__31:
			case ponyParser.T__32:
			case ponyParser.T__33:
			case ponyParser.T__34:
			case ponyParser.T__35:
			case ponyParser.T__36:
			case ponyParser.T__37:
			case ponyParser.T__38:
			case ponyParser.T__39:
			case ponyParser.T__40:
			case ponyParser.T__41:
			case ponyParser.T__42:
			case ponyParser.T__43:
			case ponyParser.T__44:
			case ponyParser.T__45:
			case ponyParser.T__46:
			case ponyParser.T__47:
			case ponyParser.T__48:
			case ponyParser.T__49:
			case ponyParser.T__50:
			case ponyParser.T__51:
			case ponyParser.T__52:
			case ponyParser.T__53:
			case ponyParser.T__54:
			case ponyParser.T__55:
			case ponyParser.T__56:
			case ponyParser.T__57:
			case ponyParser.T__58:
			case ponyParser.T__59:
			case ponyParser.T__60:
			case ponyParser.T__61:
			case ponyParser.T__62:
			case ponyParser.T__63:
			case ponyParser.T__64:
			case ponyParser.T__65:
			case ponyParser.T__66:
			case ponyParser.T__67:
			case ponyParser.T__68:
			case ponyParser.T__69:
			case ponyParser.T__70:
			case ponyParser.T__71:
			case ponyParser.T__72:
			case ponyParser.T__74:
			case ponyParser.T__75:
			case ponyParser.T__76:
			case ponyParser.T__77:
			case ponyParser.T__78:
			case ponyParser.T__79:
			case ponyParser.T__80:
			case ponyParser.T__81:
			case ponyParser.T__82:
			case ponyParser.T__83:
			case ponyParser.T__84:
			case ponyParser.T__88:
			case ponyParser.T__89:
			case ponyParser.T__90:
			case ponyParser.T__91:
			case ponyParser.T__92:
			case ponyParser.T__93:
			case ponyParser.T__94:
			case ponyParser.T__95:
			case ponyParser.T__97:
			case ponyParser.T__98:
			case ponyParser.T__99:
			case ponyParser.T__100:
			case ponyParser.T__101:
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.ID:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
			case ponyParser.LPAREN_NEW:
			case ponyParser.LSQUARE_NEW:
			case ponyParser.MINUS_NEW:
			case ponyParser.MINUS_TILDE_NEW:
				break;
			default:
				break;
			}
			this.state = 1571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__99 || _la===ponyParser.T__100) {
				{
				this.state = 1570;
				_la = this._input.LA(1);
				if ( !(_la===ponyParser.T__99 || _la===ponyParser.T__100) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public gencap(): GencapContext {
		let _localctx: GencapContext = new GencapContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ponyParser.RULE_gencap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1573;
			_la = this._input.LA(1);
			if ( !(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (ponyParser.T__102 - 103)) | (1 << (ponyParser.T__103 - 103)) | (1 << (ponyParser.T__104 - 103)) | (1 << (ponyParser.T__105 - 103)) | (1 << (ponyParser.T__106 - 103)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cap(): CapContext {
		let _localctx: CapContext = new CapContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ponyParser.RULE_cap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			_la = this._input.LA(1);
			if ( !(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (ponyParser.T__107 - 108)) | (1 << (ponyParser.T__108 - 108)) | (1 << (ponyParser.T__109 - 108)) | (1 << (ponyParser.T__110 - 108)) | (1 << (ponyParser.T__111 - 108)) | (1 << (ponyParser.T__112 - 108)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeargs(): TypeargsContext {
		let _localctx: TypeargsContext = new TypeargsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ponyParser.RULE_typeargs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.match(ponyParser.T__96);
			this.state = 1578;
			this.typearg();
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1579;
				this.match(ponyParser.T__15);
				this.state = 1580;
				this.typearg();
				}
				}
				this.state = 1585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1586;
			this.match(ponyParser.T__90);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeparams(): TypeparamsContext {
		let _localctx: TypeparamsContext = new TypeparamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ponyParser.RULE_typeparams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1588;
			_la = this._input.LA(1);
			if ( !(_la===ponyParser.T__96 || _la===ponyParser.LSQUARE_NEW) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1589;
			this.typeparam();
			this.state = 1594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1590;
				this.match(ponyParser.T__15);
				this.state = 1591;
				this.typeparam();
				}
				}
				this.state = 1596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1597;
			this.match(ponyParser.T__90);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ponyParser.RULE_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.ID:
				{
				this.state = 1599;
				this.param();
				}
				break;
			case ponyParser.T__113:
				{
				this.state = 1600;
				this.match(ponyParser.T__113);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ponyParser.T__15) {
				{
				{
				this.state = 1603;
				this.match(ponyParser.T__15);
				this.state = 1606;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ponyParser.ID:
					{
					this.state = 1604;
					this.param();
					}
					break;
				case ponyParser.T__113:
					{
					this.state = 1605;
					this.match(ponyParser.T__113);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 1612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeparam(): TypeparamContext {
		let _localctx: TypeparamContext = new TypeparamContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ponyParser.RULE_typeparam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1613;
			this.identifier();
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__20) {
				{
				this.state = 1614;
				this.match(ponyParser.T__20);
				this.state = 1615;
				this.type();
				}
			}

			this.state = 1620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 1618;
				this.match(ponyParser.T__1);
				this.state = 1619;
				this.typearg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typearg(): TypeargContext {
		let _localctx: TypeargContext = new TypeargContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ponyParser.RULE_typearg);
		try {
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__4:
			case ponyParser.T__88:
			case ponyParser.T__92:
			case ponyParser.T__94:
			case ponyParser.T__107:
			case ponyParser.T__108:
			case ponyParser.T__109:
			case ponyParser.T__110:
			case ponyParser.T__111:
			case ponyParser.T__112:
			case ponyParser.ID:
			case ponyParser.LPAREN_NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1622;
				this.type();
				}
				break;
			case ponyParser.T__114:
			case ponyParser.T__115:
			case ponyParser.INT:
			case ponyParser.FLOAT:
			case ponyParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1623;
				this.literal();
				}
				break;
			case ponyParser.T__78:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1624;
				this.match(ponyParser.T__78);
				this.state = 1625;
				this.postfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ponyParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			_la = this._input.LA(1);
			if ( !(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (ponyParser.T__114 - 115)) | (1 << (ponyParser.T__115 - 115)) | (1 << (ponyParser.INT - 115)) | (1 << (ponyParser.FLOAT - 115)) | (1 << (ponyParser.STRING - 115)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ponyParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			this.identifier();
			this.state = 1631;
			this.match(ponyParser.T__20);
			this.state = 1632;
			this.type();
			this.state = 1635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ponyParser.T__1) {
				{
				this.state = 1633;
				this.match(ponyParser.T__1);
				this.state = 1634;
				this.infix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public antlr_0(): Antlr_0Context {
		let _localctx: Antlr_0Context = new Antlr_0Context(this._ctx, this.state);
		this.enterRule(_localctx, 136, ponyParser.RULE_antlr_0);
		try {
			this.state = 1641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__33:
			case ponyParser.T__34:
			case ponyParser.T__35:
			case ponyParser.T__36:
			case ponyParser.T__37:
			case ponyParser.T__38:
			case ponyParser.T__39:
			case ponyParser.T__40:
			case ponyParser.T__41:
			case ponyParser.T__42:
			case ponyParser.T__43:
			case ponyParser.T__44:
			case ponyParser.T__45:
			case ponyParser.T__46:
			case ponyParser.T__47:
			case ponyParser.T__48:
			case ponyParser.T__49:
			case ponyParser.T__50:
			case ponyParser.T__51:
			case ponyParser.T__52:
			case ponyParser.T__53:
			case ponyParser.T__54:
			case ponyParser.T__55:
			case ponyParser.T__56:
			case ponyParser.T__57:
			case ponyParser.T__58:
			case ponyParser.T__59:
			case ponyParser.T__60:
			case ponyParser.T__61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1637;
				this.binop();
				}
				break;
			case ponyParser.T__16:
			case ponyParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1638;
				this.isop();
				}
				break;
			case ponyParser.T__89:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1639;
				this.match(ponyParser.T__89);
				this.state = 1640;
				this.type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public antlr_1(): Antlr_1Context {
		let _localctx: Antlr_1Context = new Antlr_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 138, ponyParser.RULE_antlr_1);
		try {
			this.state = 1647;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__33:
			case ponyParser.T__34:
			case ponyParser.T__35:
			case ponyParser.T__36:
			case ponyParser.T__37:
			case ponyParser.T__38:
			case ponyParser.T__39:
			case ponyParser.T__40:
			case ponyParser.T__41:
			case ponyParser.T__42:
			case ponyParser.T__43:
			case ponyParser.T__44:
			case ponyParser.T__45:
			case ponyParser.T__46:
			case ponyParser.T__47:
			case ponyParser.T__48:
			case ponyParser.T__49:
			case ponyParser.T__50:
			case ponyParser.T__51:
			case ponyParser.T__52:
			case ponyParser.T__53:
			case ponyParser.T__54:
			case ponyParser.T__55:
			case ponyParser.T__56:
			case ponyParser.T__57:
			case ponyParser.T__58:
			case ponyParser.T__59:
			case ponyParser.T__60:
			case ponyParser.T__61:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1643;
				this.binop();
				}
				break;
			case ponyParser.T__16:
			case ponyParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1644;
				this.isop();
				}
				break;
			case ponyParser.T__89:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1645;
				this.match(ponyParser.T__89);
				this.state = 1646;
				this.type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public antlr_2(): Antlr_2Context {
		let _localctx: Antlr_2Context = new Antlr_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 140, ponyParser.RULE_antlr_2);
		try {
			this.state = 1654;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__87:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1649;
				this.dot();
				}
				break;
			case ponyParser.T__86:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1650;
				this.tilde();
				}
				break;
			case ponyParser.T__85:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1651;
				this.chain();
				}
				break;
			case ponyParser.T__96:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1652;
				this.typeargs();
				}
				break;
			case ponyParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1653;
				this.call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public antlr_3(): Antlr_3Context {
		let _localctx: Antlr_3Context = new Antlr_3Context(this._ctx, this.state);
		this.enterRule(_localctx, 142, ponyParser.RULE_antlr_3);
		try {
			this.state = 1661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__87:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1656;
				this.dot();
				}
				break;
			case ponyParser.T__86:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1657;
				this.tilde();
				}
				break;
			case ponyParser.T__85:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1658;
				this.chain();
				}
				break;
			case ponyParser.T__96:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1659;
				this.typeargs();
				}
				break;
			case ponyParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1660;
				this.call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public antlr_4(): Antlr_4Context {
		let _localctx: Antlr_4Context = new Antlr_4Context(this._ctx, this.state);
		this.enterRule(_localctx, 144, ponyParser.RULE_antlr_4);
		try {
			this.state = 1665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ponyParser.T__79:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1663;
				this.uniontype();
				}
				break;
			case ponyParser.T__101:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1664;
				this.isecttype();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ponyParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1667;
			this.match(ponyParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x82\u0688\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x05\x02\x98\n\x02"+
		"\x03\x02\x07\x02\x9B\n\x02\f\x02\x0E\x02\x9E\v\x02\x03\x02\x07\x02\xA1"+
		"\n\x02\f\x02\x0E\x02\xA4\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03"+
		"\xAA\n\x03\x03\x03\x03\x03\x05\x03\xAE\n\x03\x03\x03\x03\x03\x05\x03\xB2"+
		"\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\xB7\n\x04\x03\x04\x03\x04\x03\x04"+
		"\x05\x04\xBC\n\x04\x03\x04\x03\x04\x05\x04\xC0\n\x04\x03\x05\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x07\x05\xC7\n\x05\f\x05\x0E\x05\xCA\v\x05\x03\x05"+
		"\x03\x05\x05\x05\xCE\n\x05\x03\x05\x05\x05\xD1\n\x05\x03\x05\x05\x05\xD4"+
		"\n\x05\x03\x05\x03\x05\x05\x05\xD8\n\x05\x03\x05\x03\x05\x05\x05\xDC\n"+
		"\x05\x03\x05\x05\x05\xDF\n\x05\x03\x05\x03\x05\x03\x06\x07\x06\xE4\n\x06"+
		"\f\x06\x0E\x06\xE7\v\x06\x03\x06\x07\x06\xEA\n\x06\f\x06\x0E\x06\xED\v"+
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xF5\n\x07"+
		"\x03\x07\x05\x07\xF8\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xFF\n\b"+
		"\f\b\x0E\b\u0102\v\b\x03\b\x03\b\x05\b\u0106\n\b\x03\b\x03\b\x05\b\u010A"+
		"\n\b\x03\b\x03\b\x05\b\u010E\n\b\x03\b\x03\b\x05\b\u0112\n\b\x03\b\x03"+
		"\b\x03\b\x05\b\u0117\n\b\x03\b\x05\b\u011A\n\b\x03\b\x05\b\u011D\n\b\x03"+
		"\b\x03\b\x05\b\u0121\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\u0127\n\t\f\t\x0E"+
		"\t\u012A\v\t\x03\t\x03\t\x05\t\u012E\n\t\x03\t\x03\t\x05\t\u0132\n\t\x03"+
		"\n\x03\n\x05\n\u0136\n\n\x03\v\x03\v\x03\v\x05\v\u013B\n\v\x03\f\x03\f"+
		"\x03\f\x05\f\u0140\n\f\x03\r\x03\r\x05\r\u0144\n\r\x03\x0E\x03\x0E\x03"+
		"\x0E\x05\x0E\u0149\n\x0E\x03\x0F\x03\x0F\x05\x0F\u014D\n\x0F\x03\x10\x03"+
		"\x10\x03\x10\x05\x10\u0152\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0157"+
		"\n\x11\x03\x12\x03\x12\x07\x12\u015B\n\x12\f\x12\x0E\x12\u015E\v\x12\x03"+
		"\x13\x03\x13\x07\x13\u0162\n\x13\f\x13\x0E\x13\u0165\v\x13\x03\x14\x03"+
		"\x14\x03\x14\x03\x15\x03\x15\x05\x15\u016C\n\x15\x03\x15\x03\x15\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0175\n\x16\f\x16\x0E\x16\u0178"+
		"\v\x16\x03\x16\x03\x16\x05\x16\u017C\n\x16\x03\x16\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x05\x16\u0184\n\x16\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x07\x16\u018D\n\x16\f\x16\x0E\x16\u0190\v\x16"+
		"\x03\x16\x03\x16\x05\x16\u0194\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x05\x16\u019C\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x07\x16\u01A5\n\x16\f\x16\x0E\x16\u01A8\v\x16\x03\x16"+
		"\x03\x16\x05\x16\u01AC\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01B2"+
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16"+
		"\u01BB\n\x16\f\x16\x0E\x16\u01BE\v\x16\x03\x16\x03\x16\x05\x16\u01C2\n"+
		"\x16\x03\x16\x03\x16\x07\x16\u01C6\n\x16\f\x16\x0E\x16\u01C9\v\x16\x03"+
		"\x16\x03\x16\x05\x16\u01CD\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x07\x16\u01D6\n\x16\f\x16\x0E\x16\u01D9\v\x16\x03\x16"+
		"\x03\x16\x05\x16\u01DD\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05"+
		"\x16\u01E4\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x07\x16\u01ED\n\x16\f\x16\x0E\x16\u01F0\v\x16\x03\x16\x03\x16\x05\x16"+
		"\u01F4\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01FB\n\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0204"+
		"\n\x16\f\x16\x0E\x16\u0207\v\x16\x03\x16\x03\x16\x05\x16\u020B\n\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0214\n\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u021D"+
		"\n\x16\f\x16\x0E\x16\u0220\v\x16\x03\x16\x03\x16\x05\x16\u0224\n\x16\x03"+
		"\x16\x03\x16\x03\x16\x07\x16\u0229\n\x16\f\x16\x0E\x16\u022C\v\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0232\n\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u023B\n\x16\f\x16\x0E\x16\u023E"+
		"\v\x16\x03\x16\x03\x16\x05\x16\u0242\n\x16\x03\x16\x03\x16\x03\x16\x05"+
		"\x16\u0247\n\x16\x03\x16\x03\x16\x05\x16\u024B\n\x16\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0254\n\x16\f\x16\x0E\x16"+
		"\u0257\v\x16\x03\x16\x03\x16\x05\x16\u025B\n\x16\x03\x16\x05\x16\u025E"+
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0265\n\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u026B\n\x16\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x03\x17\x07\x17\u0272\n\x17\f\x17\x0E\x17\u0275\v\x17\x03\x17"+
		"\x03\x17\x05\x17\u0279\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03"+
		"\x17\x05\x17\u0281\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x07\x17\u028A\n\x17\f\x17\x0E\x17\u028D\v\x17\x03\x17\x03\x17"+
		"\x05\x17\u0291\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05"+
		"\x17\u0299\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x07\x17\u02A2\n\x17\f\x17\x0E\x17\u02A5\v\x17\x03\x17\x03\x17\x05\x17"+
		"\u02A9\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02AF\n\x17\x03\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u02B8\n\x17\f"+
		"\x17\x0E\x17\u02BB\v\x17\x03\x17\x03\x17\x05\x17\u02BF\n\x17\x03\x17\x03"+
		"\x17\x07\x17\u02C3\n\x17\f\x17\x0E\x17\u02C6\v\x17\x03\x17\x03\x17\x05"+
		"\x17\u02CA\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x07\x17\u02D3\n\x17\f\x17\x0E\x17\u02D6\v\x17\x03\x17\x03\x17\x05\x17"+
		"\u02DA\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02E1\n\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u02EA"+
		"\n\x17\f\x17\x0E\x17\u02ED\v\x17\x03\x17\x03\x17\x05\x17\u02F1\n\x17\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02F8\n\x17\x03\x17\x03\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0301\n\x17\f\x17\x0E"+
		"\x17\u0304\v\x17\x03\x17\x03\x17\x05\x17\u0308\n\x17\x03\x17\x03\x17\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0311\n\x17\x03\x17\x03\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u031A\n\x17\f\x17\x0E"+
		"\x17\u031D\v\x17\x03\x17\x03\x17\x05\x17\u0321\n\x17\x03\x17\x03\x17\x03"+
		"\x17\x07\x17\u0326\n\x17\f\x17\x0E\x17\u0329\v\x17\x03\x17\x03\x17\x03"+
		"\x17\x03\x17\x05\x17\u032F\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x03\x17\x07\x17\u0338\n\x17\f\x17\x0E\x17\u033B\v\x17\x03\x17"+
		"\x03\x17\x05\x17\u033F\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0344\n\x17"+
		"\x03\x17\x03\x17\x05\x17\u0348\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03"+
		"\x17\x03\x17\x03\x17\x07\x17\u0351\n\x17\f\x17\x0E\x17\u0354\v\x17\x03"+
		"\x17\x03\x17\x05\x17\u0358\n\x17\x03\x17\x05\x17\u035B\n\x17\x03\x17\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0362\n\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x17\x05\x17\u0368\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0373\n\x19\f\x19\x0E\x19\u0376\v"+
		"\x19\x03\x19\x03\x19\x05\x19\u037A\n\x19\x03\x19\x05\x19\u037D\n\x19\x03"+
		"\x19\x03\x19\x05\x19\u0381\n\x19\x03\x19\x03\x19\x05\x19\u0385\n\x19\x03"+
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u038C\n\x1A\f\x1A\x0E\x1A"+
		"\u038F\v\x1A\x03\x1A\x03\x1A\x05\x1A\u0393\n\x1A\x03\x1A\x03\x1A\x03\x1A"+
		"\x03\x1A\x05\x1A\u0399\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u03A6\n\x1C\f\x1C"+
		"\x0E\x1C\u03A9\v\x1C\x03\x1C\x03\x1C\x05\x1C\u03AD\n\x1C\x03\x1C\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u03B5\n\x1C\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u03BC\n\x1D\f\x1D\x0E\x1D\u03BF\v\x1D\x03"+
		"\x1D\x03\x1D\x05\x1D\u03C3\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D"+
		"\x03\x1D\x05\x1D\u03CB\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07"+
		"\x1E\u03D2\n\x1E\f\x1E\x0E\x1E\u03D5\v\x1E\x03\x1E\x03\x1E\x05\x1E\u03D9"+
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u03E0\n\x1F\f\x1F"+
		"\x0E\x1F\u03E3\v\x1F\x03\x1F\x03\x1F\x05\x1F\u03E7\n\x1F\x03 \x03 \x03"+
		" \x03 \x05 \u03ED\n \x03 \x05 \u03F0\n \x03!\x03!\x03!\x03!\x05!\u03F6"+
		"\n!\x03!\x05!\u03F9\n!\x03\"\x03\"\x03\"\x05\"\u03FE\n\"\x03#\x03#\x03"+
		"#\x05#\u0403\n#\x03$\x03$\x07$\u0407\n$\f$\x0E$\u040A\v$\x03%\x03%\x07"+
		"%\u040E\n%\f%\x0E%\u0411\v%\x03&\x03&\x05&\u0415\n&\x03&\x05&\u0418\n"+
		"&\x03&\x03&\x05&\u041C\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03"+
		")\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u042D\n*\x03*\x03*\x03*\x03*\x03"+
		"*\x03*\x03*\x05*\u0436\n*\x03*\x05*\u0439\n*\x03*\x03*\x03*\x03*\x03*"+
		"\x03*\x07*\u0441\n*\f*\x0E*\u0444\v*\x03*\x03*\x05*\u0448\n*\x03*\x05"+
		"*\u044B\n*\x03*\x03*\x05*\u044F\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*"+
		"\x03*\x07*\u0459\n*\f*\x0E*\u045C\v*\x03*\x03*\x05*\u0460\n*\x03*\x05"+
		"*\u0463\n*\x03*\x05*\u0466\n*\x03*\x05*\u0469\n*\x03*\x03*\x05*\u046D"+
		"\n*\x03*\x03*\x05*\u0471\n*\x03*\x03*\x05*\u0475\n*\x03*\x05*\u0478\n"+
		"*\x03*\x03*\x03*\x03*\x05*\u047E\n*\x03*\x03*\x03*\x03*\x03*\x07*\u0485"+
		"\n*\f*\x0E*\u0488\v*\x03*\x03*\x05*\u048C\n*\x03*\x05*\u048F\n*\x03*\x05"+
		"*\u0492\n*\x03*\x05*\u0495\n*\x03*\x03*\x05*\u0499\n*\x03*\x03*\x05*\u049D"+
		"\n*\x03*\x03*\x05*\u04A1\n*\x03*\x05*\u04A4\n*\x03*\x03*\x03*\x03*\x05"+
		"*\u04AA\n*\x03*\x03*\x03*\x05*\u04AF\n*\x03*\x05*\u04B2\n*\x03*\x03*\x05"+
		"*\u04B6\n*\x03*\x05*\u04B9\n*\x03*\x03*\x05*\u04BD\n*\x03*\x05*\u04C0"+
		"\n*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u04C8\n+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03+\x05+\u04D1\n+\x03+\x05+\u04D4\n+\x03+\x03+\x03+\x03+\x03+"+
		"\x03+\x07+\u04DC\n+\f+\x0E+\u04DF\v+\x03+\x03+\x05+\u04E3\n+\x03+\x05"+
		"+\u04E6\n+\x03+\x03+\x05+\u04EA\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+"+
		"\x03+\x07+\u04F4\n+\f+\x0E+\u04F7\v+\x03+\x03+\x05+\u04FB\n+\x03+\x05"+
		"+\u04FE\n+\x03+\x05+\u0501\n+\x03+\x05+\u0504\n+\x03+\x03+\x05+\u0508"+
		"\n+\x03+\x03+\x05+\u050C\n+\x03+\x03+\x05+\u0510\n+\x03+\x05+\u0513\n"+
		"+\x03+\x03+\x03+\x03+\x05+\u0519\n+\x03+\x03+\x03+\x03+\x03+\x07+\u0520"+
		"\n+\f+\x0E+\u0523\v+\x03+\x03+\x05+\u0527\n+\x03+\x05+\u052A\n+\x03+\x05"+
		"+\u052D\n+\x03+\x05+\u0530\n+\x03+\x03+\x05+\u0534\n+\x03+\x03+\x05+\u0538"+
		"\n+\x03+\x03+\x05+\u053C\n+\x03+\x05+\u053F\n+\x03+\x03+\x03+\x03+\x05"+
		"+\u0545\n+\x03+\x03+\x03+\x05+\u054A\n+\x03+\x05+\u054D\n+\x03+\x03+\x05"+
		"+\u0551\n+\x03+\x05+\u0554\n+\x03+\x03+\x05+\u0558\n+\x03+\x05+\u055B"+
		"\n+\x03,\x03,\x03,\x03,\x07,\u0561\n,\f,\x0E,\u0564\v,\x03-\x03-\x03-"+
		"\x05-\u0569\n-\x03-\x03-\x03-\x05-\u056E\n-\x07-\u0570\n-\f-\x0E-\u0573"+
		"\v-\x03-\x03-\x03.\x03.\x03.\x05.\u057A\n.\x03.\x03.\x05.\u057E\n.\x03"+
		"/\x03/\x03/\x07/\u0583\n/\f/\x0E/\u0586\v/\x030\x030\x030\x050\u058B\n"+
		"0\x030\x030\x050\u058F\n0\x031\x031\x031\x071\u0594\n1\f1\x0E1\u0597\v"+
		"1\x032\x032\x032\x032\x072\u059D\n2\f2\x0E2\u05A0\v2\x033\x033\x033\x03"+
		"3\x034\x034\x034\x054\u05A9\n4\x035\x035\x035\x035\x035\x055\u05B0\n5"+
		"\x035\x035\x035\x035\x035\x055\u05B7\n5\x036\x036\x056\u05BB\n6\x036\x05"+
		"6\u05BE\n6\x036\x056\u05C1\n6\x036\x036\x036\x036\x076\u05C7\n6\f6\x0E"+
		"6\u05CA\v6\x056\u05CC\n6\x036\x036\x036\x056\u05D1\n6\x036\x056\u05D4"+
		"\n6\x036\x036\x036\x056\u05D9\n6\x036\x056\u05DC\n6\x037\x037\x057\u05E0"+
		"\n7\x037\x057\u05E3\n7\x037\x057\u05E6\n7\x037\x037\x037\x037\x077\u05EC"+
		"\n7\f7\x0E7\u05EF\v7\x057\u05F1\n7\x037\x037\x037\x057\u05F6\n7\x037\x05"+
		"7\u05F9\n7\x037\x037\x037\x057\u05FE\n7\x037\x057\u0601\n7\x038\x038\x03"+
		"8\x038\x078\u0607\n8\f8\x0E8\u060A\v8\x039\x039\x079\u060E\n9\f9\x0E9"+
		"\u0611\v9\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x05<\u061C\n<\x03"+
		"<\x05<\u061F\n<\x03<\x03<\x05<\u0623\n<\x03<\x05<\u0626\n<\x03=\x03=\x03"+
		">\x03>\x03?\x03?\x03?\x03?\x07?\u0630\n?\f?\x0E?\u0633\v?\x03?\x03?\x03"+
		"@\x03@\x03@\x03@\x07@\u063B\n@\f@\x0E@\u063E\v@\x03@\x03@\x03A\x03A\x05"+
		"A\u0644\nA\x03A\x03A\x03A\x05A\u0649\nA\x07A\u064B\nA\fA\x0EA\u064E\v"+
		"A\x03B\x03B\x03B\x05B\u0653\nB\x03B\x03B\x05B\u0657\nB\x03C\x03C\x03C"+
		"\x03C\x05C\u065D\nC\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x05E\u0666\nE\x03"+
		"F\x03F\x03F\x03F\x05F\u066C\nF\x03G\x03G\x03G\x03G\x05G\u0672\nG\x03H"+
		"\x03H\x03H\x03H\x03H\x05H\u0679\nH\x03I\x03I\x03I\x03I\x03I\x05I\u0680"+
		"\nI\x03J\x03J\x05J\u0684\nJ\x03K\x03K\x03K\x02\x02\x02L\x02\x02\x04\x02"+
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18"+
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02"+
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02"+
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02"+
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82"+
		"\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94"+
		"\x02\x02\x10\x04\x02\x07\x07{{\x03\x02\n\x10\x03\x02\x14\x16\x03\x02\x18"+
		"\x1A\x03\x02\x1D\"\x04\x02\x13\x13##\x03\x02$@\x04\x02UW}~\x06\x02((-"+
		"-UW}~\x04\x02cc||\x03\x02fg\x03\x02im\x03\x02ns\x04\x02uvxz\u0783\x02"+
		"\x97\x03\x02\x02\x02\x04\xA5\x03\x02\x02\x02\x06\xB3\x03\x02\x02\x02\b"+
		"\xC1\x03\x02\x02\x02\n\xE5\x03\x02\x02\x02\f\xEE\x03\x02\x02\x02\x0E\xF9"+
		"\x03\x02\x02\x02\x10\u012D\x03\x02\x02\x02\x12\u0135\x03\x02\x02\x02\x14"+
		"\u0137\x03\x02\x02\x02\x16\u013C\x03\x02\x02\x02\x18\u0143\x03\x02\x02"+
		"\x02\x1A\u0145\x03\x02\x02\x02\x1C\u014A\x03\x02\x02\x02\x1E\u014E\x03"+
		"\x02\x02\x02 \u0153\x03\x02\x02\x02\"\u0158\x03\x02\x02\x02$\u015F\x03"+
		"\x02\x02\x02&\u0166\x03\x02\x02\x02(\u0169\x03\x02\x02\x02*\u026A\x03"+
		"\x02\x02\x02,\u0367\x03\x02\x02\x02.\u0369\x03\x02\x02\x020\u036D\x03"+
		"\x02\x02\x022\u0386\x03\x02\x02\x024\u039A\x03\x02\x02\x026\u03A0\x03"+
		"\x02\x02\x028\u03B6\x03\x02\x02\x02:\u03D8\x03\x02\x02\x02<\u03E6\x03"+
		"\x02\x02\x02>\u03EF\x03\x02\x02\x02@\u03F8\x03\x02\x02\x02B\u03FD\x03"+
		"\x02\x02\x02D\u0402\x03\x02\x02\x02F\u0404\x03\x02\x02\x02H\u040B\x03"+
		"\x02\x02\x02J\u0412\x03\x02\x02\x02L\u041D\x03\x02\x02\x02N\u0420\x03"+
		"\x02\x02\x02P\u0423\x03\x02\x02\x02R\u04BF\x03\x02\x02\x02T\u055A\x03"+
		"\x02\x02\x02V\u055C\x03\x02\x02\x02X\u0565\x03\x02\x02\x02Z\u0576\x03"+
		"\x02\x02\x02\\\u057F\x03\x02\x02\x02^\u0587\x03\x02\x02\x02`\u0590\x03"+
		"\x02\x02\x02b\u0598\x03\x02\x02\x02d\u05A1\x03\x02\x02\x02f\u05A5\x03"+
		"\x02\x02\x02h\u05B6\x03\x02\x02\x02j\u05B8\x03\x02\x02\x02l\u05DD\x03"+
		"\x02\x02\x02n\u0602\x03\x02\x02\x02p\u060B\x03\x02\x02\x02r\u0612\x03"+
		"\x02\x02\x02t\u0615\x03\x02\x02\x02v\u0618\x03\x02\x02\x02x\u0627\x03"+
		"\x02\x02\x02z\u0629\x03\x02\x02\x02|\u062B\x03\x02\x02\x02~\u0636\x03"+
		"\x02\x02\x02\x80\u0643\x03\x02\x02\x02\x82\u064F\x03\x02\x02\x02\x84\u065C"+
		"\x03\x02\x02\x02\x86\u065E\x03\x02\x02\x02\x88\u0660\x03\x02\x02\x02\x8A"+
		"\u066B\x03\x02\x02\x02\x8C\u0671\x03\x02\x02\x02\x8E\u0678\x03\x02\x02"+
		"\x02\x90\u067F\x03\x02\x02\x02\x92\u0683\x03\x02\x02\x02\x94\u0685\x03"+
		"\x02\x02\x02\x96\x98\x07z\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03"+
		"\x02\x02\x02\x98\x9C\x03\x02\x02\x02\x99\x9B\x05\x04\x03\x02\x9A\x99\x03"+
		"\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03"+
		"\x02\x02\x02\x9D\xA2\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA1\x05"+
		"\b\x05\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03"+
		"\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x03\x03\x02\x02\x02\xA4\xA2\x03"+
		"\x02\x02\x02\xA5\xA9\x07\x03\x02\x02\xA6\xA7\x05\x94K\x02\xA7\xA8\x07"+
		"\x04\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA6\x03\x02\x02\x02\xA9\xAA\x03"+
		"\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xAE\x07z\x02\x02\xAC\xAE\x05"+
		"\x06\x04\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03"+
		"\x02\x02\x02\xAF\xB0\x07\x05\x02\x02\xB0\xB2\x05$\x13\x02\xB1\xAF\x03"+
		"\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x05\x03\x02\x02\x02\xB3\xB6\x07"+
		"\x06\x02\x02\xB4\xB7\x05\x94K\x02\xB5\xB7\x07z\x02\x02\xB6\xB4\x03\x02"+
		"\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x05|"+
		"?\x02\xB9\xBB\t\x02\x02\x02\xBA\xBC\x05\x80A\x02\xBB\xBA\x03\x02\x02\x02"+
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x07\b\x02\x02"+
		"\xBE\xC0\x07\t\x02\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02"+
		"\xC0\x07\x03\x02\x02\x02\xC1\xCD\t\x03\x02\x02\xC2\xC3\x07\x11\x02\x02"+
		"\xC3\xC8\x05\x94K\x02\xC4\xC5\x07\x12\x02\x02\xC5\xC7\x05\x94K\x02\xC6"+
		"\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8"+
		"\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB"+
		"\xCC\x07\x11\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xC2\x03\x02\x02\x02\xCD"+
		"\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xD1\x07\x06\x02\x02\xD0"+
		"\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2"+
		"\xD4\x05z>\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5"+
		"\x03\x02\x02\x02\xD5\xD7\x05\x94K\x02\xD6\xD8\x05~@\x02\xD7\xD6\x03\x02"+
		"\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xDA\x07\x13"+
		"\x02\x02\xDA\xDC\x05f4\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02"+
		"\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDF\x07z\x02\x02\xDE\xDD\x03\x02\x02"+
		"\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x05\n\x06"+
		"\x02\xE1\t\x03\x02\x02\x02\xE2\xE4\x05\f\x07\x02\xE3\xE2\x03\x02\x02\x02"+
		"\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02"+
		"\xE6\xEB\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x05\x0E\b\x02"+
		"\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02"+
		"\xEB\xEC\x03\x02\x02\x02\xEC\v\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02"+
		"\xEE\xEF\t\x04\x02\x02\xEF\xF0\x05\x94K\x02\xF0\xF1\x07\x17\x02\x02\xF1"+
		"\xF4\x05f";
	private static readonly _serializedATNSegment1: string =
		"4\x02\xF2\xF3\x07\x04\x02\x02\xF3\xF5\x05$\x13\x02\xF4\xF2\x03\x02\x02"+
		"\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF8\x07z\x02"+
		"\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\r\x03\x02\x02"+
		"\x02\xF9\u0105\t\x05\x02\x02\xFA\xFB\x07\x11\x02\x02\xFB\u0100\x05\x94"+
		"K\x02\xFC\xFD\x07\x12\x02\x02\xFD\xFF\x05\x94K\x02\xFE\xFC\x03\x02\x02"+
		"\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03"+
		"\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103"+
		"\u0104\x07\x11\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\xFA\x03\x02\x02"+
		"\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u010A"+
		"\x05z>\x02\u0108\u010A\x07\x06\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109"+
		"\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02"+
		"\x02\x02\u010B\u010D\x05\x94K\x02\u010C\u010E\x05~@\x02\u010D\u010C\x03"+
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F"+
		"\u0111\t\x02\x02\x02\u0110\u0112\x05\x80A\x02\u0111\u0110\x03\x02\x02"+
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0116"+
		"\x07\b\x02\x02\u0114\u0115\x07\x17\x02\x02\u0115\u0117\x05f4\x02\u0116"+
		"\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02"+
		"\x02\x02\u0118\u011A\x07\t\x02\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A"+
		"\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\u011D\x07z\x02\x02"+
		"\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0120\x03"+
		"\x02\x02\x02\u011E\u011F\x07\x1B\x02\x02\u011F\u0121\x05\x12\n\x02\u0120"+
		"\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\x0F\x03\x02\x02"+
		"\x02\u0122\u0123\x07\x11\x02\x02\u0123\u0128\x05\x94K\x02\u0124\u0125"+
		"\x07\x12\x02\x02\u0125\u0127\x05\x94K\x02\u0126\u0124\x03\x02\x02\x02"+
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03"+
		"\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B"+
		"\u012C\x07\x11\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u0122\x03\x02"+
		"\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F"+
		"\u0132\x05\x14\v\x02\u0130\u0132\x05\x1C\x0F\x02\u0131\u012F\x03\x02\x02"+
		"\x02\u0131\u0130\x03\x02\x02\x02\u0132\x11\x03\x02\x02\x02\u0133\u0136"+
		"\x05\x14\v\x02\u0134\u0136\x05\x1C\x0F\x02\u0135\u0133\x03\x02\x02\x02"+
		"\u0135\u0134\x03\x02\x02\x02\u0136\x13\x03\x02\x02\x02\u0137\u013A\x05"+
		" \x11\x02\u0138\u013B\x05\x1A\x0E\x02\u0139\u013B\x05\x18\r\x02\u013A"+
		"\u0138\x03\x02\x02\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02"+
		"\x02\x02\u013B\x15\x03\x02\x02\x02\u013C\u013F\x05\x1E\x10\x02\u013D\u0140"+
		"\x05\x1A\x0E\x02\u013E\u0140\x05\x18\r\x02\u013F\u013D\x03\x02\x02\x02"+
		"\u013F\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\x17\x03"+
		"\x02\x02\x02\u0141\u0144\x05\x16\f\x02\u0142\u0144\x05\x1C\x0F\x02\u0143"+
		"\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144\x19\x03\x02\x02"+
		"\x02\u0145\u0148\x07\x1C\x02\x02\u0146\u0149\x05\x14\v\x02\u0147\u0149"+
		"\x05\x1C\x0F\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02"+
		"\u0149\x1B\x03\x02\x02\x02\u014A\u014C\t\x06\x02\x02\u014B\u014D\x05\x12"+
		"\n\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\x1D"+
		"\x03\x02\x02\x02\u014E\u0151\x05\"\x12\x02\u014F\u0150\x07\x04\x02\x02"+
		"\u0150\u0152\x05 \x11\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03"+
		"\x02\x02\x02\u0152\x1F\x03\x02\x02\x02\u0153\u0156\x05$\x13\x02\u0154"+
		"\u0155\x07\x04\x02\x02\u0155\u0157\x05 \x11\x02\u0156\u0154\x03\x02\x02"+
		"\x02\u0156\u0157\x03\x02\x02\x02\u0157!\x03\x02\x02\x02\u0158\u015C\x05"+
		"*\x16\x02\u0159\u015B\x05\x8AF\x02\u015A\u0159\x03\x02\x02\x02\u015B\u015E"+
		"\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02"+
		"\u015D#\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0163\x05,\x17"+
		"\x02\u0160\u0162\x05\x8CG\x02\u0161\u0160\x03\x02\x02\x02\u0162\u0165"+
		"\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02"+
		"\u0164%\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0167\t\x07"+
		"\x02\x02\u0167\u0168\x05,\x17\x02\u0168\'\x03\x02\x02\x02\u0169\u016B"+
		"\t\b\x02\x02\u016A\u016C\x07\t\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B"+
		"\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x05,\x17"+
		"\x02\u016E)\x03\x02\x02\x02\u016F\u017B\x07\x05\x02\x02\u0170\u0171\x07"+
		"\x11\x02\x02\u0171\u0176\x05\x94K\x02\u0172\u0173\x07\x12\x02\x02\u0173"+
		"\u0175\x05\x94K\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02"+
		"\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179"+
		"\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x07\x11\x02\x02"+
		"\u017A\u017C\x03\x02\x02\x02\u017B\u0170\x03\x02\x02\x02\u017B\u017C\x03"+
		"\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x05\x12\n\x02\u017E"+
		"\u017F\x07A\x02\x02\u017F\u0183\x05\x12\n\x02\u0180\u0184\x058\x1D\x02"+
		"\u0181\u0182\x07B\x02\x02\u0182\u0184\x05\x10\t\x02\u0183\u0180\x03\x02"+
		"\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184"+
		"\u0185\x03\x02\x02\x02\u0185\u0186\x07C\x02\x02\u0186\u026B\x03\x02\x02"+
		"\x02\u0187\u0193\x07D\x02\x02\u0188\u0189\x07\x11\x02\x02\u0189\u018E"+
		"\x05\x94K\x02\u018A\u018B\x07\x12\x02\x02\u018B\u018D\x05\x94K\x02\u018C"+
		"\u018A\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02"+
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190"+
		"\u018E\x03\x02\x02\x02\u0191\u0192\x07\x11\x02\x02\u0192\u0194\x03\x02"+
		"\x02\x02\u0193\u0188\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194"+
		"\u0195\x03\x02\x02\x02\u0195\u0196\x05$\x13\x02\u0196\u0197\x07A\x02\x02"+
		"\u0197\u019B\x05\x12\n\x02\u0198\u019C\x056\x1C\x02\u0199\u019A\x07B\x02"+
		"\x02\u019A\u019C\x05\x10\t\x02\u019B\u0198\x03\x02\x02\x02\u019B\u0199"+
		"\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02"+
		"\u019D\u019E\x07C\x02\x02\u019E\u026B\x03\x02\x02\x02\u019F\u01AB\x07"+
		"E\x02\x02\u01A0\u01A1\x07\x11\x02\x02\u01A1\u01A6\x05\x94K\x02\u01A2\u01A3"+
		"\x07\x12\x02\x02\u01A3\u01A5\x05\x94K\x02\u01A4\u01A2\x03\x02\x02\x02"+
		"\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03"+
		"\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9"+
		"\u01AA\x07\x11\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A0\x03\x02"+
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD"+
		"\u01B1\x054\x1B\x02\u01AE\u01B2\x052\x1A\x02\u01AF\u01B0\x07B\x02\x02"+
		"\u01B0\u01B2\x05\x10\t\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01AF\x03"+
		"\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3"+
		"\u01B4\x07C\x02\x02\u01B4\u026B\x03\x02\x02\x02\u01B5\u01C1\x07F\x02\x02"+
		"\u01B6\u01B7\x07\x11\x02\x02\u01B7\u01BC\x05\x94K\x02\u01B8\u01B9\x07"+
		"\x12\x02\x02\u01B9\u01BB\x05\x94K\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB"+
		"\u01BE\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02"+
		"\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF"+
		"\u01C0\x07\x11\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B6\x03\x02"+
		"\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3"+
		"\u01C7\x05\x12\n\x02\u01C4\u01C6\x050\x19\x02\u01C5\u01C4\x03\x02\x02"+
		"\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8"+
		"\x03\x02\x02\x02\u01C8\u01CC\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02"+
		"\u01CA\u01CB\x07B\x02\x02\u01CB\u01CD\x05\x10\t\x02\u01CC\u01CA\x03\x02"+
		"\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE"+
		"\u01CF\x07C\x02\x02\u01CF\u026B\x03\x02\x02\x02\u01D0\u01DC\x07G\x02\x02"+
		"\u01D1\u01D2\x07\x11\x02\x02\u01D2\u01D7\x05\x94K\x02\u01D3\u01D4\x07"+
		"\x12\x02\x02\u01D4\u01D6\x05\x94K\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6"+
		"\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02"+
		"\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA"+
		"\u01DB\x07\x11\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01D1\x03\x02"+
		"\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE"+
		"\u01DF\x05\x12\n\x02\u01DF\u01E0\x07H\x02\x02\u01E0\u01E3\x05\x12\n\x02"+
		"\u01E1\u01E2\x07B\x02\x02\u01E2\u01E4\x05\x10\t\x02\u01E3\u01E1\x03\x02"+
		"\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5"+
		"\u01E6\x07C\x02\x02\u01E6\u026B\x03\x02\x02\x02\u01E7\u01F3\x07I\x02\x02"+
		"\u01E8\u01E9\x07\x11\x02\x02\u01E9\u01EE\x05\x94K\x02\u01EA\u01EB\x07"+
		"\x12\x02\x02\u01EB\u01ED\x05\x94K\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED"+
		"\u01F0\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02"+
		"\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1"+
		"\u01F2\x07\x11\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01E8\x03\x02"+
		"\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5"+
		"\u01F6\x05\x12\n\x02\u01F6\u01F7\x07J\x02\x02\u01F7\u01FA\x05\x10\t\x02"+
		"\u01F8\u01F9\x07B\x02\x02\u01F9\u01FB\x05\x10\t\x02\u01FA\u01F8\x03\x02"+
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC"+
		"\u01FD\x07C\x02\x02\u01FD\u026B\x03\x02\x02\x02\u01FE\u020A\x07K\x02\x02"+
		"\u01FF\u0200\x07\x11\x02\x02\u0200\u0205\x05\x94K\x02\u0201\u0202\x07"+
		"\x12\x02\x02\u0202\u0204\x05\x94K\x02\u0203\u0201\x03\x02\x02\x02\u0204"+
		"\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02"+
		"\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208"+
		"\u0209\x07\x11\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u01FF\x03\x02"+
		"\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C"+
		"\u020D\x05:\x1E\x02\u020D\u020E\x07L\x02\x02\u020E\u020F\x05\x12\n\x02"+
		"\u020F\u0210\x07H\x02\x02\u0210\u0213\x05\x12\n\x02\u0211\u0212\x07B\x02"+
		"\x02\u0212\u0214\x05\x10\t\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214"+
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x07C\x02\x02"+
		"\u0216\u026B\x03\x02\x02\x02\u0217\u0223\x07M\x02\x02\u0218\u0219\x07"+
		"\x11\x02\x02\u0219\u021E\x05\x94K\x02\u021A\u021B\x07\x12\x02\x02\u021B"+
		"\u021D\x05\x94K\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0220\x03\x02\x02"+
		"\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221"+
		"\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x07\x11\x02\x02"+
		"\u0222\u0224\x03\x02\x02\x02\u0223\u0218\x03\x02\x02\x02\u0223\u0224\x03"+
		"\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u022A\x05.\x18\x02\u0226"+
		"\u0227\x07\x12\x02\x02\u0227\u0229\x05.\x18\x02\u0228\u0226\x03\x02\x02"+
		"\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B"+
		"\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02"+
		"\u022D\u022E\x07H\x02\x02\u022E\u0231\x05\x12\n\x02\u022F\u0230\x07B\x02"+
		"\x02\u0230\u0232\x05\x10\t\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232"+
		"\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x07C\x02\x02"+
		"\u0234\u026B\x03\x02\x02\x02\u0235\u0241\x07N\x02\x02\u0236\u0237\x07"+
		"\x11\x02\x02\u0237\u023C\x05\x94K\x02\u0238\u0239\x07\x12\x02\x02\u0239"+
		"\u023B\x05\x94K\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023E\x03\x02\x02"+
		"\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F"+
		"\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0240\x07\x11\x02\x02"+
		"\u0240\u0242\x03\x02\x02\x02\u0241\u0236\x03\x02\x02\x02\u0241\u0242\x03"+
		"\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0246\x05\x12\n\x02\u0244"+
		"\u0245\x07B\x02\x02\u0245\u0247\x05\x10\t\x02\u0246\u0244\x03\x02\x02"+
		"\x02\u0246\u0247\x03\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248\u0249"+
		"\x07A\x02\x02\u0249\u024B\x05\x10\t\x02\u024A\u0248\x03\x02\x02\x02\u024A"+
		"\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x07C\x02"+
		"\x02\u024D\u026B\x03\x02\x02\x02\u024E\u025A\x07O\x02\x02\u024F\u0250"+
		"\x07\x11\x02\x02\u0250\u0255\x05\x94K\x02\u0251\u0252\x07\x12\x02\x02"+
		"\u0252\u0254\x05\x94K\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257\x03"+
		"\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256"+
		"\u0258\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0258\u0259\x07\x11"+
		"\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A\u024F\x03\x02\x02\x02\u025A"+
		"\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025E\x05z>\x02"+
		"\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03"+
		"\x02\x02\x02\u025F\u0260\x05\x12\n\x02\u0260\u0261\x07C\x02\x02\u0261"+
		"\u026B\x03\x02\x02\x02\u0262\u0264\x07P\x02\x02\u0263\u0265\x05z>\x02"+
		"\u0264\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0266\x03"+
		"\x02\x02\x02\u0266\u026B\x05,\x17\x02\u0267\u026B\x05> \x02\u0268\u0269"+
		"\x07Q\x02\x02\u0269\u026B\x05H%\x02\u026A\u016F\x03\x02\x02\x02\u026A"+
		"\u0187\x03\x02\x02\x02\u026A\u019F\x03\x02\x02\x02\u026A\u01B5\x03\x02"+
		"\x02\x02\u026A\u01D0\x03\x02\x02\x02\u026A\u01E7\x03\x02\x02\x02\u026A"+
		"\u01FE\x03\x02\x02\x02\u026A\u0217\x03\x02\x02\x02\u026A\u0235\x03\x02"+
		"\x02\x02\u026A\u024E\x03\x02\x02\x02\u026A\u0262\x03\x02\x02\x02\u026A"+
		"\u0267\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B+\x03\x02\x02"+
		"\x02\u026C\u0278\x07\x05\x02\x02\u026D\u026E\x07\x11\x02\x02\u026E\u0273"+
		"\x05\x94K\x02\u026F\u0270\x07\x12\x02\x02\u0270\u0272\x05\x94K\x02\u0271"+
		"\u026F\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02"+
		"\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275"+
		"\u0273\x03\x02\x02\x02\u0276\u0277\x07\x11\x02\x02\u0277\u0279\x03\x02"+
		"\x02\x02\u0278\u026D\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279"+
		"\u027A\x03\x02\x02\x02\u027A\u027B\x05\x12\n\x02\u027B\u027C\x07A\x02"+
		"\x02\u027C\u0280\x05\x12\n\x02\u027D\u0281\x058\x1D\x02\u027E\u027F\x07"+
		"B\x02\x02\u027F\u0281\x05\x10\t\x02\u0280\u027D\x03\x02\x02\x02\u0280"+
		"\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x03\x02"+
		"\x02\x02\u0282\u0283\x07C\x02\x02\u0283\u0368\x03\x02\x02\x02\u0284\u0290"+
		"\x07D\x02\x02\u0285\u0286\x07\x11\x02\x02\u0286\u028B\x05\x94K\x02\u0287"+
		"\u0288\x07\x12\x02\x02\u0288\u028A\x05\x94K\x02\u0289\u0287\x03\x02\x02"+
		"\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C"+
		"\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02"+
		"\u028E\u028F\x07\x11\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u0285\x03"+
		"\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292"+
		"\u0293\x05$\x13\x02\u0293\u0294\x07A\x02\x02\u0294\u0298\x05\x12\n\x02"+
		"\u0295\u0299\x056\x1C\x02\u0296\u0297\x07B\x02\x02\u0297\u0299\x05\x10"+
		"\t\x02\u0298\u0295\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299"+
		"\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x07C\x02\x02"+
		"\u029B\u0368\x03\x02\x02\x02\u029C\u02A8\x07E\x02\x02\u029D\u029E\x07"+
		"\x11\x02\x02\u029E\u02A3\x05\x94K\x02\u029F\u02A0\x07\x12\x02\x02\u02A0"+
		"\u02A2\x05\x94K\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02"+
		"\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A6"+
		"\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6\u02A7\x07\x11\x02\x02"+
		"\u02A7\u02A9\x03\x02\x02\x02\u02A8\u029D\x03\x02\x02\x02\u02A8\u02A9\x03"+
		"\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AE\x054\x1B\x02\u02AB"+
		"\u02AF\x052\x1A\x02\u02AC\u02AD\x07B\x02\x02\u02AD\u02AF\x05\x10\t\x02"+
		"\u02AE\u02AB\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03"+
		"\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x07C\x02\x02\u02B1"+
		"\u0368\x03\x02\x02\x02\u02B2\u02BE\x07F\x02\x02\u02B3\u02B4\x07\x11\x02"+
		"\x02\u02B4\u02B9\x05\x94K\x02\u02B5\u02B6\x07\x12\x02\x02\u02B6\u02B8"+
		"\x05\x94K\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02"+
		"\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x03"+
		"\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02BD\x07\x11\x02\x02\u02BD"+
		"\u02BF\x03\x02\x02\x02\u02BE\u02B3\x03\x02\x02\x02\u02BE\u02BF\x03\x02"+
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C4\x05\x12\n\x02\u02C1\u02C3"+
		"\x050\x19\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02"+
		"\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C9\x03"+
		"\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x07B\x02\x02\u02C8"+
		"\u02CA\x05\x10\t\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02"+
		"\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x07C\x02\x02\u02CC\u0368"+
		"\x03\x02\x02\x02\u02CD\u02D9\x07G\x02\x02\u02CE\u02CF\x07\x11\x02\x02"+
		"\u02CF\u02D4\x05\x94K\x02\u02D0\u02D1\x07\x12\x02\x02\u02D1\u02D3\x05"+
		"\x94K\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4"+
		"\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7\x03\x02"+
		"\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D7\u02D8\x07\x11\x02\x02\u02D8"+
		"\u02DA\x03\x02\x02\x02\u02D9\u02CE\x03\x02\x02\x02\u02D9\u02DA\x03\x02"+
		"\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x05\x12\n\x02\u02DC\u02DD"+
		"\x07H\x02\x02\u02DD\u02E0\x05\x12\n\x02\u02DE\u02DF\x07B\x02\x02\u02DF"+
		"\u02E1\x05\x10\t\x02\u02E0\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02"+
		"\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x07C\x02\x02\u02E3\u0368"+
		"\x03\x02\x02\x02\u02E4\u02F0\x07I\x02\x02\u02E5\u02E6\x07\x11\x02\x02"+
		"\u02E6\u02EB\x05\x94K\x02\u02E7\u02E8\x07\x12\x02\x02\u02E8\u02EA\x05"+
		"\x94K\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB"+
		"\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02"+
		"\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02EF\x07\x11\x02\x02\u02EF"+
		"\u02F1\x03\x02\x02\x02\u02F0\u02E5\x03\x02\x02\x02\u02F0\u02F1\x03\x02"+
		"\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x05\x12\n\x02\u02F3\u02F4"+
		"\x07J\x02\x02\u02F4\u02F7\x05\x10\t\x02\u02F5\u02F6\x07B\x02\x02\u02F6"+
		"\u02F8\x05\x10\t\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02"+
		"\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x07C\x02\x02\u02FA\u0368"+
		"\x03\x02\x02\x02\u02FB\u0307\x07K\x02\x02\u02FC\u02FD\x07\x11\x02\x02"+
		"\u02FD\u0302\x05\x94K\x02\u02FE\u02FF\x07\x12\x02\x02\u02FF\u0301\x05"+
		"\x94K\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302"+
		"\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0305\x03\x02"+
		"\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0306\x07\x11\x02\x02\u0306"+
		"\u0308\x03\x02\x02\x02\u0307\u02FC\x03\x02\x02\x02\u0307\u0308\x03\x02"+
		"\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x05:\x1E\x02\u030A\u030B"+
		"\x07L\x02\x02\u030B\u030C\x05\x12\n\x02\u030C\u030D\x07H\x02\x02\u030D"+
		"\u0310\x05\x12\n\x02\u030E\u030F\x07B\x02\x02\u030F\u0311\x05\x10\t\x02"+
		"\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03"+
		"\x02\x02\x02\u0312\u0313\x07C\x02\x02\u0313\u0368\x03\x02\x02\x02\u0314"+
		"\u0320\x07M\x02\x02\u0315\u0316\x07\x11\x02\x02\u0316\u031B\x05\x94K\x02"+
		"\u0317\u0318\x07\x12\x02\x02\u0318\u031A\x05\x94K\x02\u0319\u0317\x03"+
		"\x02\x02\x02\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B"+
		"\u031C\x03\x02\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u031B\x03\x02"+
		"\x02\x02\u031E\u031F\x07\x11\x02\x02\u031F\u0321\x03\x02\x02\x02\u0320"+
		"\u0315\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03\x02"+
		"\x02\x02\u0322\u0327\x05.\x18\x02\u0323\u0324\x07\x12\x02\x02\u0324\u0326"+
		"\x05.\x18\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02"+
		"\u0327\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032A\x03"+
		"\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A\u032B\x07H\x02\x02\u032B"+
		"\u032E\x05\x12\n\x02\u032C\u032D\x07B\x02\x02\u032D\u032F\x05\x10\t\x02"+
		"\u032E\u032C\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x03"+
		"\x02\x02\x02\u0330\u0331\x07C\x02\x02\u0331\u0368\x03\x02\x02\x02\u0332"+
		"\u033E\x07N\x02\x02\u0333\u0334\x07\x11\x02\x02\u0334\u0339\x05\x94K\x02"+
		"\u0335\u0336\x07\x12\x02\x02\u0336\u0338\x05\x94K\x02\u0337\u0335\x03"+
		"\x02\x02\x02\u0338\u033B\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339"+
		"\u033A\x03\x02\x02\x02\u033A\u033C\x03\x02\x02\x02\u033B\u0339\x03\x02"+
		"\x02\x02\u033C\u033D\x07\x11\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E"+
		"\u0333\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0340\x03\x02"+
		"\x02\x02\u0340\u0343\x05\x12\n\x02\u0341\u0342\x07B\x02\x02\u0342\u0344"+
		"\x05\x10\t\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02"+
		"\u0344\u0347\x03\x02\x02\x02\u0345\u0346\x07A\x02\x02\u0346\u0348\x05"+
		"\x10\t\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348"+
		"\u0349\x03\x02\x02\x02\u0349\u034A\x07C\x02\x02\u034A\u0368\x03\x02\x02"+
		"\x02\u034B\u0357\x07O\x02\x02\u034C\u034D\x07\x11\x02\x02\u034D\u0352"+
		"\x05\x94K\x02\u034E\u034F\x07\x12\x02\x02\u034F\u0351\x05\x94K\x02\u0350"+
		"\u034E\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03\x02"+
		"\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354"+
		"\u0352\x03\x02\x02\x02\u0355\u0356\x07\x11\x02\x02\u0356\u0358\x03\x02"+
		"\x02\x02\u0357\u034C\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358"+
		"\u035A\x03\x02\x02\x02\u0359\u035B\x05z>\x02\u035A\u0359\x03\x02\x02\x02"+
		"\u035A\u035B\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x05"+
		"\x12\n\x02\u035D\u035E\x07C\x02\x02\u035E\u0368\x03\x02\x02\x02\u035F"+
		"\u0361\x07P\x02\x02\u0360\u0362\x05z>\x02\u0361\u0360\x03\x02\x02\x02"+
		"\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0368\x05"+
		",\x17\x02\u0364\u0368\x05@!\x02\u0365\u0366\x07Q\x02\x02\u0366\u0368\x05"+
		"H%\x02\u0367\u026C\x03\x02\x02\x02\u0367\u0284\x03\x02\x02\x02\u0367\u029C"+
		"\x03\x02\x02\x02\u0367\u02B2\x03\x02\x02\x02\u0367\u02CD\x03\x02\x02\x02"+
		"\u0367\u02E4\x03\x02\x02\x02\u0367\u02FB\x03\x02\x02\x02\u0367\u0314\x03"+
		"\x02\x02\x02\u0367\u0332\x03\x02\x02\x02\u0367\u034B\x03\x02\x02\x02\u0367"+
		"\u035F\x03\x02\x02\x02\u0367\u0364\x03\x02\x02\x02\u0367\u0365\x03\x02"+
		"\x02\x02\u0368-\x03\x02\x02\x02\u0369\u036A\x05:\x1E\x02\u036A\u036B\x07"+
		"\x04\x02\x02\u036B\u036C\x05\x12\n\x02\u036C/\x03\x02\x02\x02\u036D\u0379"+
		"\x07R\x02\x02\u036E\u036F\x07\x11\x02\x02\u036F\u0374\x05\x94K\x02\u0370"+
		"\u0371\x07\x12\x02\x02\u0371\u0373\x05\x94K\x02\u0372\u0370\x03\x02\x02"+
		"\x02\u0373\u0376\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0374\u0375"+
		"\x03\x02\x02\x02\u0375\u0377\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02"+
		"\u0377\u0378\x07\x11\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u036E\x03"+
		"\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B"+
		"\u037D\x05@!\x02\u037C\u037B\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02"+
		"\u037D\u0380\x03\x02\x02\x02\u037E\u037F\x07\x05\x02\x02\u037F\u0381\x05"+
		"\x12\n\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381"+
		"\u0384\x03\x02\x02\x02\u0382\u0383\x07\x1B\x02\x02\u0383\u0385\x05\x12"+
		"\n\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u03851"+
		"\x03\x02\x02\x02\u0386\u0392\x07S\x02\x02\u0387\u0388\x07\x11\x02\x02"+
		"\u0388\u038D\x05\x94K\x02\u0389\u038A\x07\x12\x02\x02\u038A\u038C\x05"+
		"\x94K\x02\u038B\u0389\x03\x02\x02\x02\u038C\u038F\x03\x02\x02\x02\u038D"+
		"\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u0390\x03\x02"+
		"\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0391\x07\x11\x02\x02\u0391"+
		"\u0393\x03\x02\x02\x02\u0392\u0387\x03\x02\x02\x02\u0392\u0393\x03\x02"+
		"\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0398\x054\x1B\x02\u0395\u0399"+
		"\x052\x1A\x02\u0396\u0397\x07B\x02\x02\u0397\u0399\x05\x10\t\x02\u0398"+
		"\u0395\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02"+
		"\x02\x02\u03993\x03\x02\x02\x02\u039A\u039B\x05f4\x02\u039B\u039C\x07"+
		"T\x02\x02\u039C\u039D\x05f4\x02\u039D\u039E\x07A\x02\x02\u039E\u039F\x05"+
		"\x12\n\x02\u039F5\x03\x02\x02\x02\u03A0\u03AC\x07S\x02\x02\u03A1\u03A2"+
		"\x07\x11\x02\x02\u03A2\u03A7\x05\x94K\x02\u03A3\u03A4\x07\x12\x02\x02"+
		"\u03A4\u03A6\x05\x94K\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A9\x03"+
		"\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8"+
		"\u03AA\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AB\x07\x11"+
		"\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u03AB\u03AD\x03\x02\x02\x02\u03AC\u03A1\x03\x02\x02\x02\u03AC\u03AD\x03"+
		"\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x05$\x13\x02\u03AF"+
		"\u03B0\x07A\x02\x02\u03B0\u03B4\x05\x12\n\x02\u03B1\u03B5\x056\x1C\x02"+
		"\u03B2\u03B3\x07B\x02\x02\u03B3\u03B5\x05\x10\t\x02\u03B4\u03B1\x03\x02"+
		"\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5"+
		"7\x03\x02\x02\x02\u03B6\u03C2\x07S\x02\x02\u03B7\u03B8\x07\x11\x02\x02"+
		"\u03B8\u03BD\x05\x94K\x02\u03B9\u03BA\x07\x12\x02\x02\u03BA\u03BC\x05"+
		"\x94K\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD"+
		"\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02"+
		"\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C1\x07\x11\x02\x02\u03C1"+
		"\u03C3\x03\x02\x02\x02\u03C2\u03B7\x03\x02\x02\x02\u03C2\u03C3\x03\x02"+
		"\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5\x05\x12\n\x02\u03C5\u03C6"+
		"\x07A\x02\x02\u03C6\u03CA\x05\x12\n\x02\u03C7\u03CB\x058\x1D\x02\u03C8"+
		"\u03C9\x07B\x02\x02\u03C9\u03CB\x05\x10\t\x02\u03CA\u03C7\x03\x02\x02"+
		"\x02\u03CA\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB9\x03"+
		"\x02\x02\x02\u03CC\u03D9\x05\x94K\x02\u03CD\u03CE\t\x02\x02\x02\u03CE"+
		"\u03D3\x05<\x1F\x02\u03CF\u03D0\x07\x12\x02\x02\u03D0\u03D2\x05<\x1F\x02"+
		"\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03"+
		"\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D6\x03\x02\x02\x02\u03D5"+
		"\u03D3\x03\x02\x02\x02\u03D6\u03D7\x07\b\x02\x02\u03D7\u03D9\x03\x02\x02"+
		"\x02\u03D8\u03CC\x03\x02\x02\x02\u03D8\u03CD\x03\x02\x02\x02\u03D9;\x03"+
		"\x02\x02\x02\u03DA\u03E7\x05\x94K\x02\u03DB\u03DC\t\x02\x02\x02\u03DC"+
		"\u03E1\x05<\x1F\x02\u03DD\u03DE\x07\x12\x02\x02\u03DE\u03E0\x05<\x1F\x02"+
		"\u03DF\u03DD\x03\x02\x02\x02\u03E0\u03E3\x03\x02\x02\x02\u03E1\u03DF\x03"+
		"\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E4\x03\x02\x02\x02\u03E3"+
		"\u03E1\x03\x02\x02\x02\u03E4\u03E5\x07\b\x02\x02\u03E5\u03E7\x03\x02\x02"+
		"\x02\u03E6\u03DA\x03\x02\x02\x02\u03E6\u03DB\x03\x02\x02\x02\u03E7=\x03"+
		"\x02\x02\x02\u03E8\u03E9\t\x04\x02\x02\u03E9\u03EC\x05\x94K\x02\u03EA"+
		"\u03EB\x07\x17\x02\x02\u03EB\u03ED\x05f4\x02\u03EC\u03EA\x03\x02\x02\x02"+
		"\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE\u03F0\x05"+
		"B\"\x02\u03EF\u03E8\x03\x02\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03F0"+
		"?\x03\x02\x02\x02\u03F1\u03F2\t\x04\x02\x02\u03F2\u03F5\x05\x94K\x02\u03F3"+
		"\u03F4\x07\x17\x02\x02\u03F4\u03F6\x05f4\x02\u03F5\u03F3\x03\x02\x02\x02"+
		"\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F9\x05"+
		"D#\x02\u03F8\u03F1\x03\x02\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9A"+
		"\x03\x02\x02\x02\u03FA\u03FB\t\t\x02\x02\u03FB\u03FE\x05D#\x02\u03FC\u03FE"+
		"\x05F$\x02\u03FD\u03FA\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE"+
		"C\x03\x02\x02\x02\u03FF\u0400\t\n\x02\x02\u0400\u0403\x05D#\x02\u0401"+
		"\u0403\x05H%\x02\u0402\u03FF\x03\x02\x02\x02\u0402\u0401\x03\x02\x02\x02"+
		"\u0403E\x03\x02\x02\x02\u0404\u0408\x05R*\x02\u0405\u0407\x05\x8EH\x02"+
		"\u0406\u0405\x03\x02\x02\x02\u0407\u040A\x03\x02\x02\x02\u0408\u0406\x03"+
		"\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409G\x03\x02\x02\x02\u040A"+
		"\u0408\x03\x02\x02\x02\u040B\u040F\x05T+\x02\u040C\u040E\x05\x90I\x02"+
		"\u040D\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03"+
		"\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410I\x03\x02\x02\x02\u0411"+
		"\u040F\x03\x02\x02\x02\u0412\u0414\x07\x07\x02\x02\u0413\u0415\x05`1\x02"+
		"\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x03"+
		"\x02\x02\x02\u0416\u0418\x05b2\x02\u0417\u0416\x03\x02\x02\x02\u0417\u0418"+
		"\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u041B\x07\b\x02\x02"+
		"\u041A\u041C\x07\t\x02\x02\u041B\u041A\x03\x02\x02\x02\u041B\u041C\x03"+
		"\x02\x02\x02\u041CK\x03\x02\x02\x02\u041D\u041E\x07X\x02\x02\u041E\u041F"+
		"\x05\x94K\x02\u041FM\x03\x02\x02\x02\u0420\u0421\x07Y\x02\x02\u0421\u0422"+
		"\x05\x94K\x02\u0422O\x03\x02\x02\x02\u0423\u0424\x07Z\x02\x02\u0424\u0425"+
		"\x05\x94K\x02\u0425Q\x03\x02\x02\x02\u0426\u04C0\x05\x94K\x02\u0427\u04C0"+
		"\x07[\x02\x02\u0428\u04C0\x05\x86D\x02\u0429\u042A\x07{\x02\x02\u042A"+
		"\u042C\x05\x12\n\x02\u042B\u042D\x05V,\x02\u042C\u042B\x03\x02\x02\x02"+
		"\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u042F\x07"+
		"\b\x02\x02\u042F\u04C0\x03\x02\x02\x02\u0430\u0435\x07|\x02\x02\u0431"+
		"\u0432\x07\\\x02\x02\u0432\u0433\x05f4\x02\u0433\u0434\x07\x17\x02\x02"+
		"\u0434\u0436\x03\x02\x02\x02\u0435\u0431\x03\x02\x02\x02\u0435\u0436\x03"+
		"\x02\x02\x02\u0436\u0438\x03\x02\x02\x02\u0437\u0439\x05\x12\n\x02\u0438"+
		"\u0437\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x03\x02"+
		"\x02\x02\u043A\u04C0\x07]\x02\x02\u043B\u0447\x07^\x02\x02\u043C\u043D"+
		"\x07\x11\x02\x02\u043D\u0442\x05\x94K\x02\u043E\u043F\x07\x12\x02\x02"+
		"\u043F\u0441\x05\x94K\x02\u0440\u043E\x03\x02\x02\x02\u0441\u0444\x03"+
		"\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443"+
		"\u0445\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0445\u0446\x07\x11"+
		"\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447\u043C\x03\x02\x02\x02\u0447"+
		"\u0448\x03\x02\x02\x02\u0448\u044A\x03\x02\x02\x02\u0449\u044B\x05z>\x02"+
		"\u044A\u0449\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044E\x03"+
		"\x02\x02\x02\u044C\u044D\x07\x13\x02\x02\u044D\u044F\x05f4\x02\u044E\u044C"+
		"\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02"+
		"\u0450\u0451\x05\n\x06\x02\u0451\u0452\x07C\x02\x02\u0452\u04C0\x03\x02"+
		"\x02\x02\u0453\u045F\x07_\x02\x02\u0454\u0455\x07\x11\x02\x02\u0455\u045A"+
		"\x05\x94K\x02\u0456\u0457\x07\x12\x02\x02\u0457\u0459\x05\x94K\x02\u0458"+
		"\u0456\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03\x02"+
		"\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C"+
		"\u045A\x03\x02\x02\x02\u045D\u045E\x07\x11\x02\x02\u045E\u0460\x03\x02"+
		"\x02\x02\u045F\u0454\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460"+
		"\u0462\x03\x02\x02\x02\u0461\u0463\x05z>\x02\u0462\u0461\x03\x02\x02\x02"+
		"\u0462\u0463\x03\x02\x02\x02\u0463\u0465\x03\x02\x02\x02\u0464\u0466\x05"+
		"\x94K\x02\u0465\u0464\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466"+
		"\u0468\x03\x02\x02\x02\u0467\u0469\x05~@\x02\u0468\u0467\x03\x02\x02\x02"+
		"\u0468\u0469\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046C\t"+
		"\x02\x02\x02\u046B\u046D\x05\\/\x02\u046C\u046B\x03\x02\x02\x02\u046C"+
		"\u046D\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u0470\x07\b\x02"+
		"\x02\u046F\u0471\x05X-\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471\x03"+
		"\x02\x02\x02\u0471\u0474\x03\x02\x02\x02\u0472\u0473\x07\x17\x02\x02\u0473"+
		"\u0475\x05f4\x02\u0474\u0472\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02"+
		"\u0475\u0477\x03\x02\x02\x02\u0476\u0478\x07\t\x02\x02\u0477\u0476\x03"+
		"\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479"+
		"\u047A\x07\x1B\x02\x02\u047A\u047B\x05\x12\n\x02\u047B\u047D\x07`\x02"+
		"\x02\u047C\u047E\x05z>\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03"+
		"\x02\x02\x02\u047E\u04C0\x03\x02\x02\x02\u047F\u048B\x07a\x02\x02\u0480"+
		"\u0481\x07\x11\x02\x02\u0481\u0486\x05\x94K\x02\u0482\u0483\x07\x12\x02"+
		"\x02\u0483\u0485\x05\x94K\x02\u0484\u0482\x03\x02\x02\x02\u0485\u0488"+
		"\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02"+
		"\u0487\u0489\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0489\u048A\x07"+
		"\x11\x02\x02\u048A\u048C\x03\x02\x02\x02\u048B\u0480\x03\x02\x02\x02\u048B"+
		"\u048C\x03\x02\x02\x02\u048C\u048E\x03\x02\x02\x02\u048D\u048F\x05z>\x02"+
		"\u048E\u048D\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F\u0491\x03"+
		"\x02\x02\x02\u0490\u0492\x05\x94K\x02\u0491\u0490\x03\x02\x02\x02\u0491"+
		"\u0492\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0495\x05~@\x02"+
		"\u0494\u0493\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x03"+
		"\x02\x02\x02\u0496\u0498\t\x02\x02\x02\u0497\u0499\x05\\/\x02\u0498\u0497"+
		"\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02"+
		"\u049A\u049C\x07\b\x02\x02\u049B\u049D\x05X-\x02\u049C\u049B\x03\x02\x02"+
		"\x02\u049C\u049D\x03\x02\x02\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049F"+
		"\x07\x17\x02\x02\u049F\u04A1\x05f4\x02\u04A0\u049E\x03\x02\x02\x02\u04A0"+
		"\u04A1\x03\x02\x02\x02\u04A1\u04A3\x03\x02\x02\x02\u04A2\u04A4\x07\t\x02"+
		"\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5"+
		"\x03\x02\x02\x02\u04A5\u04A6\x07\x1B\x02\x02\u04A6\u04A7\x05\x12\n\x02"+
		"\u04A7\u04A9\x07`\x02\x02\u04A8\u04AA\x05z>\x02\u04A9\u04A8\x03\x02\x02"+
		"\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04C0\x03\x02\x02\x02\u04AB\u04AE"+
		"\x07\x06\x02\x02\u04AC\u04AF\x05\x94K\x02\u04AD\u04AF\x07z\x02\x02\u04AE"+
		"\u04AC\x03\x02\x02\x02\u04AE\u04AD\x03\x02\x02\x02\u04AF\u04B1\x03\x02"+
		"\x02\x02\u04B0\u04B2\x05|?\x02\u04B1\u04B0\x03\x02\x02\x02\u04B1\u04B2"+
		"\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B5\t\x02\x02\x02"+
		"\u04B4\u04B6\x05`1\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6\x03\x02"+
		"\x02\x02\u04B6\u04B8\x03\x02\x02\x02\u04B7\u04B9\x05b2\x02\u04B8\u04B7"+
		"\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02"+
		"\u04BA\u04BC\x07\b\x02\x02\u04BB\u04BD\x07\t\x02\x02\u04BC\u04BB\x03\x02"+
		"\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE"+
		"\u04C0\x07b\x02\x02\u04BF\u0426\x03\x02\x02\x02\u04BF\u0427\x03\x02\x02"+
		"\x02\u04BF\u0428\x03\x02\x02\x02\u04BF\u0429\x03\x02\x02\x02\u04BF\u0430"+
		"\x03\x02\x02\x02\u04BF\u043B\x03\x02\x02\x02\u04BF\u0453\x03\x02\x02\x02"+
		"\u04BF\u047F\x03\x02\x02\x02\u04BF\u04AB\x03\x02\x02\x02\u04BF\u04BE\x03"+
		"\x02\x02\x02\u04C0S\x03\x02\x02\x02\u04C1\u055B\x05\x94K\x02\u04C2\u055B"+
		"\x07[\x02\x02\u04C3\u055B\x05\x86D\x02\u04C4\u04C5\t\x02\x02\x02\u04C5"+
		"\u04C7\x05\x12\n\x02\u04C6\u04C8\x05V,\x02\u04C7\u04C6\x03\x02\x02\x02"+
		"\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x07"+
		"\b\x02\x02\u04CA\u055B\x03\x02\x02\x02\u04CB\u04D0\t\v\x02\x02\u04CC\u04CD"+
		"\x07\\\x02\x02\u04CD\u04CE\x05f4\x02\u04CE\u04CF\x07\x17\x02\x02\u04CF"+
		"\u04D1\x03\x02\x02\x02\u04D0\u04CC\x03\x02\x02\x02\u04D0\u04D1\x03\x02"+
		"\x02\x02\u04D1\u04D3\x03\x02\x02\x02\u04D2\u04D4\x05\x12\n\x02\u04D3\u04D2"+
		"\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02"+
		"\u04D5\u055B\x07]\x02\x02\u04D6\u04E2\x07^\x02\x02\u04D7\u04D8\x07\x11"+
		"\x02\x02\u04D8\u04DD\x05\x94K\x02\u04D9\u04DA\x07\x12\x02\x02\u04DA\u04DC"+
		"\x05\x94K\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DF\x03\x02\x02\x02"+
		"\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03"+
		"\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04E0\u04E1\x07\x11\x02\x02\u04E1"+
		"\u04E3\x03\x02\x02\x02\u04E2\u04D7\x03\x02\x02\x02\u04E2\u04E3\x03\x02"+
		"\x02\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04E6\x05z>\x02\u04E5\u04E4"+
		"\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E9\x03\x02\x02\x02"+
		"\u04E7\u04E8\x07\x13\x02\x02\u04E8\u04EA\x05f4\x02\u04E9\u04E7\x03\x02"+
		"\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB"+
		"\u04EC\x05\n\x06\x02\u04EC\u04ED\x07C\x02\x02\u04ED\u055B\x03\x02\x02"+
		"\x02\u04EE\u04FA\x07_\x02\x02\u04EF\u04F0\x07\x11\x02\x02\u04F0\u04F5"+
		"\x05\x94K\x02\u04F1\u04F2\x07\x12\x02\x02\u04F2\u04F4\x05\x94K\x02\u04F3"+
		"\u04F1\x03\x02\x02\x02\u04F4\u04F7\x03\x02\x02\x02\u04F5\u04F3\x03\x02"+
		"\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F8\x03\x02\x02\x02\u04F7"+
		"\u04F5\x03\x02\x02\x02\u04F8\u04F9\x07\x11\x02\x02\u04F9\u04FB\x03\x02"+
		"\x02\x02\u04FA\u04EF\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB"+
		"\u04FD\x03\x02\x02\x02\u04FC\u04FE\x05z>\x02\u04FD\u04FC\x03\x02\x02\x02"+
		"\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0500\x03\x02\x02\x02\u04FF\u0501\x05"+
		"\x94K\x02\u0500\u04FF\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501"+
		"\u0503\x03\x02\x02\x02\u0502\u0504\x05~@\x02\u0503\u0502\x03\x02\x02\x02"+
		"\u0503\u0504\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0507\t"+
		"\x02\x02\x02\u0506\u0508\x05\\/\x02\u0507\u0506\x03\x02\x02\x02\u0507"+
		"\u0508\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050B\x07\b\x02"+
		"\x02\u050A\u050C\x05X-\x02\u050B\u050A\x03\x02\x02\x02\u050B\u050C\x03"+
		"\x02\x02\x02\u050C\u050F\x03\x02\x02\x02\u050D\u050E\x07\x17\x02\x02\u050E"+
		"\u0510\x05f4\x02\u050F\u050D\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02"+
		"\u0510\u0512\x03\x02\x02\x02\u0511\u0513\x07\t\x02\x02\u0512\u0511\x03"+
		"\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514"+
		"\u0515\x07\x1B\x02\x02\u0515\u0516\x05\x12\n\x02\u0516\u0518\x07`\x02"+
		"\x02\u0517\u0519\x05z>\x02\u0518\u0517\x03\x02\x02\x02\u0518\u0519\x03"+
		"\x02\x02\x02\u0519\u055B\x03\x02\x02\x02\u051A\u0526\x07a\x02\x02\u051B"+
		"\u051C\x07\x11\x02\x02\u051C\u0521\x05\x94K\x02\u051D\u051E\x07\x12\x02"+
		"\x02\u051E\u0520\x05\x94K\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0523"+
		"\x03\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02"+
		"\u0522\u0524\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0524\u0525\x07"+
		"\x11\x02\x02\u0525\u0527\x03\x02\x02\x02\u0526\u051B\x03\x02\x02\x02\u0526"+
		"\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u052A\x05z>\x02"+
		"\u0529\u0528\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052C\x03"+
		"\x02\x02\x02\u052B\u052D\x05\x94K\x02\u052C\u052B\x03\x02\x02\x02\u052C"+
		"\u052D\x03\x02\x02\x02\u052D\u052F\x03\x02\x02\x02\u052E\u0530\x05~@\x02"+
		"\u052F\u052E\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0531\x03"+
		"\x02\x02\x02\u0531\u0533\t\x02\x02\x02\u0532\u0534\x05\\/\x02\u0533\u0532"+
		"\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02"+
		"\u0535\u0537\x07\b\x02\x02\u0536\u0538\x05X-\x02\u0537\u0536\x03\x02\x02"+
		"\x02\u0537\u0538\x03\x02\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u053A"+
		"\x07\x17\x02\x02\u053A\u053C\x05f4\x02\u053B\u0539\x03\x02\x02\x02\u053B"+
		"\u053C\x03\x02\x02\x02\u053C\u053E\x03\x02\x02\x02\u053D\u053F\x07\t\x02"+
		"\x02\u053E\u053D\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F\u0540"+
		"\x03\x02\x02\x02\u0540\u0541\x07\x1B\x02\x02\u0541\u0542\x05\x12\n\x02"+
		"\u0542\u0544\x07`\x02\x02\u0543\u0545\x05z>\x02\u0544\u0543\x03\x02\x02"+
		"\x02\u0544\u0545\x03\x02\x02\x02\u0545\u055B\x03\x02\x02\x02\u0546\u0549"+
		"\x07\x06\x02\x02\u0547\u054A\x05\x94K\x02\u0548\u054A\x07z\x02\x02\u0549"+
		"\u0547\x03\x02\x02\x02\u0549\u0548\x03\x02\x02\x02\u054A\u054C\x03\x02"+
		"\x02\x02\u054B\u054D\x05|?\x02\u054C\u054B\x03\x02\x02\x02\u054C\u054D"+
		"\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0550\t\x02\x02\x02"+
		"\u054F\u0551\x05`1\x02\u0550\u054F\x03\x02\x02\x02\u0550\u0551\x03\x02"+
		"\x02\x02\u0551\u0553\x03\x02\x02\x02\u0552\u0554\x05b2\x02\u0553\u0552"+
		"\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02"+
		"\u0555\u0557\x07\b\x02\x02\u0556\u0558\x07\t\x02\x02\u0557\u0556\x03\x02"+
		"\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u055B\x03\x02\x02\x02\u0559"+
		"\u055B\x07b\x02\x02\u055A\u04C1\x03\x02\x02\x02\u055A\u04C2\x03\x02\x02"+
		"\x02\u055A\u04C3\x03\x02\x02\x02\u055A\u04C4\x03\x02\x02\x02\u055A\u04CB"+
		"\x03\x02\x02\x02\u055A\u04D6\x03\x02\x02\x02\u055A\u04EE\x03\x02\x02\x02"+
		"\u055A\u051A\x03\x02\x02\x02\u055A\u0546\x03\x02\x02\x02\u055A\u0559\x03"+
		"\x02\x02\x02\u055BU\x03\x02\x02\x02\u055C\u055D\x07\x12\x02\x02\u055D"+
		"\u0562\x05\x12\n\x02\u055E\u055F\x07\x12\x02\x02\u055F\u0561\x05\x12\n"+
		"\x02\u0560\u055E\x03\x02\x02\x02\u0561\u0564\x03\x02\x02\x02\u0562\u0560"+
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563W\x03\x02\x02\x02\u0564"+
		"\u0562\x03\x02\x02\x02\u0565\u0568\t\x02\x02\x02\u0566\u0569\x05Z.\x02"+
		"\u0567\u0569\x07[\x02\x02\u0568\u0566\x03\x02\x02\x02\u0568\u0567\x03"+
		"\x02\x02\x02\u0569\u0571\x03\x02\x02\x02\u056A\u056D\x07\x12\x02\x02\u056B"+
		"\u056E\x05Z.\x02\u056C\u056E\x07[\x02\x02\u056D\u056B\x03\x02\x02\x02"+
		"\u056D\u056C\x03\x02\x02\x02\u056E\u0570\x03\x02\x02\x02\u056F\u056A\x03"+
		"\x02\x02\x02\u0570\u0573\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0571"+
		"\u0572\x03\x02\x02\x02\u0572\u0574\x03\x02\x02\x02\u0573\u0571\x03\x02"+
		"\x02\x02\u0574\u0575\x07\b\x02\x02\u0575Y\x03\x02\x02\x02\u0576\u0579"+
		"\x05\x94K\x02\u0577\u0578\x07\x17\x02\x02\u0578\u057A\x05f4\x02\u0579"+
		"\u0577\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057D\x03\x02"+
		"\x02\x02\u057B\u057C\x07\x04\x02\x02\u057C\u057E\x05$\x13\x02\u057D\u057B"+
		"\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E[\x03\x02\x02\x02\u057F"+
		"\u0584\x05^0\x02\u0580\u0581\x07\x12\x02\x02\u0581\u0583\x05^0\x02\u0582"+
		"\u0580\x03\x02\x02\x02\u0583\u0586\x03\x02\x02\x02\u0584\u0582\x03\x02"+
		"\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585]\x03\x02\x02\x02\u0586\u0584"+
		"\x03\x02\x02\x02\u0587\u058A\x05\x94K\x02\u0588\u0589\x07\x17\x02\x02"+
		"\u0589\u058B\x05f4\x02\u058A\u0588\x03\x02\x02\x02\u058A\u058B\x03\x02"+
		"\x02\x02\u058B\u058E\x03\x02\x02\x02\u058C\u058D\x07\x04\x02\x02\u058D"+
		"\u058F\x05$\x13\x02\u058E\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02\x02"+
		"\x02\u058F_\x03\x02\x02\x02\u0590\u0595\x05\x12\n\x02\u0591\u0592\x07"+
		"\x12\x02\x02\u0592\u0594\x05\x12\n\x02\u0593\u0591\x03\x02\x02\x02\u0594"+
		"\u0597\x03\x02\x02\x02\u0595\u0593\x03\x02\x02\x02\u0595\u0596\x03\x02"+
		"\x02\x02\u0596a\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0598\u0599"+
		"\x07d\x02\x02\u0599\u059E\x05d3\x02\u059A\u059B\x07\x12\x02\x02\u059B"+
		"\u059D\x05d3\x02\u059C\u059A\x03\x02\x02\x02\u059D\u05A0\x03\x02\x02\x02"+
		"\u059E\u059C\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059Fc\x03\x02"+
		"\x02\x02\u05A0\u059E\x03\x02\x02\x02\u05A1\u05A2\x05\x94K\x02\u05A2\u05A3"+
		"\x07\x04\x02\x02\u05A3\u05A4\x05\x12\n\x02\u05A4e\x03\x02\x02\x02\u05A5"+
		"\u05A8\x05h5\x02\u05A6\u05A7\x07e\x02\x02\u05A7\u05A9\x05f4\x02\u05A8"+
		"\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9g\x03\x02\x02"+
		"\x02\u05AA\u05B7\x07[\x02\x02\u05AB\u05B7\x05z>\x02\u05AC\u05AD\t\x02"+
		"\x02\x02\u05AD\u05AF\x05p9\x02\u05AE\u05B0\x05n8\x02\u05AF\u05AE\x03\x02"+
		"\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1"+
		"\u05B2\x07\b\x02\x02\u05B2\u05B7\x03\x02\x02\x02\u05B3\u05B7\x05v<\x02"+
		"\u05B4\u05B7\x05l7\x02\u05B5\u05B7\x05j6\x02\u05B6\u05AA\x03\x02\x02\x02"+
		"\u05B6\u05AB\x03\x02\x02\x02\u05B6\u05AC\x03\x02\x02\x02\u05B6\u05B3\x03"+
		"\x02\x02\x02\u05B6\u05B4\x03\x02\x02\x02\u05B6\u05B5\x03\x02\x02\x02\u05B7"+
		"i\x03\x02\x02\x02\u05B8\u05BA\x07a\x02\x02\u05B9\u05BB\x05z>\x02\u05BA"+
		"\u05B9\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BD\x03\x02"+
		"\x02\x02\u05BC\u05BE\x05\x94K\x02\u05BD\u05BC\x03\x02\x02\x02\u05BD\u05BE"+
		"\x03\x02\x02\x02\u05BE\u05C0\x03\x02\x02\x02\u05BF\u05C1\x05~@\x02\u05C0"+
		"\u05BF\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05C2\x03\x02"+
		"\x02\x02\u05C2\u05CB\t\x02\x02\x02\u05C3\u05C8\x05f4\x02\u05C4\u05C5\x07"+
		"\x12\x02\x02\u05C5\u05C7\x05f4\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7\u05CA"+
		"\x03\x02\x02\x02\u05C8\u05C6\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02"+
		"\u05C9\u05CC\x03\x02\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CB\u05C3\x03"+
		"\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD"+
		"\u05D0\x07\b\x02\x02\u05CE\u05CF\x07\x17\x02\x02\u05CF\u05D1\x05f4\x02"+
		"\u05D0\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D3\x03"+
		"\x02\x02\x02\u05D2\u05D4\x07\t\x02\x02\u05D3\u05D2\x03\x02\x02\x02\u05D3"+
		"\u05D4\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D8\x07`\x02"+
		"\x02\u05D6\u05D9\x05z>\x02\u05D7\u05D9\x05x=\x02\u05D8\u05D6\x03\x02\x02"+
		"\x02\u05D8\u05D7\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DB"+
		"\x03\x02\x02\x02\u05DA\u05DC\t\f\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DB"+
		"\u05DC\x03\x02\x02\x02\u05DCk\x03\x02\x02\x02\u05DD\u05DF\x07_\x02\x02"+
		"\u05DE\u05E0\x05z>\x02\u05DF\u05DE\x03\x02\x02\x02\u05DF\u05E0\x03\x02"+
		"\x02\x02\u05E0\u05E2\x03\x02\x02\x02\u05E1\u05E3\x05\x94K\x02\u05E2\u05E1"+
		"\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5\x03\x02\x02\x02"+
		"\u05E4\u05E6\x05~@\x02\u05E5\u05E4\x03\x02\x02\x02\u05E5\u05E6\x03\x02"+
		"\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05F0\t\x02\x02\x02\u05E8\u05ED"+
		"\x05f4\x02\u05E9\u05EA\x07\x12\x02\x02\u05EA\u05EC\x05f4\x02\u05EB\u05E9"+
		"\x03\x02\x02\x02\u05EC\u05EF\x03\x02\x02\x02\u05ED\u05EB\x03\x02\x02\x02"+
		"\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F1\x03\x02\x02\x02\u05EF\u05ED\x03"+
		"\x02\x02\x02\u05F0\u05E8\x03\x02\x02\x02\u05F0\u05F1\x03\x02\x02\x02\u05F1"+
		"\u05F2\x03\x02\x02\x02\u05F2\u05F5\x07\b\x02\x02\u05F3\u05F4\x07\x17\x02"+
		"\x02\u05F4\u05F6\x05f4\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5\u05F6\x03"+
		"\x02\x02\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F9\x07\t\x02\x02\u05F8"+
		"\u05F7\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u05FA\x03\x02"+
		"\x02\x02\u05FA\u05FD\x07`\x02\x02\u05FB\u05FE\x05z>\x02\u05FC\u05FE\x05"+
		"x=\x02\u05FD\u05FB\x03\x02\x02\x02\u05FD\u05FC\x03\x02\x02\x02\u05FD\u05FE"+
		"\x03\x02\x02\x02\u05FE\u0600\x03\x02\x02\x02\u05FF\u0601\t\f\x02\x02\u0600"+
		"\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601m\x03\x02\x02"+
		"\x02\u0602\u0603\x07\x12\x02\x02\u0603\u0608\x05p9\x02\u0604\u0605\x07"+
		"\x12\x02\x02\u0605\u0607\x05p9\x02\u0606\u0604\x03\x02\x02\x02\u0607\u060A"+
		"\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0608\u0609\x03\x02\x02\x02"+
		"\u0609o\x03\x02\x02\x02\u060A\u0608\x03\x02\x02\x02\u060B\u060F\x05f4"+
		"\x02\u060C\u060E\x05\x92J\x02\u060D\u060C\x03\x02\x02\x02\u060E\u0611"+
		"\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02"+
		"\u0610q\x03\x02\x02\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0613\x07h\x02"+
		"\x02\u0613\u0614\x05f4\x02\u0614s\x03\x02\x02\x02\u0615\u0616\x07R\x02"+
		"\x02\u0616\u0617\x05f4\x02\u0617u\x03\x02\x02\x02\u0618\u061B\x05\x94"+
		"K\x02\u0619\u061A\x07Z\x02\x02\u061A\u061C\x05\x94K\x02\u061B\u0619\x03"+
		"\x02\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C\u061E\x03\x02\x02\x02\u061D"+
		"\u061F\x05|?\x02\u061E\u061D\x03\x02\x02\x02\u061E\u061F\x03\x02\x02\x02"+
		"\u061F\u0622\x03\x02\x02\x02\u0620\u0623\x05z>\x02\u0621\u0623\x05x=\x02"+
		"\u0622\u0620\x03\x02\x02\x02\u0622\u0621\x03\x02\x02\x02\u0622\u0623\x03"+
		"\x02\x02\x02\u0623\u0625\x03\x02\x02\x02\u0624\u0626\t\f\x02\x02\u0625"+
		"\u0624\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626w\x03\x02\x02"+
		"\x02\u0627\u0628\t\r\x02\x02\u0628y\x03\x02\x02\x02\u0629\u062A\t\x0E"+
		"\x02\x02\u062A{\x03\x02\x02\x02\u062B\u062C\x07c\x02\x02\u062C\u0631\x05"+
		"\x84C\x02\u062D\u062E\x07\x12\x02\x02\u062E\u0630\x05\x84C\x02\u062F\u062D"+
		"\x03\x02\x02\x02\u0630\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02"+
		"\u0631\u0632\x03\x02\x02\x02\u0632\u0634\x03\x02\x02\x02\u0633\u0631\x03"+
		"\x02\x02\x02\u0634\u0635\x07]\x02\x02\u0635}\x03\x02\x02\x02\u0636\u0637"+
		"\t\v\x02\x02\u0637\u063C\x05\x82B\x02\u0638\u0639\x07\x12\x02\x02\u0639"+
		"\u063B\x05\x82B\x02\u063A\u0638\x03\x02\x02\x02\u063B\u063E\x03\x02\x02"+
		"\x02\u063C\u063A\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063F"+
		"\x03\x02\x02\x02\u063E\u063C\x03\x02\x02\x02\u063F\u0640\x07]\x02\x02"+
		"\u0640\x7F\x03\x02\x02\x02\u0641\u0644\x05\x88E\x02\u0642\u0644\x07t\x02"+
		"\x02\u0643\u0641\x03\x02\x02\x02\u0643\u0642\x03\x02\x02\x02\u0644\u064C"+
		"\x03\x02\x02\x02\u0645\u0648\x07\x12\x02\x02\u0646\u0649\x05\x88E\x02"+
		"\u0647\u0649\x07t\x02\x02\u0648\u0646\x03\x02\x02\x02\u0648\u0647\x03"+
		"\x02\x02\x02\u0649\u064B\x03\x02\x02\x02\u064A\u0645\x03\x02\x02\x02\u064B"+
		"\u064E\x03\x02\x02\x02\u064C\u064A\x03\x02\x02\x02\u064C\u064D\x03\x02"+
		"\x02\x02\u064D\x81\x03\x02\x02\x02\u064E\u064C\x03\x02\x02\x02\u064F\u0652"+
		"\x05\x94K\x02\u0650\u0651\x07\x17\x02\x02\u0651\u0653\x05f4\x02\u0652"+
		"\u0650";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0656\x03\x02\x02\x02"+
		"\u0654\u0655\x07\x04\x02\x02\u0655\u0657\x05\x84C\x02\u0656\u0654\x03"+
		"\x02\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657\x83\x03\x02\x02\x02\u0658"+
		"\u065D\x05f4\x02\u0659\u065D\x05\x86D\x02\u065A\u065B\x07Q\x02\x02\u065B"+
		"\u065D\x05H%\x02\u065C\u0658\x03\x02\x02\x02\u065C\u0659\x03\x02\x02\x02"+
		"\u065C\u065A\x03\x02\x02\x02\u065D\x85\x03\x02\x02\x02\u065E\u065F\t\x0F"+
		"\x02\x02\u065F\x87\x03\x02\x02\x02\u0660\u0661\x05\x94K\x02\u0661\u0662"+
		"\x07\x17\x02\x02\u0662\u0665\x05f4\x02\u0663\u0664\x07\x04\x02\x02\u0664"+
		"\u0666\x05$\x13\x02\u0665\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02\x02"+
		"\x02\u0666\x89\x03\x02\x02\x02\u0667\u066C\x05(\x15\x02\u0668\u066C\x05"+
		"&\x14\x02\u0669\u066A\x07\\\x02\x02\u066A\u066C\x05f4\x02\u066B\u0667"+
		"\x03\x02\x02\x02\u066B\u0668\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02"+
		"\u066C\x8B\x03\x02\x02\x02\u066D\u0672\x05(\x15\x02\u066E\u0672\x05&\x14"+
		"\x02\u066F\u0670\x07\\\x02\x02\u0670\u0672\x05f4\x02\u0671\u066D\x03\x02"+
		"\x02\x02\u0671\u066E\x03\x02\x02\x02\u0671\u066F\x03\x02\x02\x02\u0672"+
		"\x8D\x03\x02\x02\x02\u0673\u0679\x05P)\x02\u0674\u0679\x05N(\x02\u0675"+
		"\u0679\x05L\'\x02\u0676\u0679\x05|?\x02\u0677\u0679\x05J&\x02\u0678\u0673"+
		"\x03\x02\x02\x02\u0678\u0674\x03\x02\x02\x02\u0678\u0675\x03\x02\x02\x02"+
		"\u0678\u0676\x03\x02\x02\x02\u0678\u0677\x03\x02\x02\x02\u0679\x8F\x03"+
		"\x02\x02\x02\u067A\u0680\x05P)\x02\u067B\u0680\x05N(\x02\u067C\u0680\x05"+
		"L\'\x02\u067D\u0680\x05|?\x02\u067E\u0680\x05J&\x02\u067F\u067A\x03\x02"+
		"\x02\x02\u067F\u067B\x03\x02\x02\x02\u067F\u067C\x03\x02\x02\x02\u067F"+
		"\u067D\x03\x02\x02\x02\u067F\u067E\x03\x02\x02\x02\u0680\x91\x03\x02\x02"+
		"\x02\u0681\u0684\x05t;\x02\u0682\u0684\x05r:\x02\u0683\u0681\x03\x02\x02"+
		"\x02\u0683\u0682\x03\x02\x02\x02\u0684\x93\x03\x02\x02\x02\u0685\u0686"+
		"\x07w\x02\x02\u0686\x95\x03\x02\x02\x02\u0106\x97\x9C\xA2\xA9\xAD\xB1"+
		"\xB6\xBB\xBF\xC8\xCD\xD0\xD3\xD7\xDB\xDE\xE5\xEB\xF4\xF7\u0100\u0105\u0109"+
		"\u010D\u0111\u0116\u0119\u011C\u0120\u0128\u012D\u0131\u0135\u013A\u013F"+
		"\u0143\u0148\u014C\u0151\u0156\u015C\u0163\u016B\u0176\u017B\u0183\u018E"+
		"\u0193\u019B\u01A6\u01AB\u01B1\u01BC\u01C1\u01C7\u01CC\u01D7\u01DC\u01E3"+
		"\u01EE\u01F3\u01FA\u0205\u020A\u0213\u021E\u0223\u022A\u0231\u023C\u0241"+
		"\u0246\u024A\u0255\u025A\u025D\u0264\u026A\u0273\u0278\u0280\u028B\u0290"+
		"\u0298\u02A3\u02A8\u02AE\u02B9\u02BE\u02C4\u02C9\u02D4\u02D9\u02E0\u02EB"+
		"\u02F0\u02F7\u0302\u0307\u0310\u031B\u0320\u0327\u032E\u0339\u033E\u0343"+
		"\u0347\u0352\u0357\u035A\u0361\u0367\u0374\u0379\u037C\u0380\u0384\u038D"+
		"\u0392\u0398\u03A7\u03AC\u03B4\u03BD\u03C2\u03CA\u03D3\u03D8\u03E1\u03E6"+
		"\u03EC\u03EF\u03F5\u03F8\u03FD\u0402\u0408\u040F\u0414\u0417\u041B\u042C"+
		"\u0435\u0438\u0442\u0447\u044A\u044E\u045A\u045F\u0462\u0465\u0468\u046C"+
		"\u0470\u0474\u0477\u047D\u0486\u048B\u048E\u0491\u0494\u0498\u049C\u04A0"+
		"\u04A3\u04A9\u04AE\u04B1\u04B5\u04B8\u04BC\u04BF\u04C7\u04D0\u04D3\u04DD"+
		"\u04E2\u04E5\u04E9\u04F5\u04FA\u04FD\u0500\u0503\u0507\u050B\u050F\u0512"+
		"\u0518\u0521\u0526\u0529\u052C\u052F\u0533\u0537\u053B\u053E\u0544\u0549"+
		"\u054C\u0550\u0553\u0557\u055A\u0562\u0568\u056D\u0571\u0579\u057D\u0584"+
		"\u058A\u058E\u0595\u059E\u05A8\u05AF\u05B6\u05BA\u05BD\u05C0\u05C8\u05CB"+
		"\u05D0\u05D3\u05D8\u05DB\u05DF\u05E2\u05E5\u05ED\u05F0\u05F5\u05F8\u05FD"+
		"\u0600\u0608\u060F\u061B\u061E\u0622\u0625\u0631\u063C\u0643\u0648\u064C"+
		"\u0652\u0656\u065C\u0665\u066B\u0671\u0678\u067F\u0683";
	public static readonly _serializedATN: string = Utils.join(
		[
			ponyParser._serializedATNSegment0,
			ponyParser._serializedATNSegment1,
			ponyParser._serializedATNSegment2,
			ponyParser._serializedATNSegment3
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ponyParser.__ATN) {
			ponyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ponyParser._serializedATN));
		}

		return ponyParser.__ATN;
	}

}

export class ModuleContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public use(): UseContext[];
	public use(i: number): UseContext;
	public use(i?: number): UseContext | UseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseContext);
		} else {
			return this.getRuleContext(i, UseContext);
		}
	}
	public class_def(): Class_defContext[];
	public class_def(i: number): Class_defContext;
	public class_def(i?: number): Class_defContext | Class_defContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_defContext);
		} else {
			return this.getRuleContext(i, Class_defContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_module; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterModule) listener.enterModule(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitModule) listener.exitModule(this);
	}
}


export class UseContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public use_ffi(): Use_ffiContext | undefined {
		return this.tryGetRuleContext(0, Use_ffiContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_use; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterUse) listener.enterUse(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitUse) listener.exitUse(this);
	}
}


export class Use_ffiContext extends ParserRuleContext {
	public typeargs(): TypeargsContext {
		return this.getRuleContext(0, TypeargsContext);
	}
	public LPAREN_NEW(): TerminalNode { return this.getToken(ponyParser.LPAREN_NEW, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_use_ffi; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterUse_ffi) listener.enterUse_ffi(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitUse_ffi) listener.exitUse_ffi(this);
	}
}


export class Class_defContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public members(): MembersContext {
		return this.getRuleContext(0, MembersContext);
	}
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_class_def; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterClass_def) listener.enterClass_def(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitClass_def) listener.exitClass_def(this);
	}
}


export class MembersContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public method(): MethodContext[];
	public method(i: number): MethodContext;
	public method(i?: number): MethodContext | MethodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodContext);
		} else {
			return this.getRuleContext(i, MethodContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_members; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterMembers) listener.enterMembers(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitMembers) listener.exitMembers(this);
	}
}


export class FieldContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_field; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterField) listener.enterField(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitField) listener.exitField(this);
	}
}


export class MethodContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LPAREN_NEW(): TerminalNode { return this.getToken(ponyParser.LPAREN_NEW, 0); }
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public rawseq(): RawseqContext | undefined {
		return this.tryGetRuleContext(0, RawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_method; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterMethod) listener.enterMethod(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitMethod) listener.exitMethod(this);
	}
}


export class AnnotatedrawseqContext extends ParserRuleContext {
	public exprseq(): ExprseqContext | undefined {
		return this.tryGetRuleContext(0, ExprseqContext);
	}
	public jump(): JumpContext | undefined {
		return this.tryGetRuleContext(0, JumpContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_annotatedrawseq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAnnotatedrawseq) listener.enterAnnotatedrawseq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAnnotatedrawseq) listener.exitAnnotatedrawseq(this);
	}
}


export class RawseqContext extends ParserRuleContext {
	public exprseq(): ExprseqContext | undefined {
		return this.tryGetRuleContext(0, ExprseqContext);
	}
	public jump(): JumpContext | undefined {
		return this.tryGetRuleContext(0, JumpContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_rawseq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterRawseq) listener.enterRawseq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitRawseq) listener.exitRawseq(this);
	}
}


export class ExprseqContext extends ParserRuleContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public semiexpr(): SemiexprContext | undefined {
		return this.tryGetRuleContext(0, SemiexprContext);
	}
	public nosemi(): NosemiContext | undefined {
		return this.tryGetRuleContext(0, NosemiContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_exprseq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterExprseq) listener.enterExprseq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitExprseq) listener.exitExprseq(this);
	}
}


export class NextexprseqContext extends ParserRuleContext {
	public nextassignment(): NextassignmentContext {
		return this.getRuleContext(0, NextassignmentContext);
	}
	public semiexpr(): SemiexprContext | undefined {
		return this.tryGetRuleContext(0, SemiexprContext);
	}
	public nosemi(): NosemiContext | undefined {
		return this.tryGetRuleContext(0, NosemiContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextexprseq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextexprseq) listener.enterNextexprseq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextexprseq) listener.exitNextexprseq(this);
	}
}


export class NosemiContext extends ParserRuleContext {
	public nextexprseq(): NextexprseqContext | undefined {
		return this.tryGetRuleContext(0, NextexprseqContext);
	}
	public jump(): JumpContext | undefined {
		return this.tryGetRuleContext(0, JumpContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nosemi; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNosemi) listener.enterNosemi(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNosemi) listener.exitNosemi(this);
	}
}


export class SemiexprContext extends ParserRuleContext {
	public exprseq(): ExprseqContext | undefined {
		return this.tryGetRuleContext(0, ExprseqContext);
	}
	public jump(): JumpContext | undefined {
		return this.tryGetRuleContext(0, JumpContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_semiexpr; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterSemiexpr) listener.enterSemiexpr(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitSemiexpr) listener.exitSemiexpr(this);
	}
}


export class JumpContext extends ParserRuleContext {
	public rawseq(): RawseqContext | undefined {
		return this.tryGetRuleContext(0, RawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_jump; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterJump) listener.enterJump(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitJump) listener.exitJump(this);
	}
}


export class NextassignmentContext extends ParserRuleContext {
	public nextinfix(): NextinfixContext {
		return this.getRuleContext(0, NextinfixContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextassignment; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextassignment) listener.enterNextassignment(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextassignment) listener.exitNextassignment(this);
	}
}


export class AssignmentContext extends ParserRuleContext {
	public infix(): InfixContext {
		return this.getRuleContext(0, InfixContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_assignment; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAssignment) listener.enterAssignment(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAssignment) listener.exitAssignment(this);
	}
}


export class NextinfixContext extends ParserRuleContext {
	public nextterm(): NexttermContext {
		return this.getRuleContext(0, NexttermContext);
	}
	public antlr_0(): Antlr_0Context[];
	public antlr_0(i: number): Antlr_0Context;
	public antlr_0(i?: number): Antlr_0Context | Antlr_0Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Antlr_0Context);
		} else {
			return this.getRuleContext(i, Antlr_0Context);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextinfix; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextinfix) listener.enterNextinfix(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextinfix) listener.exitNextinfix(this);
	}
}


export class InfixContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public antlr_1(): Antlr_1Context[];
	public antlr_1(i: number): Antlr_1Context;
	public antlr_1(i?: number): Antlr_1Context | Antlr_1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Antlr_1Context);
		} else {
			return this.getRuleContext(i, Antlr_1Context);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_infix; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterInfix) listener.enterInfix(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitInfix) listener.exitInfix(this);
	}
}


export class IsopContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_isop; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIsop) listener.enterIsop(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIsop) listener.exitIsop(this);
	}
}


export class BinopContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_binop; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterBinop) listener.enterBinop(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitBinop) listener.exitBinop(this);
	}
}


export class NexttermContext extends ParserRuleContext {
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public elseif(): ElseifContext | undefined {
		return this.tryGetRuleContext(0, ElseifContext);
	}
	public annotatedrawseq(): AnnotatedrawseqContext[];
	public annotatedrawseq(i: number): AnnotatedrawseqContext;
	public annotatedrawseq(i?: number): AnnotatedrawseqContext | AnnotatedrawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotatedrawseqContext);
		} else {
			return this.getRuleContext(i, AnnotatedrawseqContext);
		}
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	public elseifdef(): ElseifdefContext | undefined {
		return this.tryGetRuleContext(0, ElseifdefContext);
	}
	public iftype(): IftypeContext | undefined {
		return this.tryGetRuleContext(0, IftypeContext);
	}
	public elseiftype(): ElseiftypeContext | undefined {
		return this.tryGetRuleContext(0, ElseiftypeContext);
	}
	public caseexpr(): CaseexprContext[];
	public caseexpr(i: number): CaseexprContext;
	public caseexpr(i?: number): CaseexprContext | CaseexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseexprContext);
		} else {
			return this.getRuleContext(i, CaseexprContext);
		}
	}
	public idseq(): IdseqContext | undefined {
		return this.tryGetRuleContext(0, IdseqContext);
	}
	public withelem(): WithelemContext[];
	public withelem(i: number): WithelemContext;
	public withelem(i?: number): WithelemContext | WithelemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithelemContext);
		} else {
			return this.getRuleContext(i, WithelemContext);
		}
	}
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public nextpattern(): NextpatternContext | undefined {
		return this.tryGetRuleContext(0, NextpatternContext);
	}
	public postfix(): PostfixContext | undefined {
		return this.tryGetRuleContext(0, PostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextterm; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextterm) listener.enterNextterm(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextterm) listener.exitNextterm(this);
	}
}


export class TermContext extends ParserRuleContext {
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public elseif(): ElseifContext | undefined {
		return this.tryGetRuleContext(0, ElseifContext);
	}
	public annotatedrawseq(): AnnotatedrawseqContext[];
	public annotatedrawseq(i: number): AnnotatedrawseqContext;
	public annotatedrawseq(i?: number): AnnotatedrawseqContext | AnnotatedrawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotatedrawseqContext);
		} else {
			return this.getRuleContext(i, AnnotatedrawseqContext);
		}
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	public elseifdef(): ElseifdefContext | undefined {
		return this.tryGetRuleContext(0, ElseifdefContext);
	}
	public iftype(): IftypeContext | undefined {
		return this.tryGetRuleContext(0, IftypeContext);
	}
	public elseiftype(): ElseiftypeContext | undefined {
		return this.tryGetRuleContext(0, ElseiftypeContext);
	}
	public caseexpr(): CaseexprContext[];
	public caseexpr(i: number): CaseexprContext;
	public caseexpr(i?: number): CaseexprContext | CaseexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseexprContext);
		} else {
			return this.getRuleContext(i, CaseexprContext);
		}
	}
	public idseq(): IdseqContext | undefined {
		return this.tryGetRuleContext(0, IdseqContext);
	}
	public withelem(): WithelemContext[];
	public withelem(i: number): WithelemContext;
	public withelem(i?: number): WithelemContext | WithelemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithelemContext);
		} else {
			return this.getRuleContext(i, WithelemContext);
		}
	}
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public postfix(): PostfixContext | undefined {
		return this.tryGetRuleContext(0, PostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_term; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTerm) listener.enterTerm(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTerm) listener.exitTerm(this);
	}
}


export class WithelemContext extends ParserRuleContext {
	public idseq(): IdseqContext {
		return this.getRuleContext(0, IdseqContext);
	}
	public rawseq(): RawseqContext {
		return this.getRuleContext(0, RawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_withelem; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterWithelem) listener.enterWithelem(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitWithelem) listener.exitWithelem(this);
	}
}


export class CaseexprContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_caseexpr; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterCaseexpr) listener.enterCaseexpr(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitCaseexpr) listener.exitCaseexpr(this);
	}
}


export class ElseiftypeContext extends ParserRuleContext {
	public iftype(): IftypeContext {
		return this.getRuleContext(0, IftypeContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public elseiftype(): ElseiftypeContext | undefined {
		return this.tryGetRuleContext(0, ElseiftypeContext);
	}
	public annotatedrawseq(): AnnotatedrawseqContext | undefined {
		return this.tryGetRuleContext(0, AnnotatedrawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_elseiftype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterElseiftype) listener.enterElseiftype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitElseiftype) listener.exitElseiftype(this);
	}
}


export class IftypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public rawseq(): RawseqContext {
		return this.getRuleContext(0, RawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_iftype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIftype) listener.enterIftype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIftype) listener.exitIftype(this);
	}
}


export class ElseifdefContext extends ParserRuleContext {
	public infix(): InfixContext {
		return this.getRuleContext(0, InfixContext);
	}
	public rawseq(): RawseqContext {
		return this.getRuleContext(0, RawseqContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public elseifdef(): ElseifdefContext | undefined {
		return this.tryGetRuleContext(0, ElseifdefContext);
	}
	public annotatedrawseq(): AnnotatedrawseqContext | undefined {
		return this.tryGetRuleContext(0, AnnotatedrawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_elseifdef; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterElseifdef) listener.enterElseifdef(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitElseifdef) listener.exitElseifdef(this);
	}
}


export class ElseifContext extends ParserRuleContext {
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public elseif(): ElseifContext | undefined {
		return this.tryGetRuleContext(0, ElseifContext);
	}
	public annotatedrawseq(): AnnotatedrawseqContext | undefined {
		return this.tryGetRuleContext(0, AnnotatedrawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_elseif; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterElseif) listener.enterElseif(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitElseif) listener.exitElseif(this);
	}
}


export class IdseqContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public idseq_in_seq(): Idseq_in_seqContext[];
	public idseq_in_seq(i: number): Idseq_in_seqContext;
	public idseq_in_seq(i?: number): Idseq_in_seqContext | Idseq_in_seqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idseq_in_seqContext);
		} else {
			return this.getRuleContext(i, Idseq_in_seqContext);
		}
	}
	public LPAREN_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LPAREN_NEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_idseq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIdseq) listener.enterIdseq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIdseq) listener.exitIdseq(this);
	}
}


export class Idseq_in_seqContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public idseq_in_seq(): Idseq_in_seqContext[];
	public idseq_in_seq(i: number): Idseq_in_seqContext;
	public idseq_in_seq(i?: number): Idseq_in_seqContext | Idseq_in_seqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idseq_in_seqContext);
		} else {
			return this.getRuleContext(i, Idseq_in_seqContext);
		}
	}
	public LPAREN_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LPAREN_NEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_idseq_in_seq; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIdseq_in_seq) listener.enterIdseq_in_seq(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIdseq_in_seq) listener.exitIdseq_in_seq(this);
	}
}


export class NextpatternContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public nextparampattern(): NextparampatternContext | undefined {
		return this.tryGetRuleContext(0, NextparampatternContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextpattern; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextpattern) listener.enterNextpattern(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextpattern) listener.exitNextpattern(this);
	}
}


export class PatternContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public parampattern(): ParampatternContext | undefined {
		return this.tryGetRuleContext(0, ParampatternContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_pattern; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterPattern) listener.enterPattern(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitPattern) listener.exitPattern(this);
	}
}


export class NextparampatternContext extends ParserRuleContext {
	public parampattern(): ParampatternContext | undefined {
		return this.tryGetRuleContext(0, ParampatternContext);
	}
	public MINUS_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.MINUS_NEW, 0); }
	public MINUS_TILDE_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.MINUS_TILDE_NEW, 0); }
	public nextpostfix(): NextpostfixContext | undefined {
		return this.tryGetRuleContext(0, NextpostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextparampattern; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextparampattern) listener.enterNextparampattern(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextparampattern) listener.exitNextparampattern(this);
	}
}


export class ParampatternContext extends ParserRuleContext {
	public parampattern(): ParampatternContext | undefined {
		return this.tryGetRuleContext(0, ParampatternContext);
	}
	public MINUS_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.MINUS_NEW, 0); }
	public MINUS_TILDE_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.MINUS_TILDE_NEW, 0); }
	public postfix(): PostfixContext | undefined {
		return this.tryGetRuleContext(0, PostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_parampattern; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterParampattern) listener.enterParampattern(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitParampattern) listener.exitParampattern(this);
	}
}


export class NextpostfixContext extends ParserRuleContext {
	public nextatom(): NextatomContext {
		return this.getRuleContext(0, NextatomContext);
	}
	public antlr_2(): Antlr_2Context[];
	public antlr_2(i: number): Antlr_2Context;
	public antlr_2(i?: number): Antlr_2Context | Antlr_2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Antlr_2Context);
		} else {
			return this.getRuleContext(i, Antlr_2Context);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextpostfix; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextpostfix) listener.enterNextpostfix(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextpostfix) listener.exitNextpostfix(this);
	}
}


export class PostfixContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public antlr_3(): Antlr_3Context[];
	public antlr_3(i: number): Antlr_3Context;
	public antlr_3(i?: number): Antlr_3Context | Antlr_3Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Antlr_3Context);
		} else {
			return this.getRuleContext(i, Antlr_3Context);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_postfix; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterPostfix) listener.enterPostfix(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitPostfix) listener.exitPostfix(this);
	}
}


export class CallContext extends ParserRuleContext {
	public positional(): PositionalContext | undefined {
		return this.tryGetRuleContext(0, PositionalContext);
	}
	public named(): NamedContext | undefined {
		return this.tryGetRuleContext(0, NamedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_call; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterCall) listener.enterCall(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitCall) listener.exitCall(this);
	}
}


export class ChainContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_chain; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterChain) listener.enterChain(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitChain) listener.exitChain(this);
	}
}


export class TildeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_tilde; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTilde) listener.enterTilde(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTilde) listener.exitTilde(this);
	}
}


export class DotContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_dot; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterDot) listener.enterDot(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitDot) listener.exitDot(this);
	}
}


export class NextatomContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public LPAREN_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LPAREN_NEW, 0); }
	public rawseq(): RawseqContext | undefined {
		return this.tryGetRuleContext(0, RawseqContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public LSQUARE_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LSQUARE_NEW, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public members(): MembersContext | undefined {
		return this.tryGetRuleContext(0, MembersContext);
	}
	public cap(): CapContext[];
	public cap(i: number): CapContext;
	public cap(i?: number): CapContext | CapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CapContext);
		} else {
			return this.getRuleContext(i, CapContext);
		}
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public lambdaparams(): LambdaparamsContext | undefined {
		return this.tryGetRuleContext(0, LambdaparamsContext);
	}
	public lambdacaptures(): LambdacapturesContext | undefined {
		return this.tryGetRuleContext(0, LambdacapturesContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public typeargs(): TypeargsContext | undefined {
		return this.tryGetRuleContext(0, TypeargsContext);
	}
	public positional(): PositionalContext | undefined {
		return this.tryGetRuleContext(0, PositionalContext);
	}
	public named(): NamedContext | undefined {
		return this.tryGetRuleContext(0, NamedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nextatom; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNextatom) listener.enterNextatom(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNextatom) listener.exitNextatom(this);
	}
}


export class AtomContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public rawseq(): RawseqContext | undefined {
		return this.tryGetRuleContext(0, RawseqContext);
	}
	public LPAREN_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LPAREN_NEW, 0); }
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public LSQUARE_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LSQUARE_NEW, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public members(): MembersContext | undefined {
		return this.tryGetRuleContext(0, MembersContext);
	}
	public cap(): CapContext[];
	public cap(i: number): CapContext;
	public cap(i?: number): CapContext | CapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CapContext);
		} else {
			return this.getRuleContext(i, CapContext);
		}
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public lambdaparams(): LambdaparamsContext | undefined {
		return this.tryGetRuleContext(0, LambdaparamsContext);
	}
	public lambdacaptures(): LambdacapturesContext | undefined {
		return this.tryGetRuleContext(0, LambdacapturesContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	public typeargs(): TypeargsContext | undefined {
		return this.tryGetRuleContext(0, TypeargsContext);
	}
	public positional(): PositionalContext | undefined {
		return this.tryGetRuleContext(0, PositionalContext);
	}
	public named(): NamedContext | undefined {
		return this.tryGetRuleContext(0, NamedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_atom; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
}


export class TupleContext extends ParserRuleContext {
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_tuple; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTuple) listener.enterTuple(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTuple) listener.exitTuple(this);
	}
}


export class LambdacapturesContext extends ParserRuleContext {
	public LPAREN_NEW(): TerminalNode { return this.getToken(ponyParser.LPAREN_NEW, 0); }
	public lambdacapture(): LambdacaptureContext[];
	public lambdacapture(i: number): LambdacaptureContext;
	public lambdacapture(i?: number): LambdacaptureContext | LambdacaptureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdacaptureContext);
		} else {
			return this.getRuleContext(i, LambdacaptureContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_lambdacaptures; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLambdacaptures) listener.enterLambdacaptures(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLambdacaptures) listener.exitLambdacaptures(this);
	}
}


export class LambdacaptureContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_lambdacapture; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLambdacapture) listener.enterLambdacapture(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLambdacapture) listener.exitLambdacapture(this);
	}
}


export class LambdaparamsContext extends ParserRuleContext {
	public lambdaparam(): LambdaparamContext[];
	public lambdaparam(i: number): LambdaparamContext;
	public lambdaparam(i?: number): LambdaparamContext | LambdaparamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaparamContext);
		} else {
			return this.getRuleContext(i, LambdaparamContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_lambdaparams; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLambdaparams) listener.enterLambdaparams(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLambdaparams) listener.exitLambdaparams(this);
	}
}


export class LambdaparamContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_lambdaparam; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLambdaparam) listener.enterLambdaparam(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLambdaparam) listener.exitLambdaparam(this);
	}
}


export class PositionalContext extends ParserRuleContext {
	public rawseq(): RawseqContext[];
	public rawseq(i: number): RawseqContext;
	public rawseq(i?: number): RawseqContext | RawseqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawseqContext);
		} else {
			return this.getRuleContext(i, RawseqContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_positional; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterPositional) listener.enterPositional(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitPositional) listener.exitPositional(this);
	}
}


export class NamedContext extends ParserRuleContext {
	public namedarg(): NamedargContext[];
	public namedarg(i: number): NamedargContext;
	public namedarg(i?: number): NamedargContext | NamedargContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedargContext);
		} else {
			return this.getRuleContext(i, NamedargContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_named; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNamed) listener.enterNamed(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNamed) listener.exitNamed(this);
	}
}


export class NamedargContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public rawseq(): RawseqContext {
		return this.getRuleContext(0, RawseqContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_namedarg; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNamedarg) listener.enterNamedarg(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNamedarg) listener.exitNamedarg(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public atomtype(): AtomtypeContext {
		return this.getRuleContext(0, AtomtypeContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_type; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitType) listener.exitType(this);
	}
}


export class AtomtypeContext extends ParserRuleContext {
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public infixtype(): InfixtypeContext | undefined {
		return this.tryGetRuleContext(0, InfixtypeContext);
	}
	public LPAREN_NEW(): TerminalNode | undefined { return this.tryGetToken(ponyParser.LPAREN_NEW, 0); }
	public tupletype(): TupletypeContext | undefined {
		return this.tryGetRuleContext(0, TupletypeContext);
	}
	public nominal(): NominalContext | undefined {
		return this.tryGetRuleContext(0, NominalContext);
	}
	public lambdatype(): LambdatypeContext | undefined {
		return this.tryGetRuleContext(0, LambdatypeContext);
	}
	public barelambdatype(): BarelambdatypeContext | undefined {
		return this.tryGetRuleContext(0, BarelambdatypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_atomtype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAtomtype) listener.enterAtomtype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAtomtype) listener.exitAtomtype(this);
	}
}


export class BarelambdatypeContext extends ParserRuleContext {
	public LPAREN_NEW(): TerminalNode { return this.getToken(ponyParser.LPAREN_NEW, 0); }
	public cap(): CapContext[];
	public cap(i: number): CapContext;
	public cap(i?: number): CapContext | CapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CapContext);
		} else {
			return this.getRuleContext(i, CapContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public gencap(): GencapContext | undefined {
		return this.tryGetRuleContext(0, GencapContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_barelambdatype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterBarelambdatype) listener.enterBarelambdatype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitBarelambdatype) listener.exitBarelambdatype(this);
	}
}


export class LambdatypeContext extends ParserRuleContext {
	public LPAREN_NEW(): TerminalNode { return this.getToken(ponyParser.LPAREN_NEW, 0); }
	public cap(): CapContext[];
	public cap(i: number): CapContext;
	public cap(i?: number): CapContext | CapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CapContext);
		} else {
			return this.getRuleContext(i, CapContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeparams(): TypeparamsContext | undefined {
		return this.tryGetRuleContext(0, TypeparamsContext);
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public gencap(): GencapContext | undefined {
		return this.tryGetRuleContext(0, GencapContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_lambdatype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLambdatype) listener.enterLambdatype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLambdatype) listener.exitLambdatype(this);
	}
}


export class TupletypeContext extends ParserRuleContext {
	public infixtype(): InfixtypeContext[];
	public infixtype(i: number): InfixtypeContext;
	public infixtype(i?: number): InfixtypeContext | InfixtypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfixtypeContext);
		} else {
			return this.getRuleContext(i, InfixtypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_tupletype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTupletype) listener.enterTupletype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTupletype) listener.exitTupletype(this);
	}
}


export class InfixtypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public antlr_4(): Antlr_4Context[];
	public antlr_4(i: number): Antlr_4Context;
	public antlr_4(i?: number): Antlr_4Context | Antlr_4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Antlr_4Context);
		} else {
			return this.getRuleContext(i, Antlr_4Context);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_infixtype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterInfixtype) listener.enterInfixtype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitInfixtype) listener.exitInfixtype(this);
	}
}


export class IsecttypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_isecttype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIsecttype) listener.enterIsecttype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIsecttype) listener.exitIsecttype(this);
	}
}


export class UniontypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_uniontype; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterUniontype) listener.enterUniontype(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitUniontype) listener.exitUniontype(this);
	}
}


export class NominalContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeargs(): TypeargsContext | undefined {
		return this.tryGetRuleContext(0, TypeargsContext);
	}
	public cap(): CapContext | undefined {
		return this.tryGetRuleContext(0, CapContext);
	}
	public gencap(): GencapContext | undefined {
		return this.tryGetRuleContext(0, GencapContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_nominal; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterNominal) listener.enterNominal(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitNominal) listener.exitNominal(this);
	}
}


export class GencapContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_gencap; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterGencap) listener.enterGencap(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitGencap) listener.exitGencap(this);
	}
}


export class CapContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_cap; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterCap) listener.enterCap(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitCap) listener.exitCap(this);
	}
}


export class TypeargsContext extends ParserRuleContext {
	public typearg(): TypeargContext[];
	public typearg(i: number): TypeargContext;
	public typearg(i?: number): TypeargContext | TypeargContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeargContext);
		} else {
			return this.getRuleContext(i, TypeargContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_typeargs; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTypeargs) listener.enterTypeargs(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTypeargs) listener.exitTypeargs(this);
	}
}


export class TypeparamsContext extends ParserRuleContext {
	public typeparam(): TypeparamContext[];
	public typeparam(i: number): TypeparamContext;
	public typeparam(i?: number): TypeparamContext | TypeparamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeparamContext);
		} else {
			return this.getRuleContext(i, TypeparamContext);
		}
	}
	public LSQUARE_NEW(): TerminalNode { return this.getToken(ponyParser.LSQUARE_NEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_typeparams; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTypeparams) listener.enterTypeparams(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTypeparams) listener.exitTypeparams(this);
	}
}


export class ParamsContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_params; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterParams) listener.enterParams(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitParams) listener.exitParams(this);
	}
}


export class TypeparamContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typearg(): TypeargContext | undefined {
		return this.tryGetRuleContext(0, TypeargContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_typeparam; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTypeparam) listener.enterTypeparam(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTypeparam) listener.exitTypeparam(this);
	}
}


export class TypeargContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public postfix(): PostfixContext | undefined {
		return this.tryGetRuleContext(0, PostfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_typearg; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterTypearg) listener.enterTypearg(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitTypearg) listener.exitTypearg(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(ponyParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(ponyParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ponyParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_literal; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
}


export class ParamContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public infix(): InfixContext | undefined {
		return this.tryGetRuleContext(0, InfixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_param; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterParam) listener.enterParam(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitParam) listener.exitParam(this);
	}
}


export class Antlr_0Context extends ParserRuleContext {
	public binop(): BinopContext | undefined {
		return this.tryGetRuleContext(0, BinopContext);
	}
	public isop(): IsopContext | undefined {
		return this.tryGetRuleContext(0, IsopContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_antlr_0; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAntlr_0) listener.enterAntlr_0(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAntlr_0) listener.exitAntlr_0(this);
	}
}


export class Antlr_1Context extends ParserRuleContext {
	public binop(): BinopContext | undefined {
		return this.tryGetRuleContext(0, BinopContext);
	}
	public isop(): IsopContext | undefined {
		return this.tryGetRuleContext(0, IsopContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_antlr_1; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAntlr_1) listener.enterAntlr_1(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAntlr_1) listener.exitAntlr_1(this);
	}
}


export class Antlr_2Context extends ParserRuleContext {
	public dot(): DotContext | undefined {
		return this.tryGetRuleContext(0, DotContext);
	}
	public tilde(): TildeContext | undefined {
		return this.tryGetRuleContext(0, TildeContext);
	}
	public chain(): ChainContext | undefined {
		return this.tryGetRuleContext(0, ChainContext);
	}
	public typeargs(): TypeargsContext | undefined {
		return this.tryGetRuleContext(0, TypeargsContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_antlr_2; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAntlr_2) listener.enterAntlr_2(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAntlr_2) listener.exitAntlr_2(this);
	}
}


export class Antlr_3Context extends ParserRuleContext {
	public dot(): DotContext | undefined {
		return this.tryGetRuleContext(0, DotContext);
	}
	public tilde(): TildeContext | undefined {
		return this.tryGetRuleContext(0, TildeContext);
	}
	public chain(): ChainContext | undefined {
		return this.tryGetRuleContext(0, ChainContext);
	}
	public typeargs(): TypeargsContext | undefined {
		return this.tryGetRuleContext(0, TypeargsContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_antlr_3; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAntlr_3) listener.enterAntlr_3(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAntlr_3) listener.exitAntlr_3(this);
	}
}


export class Antlr_4Context extends ParserRuleContext {
	public uniontype(): UniontypeContext | undefined {
		return this.tryGetRuleContext(0, UniontypeContext);
	}
	public isecttype(): IsecttypeContext | undefined {
		return this.tryGetRuleContext(0, IsecttypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_antlr_4; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterAntlr_4) listener.enterAntlr_4(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitAntlr_4) listener.exitAntlr_4(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ponyParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ponyParser.RULE_identifier; }
	@Override
	public enterRule(listener: ponyListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: ponyListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
}


