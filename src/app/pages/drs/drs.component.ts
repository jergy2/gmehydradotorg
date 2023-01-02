import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drs',
  templateUrl: './drs.component.html',
  styleUrls: ['./drs.component.css']
})
export class DrsComponent implements OnInit {

  constructor() { }

  private _showLyrics: boolean = false;
  public get showLyrics(): boolean { return this._showLyrics; }

  ngOnInit(): void {
  }

  public onClickShowLyrics(){
    this._showLyrics = !this._showLyrics;
  }

}
