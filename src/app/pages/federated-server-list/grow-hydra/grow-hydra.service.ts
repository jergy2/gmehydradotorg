import { Injectable } from '@angular/core';
import { RequestData } from './server-form/request-data.interface';

@Injectable({
  providedIn: 'root'
})
export class GrowHydraService {

  constructor() { }


  private _agreeToDrs: boolean = false;
  private _applicationSubmitted: boolean = false;
  public get agreeToDrs(): boolean { return this._agreeToDrs; }
  public get applicationSubmitted(): boolean { return this._applicationSubmitted; }
  public onAgreeToDrs(agree: boolean){ this._agreeToDrs = agree; }
  private _requestData: RequestData = {
    email: '',
    url: '',
    name: '',
    location: '',
    comment: '',
  }

  public get requestData(): RequestData { return this._requestData; }
  public set requestData(data: RequestData) { this._requestData = data; }
  public onSuccess(){
    this._applicationSubmitted = true;
  }

}
