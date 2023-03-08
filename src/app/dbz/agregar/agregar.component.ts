import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  @Output() onEmitPersonaje:EventEmitter<Personaje> = new EventEmitter();
  @Input() nuevo:Personaje = {nombre:'', poder:0};

  constructor(
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
    this.onEmitPersonaje.emit(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }


}
