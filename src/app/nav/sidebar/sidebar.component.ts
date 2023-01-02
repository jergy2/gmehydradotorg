import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from './sidebar-item.interface';
import { sidebarItems } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  public get sidebarItems(): SidebarItem[] { return sidebarItems; }

  ngOnInit(): void {
  }

  public onClickItem(link: string) { this.router.navigate(['/' + link]); }

}
