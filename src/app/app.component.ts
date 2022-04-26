import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClient';
  

  constructor(
    private router: Router
    ) 
    {
    
    //this.userdata = this._httpCilentServicesService.getData()
  }

  ngOninit(){

    //console.log(this.userdata)
    
  }

  //getData(){
   // console.log("in app component")
    //this.router.navigate(['/crud-using-http'])}

  
  
}


