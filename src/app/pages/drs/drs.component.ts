import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';

@Component({
  selector: 'app-drs',
  templateUrl: './drs.component.html',
  styleUrls: ['./drs.component.css']
})
export class DrsComponent implements OnInit {

  constructor(private sizeService: ScreenSizeService) { }

  private _showLyrics: boolean = false;
  public get showLyrics(): boolean { return this._showLyrics; }
  public get isLarge(): boolean { return this.sizeService.isFullSize; }

  ngOnInit(): void {
  }

  public onClickShowLyrics(){
    this._showLyrics = !this._showLyrics;
  }

}
