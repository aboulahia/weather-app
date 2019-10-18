import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as Action from './../action/action';


@Injectable()
  export class WeatherEffect {
    
    loadWeather$ = createEffect(() => { console.log('effect'); return this.actions$.pipe(
      ofType(Action.GET_WEATHER),
      mergeMap((action : any) => this.apiService.getWeatherData(action.payload)
        .pipe(
          map(weather => ({ type: Action.LOADED_WEATHER, payload: weather })),
          catchError(() => EMPTY)
        ))
    )});
    
    constructor(
        private actions$ : Actions,
        private apiService : ApiService

    ) { }
  
    
  }