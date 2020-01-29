import { Component, EventEmitter, Input, Output } from '@angular/core';
import LoggingService from '../LoggingService';
import AccountService from '../AccountService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService,AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  constructor( private loggingService: LoggingService, private accountService: AccountService ) {}


  onSetTo(status: string) {
    this.accountService.onStatusChanged({
      id:this.id,
      newStatus: status
    });
    this.loggingService.logStatusChange(status)

  }
}
