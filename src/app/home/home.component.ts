import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pays="tunis"
  constructor(public apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getWeatherData(this.pays)
    console.log('this.apiService.data ',this.apiService.data)
  }
}



export interface Coord {
    lon: number;
    lat: number;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface List {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
}

export interface RootObject {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: List[];
}



