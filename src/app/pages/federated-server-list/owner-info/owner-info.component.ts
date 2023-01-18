import { Component, Input, OnInit } from '@angular/core';
import { FederatedServer } from '../federated-server.interface';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {

  constructor() { }
  
  private _info: FederatedServer = {
    name: '',
    statusPositive: false,
    displayUrl: '',
    fullUrl: '',
    userCount: 0,
    serverStatus: '',
    drsStatus: '',
    adminEmail: '',
    adminCreds: [],
    drsEvidenceLink: '',
    registrationStatus: 'CLOSED',
    registrationLink: '',
    implementation: '',
    serverLocation: '',
    thumbnailFile: '',
    serverDescription: '',
    exploreLink: '',
    aboutLink: '',
    ownerIsExpanded: true,
  }

  @Input() public set info(info: FederatedServer){ this._info = info;}
  public get info(): FederatedServer { return this._info; }

  ngOnInit(): void {
  }

}
