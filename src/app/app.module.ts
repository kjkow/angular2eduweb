import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayListModule } from './play-lists/play-list.module';

import { AuthService } from './auth.service';
import { MusicSearchModule } from './music-search/music-search.module';
import { RequestOptions, HttpModule } from '@angular/http';
import { routerModule } from './app.routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaylistsService } from './play-lists/services/playlists.service';
import { MusicCommonModule } from './music-common/music-common.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    PlayListModule,
    MusicSearchModule,
    HttpModule,
    MusicCommonModule,
    routerModule
  ],
  providers: [AuthService, PlaylistsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private auth:AuthService){
    this.auth.getToken();
  }
}
