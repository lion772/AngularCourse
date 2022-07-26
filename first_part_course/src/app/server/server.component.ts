import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  serverId: string = '151.777.231.12';
  serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  checkServerStatus() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
