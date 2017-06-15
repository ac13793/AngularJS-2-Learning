import { Component } from '@angular/core';

// A component is a class with some metadata
@Component({
    selector: 'my-tutorials',
    template: `<h2>{{title}} tutorials</h2>
                <h4>Headers 4 from Tutorials Component</h4>
                <img [src]="imgLink" />
                <div [class.myClass] = "applyClass">Apply class</div>
                <div [style.color] = "applyBlue ? 'blue':'orange'">Apply blue</div>`,
    styles: [`h4{
                color: red;
            }
            .myClass{
                color: red;
                }`]
})


export class TutorialsComponent {
    public title = "AngularJS 2";
    public imgLink = "http://lorempixel.com/400/200";
    public applyClass = true;
    public applyBlue = true;
}