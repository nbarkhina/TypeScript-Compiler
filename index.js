define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MyApp {
        constructor() {
            this.bindRivets();
        }
        bindRivets() {
            rivets.bind($('body'), { data: this });
        }
        btnClick() {
            // $("#mydiv").load('mytable.html',function(){
            //     window.myApp.bindTable();
            //     window.myApp.bindRivets();
            // });
            let source = `export class MyClass{
            name:string;
            age:number;
            printMe(){
                console.log(this.name + this.age);
            }
        }`;
            let result = ts.transpileModule(source, {
                compilerOptions: {
                    module: ts.ModuleKind.AMD,
                    target: "es6"
                }
            });
            console.log(result.outputText);
            // $("#mydiv").html(result.outputText);
            window.myEditor2.setValue(result.outputText);
        }
    }
    exports.MyApp = MyApp;
    window.myApp = new MyApp();
});
//# sourceMappingURL=index.js.map