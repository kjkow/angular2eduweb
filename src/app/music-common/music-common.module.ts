import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSelectorComponent } from './component/music-selector/music-selector.component';
import { TrackListComponent } from './component/track-list/track-list.component';
import { FormsModule } from '@angular/forms';
import { PlaylistSelectionService } from './service/playlist-selection.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MusicSelectorComponent, TrackListComponent],
  exports: [MusicSelectorComponent, TrackListComponent],
  providers: [PlaylistSelectionService]
})
export class MusicCommonModule { }
