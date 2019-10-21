export class Product{
    public name: string;
    public calories: number;
    constructor(prodName:string, caloriesValue:number){
        this.name = prodName;
        this.calories = caloriesValue
    }
}