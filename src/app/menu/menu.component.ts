import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as Actions from '../shared/action/action';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  changePays(pays ) {
    this.store.dispatch(new Actions.getWeather(pays) )

  }

}
