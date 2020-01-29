import { Component, OnInit } from '@angular/core';
import AccountService from './AccountService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  instructions = true;
  accounts: { name: string; status: string; }[];

  constructor(private accountService: AccountService){}
  
  ngOnInit(){
    this.accounts = this.accountService.accounts
  }
}
