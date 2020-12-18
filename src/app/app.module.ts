import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DepartamentViewComponent } from './components/departament-view/departament-view.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmDialog2Component} from './components/confirm-dialog2/confirm-dialog2.component';
import { AuthGuard } from './services/AuthGuard';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    DepartamentViewComponent,
    EmployeesViewComponent,
    HeaderComponent,
    LoginComponent,
    EmployeesViewComponent,
    DepartamentViewComponent,
    ConfirmDialog2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent,ConfirmDialog2Component]
  
})
export class AppModule { }
