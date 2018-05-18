import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { MusicSearchService } from './services/music-search.service';
import { HttpModule } from '@angular/http';
import { AlbumSearchFormComponent } from './album-search-form/album-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerModule } from './music-search.routing';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { MusicCommonModule } from '../music-common/music-common.module';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MusicCommonModule,
    routerModule
  ],
  declarations: [MusicSearchComponent, AlbumListComponent, AlbumCardComponent, AlbumSearchFormComponent, AlbumDetailsComponent],
  exports: [MusicSearchComponent],
  providers: [MusicSearchService]
})
export class MusicSearchModule { }
