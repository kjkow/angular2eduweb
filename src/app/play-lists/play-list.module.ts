import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListsComponent } from './play-lists/play-lists.component';
import { PlayListFormComponent } from './play-list-form/play-list-form.component';
import { PlayListListComponent } from './play-list-list/play-list-list.component';
import { PlayListDetailComponent } from './play-list-detail/play-list-detail.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FormsModule } from '@angular/forms';


import { routerModule } from './play-list.routing';
import { MusicCommonModule } from '../music-common/music-common.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicCommonModule,
    routerModule
  ],
  declarations: [
    PlayListsComponent,
    PlayListFormComponent,
    PlayListListComponent,
    PlayListDetailComponent,
    ContentCardComponent,
  ],
  exports: [
    PlayListsComponent
  ]
})
export class PlayListModule { }
