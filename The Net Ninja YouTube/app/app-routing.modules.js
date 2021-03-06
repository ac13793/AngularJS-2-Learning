"use strict";
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeesListComponent } from './employees-list.component';
// import { DepartmentListComponent } from './department-list.component';
// import { DepartmentDetailsComponent } from './department-detail.component';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router: Routes = [
//     { path: 'departments', component: DepartmentListComponent },
//     { path: 'employees', component: EmployeesListComponent },
//     { path: 'departments/:id', component: DepartmentDetailsComponent }
// ];
// @NgModule({
//     imports: [ RouterModule.forRoot(router)
//              ],
//     exports: [ RouterModule ]
// })
// export class AppRoutingModule {}
// export const routingComponents = [DepartmentListComponent, EmployeesListComponent, DepartmentDetailsComponent]
// ************************* Empty and WildCoards Paths *****************
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeesListComponent } from './employees-list.component';
// import { DepartmentListComponent } from './department-list.component';
// import { DepartmentDetailsComponent } from './department-detail.component';
// import { HomeComponent } from './home.component';
// import { PageNotFoundComponent } from './page-not-found.component';
// const router: Routes = [
//     { path: '', component: HomeComponent},
//     { path: 'departments', component: DepartmentListComponent },
//     { path: 'employees', component: EmployeesListComponent },
//     { path: 'departments/:id', component: DepartmentDetailsComponent },
//     { path: '**', component: PageNotFoundComponent}
// ];
// @NgModule({
//     imports: [ RouterModule.forRoot(router)
//              ],
//     exports: [ RouterModule ]
// })
// export class AppRoutingModule {}
// export const routingComponents = [HomeComponent, PageNotFoundComponent, DepartmentListComponent, EmployeesListComponent, DepartmentDetailsComponent]
// ****************** Redirects and pathMatch *******************
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employees_list_component_1 = require("./employees-list.component");
var department_list_component_1 = require("./department-list.component");
var department_detail_component_1 = require("./department-detail.component");
var home_component_1 = require("./home.component");
var page_not_found_component_1 = require("./page-not-found.component");
var router = [
    //{ path: '', component: HomeComponent},
    { path: '', redirectTo: '/departments', pathMatch: 'full' },
    { path: 'departments', component: department_list_component_1.DepartmentListComponent },
    { path: 'employees', component: employees_list_component_1.EmployeesListComponent },
    { path: 'departments/:id', component: department_detail_component_1.DepartmentDetailsComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(router)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [home_component_1.HomeComponent, page_not_found_component_1.PageNotFoundComponent, department_list_component_1.DepartmentListComponent, employees_list_component_1.EmployeesListComponent, department_detail_component_1.DepartmentDetailsComponent];
//# sourceMappingURL=app-routing.modules.js.map