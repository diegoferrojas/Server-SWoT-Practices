import {Player} from '../../domain/models/player.model';

export interface PlayerController {
   /**
    *  Retorna la lista de jugadores
    */
   listPlayers();

   /**
    * Crea un jugador
    * @param datos Objeto con datos de jugador
    */
   create(datos: Player);

   /**
    * Modifica datos de un jugador
    * @param datos Objeto con datos de jugador
    * @param id Identificador único del jugador
    */
   update(datos: Player, id: number);

   /**
    * Elimina un jugador
    * @param id Identificador único del jugador
    */
   delete(id: number);

   /**
    * Cambia la edad de un jugador
    * @param id Identificador único del jugador
    * @param edad Edad del jugador
    */
   updateAge(id: number, edad: number);

}