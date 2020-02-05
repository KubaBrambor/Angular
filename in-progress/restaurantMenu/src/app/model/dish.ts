export class Dish {
    private id:number;
    private name:string;
    private price:number;
    private hide:boolean = false;

    constructor(id, name, price){
        this.id = id,
        this.name = name,
        this.price = price
    }

    public get $id(){
        return this.id;
    }
    public get $name(){
        return this.name;
    }
    public get $price(){
        return this.price;
    }
    public get $hide(){
        return this.hide;
    }

    public set $id(value:number){
        this.id = value;
    }
    public set $name(value:string){
        this.name = value;
    }
    public set $price(value:number){
        this.price = value;
    }

    public $hideFunc():void{
        this.hide = !this.hide;
        console.log(this.hide);
    }
}
