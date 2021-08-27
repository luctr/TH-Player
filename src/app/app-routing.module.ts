import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from "./players/player-list/player-list.component";
import {PlayersCreateComponent} from "./players/players-create/players-create.component";
import {PlayerUpdateComponent} from "./players/player-update/player-update.component";
import {PlayerDeleteComponent} from "./players/player-delete/player-delete.component";
import {PlayerInfoComponent} from "./players/player-info/player-info.component";

const routes: Routes = [
  {
    path: "",
    component: PlayerListComponent
  },
  {
    path: 'create',
    component: PlayersCreateComponent
  },
  {
    path: 'update/:id',
    component: PlayerUpdateComponent
  },
  {
    path: 'delete/:id',
    component: PlayerDeleteComponent
  },
  {
    path: 'info/:id',
    component:PlayerInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
