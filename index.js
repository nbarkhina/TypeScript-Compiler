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
            let source = window.myEditor.getValue();
            let result = ts.transpileModule(source, {
                compilerOptions: {
                    module: ts.ModuleKind.AMD,
                    target: ts.ScriptTarget.ES2015,
                    moduleResolution: ts.ModuleResolutionKind.NodeJs
                }
            });
            console.log(result);
            window.myEditor2.setValue(result.outputText);
        }
    }
    exports.MyApp = MyApp;
    window.myApp = new MyApp();
});
//# sourceMappingURL=index.js.map