import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesNavBarComponent } from './0-messages-nav-bar/messages-nav-bar.component';
import { MessageScreenComponent } from './1-message-screen/message-screen.component';
import { MessageInputComponent } from './2-message-input/message-input.component';
import { MessagesPageNotFoundComponent } from './9-messages-page-not-found/messages-page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MessagesNavBarComponent,
    MessageScreenComponent,
    MessageInputComponent,
    MessagesPageNotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    MessagesRoutingModule
  ],
  providers:[],
  exports: [
    MessagesNavBarComponent,
    MessageScreenComponent,
    MessageInputComponent,
    MessagesPageNotFoundComponent]
})
export class MessagesModule { }
