import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { WeatherI } from '../modele/weather';
 
// Section 2
export const GET_WEATHER = '[WEATHER] GET';
export const LOADED_WEATHER = '[WEATHER] DATA'

// Section 3
export class getWeather implements Action {
    readonly type = GET_WEATHER;
    constructor(public payload: string) {}
}

export class loadWeather implements Action {
    readonly type = LOADED_WEATHER;
    constructor(public payload: WeatherI) {}
}


// Section 4
export type Actions = getWeather | loadWeather
