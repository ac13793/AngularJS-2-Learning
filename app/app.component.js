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
//               <h4>Headers 4 from AppComponent</h4>
//               <my-tutorials></my-tutorials>`,
//   styles: [`h4{
//                 color: blue;
//             }`]
// })
// export class AppComponent  { name = 'Angular'; }
// ******************** Inputs and Outputs - Pass data from parent component to child component or vice-versa ******************
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello World</h1>\n            <h2>Parent App component</h2>\n            <label>Enter parent component value</label>\n            <input type=\"text\" #pText (keyup) = \"0\"/>\n            <p>Value from Child Tutorials component</p>\n            {{childData}}\n            <my-tutorials (childEvent) = \"childData = $event\" [parentData] = \"pText.value\"></my-tutorials>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map