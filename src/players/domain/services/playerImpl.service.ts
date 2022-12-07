import { Injectable } from '@nestjs/common';
import { Player } from '../models/player.model';
import { PlayerService } from './player.service';

@Injectable()
export class PlayerServiceImpl implements PlayerService {

  private player: Player[] = [{
    name: 'Leo',
    lastName: 'Messi',
    age: 35,
    team: 'Argentina'
  }]

  public list() : Player[] {
    return this.player
  }

  public create(jugador: Player): Player {
    this.player.push(jugador);
    return jugador;
  }

  public update(id: number, jugador: Player): Player {
      this.player[id] = jugador
      return this.player[id];
  }

  public delete(id: number): boolean {
    const totalJugadoresAntes = this.player.length;
    this.player = this.player.filter((val, index) => index != id);
    if(totalJugadoresAntes == this.player.length){
      return false;
    }
    else{
      return true;
    }
  }

   public updateAge(id: number, edad: number): Player {
      this.player[id].age = edad;
      return this.player[id];
   }

}
