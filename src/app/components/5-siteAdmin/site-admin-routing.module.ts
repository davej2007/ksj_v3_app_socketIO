import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavBarComponent } from './0-admin-nav-bar/admin-nav-bar.component';
import { PartyUpdateComponent } from './1-party-update/party-update.component';
import { SongUpdateComponent } from './2-song-update/song-update.component';
import { PartyCreateComponent } from './3-party-create/party-create.component';
import { OperatorCreateComponent } from './4-operator-create/operator-create.component';
import { OperatorSettingsComponent } from './8-operator-settings/operator-settings.component';
import { AdminPageNotFoundComponent } from './9-admin-page-not-found/admin-page-not-found.component';


const routes: Routes = [
  { path: '', component: AdminNavBarComponent, children: [
      { path: 'partyUpdate', component: PartyUpdateComponent },
      { path: 'karaokeSongUpdate', component: SongUpdateComponent },
      { path: 'partyCreate', component: PartyCreateComponent },
      { path: 'operatorCreate', component: OperatorCreateComponent },
      { path: 'settings', component: OperatorSettingsComponent },
      { path: '', redirectTo: 'partyUpdate', pathMatch: 'full' },
      { path: '**', component: AdminPageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAdminRoutingModule { }
