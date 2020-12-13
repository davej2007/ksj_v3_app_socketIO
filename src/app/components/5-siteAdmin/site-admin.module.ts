import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAdminRoutingModule } from './site-admin-routing.module';
import { AdminNavBarComponent } from './0-admin-nav-bar/admin-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartyUpdateComponent } from './1-party-update/party-update.component';
import { SongUpdateComponent } from './2-song-update/song-update.component';
import { PartyCreateComponent } from './3-party-create/party-create.component';
import { OperatorCreateComponent } from './4-operator-create/operator-create.component';
import { OperatorSettingsComponent } from './8-operator-settings/operator-settings.component';
import { AdminPageNotFoundComponent } from './9-admin-page-not-found/admin-page-not-found.component';
import { UserService } from '../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminNavBarComponent,
    PartyUpdateComponent,
    SongUpdateComponent,
    PartyCreateComponent,
    OperatorCreateComponent,
    OperatorSettingsComponent,
    AdminPageNotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule, // Forms
    SiteAdminRoutingModule
  ],
  providers:[UserService],
  exports:[
    AdminNavBarComponent,
    PartyUpdateComponent,
    SongUpdateComponent,
    PartyCreateComponent,
    OperatorCreateComponent,
    OperatorSettingsComponent,
    AdminPageNotFoundComponent]
})
export class SiteAdminModule { }
