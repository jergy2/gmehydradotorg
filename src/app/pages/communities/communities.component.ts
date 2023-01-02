import { Component, OnInit } from '@angular/core';
import { communitiesList } from './communities-list';
import { CommunityEntry } from './community-entry.interface';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  constructor() { }

  public get communitiesList(): CommunityEntry[] { return communitiesList; }

  ngOnInit(): void {
  }

}
