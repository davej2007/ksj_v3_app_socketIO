import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaraokeNavBarComponent } from './0-karaoke-nav-bar/karaoke-nav-bar.component';
import { SongSelectorComponent } from './1-song-selector/song-selector.component';
import { OurSongChoicesComponent } from './2-our-song-choices/our-song-choices.component';
import { KaraokePageNotFoundComponent } from './9-karaoke-page-not-found/karaoke-page-not-found.component';


const routes: Routes = [
  { path: '', component: KaraokeNavBarComponent, children: [
      { path: 'songselector', component: SongSelectorComponent },
      { path: 'ourchoices', component: OurSongChoicesComponent },
      { path: '', redirectTo: 'songselector', pathMatch: 'full' },
      { path: '**', component: KaraokePageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaraokeRoutingModule { }
