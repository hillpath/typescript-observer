import Observer from "./Observer";
export class View implements Observer{
    
    constructor() {

    }

    
    public update(data:number){
        document.querySelector("#square").innerHTML = `square ${data}`
        document.querySelector("#square").setAttribute("data-number", String(data));
    }
}
export default View;