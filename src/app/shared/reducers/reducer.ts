import { Action } from '@ngrx/store'
import * as Actions from './../action/action';
import { WeatherEffect } from '../effects/effects';
import { WeatherI } from '../modele/weather';
import { Observable } from 'rxjs';
import * as weatherAction from '../action/action'
import { UserI } from '../modele/user';

// Section 1
const initialState = WeatherEffect

// Section 2
export function reducer(state: WeatherI | UserI, action: Actions.Actions) {

    switch (action.type) {
        case weatherAction.LOADED_WEATHER:
            return action.payload

        case weatherAction.AUTHDONE :
            return action.payload
        default:
            return state;
    }


}
