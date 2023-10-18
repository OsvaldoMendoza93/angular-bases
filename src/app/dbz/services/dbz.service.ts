import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root'
})

export class DbzService {
  /* El arreglo oginial solo se manipulara en service, se crear un propiedad private */
  private _personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: "Goku",
      poder: 15000
    },
    {
      id: uuid(),
      nombre: "Vegeta",
      poder: 8500
    }
  ];

  /* Getter */
  get personajes(): Personaje[]{
    /* Retorna un array creado con el spread operator de js apartir de _personajes */
    return [...this._personajes]
  }

  constructor() {
  }
  
  agregarPersonaje(personaje:Personaje){
    /* Agrega personaje a nuestro array a nuestro arreglo _personajes */
    this._personajes.push({id: uuid(), ...personaje})
  }

  eliminarPersonaje(id:string){
    /* Eliminar personaje de nuestro array _personajes */
    this._personajes = this._personajes.filter(perosonaje => perosonaje.id !== id)
  }


}
