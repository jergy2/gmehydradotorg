import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';

@Component({
  selector: 'app-run-your-own',
  templateUrl: './run-your-own.component.html',
  styleUrls: ['./run-your-own.component.css']
})
export class RunYourOwnComponent implements OnInit {

  constructor(private sizeService: ScreenSizeService) { }

  public get isMobile(): boolean { return this.sizeService.isSmallSize;}

  ngOnInit(): void {
  }

}
