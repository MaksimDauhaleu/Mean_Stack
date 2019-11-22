import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    product: object;
    editProduct: any;
    error_o: any = {};
  
    constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }
  
    ngOnInit() {
      this.findProduct();
      this.editProduct = {title: "", price: 0.00, image: ""};
    }
  
    findProduct(){
      this._route.params.subscribe((params)=>{
        let temp = this._httpService.getOneProduct(params["id"]);
        temp.subscribe((data:any)=>{
          this.editProduct = data;
        })
      })
    }
  
    editSubmit(){
      this._route.params.subscribe((params)=>{
        let temp = this._httpService.editProduct(params['id'], this.editProduct);
        temp.subscribe((data:any) => {

          if(!data.error){
            this._router.navigate(["/dashboard"]);
          }
          else{
            this.error_o = data.error.errors
            console.log("Error", data.error)
          }
        })
      })
    }

    reset(){
        this._route.params.subscribe((params)=>{
            let temp = this._httpService.resetParams(params['id'], this.editProduct);
            temp.subscribe((data:any) => {
                
              if(!data.error){
                this._router.navigate(["/dashboard"]);
              }
              else{
                console.log("Error", data.error)
              }
            })
        })
    }
  }
