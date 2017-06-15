import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <h4>Headers 4 from AppComponent</h4>
              <my-tutorials></my-tutorials>`,
  styles: [`h4{
                color: blue;
            }`]
})
export class AppComponent  { name = 'Angular'; }
