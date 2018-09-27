// ANTLR v4 grammar
grammar pony;

// Parser

module
  : STRING? use* class_def* 
  ;

use
  : 'use' (identifier '=')? (STRING | use_ffi) ('if' infix)?
  ;

use_ffi
  : '@' (identifier | STRING) typeargs ('(' | LPAREN_NEW) params? ')' '?'?
  ;

class_def
  : ('type' | 'interface' | 'trait' | 'primitive' | 'struct' | 'class' | 'actor') ('\\' identifier (',' identifier)* '\\')? '@'? cap? identifier typeparams? ('is' type)? STRING? members
  ;

members
  : field* method*
  ;

field
  : ('var' | 'let' | 'embed') identifier ':' type ('=' infix)? STRING?
  ;

method
  : ('fun' | 'be' | 'new') ('\\' identifier (',' identifier)* '\\')? (cap | '@')? identifier typeparams? ('(' | LPAREN_NEW) params? ')' (':' type)? '?'? STRING? ('=>' rawseq)?
  ;

annotatedrawseq
  : ('\\' identifier (',' identifier)* '\\')? (exprseq | jump)
  ;

rawseq
  : exprseq
  | jump
  ;

exprseq
  : assignment (semiexpr | nosemi)?
  ;

nextexprseq
  : nextassignment (semiexpr | nosemi)?
  ;

nosemi
  : nextexprseq
  | jump
  ;

semiexpr
  : ';' (exprseq | jump)
  ;

jump
  : ('return' | 'break' | 'continue' | 'error' | 'compile_intrinsic' | 'compile_error') rawseq?
  ;

nextassignment
  : nextinfix ('=' assignment)?
  ;

assignment
  : infix ('=' assignment)?
  ;

nextinfix
  : nextterm antlr_0*
  ;

infix
  : term antlr_1*
  ;

isop
  : ('is' | 'isnt') term
  ;

binop
  : ('and' | 'or' | 'xor' | '+' | '-' | '*' | '/' | '%' | '+~' | '-~' | '*~' | '/~' | '%~' | '<<' | '>>' | '<<~' | '>>~' | '==' | '!=' | '<' | '<=' | '>=' | '>' | '==~' | '!=~' | '<~' | '<=~' | '>=~' | '>~') '?'? term
  ;

nextterm
  : 'if' ('\\' identifier (',' identifier)* '\\')? rawseq 'then' rawseq (elseif | ('else' annotatedrawseq))? 'end'
  | 'ifdef' ('\\' identifier (',' identifier)* '\\')? infix 'then' rawseq (elseifdef | ('else' annotatedrawseq))? 'end'
  | 'iftype' ('\\' identifier (',' identifier)* '\\')? iftype (elseiftype | ('else' annotatedrawseq))? 'end'
  | 'match' ('\\' identifier (',' identifier)* '\\')? rawseq caseexpr* ('else' annotatedrawseq)? 'end'
  | 'while' ('\\' identifier (',' identifier)* '\\')? rawseq 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'repeat' ('\\' identifier (',' identifier)* '\\')? rawseq 'until' annotatedrawseq ('else' annotatedrawseq)? 'end'
  | 'for' ('\\' identifier (',' identifier)* '\\')? idseq 'in' rawseq 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'with' ('\\' identifier (',' identifier)* '\\')? (withelem (',' withelem)*) 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'try' ('\\' identifier (',' identifier)* '\\')? rawseq ('else' annotatedrawseq)? ('then' annotatedrawseq)? 'end'
  | 'recover' ('\\' identifier (',' identifier)* '\\')? cap? rawseq 'end'
  | 'consume' cap? term
  | nextpattern
  | '#' postfix
  ;

term
  : 'if' ('\\' identifier (',' identifier)* '\\')? rawseq 'then' rawseq (elseif | ('else' annotatedrawseq))? 'end'
  | 'ifdef' ('\\' identifier (',' identifier)* '\\')? infix 'then' rawseq (elseifdef | ('else' annotatedrawseq))? 'end'
  | 'iftype' ('\\' identifier (',' identifier)* '\\')? iftype (elseiftype | ('else' annotatedrawseq))? 'end'
  | 'match' ('\\' identifier (',' identifier)* '\\')? rawseq caseexpr* ('else' annotatedrawseq)? 'end'
  | 'while' ('\\' identifier (',' identifier)* '\\')? rawseq 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'repeat' ('\\' identifier (',' identifier)* '\\')? rawseq 'until' annotatedrawseq ('else' annotatedrawseq)? 'end'
  | 'for' ('\\' identifier (',' identifier)* '\\')? idseq 'in' rawseq 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'with' ('\\' identifier (',' identifier)* '\\')? (withelem (',' withelem)*) 'do' rawseq ('else' annotatedrawseq)? 'end'
  | 'try' ('\\' identifier (',' identifier)* '\\')? rawseq ('else' annotatedrawseq)? ('then' annotatedrawseq)? 'end'
  | 'recover' ('\\' identifier (',' identifier)* '\\')? cap? rawseq 'end'
  | 'consume' cap? term
  | pattern
  | '#' postfix
  ;

