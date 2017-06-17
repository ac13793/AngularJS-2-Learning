import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//               <my-tutorials></my-tutorials>`,
// })
// export class AppComponent  { name = 'Angular'; }

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//               <h4>Headers 4 from AppComponent</h4>
//               <my-tutorials></my-tutorials>`,
//   styles: [`h4{
//                 color: blue;
//             }`]
// })
// export class AppComponent  { name = 'Angular'; }

// ******************** Inputs and Outputs - Pass data from parent component to child component or vice-versa ******************
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello World</h1>
//             <h2>Parent App component</h2>
//             <label>Enter parent component value</label>
//             <input type="text" #pText (keyup) = "0"/>
//             <p>Value from Child Tutorials component</p>
//             {{childData}}
//             <my-tutorials (childEvent) = "childData = $event" [parentData] = "pText.value"></my-tutorials>`
// })
// export class AppComponent  { 
//     public childData:string;
//  }

// ************ Template driven forms *************

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styles: [`input.ng-invalid{border-left: 5px solid red;}
            input.ng-valid{border-left: 5px solid green}`]
})
export class AppComponent  {
  public name: string = "Ankit Chaurasia"; 
  onSubmit(value:any){
    console.log(value);
  }
 }