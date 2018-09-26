import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Recognizer, RecognitionException, Token } from 'antlr4ts';
import { ParseTreeWalker, ParseTreeListener } from 'antlr4ts/tree';
import { ponyLexer } from './ponyLexer';
import { ponyParser, IdentifierContext, FieldContext, NominalContext, TypeparamContext, ParamContext, Class_defContext, MethodContext, PatternContext, AtomContext, NextpatternContext, NextatomContext } from './ponyParser';
import { ponyListener } from './ponyListener';
import { Diagnostic, DiagnosticSeverity, TextDocument, Position } from 'vscode-languageserver';

export function parse(input: TextDocument) {
    const inputStream = new ANTLRInputStream(input.getText());
    const lexer = new ponyLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ponyParser(tokenStream);
    
    
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const lexerErrors = new PonyLexerErrorListener(input);
    const parserErrors = new PonyParserErrorListener(input);
    lexer.addErrorListener(lexerErrors);
    parser.addErrorListener(parserErrors);

    const root = parser.module();

    const listener = new NamesListener();
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, root);

    return new ParserReturns(
        lexerErrors.messages.concat(parserErrors.messages),
        listener.names
    );
}

export class ParserReturns {
    errors: Diagnostic[];
    names: Name[];
    constructor(e: Diagnostic[], n: Name[]) {
        this.errors = e;
        this.names = n;
    }
}


class PonyLexerErrorListener implements ANTLRErrorListener<number> {
    messages: Diagnostic[];
    textDocument: TextDocument;
    constructor(input: TextDocument) {
        this.messages = [];
        this.textDocument = input;
    }

    syntaxError(
        _recognizer: Recognizer<number, any>,
        _offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        _e: RecognitionException | undefined
    ) {

		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: Position.create(line, charPositionInLine),
				end: Position.create(line, charPositionInLine)
			},
			message: msg,
			source: 'lex'
		};
        this.messages.push(diagnostic);
    }

}

class PonyParserErrorListener implements ANTLRErrorListener<Token> {
    messages: Diagnostic[];
    textDocument: TextDocument;

    constructor(input: TextDocument) {
        this.messages = [];
        this.textDocument = input;
    }

    syntaxError(
        _recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        _line: number,
        _charPositionInLine: number,
        msg: string,
        _e: RecognitionException | undefined
    ) {
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: this.textDocument.positionAt(offendingSymbol.startIndex),
				end: this.textDocument.positionAt(offendingSymbol.stopIndex)
			},
			message: msg,
			source: 'prs'
		};
        this.messages.push(diagnostic);
    }

}

class NamesListener implements ponyListener {
    names: Name[];

    constructor() {
        this.names = [];
    }

    exitIdentifier(ctx: IdentifierContext) {

        let name: string = "";
        let label: string = "";

        if (ctx.parent instanceof FieldContext) {
            name = ctx.text;
            label = "(field) " + name;
        }

        if (ctx.parent instanceof TypeparamContext) {
            name = ctx.text;
            label = "(type) " + name;
        }

        if (ctx.parent instanceof ParamContext) {
            name = ctx.text;
            label = "(param) " + name;
        }

        if (ctx.parent instanceof Class_defContext) {
            name = ctx.text;
            label = "(class) " + name;
        }

        if (ctx.parent instanceof MethodContext) {
            name = ctx.text;
            label = "(method) " + name;
        }

        if (ctx.parent instanceof PatternContext || ctx.parent instanceof NextpatternContext) {
            name = ctx.text;
            label = "(variable) " + name;
        }

        if (name !== "") {
            this.names.push(new Name(
                name,
                label,
                ctx.stop.line - 1, 
                ctx.start.charPositionInLine, 
                ctx.start.charPositionInLine + ctx.text.length - 1
            ));
        }
    }
}

export class Name {
    name: string;
    label: string;
    line: number;
    start: number;
    end: number;
    constructor(nm: string, lbl: string, ln: number, s: number, e: number) {
        this.name = nm;
        this.label = lbl;
        this.line = ln;
        this.start = s;
        this.end = e;
    }
}