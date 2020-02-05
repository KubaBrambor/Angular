import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurantMenu';
  
  public url: string = "https://www.logostack.com/wp-content/uploads/designers/eclipse42/coffee-frog-01-600x420.jpg";

  constructor(){}
}
