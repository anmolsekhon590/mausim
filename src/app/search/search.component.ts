import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  input: string = "";
  constructor(private data:DataService) { }


  ngOnInit(): void {
  }

  search() {
    this.data.retrieveCity(this.input);
  }

}
