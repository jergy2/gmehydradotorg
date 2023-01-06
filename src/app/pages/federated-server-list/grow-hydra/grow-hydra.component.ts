import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrowHydraService } from './grow-hydra.service';
import { RequestData } from './server-form/request-data.interface';


@Component({
  selector: 'app-grow-hydra',
  templateUrl: './grow-hydra.component.html',
  styleUrls: ['./grow-hydra.component.css']
})
export class GrowHydraComponent implements OnInit {

  constructor(private router: Router, private growService: GrowHydraService) { }

  private _showForm: boolean = false;
  private _showConfirmation: boolean = false;
  private _showButtons: boolean = true;

  public get showForm(): boolean { return this._showForm; }
  public get showConfirmation(): boolean { return this._showConfirmation; }
  public get showButtons(): boolean { return this._showButtons; }

  public get requestData(): RequestData { return this.growService.requestData; }
  public get applicationSubmitted(): boolean { return this.growService.applicationSubmitted; }


  ngOnInit(): void {
    const submitted = localStorage.getItem('SUBMITTED');
    if(submitted === 'TRUE'){
      this.growService.onSuccess();
    }
  }

  public onFormSubmitted(){
    this._showForm = false;
    this._showConfirmation = true;
  }

  public onClickAddExisting() {
    this._showButtons = false;
    this._showForm = true;
  }

  public onClickStartNew() {
    this.router.navigate(['/run-your-own']);
  }

  public onApplicationSubmitted(data: RequestData) {
    this._showForm = false;
    this._showConfirmation = true;
    this.growService.requestData = data;
  }

  public onGoToForm(){
    this._showConfirmation = false;
    this._showForm = true;
  }

}
