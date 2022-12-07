import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { PlayerService } from '../../domain/services/player.service';

import {Player} from '../../domain/models/player.model';
import { PlayerController } from './players.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class PlayerControllerImpl implements PlayerController {
  constructor(@Inject('PlayerService') private readonly jugadorService: PlayerService) { }

  @Get()
  listPlayers() {
    try{
      return this.jugadorService.list();
    }
    catch(e){
      return errReturn(e, "Error al listar jugadores");
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() datos: Player) {
    try{
      return this.jugadorService.create(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear jugador");
    }
  }

  @Put(":id")
  update(@Body() datos: Player, @Param('id') id: number) {
    try{
      return this.jugadorService.update(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar jugador");
    }
  }

  @Delete(":id")
  delete(@Param('id') id: number) {
    try{
      return this.jugadorService.delete(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar jugador");
    }
  }

  @Patch(":id/edad/:edad")
  updateAge(@Param('id') id: number, @Param('edad') edad: number) {
    try{
      return this.jugadorService.updateAge(id, edad);
    }
    catch(e){
      return errReturn(e, "Error al modificar edad del jugador");
    }
  }
}
