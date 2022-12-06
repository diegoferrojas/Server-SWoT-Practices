import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Perro {
  nombre: string,
  raza: string,
  edad: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private perros : Perro[] = [{
    nombre: "Mono",
    raza: "Pincher",
    edad: 10
  },{
    nombre: "Jerry",
    raza: "Criollo",
    edad: 11
  }]

  @Get()
  getHello(): Perro[] {
    return this.perros;
  }

  @Post()
  crear(@Body() datos: Perro): Perro {
    this.perros.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Perro, @Param('id') id: number): Perro | string {
    try{
    this.perros[id] = datos
    return this.perros[id];
    }
    catch{
      return `No fue posible modificar al perro en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.perros = this.perros.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edad: number): Perro | string{
    try{
      this.perros[id].edad = edad;
      return this.perros[id];
    }
    catch{
      return `No fue posible modificar al perro en la posición ${id}`
    }
  }
}