withelem
  : idseq '=' rawseq
  ;

caseexpr
  : '|' ('\\' identifier (',' identifier)* '\\')? pattern? ('if' rawseq)? ('=>' rawseq)?
  ;

elseiftype
  : 'elseif' ('\\' identifier (',' identifier)* '\\')? iftype (elseiftype | ('else' annotatedrawseq))?
  ;

iftype
  : type '<:' type 'then' rawseq
  ;

elseifdef
  : 'elseif' ('\\' identifier (',' identifier)* '\\')? infix 'then' rawseq (elseifdef | ('else' annotatedrawseq))?
  ;

elseif
  : 'elseif' ('\\' identifier (',' identifier)* '\\')? rawseq 'then' rawseq (elseif | ('else' annotatedrawseq))?
  ;

idseq
  : identifier
  | ('(' | LPAREN_NEW) idseq_in_seq (',' idseq_in_seq)* ')'
  ;

idseq_in_seq
  : identifier
  | ('(' | LPAREN_NEW) idseq_in_seq (',' idseq_in_seq)* ')'
  ;

nextpattern
  : ('var' | 'let' | 'embed') identifier (':' type)?
  | nextparampattern
  ;

pattern
  : ('var' | 'let' | 'embed') identifier (':' type)?
  | parampattern
  ;

nextparampattern
  : ('not' | 'addressof' | MINUS_NEW | MINUS_TILDE_NEW | 'digestof') parampattern
  | nextpostfix
  ;

parampattern
  : ('not' | 'addressof' | '-' | '-~' | MINUS_NEW | MINUS_TILDE_NEW | 'digestof') parampattern
  | postfix
  ;

nextpostfix
  : nextatom antlr_2*
  ;

postfix
  : atom antlr_3*
  ;

call
  : '(' positional? named? ')' '?'?
  ;

chain
  : '.>' identifier
  ;

tilde
  : '~' identifier
  ;

dot
  : '.' identifier
  ;

nextatom
  : identifier
  | 'this'
  | literal
  | LPAREN_NEW rawseq tuple? ')'
  | LSQUARE_NEW ('as' type ':')? rawseq? ']'
  | 'object' ('\\' identifier (',' identifier)* '\\')? cap? ('is' type)? members 'end'
  | '{' ('\\' identifier (',' identifier)* '\\')? cap? identifier? typeparams? ('(' | LPAREN_NEW) lambdaparams? ')' lambdacaptures? (':' type)? '?'? '=>' rawseq '}' cap?
  | '@{' ('\\' identifier (',' identifier)* '\\')? cap? identifier? typeparams? ('(' | LPAREN_NEW) lambdaparams? ')' lambdacaptures? (':' type)? '?'? '=>' rawseq '}' cap?
  | '@' (identifier | STRING) typeargs? ('(' | LPAREN_NEW) positional? named? ')' '?'?
  | '__loc'
  ;

atom
  : identifier
  | 'this'
  | literal
  | ('(' | LPAREN_NEW) rawseq tuple? ')'
  | ('[' | LSQUARE_NEW) ('as' type ':')? rawseq? ']'
  | 'object' ('\\' identifier (',' identifier)* '\\')? cap? ('is' type)? members 'end'
  | '{' ('\\' identifier (',' identifier)* '\\')? cap? identifier? typeparams? ('(' | LPAREN_NEW) lambdaparams? ')' lambdacaptures? (':' type)? '?'? '=>' rawseq '}' cap?
  | '@{' ('\\' identifier (',' identifier)* '\\')? cap? identifier? typeparams? ('(' | LPAREN_NEW) lambdaparams? ')' lambdacaptures? (':' type)? '?'? '=>' rawseq '}' cap?
  | '@' (identifier | STRING) typeargs? ('(' | LPAREN_NEW) positional? named? ')' '?'?
  | '__loc'
  ;

tuple
  : ',' rawseq (',' rawseq)*
  ;

lambdacaptures
  : ('(' | LPAREN_NEW) (lambdacapture | 'this') (',' (lambdacapture | 'this'))* ')'
  ;

lambdacapture
  : identifier (':' type)? ('=' infix)?
  ;

lambdaparams
  : lambdaparam (',' lambdaparam)*
  ;

lambdaparam
  : identifier (':' type)? ('=' infix)?
  ;

positional
  : rawseq (',' rawseq)*
  ;

named
  : 'where' namedarg (',' namedarg)*
  ;

namedarg
  : identifier '=' rawseq
  ;

type
  : atomtype ('->' type)?
  ;

atomtype
  : 'this'
  | cap
  | ('(' | LPAREN_NEW) infixtype tupletype? ')'
  | nominal
  | lambdatype
  | barelambdatype
  ;

