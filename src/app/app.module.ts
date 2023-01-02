import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScreenSizeService } from './utilities/screen-size/screen-size.service';
import { AboutComponent } from './pages/about/about.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { FederatedServerListComponent } from './pages/federated-server-list/federated-server-list.component';
import { AddServerPopupComponent } from './pages/federated-server-list/add-server-popup/add-server-popup.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { DrsComponent } from './pages/drs/drs.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { FediverseComponent } from './pages/fediverse/fediverse.component';
import { FooterComponent } from './nav/footer/footer.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { DrsLyricsComponent } from './pages/drs/drs-lyrics/drs-lyrics.component';
import { SystemicProblemsComponent } from './pages/systemic-problems/systemic-problems.component';

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
    FediverseComponent,
    FooterComponent,
    HowToComponent,
    DrsLyricsComponent,
    SystemicProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScreenSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
