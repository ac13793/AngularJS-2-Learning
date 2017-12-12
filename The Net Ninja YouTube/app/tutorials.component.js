"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// // A component is a class with some metadata
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{title}} tutorials</h2>
//                 <h4>Headers 4 from Tutorials Component</h4>
//                 <img [src]="imgLink" />
//                 <div [class.myClass] = "applyClass">Apply class</div>
//                 <div [style.color] = "applyBlue ? 'blue':'orange'">Apply blue</div>
//                 <button (click)="onClick(demoInput.value)">Click me!!</button><br>`,
//     styles: [`h4{
//                 color: red;
//             }
//             .myClass{
//                 color: red;
//                 }`]
// })
// export class TutorialsComponent {
//     public title = "AngularJS 2";
//     public imgLink = "http://lorempixel.com/400/200";
//     public applyClass = true;
//     public applyBlue = true;
//     onClick(demoInput:any){
//         console.log("Input text value: " + demoInput);
//     }
// }
// *********************** Two way binding ************************
// @Component({
//     selector: 'my-tutorials',
//     template: `<input type="text" [(ngModel)] = "fname" />
//                 <input type="text" [(ngModel)] = "lname" />
//                 Fullname: {{fname}} {{lname}}`
// })
// export class TutorialsComponent {
//     public fname:string;
//     public lname:string;
// }
// *********************** Structural directives  ************************
// @Component({
//     selector: 'my-tutorials',
//     template: `<p *ngIf="showElement">Show element</p>
//                <div [ngSwitch] = "color">
//                     <p *ngSwitchCase = "'red'">Red color</p>
//                     <p *ngSwitchCase = "'blue'">Red color</p>
//                     <p *ngSwitchDefault>Invalid color</p>
//                </div>
//                <ul>
//                     <li *ngFor = "let color of colors">{{color}}</li>
//                </ul>`
// })
// export class TutorialsComponent {
//     public showElement:boolean = true;
//     public color:string = "red";
//     public colors:Array<string> = ["red", "blue", "green"];
// }
// ******************** Attribute Directive ****************************
// @Component({
//     selector: 'my-tutorials',
//     template: `<p [ngClass] = "{classOne:cOne, classTwo:cTwo}">ngClass Paragraph</p>
//                 <button (click)="toggle()">Toggle</button>
//                 <p [ngStyle]="{'font-style': style, 'font-size': size}">ngStyle Paragraph</p>`,
//     styles: [`.classOne{color: red}
//              .classTwo{background-color: blue}`
//     ]
// })
// export class TutorialsComponent {
//     public cOne:boolean = true;
//     public cTwo:boolean = true;
//     public style:string = "italic";
//     public size:string = "30px";
//     toggle(){
//         this.cOne = !this.cOne;
//         this.cTwo = !this.cTwo;
//     }
// }
// ******************** Inputs and Outputs - Pass data from parent component to child component or vice-versa ******************
// import {EventEmitter } from '@angular/core';
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>Child Tutorials Component</h2>
//               <label>Enter Child Tutorials Component value</label>
//               <input type="text" #childText (keyup) = "onChange(childText.value)"/>
//               <p>Value from Parent App Component</p>
//               {{parentData}}`,
//     inputs: ['parentData'],
//     outputs: ['childEvent']
// })
// export class TutorialsComponent {
//     public parentData:string;
//     public childEvent = new EventEmitter<string>();
//     onChange(value:string){
//         this.childEvent.emit(value);
//     }
// }
// ********* Pipe Operator ******************
// @Component({
//     selector: 'my-tutorials',
//     template: `<h2>{{name}}</h2>
//                <h2>{{name | uppercase}}</h2>
//                <h2>{{name | lowercase}}</h2>`
// })
// export class TutorialsComponent {
//     public name: string = "Ankit Chaurasia";
// }
// ************ Template driven forms *************
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.name = "Ankit Chaurasia";
    }
    return TutorialsComponent;
}());
TutorialsComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorials',
        template: "<h2>{{name}}</h2>\n               <h2>{{name | uppercase}}</h2>\n               <h2>{{name | lowercase}}</h2>"
    })
], TutorialsComponent);
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map