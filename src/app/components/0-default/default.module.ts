import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './1-login/login.component';
import { SettingsComponent } from './2-settings/settings.component';
import { DefaultPageNotFoundComponent } from './9-default-page-not-found/default-page-not-found.component';

@NgModule({
  declarations: [
    LoginComponent,
    SettingsComponent,
    DefaultPageNotFoundComponent
    ],
  imports: [
    CommonModule
  ],
  providers:[],
  exports: [
    LoginComponent,
    SettingsComponent,
    DefaultPageNotFoundComponent]
})
export class DefaultModule { }
