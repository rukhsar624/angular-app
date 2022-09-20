import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
// export class UserServiceService {

//   constructor(private http:HttpClient) { }
//   getDate()
//   {
//     let url="https://jsonplaceholder.typicode.com/posts"
//     return this.http.get(url);
//   }
// }
export class UserServiceService {
  url ='https://jsonplaceholder.typicode.com/posts'
  constructor (private http:HttpClient){}
  user(){
    return this.http.get(this.url);
  }
  // userdelete(){
  //   return this.http.post(this.url, data);
  // }
}
