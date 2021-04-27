import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  weather = {"name": "NULL", "temp": 0, "temp_min": 0, "temp_max": 0, "lon": 0, "lat": 0, "country": ""};

  retrieveCity(city:string) {
    let obs = this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=3555c92ebb9a46d47a72fd004c7c7c62&units=metric");
    
    obs.subscribe((response)=> {
      
      this.weather.name = response.name;
      this.weather.temp = response.main.temp;
      this.weather.temp_min = response.main.temp_min;
      this.weather.temp_max = response.main.temp_max;
      this.weather.lon = response.coord.lon;
      this.weather.lat = response.coord.lat;
      this.weather.country = response.sys.country;

    })

    
  }
  
  getWeather() {
    return this.weather;
  }
}
