import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KsjRoutingModule }           from './ksj-routing.module';
import { KsjNavBarComponent }         from './0-ksj-nav-bar/ksj-nav-bar.component';
import { WelcomeComponent }           from './1-welcome/welcome.component';
import { OurServicesComponent }       from './2-our-services/our-services.component';
import { ContactUsComponent }         from './3-contact-us/contact-us.component';
import { KsjPageNotFoundComponent }   from './9-ksj-page-not-found/ksj-page-not-found.component';


@NgModule({
  declarations: [
    KsjNavBarComponent,
    WelcomeComponent,
    OurServicesComponent,
    ContactUsComponent,
    KsjPageNotFoundComponent],
  imports: [
    CommonModule,
    KsjRoutingModule,
    NgbModule
  ],
  providers:[],
  exports:[
    KsjNavBarComponent,
    WelcomeComponent,
    OurServicesComponent,
    ContactUsComponent,
    KsjPageNotFoundComponent]
})
export class KsjModule { }
