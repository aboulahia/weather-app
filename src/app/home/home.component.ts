import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getWeatherData().subscribe((data)=>{this.data=data; console.log(this.data)})
  }

}
