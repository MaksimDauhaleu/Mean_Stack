import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  text : string;
  num : number;
  first_name : string;
  snacks : string[];
  cars :string[];
  cars_info :string;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.num = 7;
    this.text = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
  }
  onButtonClickParam(num: Number): void { 
      console.log(`Click event is working with num param: ${num}`);
      this.cars = ["car1", "car2", "car3","car4","car5"];

    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
  }
  infoButtom(car): void{
    this.cars_info = car;

    let observable = this._httpService.postToServer({data: car});
    observable.subscribe(data => console.log("Got our data!", data));
  }
}   


