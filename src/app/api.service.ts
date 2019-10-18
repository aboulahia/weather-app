import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  data :any;
  
  pays="tunis";
  constructor(private http :HttpClient) { }

  getWeatherData(pays): Observable<any>{
    // console.log("getWeatherData",this.)
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast/daily?q='+pays+'&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric');
  }
  
}
