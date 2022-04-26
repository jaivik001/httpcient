import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpCilentServicesService {
  
  
 
getDataUrl = environment.baseurl+'api/users?page=' ;
deleteDataUrl = environment.baseurl+'api/users/';
postDataUrl =  environment.baseurl+'api/users'
updateDataUrl = environment.baseurl+'api/users'


  constructor(private _http: HttpClient) { }

  getData(pageNo: any){

    return this._http.get(this.getDataUrl+pageNo).pipe(map(data => {
      return data;
    }));
  }
  
  deleteData(id:any){
    return this._http.delete(this.deleteDataUrl+id).pipe(map(data => {
      console.log(data)
      return data;
    }));;
  }

  postData(name , job){
    //console.log("data Submitted..")
    return this._http.post(this.postDataUrl ,{'name': name , 'job':job });
  }

  updateData(id , user){
    //console.log("in service",user.avatar)
    return this._http.put(this.updateDataUrl+id , {'avatar': user.avatar.value , 'first_name': user.firstname.value , 'last_name': user.lastname.value , 'email':user.email.value}).pipe(map(data => {
      //console.log(data)
      return data;
    }));;
  }

}