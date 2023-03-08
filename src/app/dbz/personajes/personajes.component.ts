import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  @Input() personajes: Array<Personaje> = []
  constructor() { }

  ngOnInit(): void {
  }

}
