import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventOperatorRoutingModule } from './event-operator-routing.module';
import { OperatorNavBarComponent } from './0-operator-nav-bar/operator-nav-bar.component';
import { PartyDetailsComponent } from './1-party-details/party-details.component';
import { KaraokeEventComponent } from './2-karaoke-event/karaoke-event.component';
import { MessageEventComponent } from './3-message-event/message-event.component';
import { ResetUserDetailsComponent } from './8-reset-user-details/reset-user-details.component';
import { OperatorPageNotFoundComponent } from './9-operator-page-not-found/operator-page-not-found.component';


@NgModule({
  declarations: [OperatorNavBarComponent,
    PartyDetailsComponent,
    KaraokeEventComponent,
    MessageEventComponent,
    ResetUserDetailsComponent,
    OperatorPageNotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    EventOperatorRoutingModule
  ],
  providers:[],
  exports: [OperatorNavBarComponent,
    PartyDetailsComponent,
    KaraokeEventComponent,
    MessageEventComponent,
    ResetUserDetailsComponent,
    OperatorPageNotFoundComponent]
})
export class EventOperatorModule { }
