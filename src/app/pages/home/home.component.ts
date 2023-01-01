import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../screen-size/screen-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private screenService: ScreenSizeService) { }
  private _isMobile: boolean = false;

  public get screenIsMobile(): boolean { return this._isMobile; }


  ngOnInit(): void {
    this._isMobile = this.screenService.isSmallSize;
    this.screenService.appScreenSize$.subscribe(()=>{
      this._isMobile = this.screenService.isSmallSize;
    });
  }

  public get headCount(): string { 
    return "2";
  }
}
