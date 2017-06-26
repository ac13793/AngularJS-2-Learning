"use strict";
// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router'
// import { HttpModule } from '@angular/http';
// // If you use Two-way binding of Angular2 you must import FormsModule in your app
// import { FormsModule } from '@angular/forms';
// // If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app
// import { CommonModule } from '@angular/common';
// // For Model driven forms
// import { ReactiveFormsModule } from '@angular/forms'; 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AppComponent }  from './app.component';
// import { TutorialsComponent } from './tutorials.component';
// import { EmployeeListComponent } from './employee-list.component';
// import { EmployeeDetailsComponent } from './employee-details.component'
// import { DepartmentListComponent } from './department-list.component'
// import { EmployeesListComponent } from './employees-list.component'
// @NgModule({
//   imports:      [ BrowserModule, 
//                   HttpModule,
//                   FormsModule, 
//                   CommonModule, 
//                   ReactiveFormsModule, 
//                   RouterModule.forRoot([
//                     { path: 'departments', component: DepartmentListComponent },
//                     { path: 'employees', component: EmployeesListComponent }
//                   ])
//                 ],
//   declarations: [ AppComponent, 
//                   TutorialsComponent, 
//                   EmployeeListComponent, 
//                   EmployeeDetailsComponent,
//                   DepartmentListComponent, 
//                   EmployeesListComponent
//                 ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
// ***************** Routing and Navigation *****************
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_modules_1 = require("./app-routing.modules");
var http_1 = require("@angular/http");
// If you use Two-way binding of Angular2 you must import FormsModule in your app
var forms_1 = require("@angular/forms");
// If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app
var common_1 = require("@angular/common");
// For Model driven forms
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var tutorials_component_1 = require("./tutorials.component");
var employee_list_component_1 = require("./employee-list.component");
var employee_details_component_1 = require("./employee-details.component");
var app_routing_modules_2 = require("./app-routing.modules");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            forms_2.ReactiveFormsModule,
            app_routing_modules_1.AppRoutingModule
        ],
        declarations: [app_component_1.AppComponent,
            tutorials_component_1.TutorialsComponent,
            employee_list_component_1.EmployeeListComponent,
            employee_details_component_1.EmployeeDetailsComponent,
            app_routing_modules_2.routingComponents
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map