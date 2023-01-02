import { Component, OnInit } from '@angular/core';
import { ResourceItem } from './resource-item.interface';
import { resourceList } from './resource-list';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  public get resourceList(): ResourceItem[] { return resourceList; }

  ngOnInit(): void {
  }

}
