import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  personajes: Array<Personaje> = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor() {}

  ngOnInit(): void {
  }

  agregarPersonaje(nuevoPersonaje: Personaje){
    this.personajes.push(nuevoPersonaje);
  }

}