barelambdatype
  : '@{' cap? identifier? typeparams? ('(' | LPAREN_NEW) (type (',' type)*)? ')' (':' type)? '?'? '}' (cap | gencap)? ('^' | '!')?
  ;

lambdatype
  : '{' cap? identifier? typeparams? ('(' | LPAREN_NEW) (type (',' type)*)? ')' (':' type)? '?'? '}' (cap | gencap)? ('^' | '!')?
  ;

tupletype
  : ',' infixtype (',' infixtype)*
  ;

infixtype
  : type antlr_4*
  ;

isecttype
  : '&' type
  ;

uniontype
  : '|' type
  ;

nominal
  : identifier ('.' identifier)? typeargs? (cap | gencap)? ('^' | '!')?
  ;

gencap
  : '#read'
  | '#send'
  | '#share'
  | '#alias'
  | '#any'
  ;

cap
  : 'iso'
  | 'trn'
  | 'ref'
  | 'val'
  | 'box'
  | 'tag'
  ;

typeargs
  : '[' typearg (',' typearg)* ']'
  ;

typeparams
  : ('[' | LSQUARE_NEW) typeparam (',' typeparam)* ']'
  ;

params
  : (param | '...') (',' (param | '...'))*
  ;

typeparam
  : identifier (':' type)? ('=' typearg)?
  ;

typearg
  : type
  | literal
  | '#' postfix
  ;

literal
  : 'true'
  | 'false'
  | INT
  | FLOAT
  | STRING
  ;

param
  : identifier ':' type ('=' infix)?
  ;

antlr_0
  : binop
  | isop
  | 'as' type
  ;

antlr_1
  : binop
  | isop
  | 'as' type
  ;

antlr_2
  : dot
  | tilde
  | chain
  | typeargs
  | call
  ;

antlr_3
  : dot
  | tilde
  | chain
  | typeargs
  | call
  ;

antlr_4
  : uniontype
  | isecttype
  ;

// Rules of the form antlr_* are only present to avoid a bug in the
// interpreter

/* Precedence

Value:
1. postfix
2. unop
3. binop
4. =
5. seq
6. ,

Type:
1. ->
2. & |
3. ,
*/

identifier
 : ID
 ;

// Lexer

ID
  : LETTER (LETTER | DIGIT | '_' | '\'')*
  | '_' (LETTER | DIGIT | '_' | '\'')*
  ;

INT
  : DIGIT (DIGIT | '_')*
  | '0' 'x' (HEX | '_')+
  | '0' 'b' (BINARY | '_')+
  | '\'' CHAR_CHAR* '\''
  ;

FLOAT
  : DIGIT (DIGIT | '_')* ('.' DIGIT (DIGIT | '_')*)? EXP?
  ;

STRING
  : '"' STRING_CHAR* '"'
  | '"""' (('"' | '""') ? ~'"')* '"""' '"'*
  ;

LPAREN_NEW
  : NEWLINE '('
  ;

LSQUARE_NEW
  : NEWLINE '['
  ;

MINUS_NEW
  : NEWLINE '-'
  ;

MINUS_TILDE_NEW
  : NEWLINE '-~'
  ;

LINECOMMENT
  : '//' ~('\n')* -> channel(HIDDEN)
  ;

NESTEDCOMMENT
  : '/*' (NESTEDCOMMENT | '/' ~'*' | ~('*' | '/') | ('*'+ ~('*' | '/')))* '*'+ '/' -> channel(HIDDEN)
  ;

WS
  : (' ' | '\t' | '\r')+ -> channel(HIDDEN)
  ;

NEWLINE
  : '\n' (' ' | '\t' | '\r')* -> channel(HIDDEN)
  ;

fragment
CHAR_CHAR
  : '\\' '\'' | CHAR_ESC
  | ~('\'' | '\\')
  ;

fragment
STRING_CHAR
  : '\\' '"' | ESC
  | ~('"' | '\\')
  ;

fragment
EXP
  : ('e' | 'E') ('+' | '-')? (DIGIT | '_')+
  ;

fragment
LETTER
  : 'a'..'z' | 'A'..'Z'
  ;

fragment
BINARY
  : '0'..'1'
  ;

fragment
DIGIT
  : '0'..'9'
  ;

fragment
HEX
  : DIGIT | 'a'..'f' | 'A'..'F'
  ;

fragment
ESC
  : CHAR_ESC
  | UNICODE_ESC
  | UNICODE2_ESC
  ;

fragment
CHAR_ESC
  : '\\' ('a' | 'b' | 'e' | 'f' | 'n' | 'r' | 't' | 'v' | '\\' | '0')
  | HEX_ESC
  ;

fragment
HEX_ESC
  : '\\' 'x' HEX HEX
  ;

fragment
UNICODE_ESC
  : '\\' 'u' HEX HEX HEX HEX
  ;

fragment
UNICODE2_ESC
  : '\\' 'U' HEX HEX HEX HEX HEX HEX
  ;

