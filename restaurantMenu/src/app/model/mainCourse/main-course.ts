import { Dish } from '../dish';

export class MainCourse extends Dish {
    private ingridients:string;
    private alergens:string;
    
    constructor(id, name, price, ingridients, alergens){
        super(id, name, price);
        this.ingridients = ingridients;
        this. alergens = alergens;
    }

    public get $ingridients(){
        return this.ingridients;
    }
    public get $alergens(){
        return this.alergens;
    }

    public set $ingridients(value:string){
        this.ingridients = value;
    }
    public set $alergens(value:string){
        this.alergens = value;
    }
}
