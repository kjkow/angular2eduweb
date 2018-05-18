import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService, Playlist } from '../services/playlists.service';

@Component({
  selector: 'play-list-detail',
  template: `
  <div *ngIf="!playlist">
    <p>Wybierz playlistę!</p>
  </div>
  <div *ngIf="playlist">  
    <h3 class="card-title">{{playlist.name}}</h3>
    <track-list [tracks]="playlist.tracks"></track-list>
    <div class="form-group">
      <button class="btn btn-default float-xs-right" (click)="edit(playlist)">Edytuj</button>
    </div>
  </div>  
  `,
  styles: []
})
export class PlayListDetailComponent implements OnInit {

  playlist;

  edit(playlist) {
    this.router.navigate(['playlist', playlist.id, 'edit']);
  }

  constructor(private activeRoute: ActivatedRoute,
    private playlistService: PlaylistsService,
    private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.playlistService.getPlayList(id)
          .subscribe( (playlist:Playlist) => this.playlist = playlist)
      }
    })
  }

}
