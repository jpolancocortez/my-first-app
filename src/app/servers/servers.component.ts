import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private _timestamp: string = "UTC -6GM";
  serverName = '';
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';


  constructor() { }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(newtimestamp: stirng) {
    this._timestamp = newtimestamp;
  }
}
