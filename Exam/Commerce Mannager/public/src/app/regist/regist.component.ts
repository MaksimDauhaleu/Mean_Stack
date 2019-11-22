import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
newUser = {}
error_o:any = {}

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }


  registUser(): void {
    var create = this._httpService.addUser(this.newUser);
    create.subscribe((data:any)=>{ 
        if(!data.error){
            console.log(data,"*****DATA****");
            this._router.navigate(["/dashboard"]);  
        }else{
            console.log(data,"******error********")
            this.error_o = data.error.errors
        }
    })
  }

}
