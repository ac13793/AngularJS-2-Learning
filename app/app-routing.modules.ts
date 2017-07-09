// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeesListComponent } from './employees-list.component';
// import { DepartmentListComponent } from './department-list.component';
// import { DepartmentDetailsComponent } from './department-detail.component';

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailsComponent } from './department-detail.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const router: Routes = [
    { path: '', component: HomeComponent},
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: 'departments/:id', component: DepartmentDetailsComponent },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(router)
             ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, PageNotFoundComponent, DepartmentListComponent, EmployeesListComponent, DepartmentDetailsComponent]