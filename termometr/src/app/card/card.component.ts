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
    this.http.get(this.url).subscribe((data:any) => {

      for(let i=0; i<data.result.records.length; i++){
        this.localArr.push(data.result.records[i]) 
      }

      /* Delete record from Widawska street, since it wasn't updated for long time */
      this.localArr.splice(0,1);

      this.temperature = this.localArr[0].T_Powietrza;
      console.log(this.temperature);
      
      this.localisation = this.localArr[0].Lokalizacja_Opis;
      console.log(this.localisation);

      this.rain = this.localArr[0].Opad_Typ;
      console.log(this.rain);

      this.terrainTemperature = this.localArr[0].T_Grunt;
      console.log(this.terrainTemperature);

      this.wetness = this.localArr[0].Wilgotnosc;
      console.log(this.wetness)
    })
  }

  /* Function that is triggered when selected localisation.
     Get data from API and with proper index of selected localisation, showing results. */
  onSubmit(event){
    console.log(event.target.selectedIndex);
    this.http.get(this.url).subscribe((data:any) => {

      /* Clear localArr array for fresh weather data */
      this.localArr.splice(0, this.localArr.length);

      for(let i=0; i<data.result.records.length; i++){
        this.localArr.push(data.result.records[i]) 
      }

      /* Delete record from Widawska street, since it wasn't updated for long time */
      this.localArr.splice(0,1)
      console.log(this.localArr);
      
      this.indexData = event.target.selectedIndex - 1;
      console.warn(this.indexData);

      this.temperature = this.localArr[this.indexData].T_Powietrza;
      console.log(this.temperature);
    
      this.localisation = this.localArr[this.indexData].Lokalizacja_Opis;
      console.log(this.localisation);

      this.rain = this.localArr[this.indexData].Opad_Typ;
      console.log(this.rain);

      this.terrainTemperature = this.localArr[this.indexData].T_Grunt;
      console.log(this.terrainTemperature);

      this.wetness = this.localArr[this.indexData].Wilgotnosc;
      console.log(this.wetness)

     
    })
  }

}
