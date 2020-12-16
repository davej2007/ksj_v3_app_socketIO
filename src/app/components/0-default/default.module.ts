import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './1-login/login.component';
import { SettingsComponent } from './2-settings/settings.component';
import { DefaultPageNotFoundComponent } from './9-default-page-not-found/default-page-not-found.component';
import { LoginFormComponent } from './1-login/login-form/login-form.component';
import { RegistationFormComponent } from './1-login/registation-form/registation-form.component';
import { KsjLogoComponent } from './0-ksj-logo/ksj-logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authService } from '../services/auth.service';
import { TeamService } from '../services/team.service';

@NgModule({
  declarations: [
    LoginComponent,
    KsjLogoComponent,
    LoginFormComponent,
    RegistationFormComponent,
    SettingsComponent,
    DefaultPageNotFoundComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, // Forms
  ],
  providers:[authService, TeamService],
  exports: [
    LoginComponent,
    KsjLogoComponent,
    LoginFormComponent,
    RegistationFormComponent,
    SettingsComponent,
    DefaultPageNotFoundComponent]
})
export class DefaultModule { }
