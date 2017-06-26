import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list.component';
import { DepartmentListComponent } from './department-list.component'

const router: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees', component: EmployeesListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(router)
             ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [DepartmentListComponent, EmployeesListComponent]