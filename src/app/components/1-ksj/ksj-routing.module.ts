import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KsjNavBarComponent } from './0-ksj-nav-bar/ksj-nav-bar.component';
import { WelcomeComponent } from './1-welcome/welcome.component';
import { OurServicesComponent } from './2-our-services/our-services.component';
import { ContactUsComponent } from './3-contact-us/contact-us.component';
import { KsjPageNotFoundComponent } from './9-ksj-page-not-found/ksj-page-not-found.component';


const routes: Routes = [
  { path: '', component: KsjNavBarComponent, children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'services', component: OurServicesComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: KsjPageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KsjRoutingModule { }
