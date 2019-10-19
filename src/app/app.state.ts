import { WeatherI } from './shared/modele/weather';
import { UserI } from './shared/modele/user';

 
export interface AppState {
  readonly weather: WeatherI;
  readonly user: UserI;
}
