requirejs.config({
    paths: {
        "vs": "node_modules/monaco-editor/min/vs"
    }
});
var options = {
    value: [
        `export class MyClass{
  name:string;
  age:number;
  printMe(){
      console.log(this.name + this.age);
  }
}`
    ].join('\n'),
    language: 'typescript',
    theme: "vs-dark",
    vertical: 'visible',
    horizontal: 'visible',
    automaticLayout: 'true'
};
var options2 = {
    value: [''
    ].join('\n'),
    language: 'javascript',
    theme: "vs-dark",
    vertical: 'visible',
    horizontal: 'visible',
    automaticLayout: 'true'
};
require(["vs/editor/editor.main"], function () {
    window["myEditor"] = monaco.editor.create(document.getElementById('container'), options);
});
require(["vs/editor/editor.main"], function () {
    window["myEditor2"] = monaco.editor.create(document.getElementById('container2'), options2);
});
require(["index"]);
//# sourceMappingURL=config.js.map