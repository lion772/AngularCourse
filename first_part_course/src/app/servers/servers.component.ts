import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server has been created!';

  constructor() {
    setTimeout(() => {
      console.log('time is out!');
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(event: Event): void {
    this.serverCreationStatus = 'A new server is available!';
    console.log(this.serverCreationStatus, event);
  }
}
