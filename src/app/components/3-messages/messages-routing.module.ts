import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesNavBarComponent } from './0-messages-nav-bar/messages-nav-bar.component';
import { MessageScreenComponent } from './1-message-screen/message-screen.component';
import { MessageInputComponent } from './2-message-input/message-input.component';
import { MessagesPageNotFoundComponent } from './9-messages-page-not-found/messages-page-not-found.component';


const routes: Routes = [
  { path: '', component: MessagesNavBarComponent, children: [
      { path: 'messagescreen', component: MessageScreenComponent },
      { path: 'messageinput', component: MessageInputComponent },
      // { path: 'contactus', component: ContactUsComponent },
      { path: '', redirectTo: 'messagescreen', pathMatch: 'full' },
      { path: '**', component: MessagesPageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
