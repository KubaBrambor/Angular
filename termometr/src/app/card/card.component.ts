import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private logo = require('../../assets/logo.jpg')

  /*
  Added proxy "cors-anywhere" to prevent cros-policy error. It can slow data loading process. 
  If it's slow, delete first part of link and use extension "Moesif Origin Cors Changer" 
   LINK -> https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc

   link to proxy -> https://cors-anywhere.herokuapp.com/
  */
  private url:string = 'https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=9d5b2336-6f9a-4fa0-8cbe-d6b4776194c3&limit=5';
  
  private temperature;
  private localisation;
  private rain;
  private terrainTemperature;
  private wetness;
  private localArr = [];
  private indexData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /* Get data from API for Lotnicza localisation, as default. */
    this.http.get(this.url).subscribe(data => {
      console.log(data.result.records[1])

      for(let i=0; i<data.result.records.length; i++){
        this.localArr.push(data.result.records[i]) 
      }
      this.localArr.splice(0,1);
      console.log(this.localArr)

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

  /* Function that is triggered when selected localisation.
     Get data from API and with proper index of selected localisation, showing results. */
  onSubmit(event){
    console.log(event.target.selectedIndex);
    this.http.get(this.url).subscribe(data => {

      /*dodać tablicę i splice */ 
      this.indexData = event.target.selectedIndex;
      this.temperature = data.result.records[this.indexData].T_Powietrza;
      console.log(this.temperature);
    
      this.localisation = data.result.records[this.indexData].Lokalizacja_Opis;
      console.log(this.localisation);

      this.rain = data.result.records[this.indexData].Opad_Typ;
      console.log(this.rain);

      this.terrainTemperature = data.result.records[this.indexData].T_Grunt;
      console.log(this.terrainTemperature);

      this.wetness = data.result.records[this.indexData].Wilgotnosc;
      console.log(this.wetness)
    })
  }

}
