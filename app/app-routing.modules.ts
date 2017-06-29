import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailsComponent } from './department-detail.component';

const router: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: 'departments/:id', component: DepartmentDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(router)
             ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [DepartmentListComponent, EmployeesListComponent, DepartmentDetailsComponent]