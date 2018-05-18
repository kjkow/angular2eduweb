import { Component, OnInit, Input } from '@angular/core';
import { PlaylistSelectionService } from '../../service/playlist-selection.service';

@Component({
  selector: 'track-list',
  template: `
  <audio #audio_id controls></audio>
  <table class="table table-striped">
    <thead>
      <tr>
        <th> # </th>
        <th> Nazwa </th>
        <th> Wykonawca </th>
        <th>  </th>
        <th>  </th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let track of tracks" >
        <td> {{track.track_number}} </td>
        <td> {{track.name}} </td>
        <td> {{track.artists[0].name}} </td>
        <td (click)="play(audio_id, track)">Graj</td>
        <td (click)="addToPlaylist(track)">Dodaj</td>
      </tr>
    </tbody>
  </table>  
  `,
  styles: [`
    audio{
      width: 100%;
    }
  `]
})
export class TrackListComponent implements OnInit {

  @Input() tracks;

  currentSrc = "";

  play(audio, track){
    audio.volume = 0.1;
    if(audio.src != track.preview_url){
      audio.src = track.preview_url;
      audio.play();
    }else if(audio.paused){
      audio.play();
    }else {
      audio.pause();
    }
  }

  addToPlaylist(track){
    this.selectionService.addToPlaylist(track);
  }

  constructor(private selectionService: PlaylistSelectionService) { }

  ngOnInit() {
  }

}
