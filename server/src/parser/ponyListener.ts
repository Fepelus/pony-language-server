// Generated from src/parser/pony.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ModuleContext } from './ponyParser';
import { UseContext } from './ponyParser';
import { Use_ffiContext } from './ponyParser';
import { Class_defContext } from './ponyParser';
import { MembersContext } from './ponyParser';
import { FieldContext } from './ponyParser';
import { MethodContext } from './ponyParser';
import { AnnotatedrawseqContext } from './ponyParser';
import { RawseqContext } from './ponyParser';
import { ExprseqContext } from './ponyParser';
import { NextexprseqContext } from './ponyParser';
import { NosemiContext } from './ponyParser';
import { SemiexprContext } from './ponyParser';
import { JumpContext } from './ponyParser';
import { NextassignmentContext } from './ponyParser';
import { AssignmentContext } from './ponyParser';
import { NextinfixContext } from './ponyParser';
import { InfixContext } from './ponyParser';
import { IsopContext } from './ponyParser';
import { BinopContext } from './ponyParser';
import { NexttermContext } from './ponyParser';
import { TermContext } from './ponyParser';
import { WithelemContext } from './ponyParser';
import { CaseexprContext } from './ponyParser';
import { ElseiftypeContext } from './ponyParser';
import { IftypeContext } from './ponyParser';
import { ElseifdefContext } from './ponyParser';
import { ElseifContext } from './ponyParser';
import { IdseqContext } from './ponyParser';
import { Idseq_in_seqContext } from './ponyParser';
import { NextpatternContext } from './ponyParser';
import { PatternContext } from './ponyParser';
import { NextparampatternContext } from './ponyParser';
import { ParampatternContext } from './ponyParser';
import { NextpostfixContext } from './ponyParser';
import { PostfixContext } from './ponyParser';
import { CallContext } from './ponyParser';
import { ChainContext } from './ponyParser';
import { TildeContext } from './ponyParser';
import { DotContext } from './ponyParser';
import { NextatomContext } from './ponyParser';
import { AtomContext } from './ponyParser';
import { TupleContext } from './ponyParser';
import { LambdacapturesContext } from './ponyParser';
import { LambdacaptureContext } from './ponyParser';
import { LambdaparamsContext } from './ponyParser';
import { LambdaparamContext } from './ponyParser';
import { PositionalContext } from './ponyParser';
import { NamedContext } from './ponyParser';
import { NamedargContext } from './ponyParser';
import { TypeContext } from './ponyParser';
import { AtomtypeContext } from './ponyParser';
import { BarelambdatypeContext } from './ponyParser';
import { LambdatypeContext } from './ponyParser';
import { TupletypeContext } from './ponyParser';
import { InfixtypeContext } from './ponyParser';
import { IsecttypeContext } from './ponyParser';
import { UniontypeContext } from './ponyParser';
import { NominalContext } from './ponyParser';
import { GencapContext } from './ponyParser';
import { CapContext } from './ponyParser';
import { TypeargsContext } from './ponyParser';
import { TypeparamsContext } from './ponyParser';
import { ParamsContext } from './ponyParser';
import { TypeparamContext } from './ponyParser';
import { TypeargContext } from './ponyParser';
import { LiteralContext } from './ponyParser';
import { ParamContext } from './ponyParser';
import { Antlr_0Context } from './ponyParser';
import { Antlr_1Context } from './ponyParser';
import { Antlr_2Context } from './ponyParser';
import { Antlr_3Context } from './ponyParser';
import { Antlr_4Context } from './ponyParser';
import { IdentifierContext } from './ponyParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ponyParser`.
 */
