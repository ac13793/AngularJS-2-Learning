"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// A component is a class with some metadata
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "AngularJS 2";
        this.imgLink = "http://lorempixel.com/400/200";
        this.applyClass = true;
        this.applyBlue = true;
    }
    return TutorialsComponent;
}());
TutorialsComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorials',
        template: "<h2>{{title}} tutorials</h2>\n                <h4>Headers 4 from Tutorials Component</h4>\n                <img [src]=\"imgLink\" />\n                <div [class.myClass] = \"applyClass\">Apply class</div>\n                <div [style.color] = \"applyBlue ? 'blue':'orange'\">Apply blue</div>",
        styles: ["h4{\n                color: red;\n            }\n            .myClass{\n                color: red;\n                }"]
    })
], TutorialsComponent);
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map