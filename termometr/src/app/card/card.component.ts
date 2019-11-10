import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private logo = require('../../assets/logo.jpg')

  private url:string = 'https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=9d5b2336-6f9a-4fa0-8cbe-d6b4776194c3&limit=5';
  private temperature;
  private localisation;
  private rain;
  private terrainTemperature;
  private wetness;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      console.log(data.result.records[1])

      this.temperature = data.result.records[1].T_Powietrza;
      console.log(this.temperature);
      
      this.localisation = data.result.records[1].Lokalizacja_Opis;
      console.log(this.localisation);

      this.rain = data.result.records[1].Opad_Typ;
      console.log(this.rain);

      this.terrainTemperature = data.result.records[1].T_Grunt;
      console.log(this.terrainTemperature);

      this.wetness = data.result.records[1].Wilgotnosc;
      console.log(this.wetness)
    })
  }

}
