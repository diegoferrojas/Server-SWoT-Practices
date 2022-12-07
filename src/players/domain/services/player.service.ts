import { Player } from "../models/player.model";

export interface PlayerService {

   /**
    * Retorna la lista de jugadores registrados
    */
   list(): Player[];

   /**
    * Crea un nuevo jugador
    * @param player datos del nuevo jugador
    * @return Nuevo jugador
    */
   create(player: Player): Player;

   /**
    * Actualiza datos de jugador
    * @param id Identificador único del jugador
    * @param player datos del jugador
    * @return Jugador modificado
    */
   update(id: number, player: Player): Player

   /**
    * Eliminar un jugador
    * @param id Identificador único del jugador
    * @return True si eliminó al jugador
    */
   delete(id: number): boolean

   /**
    * Cambia la edad de un jugador
    * @param id Identificador único del jugador
    * @param age nuevo valor de edad 
    */
   updateAge(id: number, age: number): Player
}