import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// This decorator is required if you plan to inject a service into a service
@Injectable()
export class ServerService {
    constructor(private http: Http){}

    storeServers(servers: any[]){
        return this.http.post('https://udemy-ng-http-f79ae.firebaseio.com/data.json', servers);
    }
}