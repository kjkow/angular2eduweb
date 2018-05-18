import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from '../../service/playlist-selection.service';

@Component({
  selector: 'music-selector',
  template: `
    <div class="input-group">
      <label class="col-xs-4 col-form-label">Aktywna playlistia: </label>
      <select class="form-control" [ngModel]="selectedId" (ngModelChange)="setSelected($event)">
        <option *ngFor="let playlist of playlists" [value]="playlist.id">
          {{playlist.name}} {{playlist.tracks.length}}
        </option>  
      </select>
    </div>
  `,
  styles: []
})
export class MusicSelectorComponent implements OnInit {

  selectedId;
  playlists = [];

  constructor(private selectionService: PlaylistSelectionService) { }

  ngOnInit() {
    this.selectionService.getSelectionStream().subscribe(id => this.selectedId = id);
    this.selectionService.getPlaylistStream().subscribe(playlists => this.playlists = playlists);
  }

  setSelected(id){
    this.selectionService.select(id)
  }

}
