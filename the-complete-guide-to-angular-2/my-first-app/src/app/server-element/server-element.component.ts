import {
  Component, OnInit, Input, ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('serverHeading') serverHeading: ElementRef;
  constructor() {
    console.log('constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called.');
  }

  ngOnInit() {
    console.log('ngOnInit() called.');
    console.log('serverHeading text: ' + this.serverHeading.nativeElement.value);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called.');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called.');
    console.log('serverHeading text: ' + this.serverHeading.nativeElement.value);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called.');
  }
}
