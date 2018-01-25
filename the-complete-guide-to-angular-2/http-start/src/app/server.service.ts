import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

// This decorator is required if you plan to inject a service into a service
@Injectable()
export class ServerService {
    constructor(private http: Http){}

    storeServers(servers: any[]){
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // return this.http.post('https://udemy-ng-http-f79ae.firebaseio.com/data.json', servers, {headers: headers});
        // Put request does not create new data instead it will override the existing data
        return this.http.put('https://udemy-ng-http-f79ae.firebaseio.com/data.json', servers, {headers: headers});
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-f79ae.firebaseio.com/data.json');
    }
}