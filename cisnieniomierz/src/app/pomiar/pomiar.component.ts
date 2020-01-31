import { Component, OnInit } from '@angular/core';
import { Pomiar } from '../pomiar';
import { PomiarServiceService } from '../services/pomiar-service.service';

@Component({
  selector: 'pomiar',
  templateUrl: './pomiar.component.html',
  styleUrls: ['./pomiar.component.scss']
})
export class PomiarComponent implements OnInit {

  public pomiary: Pomiar[];

  constructor(private pomiarService: PomiarServiceService) { }

  ngOnInit() {
    this.pomiary = this.pomiarService.getPomiar();
  }

}
