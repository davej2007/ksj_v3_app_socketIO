import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorNavBarComponent } from './0-operator-nav-bar/operator-nav-bar.component';
import { PartyDetailsComponent } from './1-party-details/party-details.component';
import { KaraokeEventComponent } from './2-karaoke-event/karaoke-event.component';
import { MessageEventComponent } from './3-message-event/message-event.component';
import { ResetUserDetailsComponent } from './8-reset-user-details/reset-user-details.component';
import { OperatorPageNotFoundComponent } from './9-operator-page-not-found/operator-page-not-found.component';


const routes: Routes = [
  { path: '', component: OperatorNavBarComponent, children: [
      { path: 'partyDetails', component: PartyDetailsComponent },
      { path: 'karaokeEvent', component: KaraokeEventComponent },
      { path: 'messageEvent', component: MessageEventComponent },
      { path: 'resetDetails', component: ResetUserDetailsComponent },
      { path: '', redirectTo: 'partyDetails', pathMatch: 'full' },
      { path: '**', component: OperatorPageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventOperatorRoutingModule { }
