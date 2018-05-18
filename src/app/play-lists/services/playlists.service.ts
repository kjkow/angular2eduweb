import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';

export interface Playlist {
  name: string,
  tracks: any[],
  color: string,
  favourite: boolean
}

@Injectable()
export class PlaylistsService {

  server_url = 'http://localhost:3000/playlists/';

  constructor(private http: Http){}

  playlists = [];

  addToPlayList(playlistId, track){
    let playlist = this.playlists.find(playlist => playlist.id == playlistId);
    playlist.tracks.push(track);
    this.save(playlist).subscribe(() => {});
  }

  getPlaylists(){
    return this.http.get(this.server_url)
            .map(response => response.json())
            .subscribe( playlists => {
              this.playlists = playlists;
              this.playlistStream$.next(this.playlists);
            })
  }

  playlistStream$ = new Subject<Playlist[]>();

  getPlaylistStream(){
    if(!this.playlists.length) this.getPlaylists();
    return this.playlistStream$.startWith(this.playlists);
  }

  createPlaylist(): Playlist{
    return {
      name: 'Nowa playlista',
      tracks: [],
      color: '#FF0000',
      favourite: false
    };
  }

  save(playlist){
    let request;
    if(playlist.id){
      request = this.http.put(this.server_url + playlist.id, playlist)
    }else{
      request = this.http.post(this.server_url, playlist)
    }
    return request.map(response => response.json())
      .do(playlist => this.getPlaylists())
  }

  getPlayList(id){
    return this.http.get(this.server_url + id)
      .map(response => response.json());
  }
}
