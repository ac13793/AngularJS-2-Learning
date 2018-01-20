import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/interval';
import 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<String>) => {
      setTimeout(() => { observer.next('first Package') }, 2000);
      setTimeout(() => { observer.next('second Package') }, 4000);
      setTimeout(() => { observer.error('error package') }, 5000);
      setTimeout(() => { observer.complete(); }, 6000);
      setTimeout(() => { observer.next('does not work') }, 7000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: String) => { console.log(data); },
      (error) => { console.log(error) },
      () => { console.log("completed"); }
    );

  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
