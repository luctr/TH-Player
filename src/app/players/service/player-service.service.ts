import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../model/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  API =`${environment.API}`

  constructor(private http:HttpClient) { }

  getAll():Observable<Player[]>{
    return this.http.get<Player[]>(this.API+'/players')
  }

  createPlayer(player:Player):Observable<Player>{
    return this.http.post<Player>(this.API+'/players',player);
  }
  updatePlayer(id:number,player:Player):Observable<Player>{
    return this.http.put<Player>(this.API + '/players/'+ id,player)
  }
  deletePlayer(id:number):Observable<Player>{
    return this.http.delete<Player>(this.API + '/players/'+ id)
  }
  getById(id:number):Observable<Player>{
    return this.http.get<Player>(this.API + '/players/' +id)
  }
}
