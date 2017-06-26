import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
// If you use Two-way binding of Angular2 you must import FormsModule in your app
import { FormsModule } from '@angular/forms';
// If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app
import { CommonModule } from '@angular/common';
// For Model driven forms
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { TutorialsComponent } from './tutorials.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponent } from './employee-details.component'
import { DepartmentListComponent } from './department-list.component'
import { EmployeesListComponent } from './employees-list.component'

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  FormsModule, 
                  CommonModule, 
                  ReactiveFormsModule, 
                  RouterModule.forRoot([
                    { path: 'departments', component: DepartmentListComponent },
                    { path: 'employees', component: EmployeesListComponent }
                  ])
                ],
  declarations: [ AppComponent, 
                  TutorialsComponent, 
                  EmployeeListComponent, 
                  EmployeeDetailsComponent,
                  DepartmentListComponent, 
                  EmployeesListComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
