import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudUsingHttpComponent } from './Crud/crud-using-http/crud-using-http.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CrudUsingHttpComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ToastrModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(  
      {  
        //positionClass: "bottom-right"  ,
        closeButton: true,  
          
      }  
    )  
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
