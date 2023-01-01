import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  public get sidebarItems(): any[] { 
    return [
      {
        title: 'Federated Server List',
        path: '/servers'
      },
      {
        title: 'Why Fediverse?',
        path: '/fediverse'
      },
      {
        title: 'Timeline',
        path: '/timeline'
      },
      {
        title: 'Direct Registration System (DRS)',
        path: '/drs'
      },
      {
        title: 'GME Communities',
        path: '/communities'
      },
      {
        title: 'GME Resources',
        path: '/resources'
      },
    ]
  }

  ngOnInit(): void {
  }

  public onClickItem(link: string){
    console.log("NAVIGATING: / " + link)
    this.router.navigate(['/' + link]);
  }

}
