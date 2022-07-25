import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  allowDisplayServerName: boolean = false;
  serverCreationStatus: string = 'No server has been created!';
  serverName: string = '';
  serverCreated: boolean = false;

  //Exercise
  username: string = '';

  constructor() {
    setTimeout(() => {
      console.log('time is out!');
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(event: Event): void {
    this.allowDisplayServerName = true;
    this.serverCreated = true;
    this.serverCreationStatus = `A new server is available! its name is ${this.serverName}`;
    console.log(this.serverCreationStatus, event);
  }

  onInputData(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUsername(): void {
    this.username = '';
  }
}
