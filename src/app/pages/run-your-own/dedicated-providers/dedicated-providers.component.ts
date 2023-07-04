import { Component, Input, OnInit } from '@angular/core';
import { ProviderDetails } from './provider-details.interface';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { providersList } from '../dedicated-providers/providers-list';

@Component({
  selector: 'app-dedicated-providers',
  templateUrl: './dedicated-providers.component.html',
  styleUrls: ['./dedicated-providers.component.css']
})
export class DedicatedProvidersComponent implements OnInit {

  constructor(private sizeService: ScreenSizeService) { }

  public get isMobile(): boolean { return this.sizeService.isSmallSize;}
  public get providers(): ProviderDetails[] { return this._appProvidersList; }

  private _appProvidersList: ProviderDetails[] = [];

  private _appName: 'Lemmy' | 'Mastodon' = 'Lemmy';
  public get appName(): 'Lemmy' | 'Mastodon' { return this._appName; }
  @Input() public set appName(appName: 'Lemmy' | 'Mastodon'){ 
    this._appName = appName;
    this._appProvidersList = providersList.filter(listItem => listItem.appName === this._appName);
  }

  ngOnInit(): void {
  }

}
