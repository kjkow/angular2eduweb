import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../services/music-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album-details',
  template: `
  <div class="row mt-1" *ngIf="album">
    <div class="col-xs">
      <album-card class="card" [album]="album"></album-card>
    </div>
    <div class="col-xs">
      <h4 class="display-3 mb-2 float-xs-right">Utwory</h4>
      <track-list [tracks]="album.tracks.items"></track-list>
    </div>
  </div>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit {

  album;

  constructor(private musicService: MusicSearchService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params['id'];
    this.musicService.getAlbum(id)
      .subscribe(album => this.album = album);
  }

}
