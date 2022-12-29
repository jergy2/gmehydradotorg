import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { HomeComponent } from './home/home.component';
import { ScreenSizeService } from './screen-size/screen-size.service';
import { AddServerPopupComponent } from './server-list/add-server-popup/add-server-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    HomeComponent,
    AddServerPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScreenSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
