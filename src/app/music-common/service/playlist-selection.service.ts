import { Injectable } from '@angular/core';
import { PlaylistsService } from '../../play-lists/services/playlists.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlaylistSelectionService {

  selectedId;
  selectedIdStream = new Subject();

  constructor(private playlistsService: PlaylistsService) {
    this.getPlaylistStream().subscribe(playlists => {
      if(!this.selectedId && playlists.length > 0) this.select(playlists[0].id);
    })
  }

  addToPlaylist(track){
    this.playlistsService.addToPlayList(this.selectedId, track);
  }

  select(playlistId){
    this.selectedId = playlistId;
    this.selectedIdStream.next(this.selectedId);
  }

  getSelectionStream(){
    return this.selectedIdStream.startWith(this.selectedId);
  }

  getPlaylistStream(){
    return this.playlistsService.getPlaylistStream();
  }

}
