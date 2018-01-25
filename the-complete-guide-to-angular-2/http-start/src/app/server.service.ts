import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

// This decorator is required if you plan to inject a service into a service
@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // return this.http.post('https://udemy-ng-http-f79ae.firebaseio.com/data.json', servers, {headers: headers});
        // Put request does not create new data instead it will override the existing data
        return this.http.put('https://udemy-ng-http-f79ae.firebaseio.com/data.json', servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-f79ae.firebaseio.com/')
            .map(
            (response: Response) => {
                const data = response.json();
                // Here we are returning another Observables
                return data;
            }
            )
            .catch(
            (error: Response) => {
                console.log(error);
                // Catch operator will not wrap our data into an Observable
                return Observable.throw(error);
            }
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-f79ae.firebaseio.com/data/appName.json')
            .map(
            (response: Response) => {
                return response.json();
            }
            );
    }
}