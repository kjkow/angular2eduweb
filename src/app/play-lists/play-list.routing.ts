import { RouterModule, Routes } from '@angular/router';

import { PlayListsComponent } from './play-lists/play-lists.component';
import { PlayListDetailComponent } from './play-list-detail/play-list-detail.component';
import { PlayListFormComponent } from './play-list-form/play-list-form.component';

const routes: Routes = [
  {path: "playlist", component: PlayListsComponent, children: [
    {path: "", component: PlayListDetailComponent},
    {path: "new", component: PlayListFormComponent},
    {path: ":id", component: PlayListDetailComponent},
    {path: ":id/edit", component: PlayListFormComponent}
  ]}
]

export const routerModule = RouterModule.forChild(routes);