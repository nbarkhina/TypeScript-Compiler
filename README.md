# TypeScript-Compiler
Allows compiling of TypeScript in the Browser, no server side code! uses Monaco Editor for code syntax highlighting

View demo here - https://www.neilb.net/tscompiler

# Description
TypeScript is an amazing extension of the Javascript ecosystem. It allows you to write Javascript that scales and also gets checked for misspellings, strongly typed variables and many other features. Normally you would use TypeScript as part of your build pipeline in order to convert it down to plain Javascript that the browser can understand. However this example shows how even in the Browser you can convert to JS using the Typescript JS library. 

To run locally first run the command - 

`npm install`

Or you can click on the link above to see a demo

This example itself was written in TypeScript and Compiled to Javascript which are both included in this repo. I am using the AMD Module Loading Strategy with the RequireJS library in order to load the js. This currenly targets ES6 so IE11 will not work. One of the challenges I had was getting the Typings for the TypeScript Compiler to play nice with my tsconfig settings. I had to first import the Typings file and comment out the following line

```typescript
export = ts;
```

Otherwise the ts namespace was not appearing in VS Code. If you have any suggestions I am open to alernate approaches. Or you can E-mail me with any questions.

Thanks


