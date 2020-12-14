import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteAdminRoutingModule } from './site-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminNavBarComponent } from './0-admin-nav-bar/admin-nav-bar.component';
import { EventUpdateComponent } from './1-event-update/event-update.component';
import { SongUpdateComponent } from './2-song-update/song-update.component';
import { EventCreateComponent } from './3-event-create/event-create.component';
import { OperatorCreateComponent } from './4-operator-create/operator-create.component';
import { OperatorSettingsComponent } from './8-operator-settings/operator-settings.component';
import { AdminPageNotFoundComponent } from './9-admin-page-not-found/admin-page-not-found.component';

import { EventService } from '../services/event.service';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    AdminNavBarComponent,
    EventUpdateComponent,
    SongUpdateComponent,
    EventCreateComponent,
    OperatorCreateComponent,
    OperatorSettingsComponent,
    AdminPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule, // Forms
    SiteAdminRoutingModule
  ],
  providers:[EventService, UserService],
  exports:[
    AdminNavBarComponent,
    EventUpdateComponent,
    SongUpdateComponent,
    EventCreateComponent,
    OperatorCreateComponent,
    OperatorSettingsComponent,
    AdminPageNotFoundComponent]
})
export class SiteAdminModule { }
