import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "music", pathMatch: "full"},
  {path: "**", redirectTo: "music", pathMatch: "full"}
]
export const routerModule = RouterModule.forRoot(routes, {

});