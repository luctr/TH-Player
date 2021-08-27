import { Component, OnInit } from '@angular/core';
import {PlayerServiceService} from "../service/player-service.service";
import {Player} from "../../model/player";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.scss']
})
export class PlayersCreateComponent implements OnInit {

  player:Player={
    id:0,
    name:'',
    kda:'',
    champ:'',
    des:''
  }
  playerForm:FormGroup = new FormGroup({
    name:new FormControl(),
    kda:new FormControl(),
    chapm:new FormControl(),
    des:new FormControl()
  })

  constructor(private playerService:PlayerServiceService,
              private router:Router) { }

  ngOnInit(): void {
  }
  create(){
    this.player.name = this.playerForm.value.name,
    this.player.kda = this.playerForm.value.kda,
    this.player.champ = this.playerForm.value.champ,
    this.player.des = this.playerForm.value.des,
      this.playerService.createPlayer(this.player).subscribe(data=>{
        this.router.navigate([''])
      })
  }

}
