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
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Ankit Chaurasia";
    }
    AppComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        styles: ["input.ng-invalid{border-left: 5px solid red;}\n            input.ng-valid{border-left: 5px solid green}"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map