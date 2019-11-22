import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    product = []
    likes;

  constructor(private _httpService: HttpService, private _Router: Router, private _route: ActivatedRoute,) { }

  ngOnInit() {
      this.findOne();
  }

    findOne(){
        this._route.params.subscribe((params: Params)=>{
            let temp = this._httpService.getOneProduct(params["id"]);
            temp.subscribe((data:any)=>{
            this.product= data;
            this.likes = this.product["likes"];
            })
        })
    }    
      deleteProduct(id:string){
        let observable = this._httpService.deleteProduct(id);
        observable.subscribe(data=>{

          this._Router.navigate(["/dashboard"]);
        })
      }

    countPlus(id:string){
        let observable = this._httpService.countPlus(id);
        observable.subscribe(data=>{
            this.likes = data['likes'];

        })
    }
}