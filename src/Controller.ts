import Model from "./Model";
import View from "./View";

export class Controller {
    
    private model:Model;
    private view:View;

    constructor(model:Model, view:View) {
        this.model = model;
        this.view = view;
        
    }

}
export default Controller;