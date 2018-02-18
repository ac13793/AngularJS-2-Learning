import { Injectable, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsg: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true })
      .map(leader => leader[0]);
  }
}
