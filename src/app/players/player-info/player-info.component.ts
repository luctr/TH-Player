import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Player} from "../../model/player";
import {PlayerServiceService} from "../service/player-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  id: any;

  // @ts-ignore
  playerForm: FormGroup;

  player: Player = {
    id: 0,
    name: '',
    kda: '',
    champ: '',
    des: ''
  }

  constructor(private playerService: PlayerServiceService,
              private router: Router,
              private activeRouter: ActivatedRoute
  ) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.getPlayer(this.id)
    })
  }

  ngOnInit(): void {
  }


  getPlayer(id: number) {
    this.playerService.getById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des),
      })
    })
  }
}
