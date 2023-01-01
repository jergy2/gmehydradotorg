import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private _showPopup: boolean = false;
  public get showPopup(): boolean { return this._showPopup; }
  constructor() { }
  
  public addServer(){ this._showPopup = true;}
  public closePopup() { this._showPopup = false; }

}
