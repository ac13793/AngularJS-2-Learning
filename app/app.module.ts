import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// If you use Two-way binding of Angular2 you must import FormsModule in your app
import { FormsModule } from '@angular/forms';
// If you use commons elements (ngSwitch, ngIf, ngFor, ...) of Angular2 you must import CommonModule in your app
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { TutorialsComponent } from './tutorials.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent, TutorialsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
