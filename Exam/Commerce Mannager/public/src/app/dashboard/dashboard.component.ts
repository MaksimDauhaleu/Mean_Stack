import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    products = [];

    constructor(private _httpService: HttpService) {  }
        ngOnInit() {
        this.loadPage()
    }


   loadPage(){
        let prod = this._httpService.getAllProducts();
        prod.subscribe((data:any)=>{
            this.products = data;
        })

    }
}
