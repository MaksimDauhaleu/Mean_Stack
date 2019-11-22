import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }


    getAllProducts(){
        return this._http.get("/products");
    }

    getOneProduct(id:string){
        return this._http.get("/products/"+id);
    }

    getUser(id:string){
        return this._http.get("/getUser/"+id);
    }

    postProduct(data){
        console.log('postProduct', data);
        return this._http.post("/add", data);
    }
    addUser(data){
        console.log('postProduct', data);
        return this._http.post("/regist_user", data);
    }

    editProduct(id:string, editProduct:object){
        return this._http.put("/edit/"+id, editProduct);
    }

    resetParams(id:string, resetParams:object){
        return this._http.put("/reset/"+id, resetParams);
    }

    deleteProduct(id:string){
        return this._http.delete("/delete/"+id);
    }
    countPlus(id){
        return this._http.get("/count/"+id)
    }
}

