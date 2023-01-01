import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScreenSizeService } from './screen-size/screen-size.service';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { FederatedServerListComponent } from './pages/federated-server-list/federated-server-list.component';
import { AddServerPopupComponent } from './pages/federated-server-list/add-server-popup/add-server-popup.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { DrsComponent } from './pages/drs/drs.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FediverseComponent } from './pages/fediverse/fediverse.component';

@NgModule({
  declarations: [
    AppComponent,
    FederatedServerListComponent,
    HomeComponent,
    AddServerPopupComponent,
    AboutComponent,
    SidebarComponent,
    ResourcesComponent,
    CommunitiesComponent,
    DrsComponent,
    TimelineComponent,
    FediverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScreenSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
