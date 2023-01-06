import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RunYourOwnComponent } from './pages/run-your-own/run-your-own.component';
import { DrsLyricsComponent } from './pages/drs/drs-lyrics/drs-lyrics.component';
import { SystemicProblemsComponent } from './pages/systemic-problems/systemic-problems.component';
import { HeaderMenuComponent } from './nav/header-menu/header-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GrowHydraComponent } from './pages/federated-server-list/grow-hydra/grow-hydra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerFormComponent } from './pages/federated-server-list/grow-hydra/server-form/server-form.component';
import { ConfirmApplicationComponent } from './pages/federated-server-list/grow-hydra/confirm-application/confirm-application.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FederatedServerListComponent,
    AddServerPopupComponent,
    AboutComponent,
    SidebarComponent,
    ResourcesComponent,
    CommunitiesComponent,
    DrsComponent,
    TimelineComponent,
    FediverseComponent,
    FooterComponent,
    RunYourOwnComponent,
    DrsLyricsComponent,
    SystemicProblemsComponent,
    HeaderMenuComponent,
    WelcomeComponent,
    GrowHydraComponent,
    ServerFormComponent,
    ConfirmApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [ScreenSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