export interface ponyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ponyParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.use`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.use`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.use_ffi`.
	 * @param ctx the parse tree
	 */
	enterUse_ffi?: (ctx: Use_ffiContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.use_ffi`.
	 * @param ctx the parse tree
	 */
	exitUse_ffi?: (ctx: Use_ffiContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.class_def`.
	 * @param ctx the parse tree
	 */
	enterClass_def?: (ctx: Class_defContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.class_def`.
	 * @param ctx the parse tree
	 */
	exitClass_def?: (ctx: Class_defContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.members`.
	 * @param ctx the parse tree
	 */
	enterMembers?: (ctx: MembersContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.members`.
	 * @param ctx the parse tree
	 */
	exitMembers?: (ctx: MembersContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.annotatedrawseq`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedrawseq?: (ctx: AnnotatedrawseqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.annotatedrawseq`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedrawseq?: (ctx: AnnotatedrawseqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.rawseq`.
	 * @param ctx the parse tree
	 */
	enterRawseq?: (ctx: RawseqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.rawseq`.
	 * @param ctx the parse tree
	 */
	exitRawseq?: (ctx: RawseqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.exprseq`.
	 * @param ctx the parse tree
	 */
	enterExprseq?: (ctx: ExprseqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.exprseq`.
	 * @param ctx the parse tree
	 */
	exitExprseq?: (ctx: ExprseqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextexprseq`.
	 * @param ctx the parse tree
	 */
	enterNextexprseq?: (ctx: NextexprseqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextexprseq`.
	 * @param ctx the parse tree
	 */
	exitNextexprseq?: (ctx: NextexprseqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nosemi`.
	 * @param ctx the parse tree
	 */
	enterNosemi?: (ctx: NosemiContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nosemi`.
	 * @param ctx the parse tree
	 */
	exitNosemi?: (ctx: NosemiContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.semiexpr`.
	 * @param ctx the parse tree
	 */
	enterSemiexpr?: (ctx: SemiexprContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.semiexpr`.
	 * @param ctx the parse tree
	 */
	exitSemiexpr?: (ctx: SemiexprContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.jump`.
	 * @param ctx the parse tree
	 */
	enterJump?: (ctx: JumpContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.jump`.
	 * @param ctx the parse tree
	 */
	exitJump?: (ctx: JumpContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextassignment`.
	 * @param ctx the parse tree
	 */
	enterNextassignment?: (ctx: NextassignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextassignment`.
	 * @param ctx the parse tree
	 */
	exitNextassignment?: (ctx: NextassignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextinfix`.
	 * @param ctx the parse tree
	 */
	enterNextinfix?: (ctx: NextinfixContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextinfix`.
	 * @param ctx the parse tree
	 */
	exitNextinfix?: (ctx: NextinfixContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.infix`.
	 * @param ctx the parse tree
	 */
	enterInfix?: (ctx: InfixContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.infix`.
	 * @param ctx the parse tree
	 */
	exitInfix?: (ctx: InfixContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.isop`.
	 * @param ctx the parse tree
	 */
	enterIsop?: (ctx: IsopContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.isop`.
	 * @param ctx the parse tree
	 */
	exitIsop?: (ctx: IsopContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextterm`.
	 * @param ctx the parse tree
	 */
	enterNextterm?: (ctx: NexttermContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextterm`.
	 * @param ctx the parse tree
	 */
	exitNextterm?: (ctx: NexttermContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.withelem`.
	 * @param ctx the parse tree
	 */
	enterWithelem?: (ctx: WithelemContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.withelem`.
	 * @param ctx the parse tree
	 */
	exitWithelem?: (ctx: WithelemContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.caseexpr`.
	 * @param ctx the parse tree
	 */
	enterCaseexpr?: (ctx: CaseexprContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.caseexpr`.
	 * @param ctx the parse tree
	 */
	exitCaseexpr?: (ctx: CaseexprContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.elseiftype`.
	 * @param ctx the parse tree
	 */
	enterElseiftype?: (ctx: ElseiftypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.elseiftype`.
	 * @param ctx the parse tree
	 */
	exitElseiftype?: (ctx: ElseiftypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.iftype`.
	 * @param ctx the parse tree
	 */
	enterIftype?: (ctx: IftypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.iftype`.
	 * @param ctx the parse tree
	 */
	exitIftype?: (ctx: IftypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.elseifdef`.
	 * @param ctx the parse tree
	 */
	enterElseifdef?: (ctx: ElseifdefContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.elseifdef`.
	 * @param ctx the parse tree
	 */
	exitElseifdef?: (ctx: ElseifdefContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.idseq`.
	 * @param ctx the parse tree
	 */
	enterIdseq?: (ctx: IdseqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.idseq`.
	 * @param ctx the parse tree
	 */
	exitIdseq?: (ctx: IdseqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.idseq_in_seq`.
	 * @param ctx the parse tree
	 */
	enterIdseq_in_seq?: (ctx: Idseq_in_seqContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.idseq_in_seq`.
	 * @param ctx the parse tree
	 */
	exitIdseq_in_seq?: (ctx: Idseq_in_seqContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextpattern`.
	 * @param ctx the parse tree
	 */
	enterNextpattern?: (ctx: NextpatternContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextpattern`.
	 * @param ctx the parse tree
	 */
	exitNextpattern?: (ctx: NextpatternContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextparampattern`.
	 * @param ctx the parse tree
	 */
	enterNextparampattern?: (ctx: NextparampatternContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextparampattern`.
	 * @param ctx the parse tree
	 */
	exitNextparampattern?: (ctx: NextparampatternContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.parampattern`.
	 * @param ctx the parse tree
	 */
	enterParampattern?: (ctx: ParampatternContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.parampattern`.
	 * @param ctx the parse tree
	 */
	exitParampattern?: (ctx: ParampatternContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextpostfix`.
	 * @param ctx the parse tree
	 */
	enterNextpostfix?: (ctx: NextpostfixContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextpostfix`.
	 * @param ctx the parse tree
	 */
	exitNextpostfix?: (ctx: NextpostfixContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.postfix`.
	 * @param ctx the parse tree
	 */
	enterPostfix?: (ctx: PostfixContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.postfix`.
	 * @param ctx the parse tree
	 */
	exitPostfix?: (ctx: PostfixContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.chain`.
	 * @param ctx the parse tree
	 */
	enterChain?: (ctx: ChainContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.chain`.
	 * @param ctx the parse tree
	 */
	exitChain?: (ctx: ChainContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.tilde`.
	 * @param ctx the parse tree
	 */
	enterTilde?: (ctx: TildeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.tilde`.
	 * @param ctx the parse tree
	 */
	exitTilde?: (ctx: TildeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.dot`.
	 * @param ctx the parse tree
	 */
	enterDot?: (ctx: DotContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.dot`.
	 * @param ctx the parse tree
	 */
	exitDot?: (ctx: DotContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nextatom`.
	 * @param ctx the parse tree
	 */
	enterNextatom?: (ctx: NextatomContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nextatom`.
	 * @param ctx the parse tree
	 */
	exitNextatom?: (ctx: NextatomContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.lambdacaptures`.
	 * @param ctx the parse tree
	 */
	enterLambdacaptures?: (ctx: LambdacapturesContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.lambdacaptures`.
	 * @param ctx the parse tree
	 */
	exitLambdacaptures?: (ctx: LambdacapturesContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.lambdacapture`.
	 * @param ctx the parse tree
	 */
	enterLambdacapture?: (ctx: LambdacaptureContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.lambdacapture`.
	 * @param ctx the parse tree
	 */
	exitLambdacapture?: (ctx: LambdacaptureContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.lambdaparams`.
	 * @param ctx the parse tree
	 */
	enterLambdaparams?: (ctx: LambdaparamsContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.lambdaparams`.
	 * @param ctx the parse tree
	 */
	exitLambdaparams?: (ctx: LambdaparamsContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.lambdaparam`.
	 * @param ctx the parse tree
	 */
	enterLambdaparam?: (ctx: LambdaparamContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.lambdaparam`.
	 * @param ctx the parse tree
	 */
	exitLambdaparam?: (ctx: LambdaparamContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.positional`.
	 * @param ctx the parse tree
	 */
	enterPositional?: (ctx: PositionalContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.positional`.
	 * @param ctx the parse tree
	 */
	exitPositional?: (ctx: PositionalContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.named`.
	 * @param ctx the parse tree
	 */
	enterNamed?: (ctx: NamedContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.named`.
	 * @param ctx the parse tree
	 */
	exitNamed?: (ctx: NamedContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.namedarg`.
	 * @param ctx the parse tree
	 */
	enterNamedarg?: (ctx: NamedargContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.namedarg`.
	 * @param ctx the parse tree
	 */
	exitNamedarg?: (ctx: NamedargContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.atomtype`.
	 * @param ctx the parse tree
	 */
	enterAtomtype?: (ctx: AtomtypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.atomtype`.
	 * @param ctx the parse tree
	 */
	exitAtomtype?: (ctx: AtomtypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.barelambdatype`.
	 * @param ctx the parse tree
	 */
	enterBarelambdatype?: (ctx: BarelambdatypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.barelambdatype`.
	 * @param ctx the parse tree
	 */
	exitBarelambdatype?: (ctx: BarelambdatypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.lambdatype`.
	 * @param ctx the parse tree
	 */
	enterLambdatype?: (ctx: LambdatypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.lambdatype`.
	 * @param ctx the parse tree
	 */
	exitLambdatype?: (ctx: LambdatypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.tupletype`.
	 * @param ctx the parse tree
	 */
	enterTupletype?: (ctx: TupletypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.tupletype`.
	 * @param ctx the parse tree
	 */
	exitTupletype?: (ctx: TupletypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.infixtype`.
	 * @param ctx the parse tree
	 */
	enterInfixtype?: (ctx: InfixtypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.infixtype`.
	 * @param ctx the parse tree
	 */
	exitInfixtype?: (ctx: InfixtypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.isecttype`.
	 * @param ctx the parse tree
	 */
	enterIsecttype?: (ctx: IsecttypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.isecttype`.
	 * @param ctx the parse tree
	 */
	exitIsecttype?: (ctx: IsecttypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.uniontype`.
	 * @param ctx the parse tree
	 */
	enterUniontype?: (ctx: UniontypeContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.uniontype`.
	 * @param ctx the parse tree
	 */
	exitUniontype?: (ctx: UniontypeContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.nominal`.
	 * @param ctx the parse tree
	 */
	enterNominal?: (ctx: NominalContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.nominal`.
	 * @param ctx the parse tree
	 */
	exitNominal?: (ctx: NominalContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.gencap`.
	 * @param ctx the parse tree
	 */
	enterGencap?: (ctx: GencapContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.gencap`.
	 * @param ctx the parse tree
	 */
	exitGencap?: (ctx: GencapContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.cap`.
	 * @param ctx the parse tree
	 */
	enterCap?: (ctx: CapContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.cap`.
	 * @param ctx the parse tree
	 */
	exitCap?: (ctx: CapContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.typeargs`.
	 * @param ctx the parse tree
	 */
	enterTypeargs?: (ctx: TypeargsContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.typeargs`.
	 * @param ctx the parse tree
	 */
	exitTypeargs?: (ctx: TypeargsContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.typeparams`.
	 * @param ctx the parse tree
	 */
	enterTypeparams?: (ctx: TypeparamsContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.typeparams`.
	 * @param ctx the parse tree
	 */
	exitTypeparams?: (ctx: TypeparamsContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.typeparam`.
	 * @param ctx the parse tree
	 */
	enterTypeparam?: (ctx: TypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.typeparam`.
	 * @param ctx the parse tree
	 */
	exitTypeparam?: (ctx: TypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.typearg`.
	 * @param ctx the parse tree
	 */
	enterTypearg?: (ctx: TypeargContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.typearg`.
	 * @param ctx the parse tree
	 */
	exitTypearg?: (ctx: TypeargContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.antlr_0`.
	 * @param ctx the parse tree
	 */
	enterAntlr_0?: (ctx: Antlr_0Context) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.antlr_0`.
	 * @param ctx the parse tree
	 */
	exitAntlr_0?: (ctx: Antlr_0Context) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.antlr_1`.
	 * @param ctx the parse tree
	 */
	enterAntlr_1?: (ctx: Antlr_1Context) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.antlr_1`.
	 * @param ctx the parse tree
	 */
	exitAntlr_1?: (ctx: Antlr_1Context) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.antlr_2`.
	 * @param ctx the parse tree
	 */
	enterAntlr_2?: (ctx: Antlr_2Context) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.antlr_2`.
	 * @param ctx the parse tree
	 */
	exitAntlr_2?: (ctx: Antlr_2Context) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.antlr_3`.
	 * @param ctx the parse tree
	 */
	enterAntlr_3?: (ctx: Antlr_3Context) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.antlr_3`.
	 * @param ctx the parse tree
	 */
	exitAntlr_3?: (ctx: Antlr_3Context) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.antlr_4`.
	 * @param ctx the parse tree
	 */
	enterAntlr_4?: (ctx: Antlr_4Context) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.antlr_4`.
	 * @param ctx the parse tree
	 */
	exitAntlr_4?: (ctx: Antlr_4Context) => void;

	/**
	 * Enter a parse tree produced by `ponyParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ponyParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

