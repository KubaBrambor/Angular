import { Injectable } from '@angular/core';
import { Pomiar } from '../pomiar';

@Injectable({
  providedIn: 'root'
})
export class PomiarServiceService {

  private pomiary: Pomiar[];
  
  constructor() { 
    this.pomiary = [
      new Pomiar(130, "Rano", "08/12/2019"),
      new Pomiar(127, "Wieczór", "08/12/2019"),
      new Pomiar(132, "Rano", "09/12/2019"),
      new Pomiar(151, "Wieczór", "09/12/2019"),
      new Pomiar(133, "Rano", "10/12/2019")
    ];
  }

    getPomiar():Pomiar[]{
      return this.pomiary;
    }

    createPomiar(pomiar: Pomiar){
      this.pomiary.push(pomiar)
    }

    
  }

