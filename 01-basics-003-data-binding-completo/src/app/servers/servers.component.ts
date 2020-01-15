import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = ""
  serverStatus = "Nessun nuovo server è stato creato finora"
  constructor() {}

  
  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverStatus = `il nuovo server ${this.serverName} è stato creato correttamente`
    this.serverName = "";
  }
}
