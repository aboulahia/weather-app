import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { WeatherEffect } from './shared/effects/effects';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({
      weather: reducer
    }
    ),
    EffectsModule.forRoot([WeatherEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
