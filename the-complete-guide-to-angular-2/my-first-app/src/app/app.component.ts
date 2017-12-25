// import { Component } from '@angular/core';
// import {AccountService} from './services/account.service'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
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

// export class AppComponent {
//   // numbers = [1, 2, 3, 4, 5];
//   oddNumbers = [1, 3, 5, 7];
//   evenNumbers = [2, 4, 6];
//   onlyOdd = false;
//   value = 5;
// }
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: {
    name: string,
    status: string
  }[] = [];

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    // Here account is array to assignment is of reference type
    this.accounts = this.accountService.accounts;
  }
}
