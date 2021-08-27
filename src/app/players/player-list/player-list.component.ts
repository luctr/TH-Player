import { Component, OnInit } from '@angular/core';
import {PlayerServiceService} from "../service/player-service.service";
import {Player} from "../../model/player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players:Player[] = [];

  constructor(private playerService:PlayerServiceService) { }

  ngOnInit(): void {
    this.getALLPlayer()
  }
  getALLPlayer(){
    this.playerService.getAll().subscribe((data:Player[])=>{
      this.players  = data;
    })
  }

}
