import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../services/playlists.service';

@Component({
  selector: 'play-lists',
  template: `
  <div class="row md-1">
    <div class="col-xs">
      <h4 class="display-3 float-xs-right mb-2">Twoje playlisty</h4>
    </div>
  </div>

  <div class="row mt-1">
    <div class="col-xs">
      <content-card>
        <router-outlet></router-outlet>
      </content-card>  
    </div>
    <div class="col-xs">
      <play-list-list></play-list-list>
      <div class="form-group">
        <button class="btn btn-success float-xs-right" [routerLink]="['new']">Nowa Playlista</button>
      </div>
    </div>
  </div>    
  `,
  styles: []
})
export class PlayListsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
