import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerListComponent} from './players/player-list/player-list.component';
import {PlayerUpdateComponent} from './players/player-update/player-update.component';
import {PlayersCreateComponent} from './players/players-create/players-create.component';
import {PlayerDeleteComponent} from './players/player-delete/player-delete.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { InfoComponent } from './players/info/info.component';
import { PlayerInfoComponent } from './players/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerUpdateComponent,
    PlayersCreateComponent,
    PlayerDeleteComponent,
    InfoComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
