import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  /* Ya no se ocupa estamos usando servicios */
  /* @Output() emitPersonaje:EventEmitter<Personaje> = new EventEmitter(); */
  @Input() nuevo:Personaje = {nombre:'', poder:0};

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  /*  cambiarNombre(event:any){
    console.log(event.target.value)
  } */

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    /* this.emitPersonaje.emit(this.nuevo) */
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }


}
