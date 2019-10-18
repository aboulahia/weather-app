import { Action } from '@ngrx/store'
import * as Actions from './../action/action';
import { WeatherEffect } from '../effects/effects';
import { WeatherI } from '../modele/weather';
import { Observable } from 'rxjs';
import * as weatherAction from '../action/action'

// Section 1
const initialState = WeatherEffect

// Section 2
export function reducer(state: WeatherI, action: Actions.Actions) {

    switch (action.type) {
        case weatherAction.LOADED_WEATHER:
            return action.payload
        default:
            return state;
    }


}
