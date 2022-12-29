import { Component, OnInit } from '@angular/core';
import { Server } from './server.interface';
import { serverList } from './server-list';
import { ScreenSizeService } from '../screen-size/screen-size.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  constructor(private screenService: ScreenSizeService, private popupService: PopupService) { }

  private _isMobile: boolean = false;

  public get serverList(): Server[] { return serverList; }
  public get screenIsMobile(): boolean { return this._isMobile; }


  ngOnInit(): void {
    this._isMobile = this.screenService.isSmallSize;
    this.screenService.appScreenSize$.subscribe(()=>{
      this._isMobile = this.screenService.isSmallSize;
    })
  }

  public userCount(count: number): string { 
    if(count < 100){
      return '< 100';
    }else if(count >= 100 && count < 1000){
      return '100 to 999';
    }else if(count >= 1000 && count < 10000){
      return '1,000 to 9,999';
    }else if(count >= 10000 && count < 100000){
      return '10,000 to 99,999';
    }else{
      return '';
    }
  }

  public registrationStatus(server: Server): string{ 
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
    this.popupService.addServer();
  }


}
