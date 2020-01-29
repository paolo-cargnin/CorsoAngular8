import LoggingService from "./LoggingService";
import { Injectable, EventEmitter } from "@angular/core";


@Injectable()
export default class AccountService{
  statusUpdate = new EventEmitter<string>()
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor( private loggingService: LoggingService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(updateInfo.newStatus)
    this.statusUpdate.emit(updateInfo.newStatus)
  }
}