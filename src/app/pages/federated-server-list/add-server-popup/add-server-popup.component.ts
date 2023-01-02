import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/utilities/popup.service';

@Component({
  selector: 'app-add-server-popup',
  templateUrl: './add-server-popup.component.html',
  styleUrls: ['./add-server-popup.component.css']
})
export class AddServerPopupComponent implements OnInit {

  constructor(private popupService: PopupService) { }

  ngOnInit(): void {
  }


  public onClickClose(){
    this.popupService.closePopup();
  }

}
