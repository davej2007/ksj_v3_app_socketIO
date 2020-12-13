import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/0-default/1-login/login.component';
import { SettingsComponent } from './components/0-default/2-settings/settings.component';
import { DefaultPageNotFoundComponent } from './components/0-default/9-default-page-not-found/default-page-not-found.component';


const routes: Routes = [
  { path: 'login',              component:LoginComponent},
  { path: 'settings',           component:SettingsComponent},
  { path: 'ksj',                loadChildren: () => import(`./components/1-ksj/ksj.module`).then(m => m.KsjModule) },    
  { path: 'karaoke',            loadChildren: () => import(`./components/2-karaoke/karaoke.module`).then(m => m.KaraokeModule) },
  { path: 'messages',           loadChildren: () => import(`./components/3-messages/messages.module`).then(m => m.MessagesModule) },
  { path: 'operator',              loadChildren: () => import(`./components/4-eventOperator/event-operator.module`).then(m => m.EventOperatorModule) },
  { path: 'admin',              loadChildren: () => import(`./components/5-siteAdmin/site-admin.module`).then(m => m.SiteAdminModule) },
  { path: '',                 redirectTo  : '/ksj/welcome', pathMatch: 'full' },
  { path: '**',                component   : DefaultPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
