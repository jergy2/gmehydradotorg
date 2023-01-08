import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';
import { GrowHydraService } from '../grow-hydra.service';
import { validate } from '../validator';
import { RequestData } from './request-data.interface';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {

  constructor(private screenService: ScreenSizeService, private growService: GrowHydraService) { }

  private _isInvalidDomain: boolean = false;
  private _isInvalidEmail: boolean = false;
  private _isInvalidName: boolean = false;
  private _regTestDomain: RegExp = new RegExp('([a-zA-Z-\d]+)?([.][a-zA-Z-\d]+){1,2}');
  // private _regTestEmail: RegExp = new RegExp('([a-zA-Z-\d]+)@([a-zA-Z-\d]+)[.]([a-zA-Z-\d]+)');
  private _regTestEmail: RegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
  private _submitButtonIsEnabled: boolean = false;
  private _drsIsChecked: boolean = false;

  public get isInvalidDomain(): boolean { return this._isInvalidDomain; }
  public get isInvalidEmail(): boolean { return this._isInvalidEmail; }
  public get isInvalidName(): boolean { return this._isInvalidName; }
  public get isMobile(): boolean { return !this.screenService.isFullSize; }
  public get submitButtonIsEnabled(): boolean { return this._submitButtonIsEnabled; }
  public get agreeToDrs(): boolean { return this.growService.agreeToDrs; }
  public get drsIsChecked(): boolean { return this._drsIsChecked; }


  public serverForm = new FormGroup({
    url: new FormControl('', [Validators.required, validate(this._regTestDomain)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this._regTestEmail)]),
    name: new FormControl('', [Validators.required]),
    location: new FormControl(''),
    comment: new FormControl(''),
  });

  @Output() submit: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.growService.requestData.url !== '' && this.growService.requestData.email !== '' && this.growService.requestData.name !== '') {
      this.serverForm.patchValue({
        url: this.growService.requestData.url,
        email: this.growService.requestData.email,
        name: this.growService.requestData.name,
        location: this.growService.requestData.location,
        comment: this.growService.requestData.comment,
      });
    }
    this.serverForm.valueChanges.subscribe(() => { this._enableSubmitButton(); });
    this._drsIsChecked = this.growService.agreeToDrs;
    this._enableSubmitButton();
  }

  public onClickSubmitForm() {
    // const emailToLower = this.serverForm.controls['email'].value
    // this.serverForm.controls['email'].patchValue
    if (this.serverForm.controls['url'].valid) {
      this._isInvalidDomain = false;
    } else {
      this._isInvalidDomain = true;
    }
    if (this.serverForm.controls['email'].valid) {
      this._isInvalidEmail = false;
    } else {
      this._isInvalidEmail = true;
    }
    if (this.serverForm.controls['name'].valid) {
      this._isInvalidName = false;
    } else {
      this._isInvalidName = true;
    }
    if (this.serverForm.valid) {
      const request = this._buildApplication(this.serverForm);
      this.growService.requestData = request;
      this.submit.emit(true);
    }
  }

  private _enableSubmitButton() {
    if(this.agreeToDrs === true){
      this._submitButtonIsEnabled = true;
    }else{
      this._submitButtonIsEnabled = false;
    }
  }

  public drsCheckCheckBoxvalue(event: any) {
    if (event.checked === true) {
      this.growService.onAgreeToDrs(true);
    } else {
      this.growService.onAgreeToDrs(false);
    }
    this._enableSubmitButton();
  }


  private _buildApplication(serverForm: FormGroup): RequestData {
    let emailValue: string = serverForm.value['email'];
    emailValue = emailValue.trimEnd().trimStart();
    const requestData: RequestData = {
      email: serverForm.value['email'],
      url: serverForm.value['url'],
      name: serverForm.value['name'],
      location: serverForm.value['location'],
      comment: serverForm.value['comment'],
    }
    return requestData;
  }

}
