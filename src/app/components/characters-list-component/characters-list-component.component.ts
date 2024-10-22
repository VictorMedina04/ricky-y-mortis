import { Component, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/character';
import { CharacterServiceService } from '../../services/character-service.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit {


  listadoPersonajes: Characters[] = [];

  constructor(private characterService: CharacterServiceService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((resp) => {
      this.listadoPersonajes = resp.results;
    });
  }

 selectEstado(estado: string) {
    if (estado === 'Alive') {
      let color = 'green';
    } else if (estado === 'Dead') {
      let color = 'red';
    } else {
      let color = 'gray';
    }
  }

}
