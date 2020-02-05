import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { WeatherObj } from '../model/weather-obj'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getValues(): Observable<WeatherObj[]>{
    return this.http.get<WeatherObj[]>('https://www.wroclaw.pl/open-data/api/action/datastore_search?resource_id=9d5b2336-6f9a-4fa0-8cbe-d6b4776194c3&limit=5')
  }
}
