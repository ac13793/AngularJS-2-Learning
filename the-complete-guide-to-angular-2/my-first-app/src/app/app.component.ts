import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   serverElements = [{type: 'server', name: 'test server', content: 'test content'}];

//   onServerAdded(serverData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: bluePrintData.serverName,
//       content: bluePrintData.serverContent
//     });
//   }
// }

export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;
}
