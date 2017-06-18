// ********* Services in Angularjs 2  ********************
// import { Injectable } from '@angular/core';

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
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/observable';
@Injectable()
export class EmployeeService {
    private url: string = "../apidata/employeedata.json";
    constructor(private _http: Http){}
    getEmployees(){
        return this._http.get(this.url)
                .map((response: Response) => response.json())
                .catch(this._errorHandler);
    }

    _errorHandler(error: Response){
        console.log(error);
        return Observable.throw(error || "Server Error");
        
    }
}