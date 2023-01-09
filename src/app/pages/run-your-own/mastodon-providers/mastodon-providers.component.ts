import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { ProviderDetails } from './provider-details.interface';
import { providersList } from './providers-list';

@Component({
  selector: 'app-mastodon-providers',
  templateUrl: './mastodon-providers.component.html',
  styleUrls: ['./mastodon-providers.component.css']
})
export class MastodonProvidersComponent implements OnInit {

  constructor(private sizeService: ScreenSizeService) { }

  public get isMobile(): boolean { return this.sizeService.isSmallSize;}
  public get providers(): ProviderDetails[] { return providersList; }

  ngOnInit(): void {
  }

}
