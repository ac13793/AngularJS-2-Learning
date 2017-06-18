"use strict";
// ********* Services in Angularjs 2  ********************
// import { Injectable } from '@angular/core';
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
// @Injectable()
// export class EmployeeService {
//     getEmployees(){
//         return [
//             {"id": 1, "name": "Mike", "gender": "male"},
//             {"id": 2, "name": "Ryu", "gender": "male"},
//             {"id": 3, "name": "Stefen", "gender": "male"},
//             {"id": 4, "name": "Elena", "gender": "Female"}
//         ]
//     }
// }
// ************* Http module **************
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var observable_1 = require("rxjs/observable");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.url = "../apidata/employeedata.json";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype._errorHandler = function (error) {
        console.log(error);
        return observable_1.Observable.throw(error || "Server Error");
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map