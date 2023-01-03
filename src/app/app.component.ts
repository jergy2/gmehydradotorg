import { Component, OnInit, HostListener } from '@angular/core';
import { PopupService } from './utilities/popup.service';
import { ScreenSizeService } from './utilities/screen-size/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GME Hydra';
  constructor(
    private screenService: ScreenSizeService, 
    private popupService: PopupService,
    private router: Router
    ){}

  public get isLarge(): boolean { return this.screenService.isFullSize; }

  @HostListener('window:resize', ['$event']) onResize(e: Event) {
    this.screenService.updateSize(window.innerWidth, window.innerHeight);
  }

  public get showPopup(): boolean { return this.popupService.showPopup; }

  ngOnInit(){
    this.screenService.updateSize(window.innerWidth, window.innerHeight);
  }
}
