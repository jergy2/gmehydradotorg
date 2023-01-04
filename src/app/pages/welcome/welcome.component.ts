import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenSizeService } from 'src/app/utilities/screen-size/screen-size.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private screenService: ScreenSizeService) { }

  public get isMobile(): boolean { return this.screenService.isSmallSize; }

  ngOnInit(): void {
  }

  public get serverCount(): number { return 2; }
  public onClickHeadCount() { this.router.navigate(['/server-list']); }
}
