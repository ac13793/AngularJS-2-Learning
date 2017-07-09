"use strict";
// ************************ Route Parameter ************************
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component ({
//     template: '<h3>You selected department with id = {{departmentId}}</h3>'
// })
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// export class DepartmentDetailsComponent implements OnInit {
//     public departmentId: string;
//     constructor(private router: ActivatedRoute){}
//     ngOnInit() {
//         //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//         //Add 'implements OnInit' to the class.
//         let id: string = this.router.snapshot.params['id'];
//         this.departmentId = id;
//     }
// }
// *********** Params Observable ********
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, Params } from '@angular/router';
// @Component ({
//     template: `<h3>You selected department with id = {{departmentId}}</h3>
//                 <a (click)="goPrevious()">Previous</a>
//                 <a (click)="goNext()">Next</a>`
// })
// export class DepartmentDetailsComponent implements OnInit {
//     public departmentId: number;
//     constructor(private route: ActivatedRoute, private router: Router){}
//     ngOnInit() {
//         //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//         //Add 'implements OnInit' to the class.
//         // ******** Snapshot Approach ***********
//         // let id: string = this.route.snapshot.params['id'];
//         // this.departmentId = parseInt(id);
//         // ********** Params Observable Approach **********
//         this.route.params.subscribe((params: Params) => {
//             let id: number = parseInt(params['id']);
//             this.departmentId = id;
//         })
//     }
//     goPrevious(){
//         let previoudId: number = this.departmentId - 1;
//         this.router.navigate(['/departments', previoudId]);
//     }
//     goNext(){
//         let nextId = (this.departmentId + 1).toString();
//         console.log("Next:" + nextId);
//         this.router.navigate(['/departments', nextId]);
//     }
// }
// ************ Optional Route Parameter *************
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentDetailsComponent = (function () {
    function DepartmentDetailsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    DepartmentDetailsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // ******** Snapshot Approach ***********
        // let id: string = this.route.snapshot.params['id'];
        // this.departmentId = parseInt(id);
        var _this = this;
        // ********** Params Observable Approach **********
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.departmentId = id;
        });
    };
    DepartmentDetailsComponent.prototype.goPrevious = function () {
        var previoudId = this.departmentId - 1;
        this.router.navigate(['/departments', previoudId]);
    };
    DepartmentDetailsComponent.prototype.goNext = function () {
        var nextId = (this.departmentId + 1).toString();
        console.log("Next:" + nextId);
        this.router.navigate(['/departments', nextId]);
    };
    DepartmentDetailsComponent.prototype.gotoDepartments = function () {
        var selectedId = this.departmentId ? this.departmentId : null;
        this.router.navigate(['/departments', { id: selectedId, random: "random" }]);
    };
    return DepartmentDetailsComponent;
}());
DepartmentDetailsComponent = __decorate([
    core_1.Component({
        template: "<h3>You selected department with id = {{departmentId}}</h3>\n                <a (click)=\"goPrevious()\">Previous</a>\n                <a (click)=\"goNext()\">Next</a>\n                <p><button (click)=\"gotoDepartments()\">Back</button></p>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DepartmentDetailsComponent);
exports.DepartmentDetailsComponent = DepartmentDetailsComponent;
//# sourceMappingURL=department-detail.component.js.map