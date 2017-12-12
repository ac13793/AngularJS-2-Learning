import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<h1>Employee List</h1>
             <h3>{{errorMsg}}</h3>
              <ul *ngFor = "let employee of employees">
                <li>{{employee.name}}</li>
              </ul>`
})
export class EmployeeListComponent implements OnInit  {
    employees: Array<any> = [];
    errorMsg: string;
    constructor(private _employeeService: EmployeeService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //this.employees = this._employeeService.getEmployees();

        // Using Http Module
        this._employeeService.getEmployees()
        .subscribe(resEmployeeData => this.employees = resEmployeeData,
                    resEmployeeError => this.errorMsg = resEmployeeError);
    }
}