import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private apiService : ApiService) { }

  ngOnInit() {
    
  }

  changePays(pays ) {
    this.apiService.getWeatherData(pays)
    console.log("changePays ",pays)
    this.apiService.pays =pays;
  }

}
