import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { WeatherI } from '../shared/modele/weather';
import * as Actions from '../shared/action/action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pays="tunis"
  data: Observable<WeatherI>;
  constructor(private store: Store<AppState>) { 

    this.data = store.select('weather');

    console.log(this.data)
  }

  ngOnInit() {
    this.store.dispatch(new Actions.getWeather('tunis') )

  }
}





