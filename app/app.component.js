"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//               <my-tutorials></my-tutorials>`,
// })
// export class AppComponent  { name = 'Angular'; }
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//               <h4>Headers 4 from AppComponent</h4>
//               <my-tutorials></my-tutorials>`,
//   styles: [`h4{
//                 color: blue;
//             }`]
// })
// export class AppComponent  { name = 'Angular'; }
// ******************** Inputs and Outputs - Pass data from parent component to child component or vice-versa ******************
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello World</h1>
//             <h2>Parent App component</h2>
//             <label>Enter parent component value</label>
//             <input type="text" #pText (keyup) = "0"/>
//             <p>Value from Child Tutorials component</p>
//             {{childData}}
//             <my-tutorials (childEvent) = "childData = $event" [parentData] = "pText.value"></my-tutorials>`
// })
// export class AppComponent  { 
//     public childData:string;
//  }
// ************ Template driven forms *************
// @Component({
//   selector: 'my-app',
//   templateUrl: `app/app.component.html`,
//   styles: [`input.ng-invalid{border-left: 5px solid red;}
//             input.ng-valid{border-left: 5px solid green}`]
// })
// export class AppComponent  {
//   public name: string = "Ankit Chaurasia"; 
//   onSubmit(value:any){
//     console.log(value);
//   }
//  }
// *********** Model driven forms ******************
// import { FormGroup, FormControl, Validators } from '@angular/forms'; 
// @Component({
//   selector: 'my-app',
//   templateUrl: `app/app.componentModelDrivenForm.html`,
//   styles: [`input.ng-invalid{border-left: 5px solid red;}
//              input.ng-valid{border-left: 5px solid green}`]
// })
// export class AppComponent  {
//   public userForm  = new FormGroup({
//     name: new FormControl("Ankit", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
//     email: new FormControl(),
//     address: new FormGroup({
//         street: new FormControl(),
//         city: new FormControl(),
//         postalCode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
//     })
//   });
//   onSubmit(){
//     console.log(this.userForm.value);
//   }
//  }
// ************** Model driven forms using Form builder APIs ********************
// import { OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
// @Component({
//   selector: 'my-app',
//   templateUrl: `app/app.componentModelDrivenForm.html`,
//   styles: [`input.ng-invalid{border-left: 5px solid red;}
//              input.ng-valid{border-left: 5px solid green}`]
// })
// export class AppComponent implements OnInit  {
//   userForm: FormGroup;
//   constructor(private _formBuilder: FormBuilder){}
//   ngOnInit(){
//     this.userForm = this._formBuilder.group({
//       name: ['Ankit', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
//       email: [],
//       address: this._formBuilder.group({
//         street: [],
//         city: [],
//         postalCode: [null, Validators.pattern('^[1-9][0-9]{4}$')]
//       })
//     });
//   }
//   onSubmit(){
//     console.log(this.userForm.value);
//   }
//  }
// ***************** Services using Dependency Injection **************
var employee_service_1 = require("./employee.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Random Company</h1>\n              <employee-list></employee-list>\n              <employee-detail></employee-detail>",
        providers: [employee_service_1.EmployeeService] // Here we are registering a service and provide it who needs it
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map