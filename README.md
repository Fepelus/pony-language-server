# Pony Language Server

Very much first-draft of a pony language server

## Compile and Run

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`
- In the [Extension Development Host] instance of VSCode, open a document in 'pony' language mode.

## Discussion

This is the sample code from [The VSCODE website](https://code.visualstudio.com/docs/extensions/example-language-server)
with a parser generated from the ANTLR grammar from [the ponyc source repository](https://github.com/ponylang/ponyc/blob/master/pony.g)

