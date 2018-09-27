const https = require('https');
const fs = require('fs');

const outputFile = process.argv[2];

https.get('https://raw.githubusercontent.com/ponylang/ponyc/master/pony.g', (resp) => {
  let data = '';
  resp.on('data', (chunk) => data += chunk);
  resp.on('end', () => {
    let mungedContent = addIdentifierRule(convertToAntlr4(data));
    fs.writeFileSync(outputFile, mungedContent);
  });
}).on("error", (err) => console.log("Error: " + err.message));


function convertToAntlr4(input) {
  let updated = input
    .replace('ANTLR v3 grammar', 'ANTLR v4 grammar')
    .replace(/ {\$channel = HIDDEN;}/g, " -> channel(HIDDEN)");
  return omitLines(updated, 3, 6);
}

// Returns a string with the `length` lines of the input, starting from the (zero-based) line numbered `start`, omitted.
function omitLines(input, start, length) {
  let updated = input.split("\n");
  updated.splice(start, length);
  return updated.join("\n");
}

// Because we want to be able to add a listener in the parser for handling IDs
function addIdentifierRule(input) {
   return input.replace(/\/\/ Lexer\n\nID/, 'THEORIGINALid')
    .replace(/\bID\b/g, "identifier")
    .replace('THEORIGINALid', 'identifier\n : ID\n ;\n\n// Lexer\n\nID');
}
