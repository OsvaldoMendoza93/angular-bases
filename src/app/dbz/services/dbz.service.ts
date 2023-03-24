import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  /* El arreglo oginial solo se manipulara en service, se crear un propiedad private */
  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
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
    console.log('Servicio inicializado');
  }
  
  agregarPersonaje(personaje:Personaje){
    /* Agrega personaje a nuestro array a nuestro arreglo _personajes */
    this._personajes.push(personaje)
  }


}
