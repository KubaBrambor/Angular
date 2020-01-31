import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/model/stock';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  constructor(public messageService: MessageService){ }

  ngOnInit(): void {
    this.messageService.message = 'Hello that is testing message in APP COMPONENT - say hello to MessageService!';
   }
}
