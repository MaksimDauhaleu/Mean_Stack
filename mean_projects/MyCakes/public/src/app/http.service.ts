import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getTasks(){
    let tempObservable = this._http.get('/');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
}

  constructor(private _http: HttpClient){
    this.getTasks();
  }
  postToServer(num){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/', num);  
  }
}

