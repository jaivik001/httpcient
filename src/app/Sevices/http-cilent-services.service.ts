import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpCilentServicesService {
  
  
 
getDataUrl = environment.baseurl+'api/users' ;
deleteDataUrl = environment.baseurl+'api/users/';
postDataUrl =  environment.baseurl+'api/users'
updateDataUrl = environment.baseurl+'api/users/'


  constructor(private _http: HttpClient) { }

  getData(isPagination, pageNo, pageSize){

    return this._http.get(this.getDataUrl + '?isPagination=' + isPagination + '&page_no=' + pageNo + '&pageSize=' + pageSize).pipe(map(data => {
      console.log(data);
      
      return data;

    }));
  }
  
  deleteData(id:any){
    return this._http.delete(this.deleteDataUrl+id).pipe(map(data => {
      console.log(data)
      return data;
    }));;
  }

  postData(firstname , lastname , email , password , gender){
    //console.log("data Submitted..")
    return this._http.post(this.postDataUrl ,{'firstname': firstname, 'lastname': lastname , 'email':email , 'password': password , 'gender': gender });
  }

  updateData(id , user){
    console.log("in service",user.firstname)
    return this._http.put(this.updateDataUrl+id , { 'firstname': user.firstname.value , 'lastname': user.lastname.value , 'email':user.email.value , 'password':user.password.value , 'gender': user.gender.value}).pipe(map(data => {
      //console.log(data)
      return data;
    }));;
  }

}