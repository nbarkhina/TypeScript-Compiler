declare var window,rivets,ts;


export class MyApp {

    constructor() {
    
        this.bindRivets();
        
    }

    bindRivets(){
        rivets.bind($('body'), {data:this});
        
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

window.myApp = new MyApp();