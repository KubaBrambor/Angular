import { Component, OnInit } from '@angular/core';
import { Desser } from '../../model/desser/desser';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'dessers',
  templateUrl: './dessers.component.html',
  styleUrls: ['./dessers.component.scss']
})
export class DessersComponent implements OnInit {

  public dessersMenu:Desser[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getDessers();
    console.log(this.dessersMenu[0])
  }

  getDessers():void{
    this.dessersMenu = this.service.getDesser();
  }
}
