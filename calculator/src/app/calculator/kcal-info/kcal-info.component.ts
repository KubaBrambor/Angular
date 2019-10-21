import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-kcal-info',
  templateUrl: './kcal-info.component.html',
  styleUrls: ['./kcal-info.component.scss']
})
export class KcalInfoComponent implements OnInit {
  public checkOver:boolean;
  public sumCalories:number = 0;
  public dayCalories:string = "";
  public alertItems;
  public progressBarItems;
  public dayCaloriesItems;
  public turnOffButton:boolean = false;
  public alertToggle:boolean = false;
  public redProgressBar:boolean = false;
  public kcalInfo:boolean = false;

  //concept for *ngFor
  public productsArray: Array<Product>;
  public prodName:string;
  public prodCalories:any;

  //chart variables
  public pieChartNames:string[];
  public pieChartKcal:number[];

  //emit value to app-component
  @Output() private productsStorage: EventEmitter<Array<Product>>;

  //products input
  @Input() public productsList:Array<Product> = [];
  public prodValue:any;

  constructor() { 
    this.productsStorage = new EventEmitter<Array<Product>>();
  }

  ngOnInit() {
    this.pieChartNames = [];
    this.pieChartKcal = [];

    this.alertItems = {
        "alertToggleOn": this.alertToggle,
        "alertToggleOff": !this.alertToggle,
    }

    this.progressBarItems = {
        "background": "green",
        "width": "0%"
    }

    //concept for *ngFor
    this.productsArray = []
  }

  addCalories(){
    let a = this.addDayCalories(),
        b = this.toggleButton();
    return {a , b};
  }
  addProduct(event){
    let a = this.writeObj(),
        b = this.progressBarFunc(),
        c = this.overKcalAlert(),
        d = this.emitValue(event);
    return {a, b, c, d};
  }

  addProductList(event){
    let z = this.writeProductList(),
        b = this.progressBarFunc(),
        c = this.overKcalAlert();
    return {z, b, c};
  }

  //concept for *ngFor
  writeObj(){
    this.productsArray.push(new Product(this.prodName, this.prodCalories));
    this.sumCalories = this.sumCalories + parseInt(this.prodCalories);
    this.pieChartNames.push(this.prodName);
    this.pieChartKcal.push(parseInt(this.prodCalories));
    this.prodName = "";
    this.prodCalories = "";
  }

  writeProductList(){
    let kcalValue:number = parseInt(this.prodValue),
        //wiem, że niedozwolone ale nie wiedziałem póki co jak pobrać inaczej index <select>
        selected:any = document.getElementById("productsOptions"),
        index:number = selected.selectedIndex;
    this.productsArray.push(new Product(this.productsList[index].name, kcalValue));
    this.sumCalories = this.sumCalories + kcalValue;
    this.pieChartKcal.push(kcalValue);
    this.pieChartNames.push(this.productsList[index].name);
    console.log(this.prodValue, this.sumCalories, index);
  }

  emitValue(arg){
    this.productsStorage.emit(this.productsArray)
    console.log(event);
  }
  //greenbar element
  progressBarFunc(){
    let progressBar = this.sumCalories/parseInt(this.dayCalories);
    if(progressBar > 1){
      progressBar = 1;
      this.redProgressBar = true;
      console.log("its true")
    }
    this.progressBarItems = {
        "width": progressBar*100 + "%",
        "background": this.redProgressBar ? "red" : "green"
    }
  }

  //over daily calories alert
  overKcalAlert(){
    if(parseInt(this.dayCalories) < this.sumCalories){
        this.alertToggle = true;
        }
        this.alertItems = {
            "alertToggleOn": this.alertToggle,
            "alertToggleOff": !this.alertToggle,
        }
  }

  
  addDayCalories(){
    console.log(this.dayCalories);
    return this.dayCalories;
  }

  //switch off dailyAmountButton
  toggleButton(){
      this.turnOffButton = !this.turnOffButton;
    }  

}
