import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusChanged.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
   }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
