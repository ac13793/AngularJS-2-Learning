import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../app/employee.service';

@Component({
  selector: 'employee-detail',
  template: `<h1>Employee Details</h1>
            <h3>{{errorMsg}}</h3>
              <ul *ngFor = "let employee of employees">
                <li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>
              </ul>`
})
export class EmployeeDetailsComponent implements OnInit  {
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