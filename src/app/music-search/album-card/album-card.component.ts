import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-card',
  template: `
  <img class="card-img-top img-fluid" [src]="album.images[0].url">
  <div class="card-img-overlay">
    <h5 class="card-title">{{album.name}}</h5>
  </div>
    
  `,
  styles: [`
    :host(){
      flex: 0 0 31% !important;
      overflow: hidden;
      margin-bottom: 0.625rem !important;
    }

    :host():hover .card-img-overlay{
      top: 100%;
    }

    .card-img-overlay{
      background: rgba(0,0,0,0.5);
      top: 70%;
      color: #fff;
      font-size: 1em !important;
      transition: .3s top ease-out;
    }

  `]
})
export class AlbumCardComponent implements OnInit {

  @Input()
  album;

  constructor() { }

  ngOnInit() {
  }

}
