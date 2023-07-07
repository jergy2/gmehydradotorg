import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { federatedServerList } from './federated-server-list';
import { FederatedServerInfo } from './federated-server-info.interface';
import { faExclamationTriangle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { InstancesService } from './instances/instances.service';
import { InstanceInfoDto } from './instances/instance-info-dto.interface';
import { FederatedServer } from './federated-server.class';


@Component({
  selector: 'app-federated-server-list',
  templateUrl: './federated-server-list.component.html',
  styleUrls: ['./federated-server-list.component.css']
})
export class FederatedServerListComponent implements OnInit {

  constructor(private screenService: ScreenSizeService, private instanceService: InstancesService) { }

  private _isMobile: boolean = false;
  private _emailDisclaimerIsExpanded: boolean = false;
  private _drsDisclaimerIsExpanded: boolean = false;
  private _showGrowHydra: boolean = false;
  private _servers: FederatedServer[] = [];

  public get faExclamationTriangle(): IconDefinition { return faExclamationTriangle; }
  public get serverList(): FederatedServerInfo[] { return federatedServerList; }
  public get screenIsMobile(): boolean { return this._isMobile; }
  public get emailDisclaimerIsExpanded(): boolean { return this._emailDisclaimerIsExpanded; }
  public get drsDisclaimerIsExpanded(): boolean { return this._drsDisclaimerIsExpanded; }
  public get showGrowHydra(): boolean { return this._showGrowHydra; }
  public get isLargeScreen(): boolean { return this.screenService.isFullSize; }
  public get instanceInfo(): InstanceInfoDto[] { return this.instanceService.instanceInfo; }
  public get servers(): FederatedServer[] { return this._servers;}


  ngOnInit(): void {
    this._isMobile = this.screenService.isSmallSize;
    this.screenService.appScreenSize$.subscribe(()=>{
      this._isMobile = this.screenService.isSmallSize;
    });
    this._buildServers();
  }

  private _buildServers(){
    this._servers = this.serverList.map(item => new FederatedServer(item));
    this.instanceService.instanceInfo$.subscribe({
      next: ()=>{},
      error: ()=>{},
      complete: ()=>{
        const instanceInfo = this.instanceService.instanceInfo;
        instanceInfo.forEach(instance =>{
          this.servers.forEach(server =>{
            if(instance.url === server.fullUrl){
              server.addInstanceInfo(instance);
            }
          })
        })
      }
    })
  }

  public registrationStatus(server: FederatedServerInfo): string{ 
    return ' ** Registration Status **'
  }

  public onClickOwner(server: FederatedServer){
    server.onClickOwner();
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
