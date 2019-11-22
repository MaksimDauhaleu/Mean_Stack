import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
    newPet = {name: "", type: "", description: "",skill_1:"", skill_2:"", skill_3:""};
    error_o: any = {};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

createProduct(): void {
    var create_p = this._httpService.postProduct(this.newPet);
    create_p.subscribe((data:any)=>{ 
        if(!data.error){
            console.log(data);
            this._router.navigate(["/dashboard"]);  
        }else{
            console.log(data)
            this.error_o = data.error.errors
        }
    })
  }

}
