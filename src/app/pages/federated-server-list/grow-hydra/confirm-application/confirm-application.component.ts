import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { RequestData } from '../server-form/request-data.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrowHydraService } from '../grow-hydra.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-application',
  templateUrl: './confirm-application.component.html',
  styleUrls: ['./confirm-application.component.css']
})
export class ConfirmApplicationComponent implements OnInit, OnDestroy {

  constructor(private screenService: ScreenSizeService, private httpClient: HttpClient, private growService: GrowHydraService, private router:Router) { }

  public get isMobile(): boolean { return !this.screenService.isFullSize; }
  private _ngStyle: any = {

  };
  public get ngStyle(): any { return this._ngStyle; }

  public get requestData(): RequestData { return this.growService.requestData; }
  public get senderAddress(): string { return this.requestData.email; }
  @Output() public goBack: EventEmitter<boolean> = new EventEmitter();

  private _showReview: boolean = true;
  private _showError: boolean = false;
  private _showSuccess: boolean = false;
  private _showLoading: boolean = false;
  private _errorMessage: string = '';

  public get showReview(): boolean { return this._showReview; }
  public get showError(): boolean { return this._showError; }
  public get showSuccess(): boolean { return this._showSuccess; }
  public get showLoading(): boolean { return this._showLoading; }
  public get errorMessage(): string { return this._errorMessage; }

  public onShowReview(){
    this._showReview = true;
    this._showError = false;
    this._showSuccess = false;
    this._showLoading = false;
  }
  public onShowError(message: string){
    this._errorMessage = message;
    this._showReview = false;
    this._showError = true;
    this._showSuccess = false;
    this._showLoading = false;
  }
  public onShowSuccess(){
    localStorage.setItem('SUBMITTED', 'TRUE');
    this._showReview = false;
    this._showError = false;
    this._showSuccess = true;
    this._showLoading = false;
  }
  public onShowLoading(){
    this._showReview = false;
    this._showError = false;
    this._showSuccess = false;
    this._showLoading = true;
  }

  private _routerSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    if (this.screenService.isSmallSize) {
      this._ngStyle = {
        "max-width": (this.screenService.width - 85) + "px"
      };
    }
    this.screenService.appScreenSize$.subscribe(change => {
      if (this.screenService.isSmallSize) {
        this._ngStyle = {
          "max-width": (change.width - 85) + "px"
        };
      } else {
        this._ngStyle = {

        };
      }
    });
    this._routerSubscription = this.router.events.subscribe(()=>{
      if(this.showSuccess){
        this.growService.onSuccess();
      }
    });
  }

  ngOnDestroy(){
    this._routerSubscription.unsubscribe();
  }


  public onClickGoBack() {
    this.goBack.emit(true);
  }
  public onClickSubmit() {
    const postUrl = 'https://hydramailer.org/submit-server';
    // const postUrl = 'http://localhost:3000/submit-server';
    const headers = new HttpHeaders()
    // .set('Access-Control-Allow-Origin', '*');
      // .set('content-type', 'application/json')
    this.onShowLoading();
    this.httpClient.post(postUrl, this.growService.requestData, {headers: headers, observe: 'response'}).subscribe((response) => {
      if(response.status === 201){
        this.onShowSuccess();
      }else{
        this.onShowError('No 201 response');
      }
    }, (err) => {
      this.onShowError(err.message);
    }, () => {
      // console.log("Complete");
    })
  }
}
