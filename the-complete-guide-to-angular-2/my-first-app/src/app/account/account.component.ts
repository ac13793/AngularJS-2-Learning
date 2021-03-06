import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();
  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({
    //   id: this.id,
    //   newStatus: status
    // });
    // console.log('A Server status changed, new status: ' + status);
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusChanged.emit(status);
  }

}
