import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  /* Getter */
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

}
