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
  url ='https://designprosusa.com/hidden_10/api/'
  constructor (private http:HttpClient){}
  // user(){
  //   return this.http.get(this.url);
  // }
  post(link:any, data:any,){
    let header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    return new Promise((res, rej)=>{
      this.http.post(this.url + link, JSON.stringify(data), { headers: header} )
      .subscribe((data:any)=>{
        console.log(data)
        res(data);
      }),(err:any)=>{
        console.log(err);
        rej(err)
      }
    })
  }
    get(link:any){
    let header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    return new Promise((res, rej)=>{
      this.http.get(this.url + link, { headers: header} )
      .subscribe((data:any)=>{
        console.log(data)
        res(data);
      }),(err:any)=>{
        console.log(err);
        rej(err)
      }
    })
  }
}
