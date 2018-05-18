import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../services/music-search.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'album-search-form',
  template: `
    <form [formGroup]="searchForm" (ngSubmit)="search($event)">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" placeholder="Słowa kluczowe">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-outline-primary">Szukaj</button>
        </span>
      </div>
    </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  search(query){
    this.musicService.search(query);
  }

  constructor(private musicService: MusicSearchService) {
    this.searchForm = new FormGroup({
      'query': new FormControl('batman')
    })
    
    this.searchForm.get('query').valueChanges
    .filter(query => query.length >= 3)
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe(query => {
      this.musicService.search(query);
    })

   }

  ngOnInit() {
  }

}
