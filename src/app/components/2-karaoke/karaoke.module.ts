import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { KaraokeRoutingModule } from './karaoke-routing.module';
import { KaraokeNavBarComponent } from './0-karaoke-nav-bar/karaoke-nav-bar.component';
import { SongSelectorComponent } from './1-song-selector/song-selector.component';
import { KaraokePageNotFoundComponent } from './9-karaoke-page-not-found/karaoke-page-not-found.component';
import { OurSongChoicesComponent } from './2-our-song-choices/our-song-choices.component';


@NgModule({
  declarations: [
    KaraokeNavBarComponent,
    SongSelectorComponent,
    OurSongChoicesComponent,
    KaraokePageNotFoundComponent],
  imports: [
    CommonModule,
    KaraokeRoutingModule,
    NgbModule
  ],
  providers:[],
  exports: [
    KaraokeNavBarComponent,
    SongSelectorComponent,
    OurSongChoicesComponent,
    KaraokePageNotFoundComponent]
})
export class KaraokeModule { }
