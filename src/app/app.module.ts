import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultModule } from './components/0-default/default.module';
import { KsjModule } from './components/1-ksj/ksj.module';
import { KaraokeModule } from './components/2-karaoke/karaoke.module';
import { MessagesModule } from './components/3-messages/messages.module';
import { EventOperatorModule } from './components/4-eventOperator/event-operator.module';
import { SiteAdminModule } from './components/5-siteAdmin/site-admin.module';
import { DisplayYesNoPipe } from './components/_custom/pipe/display-yes-no.pipe';
import { DisplayDatePipe } from './components/_custom/pipe/display-date.pipe';
//Pipes

@NgModule({
  declarations: [
    AppComponent,
    DisplayYesNoPipe,
    DisplayDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, // HTTP client
    FormsModule, ReactiveFormsModule, // Forms
    DefaultModule,
    KsjModule,
    KaraokeModule,
    MessagesModule,
    EventOperatorModule,
    SiteAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
