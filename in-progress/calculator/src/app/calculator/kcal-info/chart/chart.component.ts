import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() public pieChartLabels:string[] = [];
  @Input() public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': []}

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
