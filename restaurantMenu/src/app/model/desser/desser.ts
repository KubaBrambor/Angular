import { Dish } from '../dish';

export class Desser extends Dish {
    private ingridients:string;
    
    constructor(id, name, price, ingridients){
        super(id, name, price);
        this.ingridients = ingridients;
    }

    get $ingridients(){
        return this.ingridients;
    }

    set $ingridients(value:string){
        this.ingridients = value;
    }
}
