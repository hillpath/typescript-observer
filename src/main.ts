import Model from "./Model";
import View from "./View";
import Controller from "./Controller";

class calc {
    
    view:View = new View();
    model:Model = new Model();
    controller:Controller = null;
    constructor() {
       
        console.log("init calc");

        
        this.model.registObserver(this.view);
        this.controller = new Controller(this.model, this.view);

    }

    public clickButton(data:number){
        this.model.squareof(data);
    }

}

(<any>window).calc = calc;