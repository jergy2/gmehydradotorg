import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from '../sidebar/sidebar-item.interface';
import { sidebarItems } from '../sidebar/sidebar-items';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router) { }

  private _title: string = '';
  private _isExpanded: boolean = false;
  public get faBars(): IconDefinition { return faBars; }
  public get sidebarItems(): SidebarItem[] { return sidebarItems; }

  ngOnInit(): void {
    
    this._title = this._getTitle(this.router.url);
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this._title = this._getTitle(event.url);
      }
    });
  }

  private _getTitle(url: string){
    const foundIndex = sidebarItems.findIndex(item => item.path === url);
    if(foundIndex >= 0){
      return sidebarItems[foundIndex].title;
    }
    if(url === '/'){
      const foundIndex = sidebarItems.findIndex(item => item.path === '/servers');
      if(foundIndex >= 0){
        return sidebarItems[foundIndex].title;
      }
    }
    return '';
  }
  public get title(): string{ return this._title; }
  public get isExpanded(): boolean { return this._isExpanded; }

  public onClickHeader(){
    this._isExpanded = !this._isExpanded;
  }
  public onClickItem(link: string) { 
    this._isExpanded = false;
    this.router.navigate(['/' + link]); 
  }

}
