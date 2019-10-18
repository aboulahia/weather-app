import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
 import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Injectable()
  export class WeatherEffect {
    
    loadWeather$ = createEffect(() => { console.log('effect'); return this.actions$.pipe(
      ofType('[WEATHER] GET'),
      mergeMap((action : any) => this.apiService.getWeatherData(action.payload)
        .pipe(
          map(weather => ({ type: '[WEATHER] DATA', payload: weather })),
          catchError(() => EMPTY)
        ))
    )});
    
    constructor(
        private actions$ : Actions,
        private apiService : ApiService

    ) { }
  
    
  }