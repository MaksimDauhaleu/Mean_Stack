import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  text : string;
  newTask: any;
  title = "Restful Tasks API"
  tasks = [];
  task = "";
  green = false;
  editTask: any;
  editTog: boolean = false;
  num : number;
  first_name : string;
  snacks : string[];
  cars :string[];
  cars_info :string;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService()
    this.newTask = { title: "", description: "" }
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { 
      console.log("~Loading All Tasks~", data)
      this.tasks = data["task"]
      this.green = true;
    });
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("~Create~");
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
  }

  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }

  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("~Edit~");
      this.editTog = false;
      this.getTasksFromService();
    })
  }

  onDelete(task){
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log("~Delete~");
      this.getTasksFromService();
  })
}
}
//   ngOnInit() {
//     this.newTask = { title: "", description: "" }
//     this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
//     this.num = 7;
//     this.text = 'Hello Angular Developer!';
//     this.first_name = 'Alpha';
//   }
//   onButtonClickParam(num: Number): void { 
//       console.log(`Click event is working with num param: ${num}`);
//       this.cars = ["car1", "car2", "car3","car4","car5"];

//     let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
//   }
//   infoButtom(car): void{
//     this.cars_info = car;

//     let observable = this._httpService.postToServer({data: car});
//     observable.subscribe(data => console.log("Got our data!", data));
//   }
//     onSubmit() {
//     // Code to send off the form data (this.newTask) to the Service
//     // ...
//     // Reset this.newTask to a new, clean object.
//     this.newTask = { title: "", description: "" }
//   }




