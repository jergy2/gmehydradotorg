import { Component, OnInit, HostListener } from '@angular/core';
import { PopupService } from './popup.service';
import { ScreenSizeService } from './screen-size/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GME Hydra';
  constructor(private screenService: ScreenSizeService, private popupService: PopupService){}

  @HostListener('window:resize', ['$event']) onResize(e: Event) {
    this.screenService.updateSize(window.innerWidth, window.innerHeight);
  }

  public get showPopup(): boolean { return this.popupService.showPopup; }

  ngOnInit(){
    this.screenService.updateSize(window.innerWidth, window.innerHeight);
  }
}
