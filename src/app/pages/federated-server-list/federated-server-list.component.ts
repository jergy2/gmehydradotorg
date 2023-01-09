import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { PopupService } from 'src/app/utilities/popup.service';
import { federatedServerList } from './federated-server-list';
import { FederatedServer } from './federated-server.interface';
import { faExclamationTriangle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-federated-server-list',
  templateUrl: './federated-server-list.component.html',
  styleUrls: ['./federated-server-list.component.css']
})
export class FederatedServerListComponent implements OnInit {

  constructor(private screenService: ScreenSizeService, private popupService: PopupService, private router: Router) { }

  private _isMobile: boolean = false;
  private _emailDisclaimerIsExpanded: boolean = false;
  private _drsDisclaimerIsExpanded: boolean = false;
  private _showGrowHydra: boolean = false;

  public get faExclamationTriangle(): IconDefinition { return faExclamationTriangle; }
  public get serverList(): FederatedServer[] { return federatedServerList; }
  public get screenIsMobile(): boolean { return this._isMobile; }
  public get emailDisclaimerIsExpanded(): boolean { return this._emailDisclaimerIsExpanded; }
  public get drsDisclaimerIsExpanded(): boolean { return this._drsDisclaimerIsExpanded; }
  public get showGrowHydra(): boolean { return this._showGrowHydra; }

  public get isLargeScreen(): boolean { return this.screenService.isFullSize; }


  ngOnInit(): void {
    this._isMobile = this.screenService.isSmallSize;
    this.screenService.appScreenSize$.subscribe(()=>{
      this._isMobile = this.screenService.isSmallSize;
    })
  }

  public userCount(count: number): string { 
    if(count < 100){
      return 'less than 100';
    }else if(count >= 100 && count < 1000){
      return 'less than 1,000';
    }else if(count >= 1000 && count < 10000){
      return 'less than 10,000';
    }else if(count >= 10000 && count < 100000){
      return 'less than 100,000';
    }else{
      return '';
    }
  }

  public registrationStatus(server: FederatedServer): string{ 
    if(server.registrationStatus === 'OPEN'){
      return 'Open';
    }else if(server.registrationStatus === 'BY_INVITE'){
      return server.registrationLink;
    }else if(server.registrationStatus === 'CLOSED'){
      return 'Closed';
    }
    return '';
  }

  public onClickAddServer(){
    this._showGrowHydra = true;
  }

  public onClickEmailDisclaimer(){
    this._emailDisclaimerIsExpanded = !this._emailDisclaimerIsExpanded;
  }
  public onClickDrsDisclaimer(){
    this._drsDisclaimerIsExpanded = !this._drsDisclaimerIsExpanded;
  }

  onClickLink(url: string){
    window.open(url, '_blank');
  }

}
