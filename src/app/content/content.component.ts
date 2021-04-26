import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  constructor(private data:DataService) { }
  weather = this.data.getWeather();

  ngOnInit(): void {
  }


}
