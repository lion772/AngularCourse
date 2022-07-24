import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: string = '151.777.231.12';
  serverStatus: string = 'running';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }
}
