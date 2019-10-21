import { Dish } from '../dish';

export class Drink extends Dish{
    private mililiters:number;
    
    constructor(id, name, price, mililiters){
        super(id, name, price);
        this.mililiters = mililiters;
    }

    get $mililiters(){
        return this.mililiters;
    }

    set $mililiters(value:number){
        this.mililiters = value;
    }
}
