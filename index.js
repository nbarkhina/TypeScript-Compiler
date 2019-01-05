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
            let source = window.myEditor.getValue();
            let result = ts.transpileModule(source, {
                compilerOptions: {
                    module: ts.ModuleKind.None,
                    target: "es6",
                    moduleResolution: "node",
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