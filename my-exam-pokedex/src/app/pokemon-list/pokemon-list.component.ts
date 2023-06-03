import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemons = [
    {id: 1, name: 'Salamèche'},
    {id: 2, name: 'Limagma'},
    {id: 3, name: 'Malosse'},
    {id: 4, name: 'Raikou'},
    {id: 5, name: 'Electable'},
    {id: 6, name: 'Electhor'},
    {id: 7, name: 'Torterra'},
    {id: 8, name: 'Roserade'},
    {id: 9, name: 'Florizarre'},
  ];
}
