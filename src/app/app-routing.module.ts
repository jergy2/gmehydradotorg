import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FederatedServerListComponent } from './pages/federated-server-list/federated-server-list.component';
import { FediverseComponent } from './pages/fediverse/fediverse.component';
import { RunYourOwnComponent } from './pages/run-your-own/run-your-own.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [

  { path: '*', component: FederatedServerListComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'server-list', component: FederatedServerListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'run-your-own', component: RunYourOwnComponent },
  { path: 'fediverse', component: FediverseComponent },
  { path: '**', component: FederatedServerListComponent }   


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
