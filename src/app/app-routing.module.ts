import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsingHttpComponent } from './Crud/crud-using-http/crud-using-http.component';

const routes: Routes = [

  {path: '' , component: CrudUsingHttpComponent},
  //{path: 'crud-using-http' , component: CrudUsingHttpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
