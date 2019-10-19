import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { WeatherI } from '../modele/weather';
import {UserI} from '../modele/user'

// Section 2
export const GET_WEATHER = '[WEATHER] GET';
export const LOADED_WEATHER = '[WEATHER] DATA';
export const ROLE ='[Login] ROLE';
export const AUTH ='[Login] AUTH';
export const AUTHDONE ='[Login] AUTHDONE'

// Section 3
export class getWeather implements Action {
    readonly type = GET_WEATHER;
    constructor(public payload: string) {}
}

export class loadWeather implements Action {
    readonly type = LOADED_WEATHER;
    constructor(public payload: WeatherI) {}
}

export class authentification implements Action{
    readonly type = AUTH;
    constructor(public payload: {email: String, password : string}){}
}


export class authentificationDone implements Action{
    readonly type = AUTHDONE;
    constructor(public payload: any){}
}

// Section 4
export type Actions = getWeather | loadWeather |authentification | authentificationDone
