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
  ElementRef,
  ContentChild
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
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called.');
  }

  ngOnInit() {
    console.log('ngOnInit() called.');
    console.log('serverHeading text: ' + this.serverHeading.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called.');
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called.');
    console.log('serverHeading text: ' + this.serverHeading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called.');
  }
}
