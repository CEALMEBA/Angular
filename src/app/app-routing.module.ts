import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentViewComponent } from './components/departament-view/departament-view.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'employees',component:EmployeesViewComponent},
  {path:'departamets',component:DepartamentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
