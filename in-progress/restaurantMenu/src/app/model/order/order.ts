
export class Purchaser {
    private name:string;
    private surname:string;
    private adress:string;
    private shipping:string;

    constructor(name:string, surname:string, adress:string, shipping:string){
        this.name = name;
        this.surname = surname;
        this.adress = adress;
        this.shipping = shipping;
    }

    get $name(){
        return this.name;
    }

    get $surname(){
        return this.surname;
    }

    get $adress(){
        return this.adress;
    }
    get $shipping(){
        return this.shipping;
    }

    set $name(value:string){
        this.name=value;
    }
    
    set $surname(value:string){
        this.surname = value;
    }
}
