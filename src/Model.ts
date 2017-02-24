import Observer from "./Observer";
export class Model {
    private data:number;
    private observerList:Array<Observer> = new Array<Observer>();


    public squareof(value: number) {
        this.data = value * value;
        this.notifiyObservers();
    }

    public  registObserver(o:Observer){
        this.observerList.push(o);
    }

    public notifiyObservers(){

        for( var index in this.observerList){
            var o = this.observerList[index];
            o.update(this.data);
        }
    }

}
export default Model;