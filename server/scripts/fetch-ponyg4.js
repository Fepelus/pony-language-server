const wget = require('node-wget');
const fs = require('fs');

const outputFile = process.argv[2];

wget({
        url:  'https://raw.githubusercontent.com/ponylang/ponyc/master/pony.g',
        dest: '/tmp/', timeout: 2000
    },
    function (error, response, body) {
        if (error) {
            console.error('--- error:');
            console.error(error);
						return;
        }
				fs.writeFileSync(outputFile, convertToAntlr4(body));
    }
);

/*

// Lexer
identifier
 : ID
 ;
ID

*/

function convertToAntlr4(input) {
  let first = input
    .replace('ANTLR v3 grammar', 'ANTLR v4 grammar')
    .replace('grammar pony;', 'grammar pony;')
    .replace(/ {\$channel = HIDDEN;}/g, " -> channel(HIDDEN)")
    .replace(/\/\/ Lexer\n\nID/, 'THEORIGINALid')
    .replace(/\bID\b/g, "identifier")
    .replace('THEORIGINALid', '//  Because I want a listener rule for the ID\nidentifier\n : ID\n ;\n\n// Lexer\n\nID')
    .split("\n");
  first.splice(3,6);
  return first.join("\n");
}
