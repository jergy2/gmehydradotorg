import { Component, Input, OnInit } from '@angular/core';
import { FederatedServerInfo } from '../federated-server-info.interface';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {

  constructor() { }
  
  private _info: FederatedServerInfo = {
    name: '',
    displayUrl: '',
    fullUrl: '',
    adminEmail: '',
    adminCreds: [],
    drsEvidenceLink: '',
    implementation: 'Other',
    serverLocation: '',
    thumbnailFile: '',
    serverDescription: '',
  }

  @Input() public set info(info: FederatedServerInfo){ this._info = info;}
  public get info(): FederatedServerInfo { return this._info; }

  ngOnInit(): void {
  }

}
