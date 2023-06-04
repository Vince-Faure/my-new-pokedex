import { Component, OnInit } from '@angular/core';
import Pokemon from '../types/pokemon.type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})


export class PokemonListComponent implements OnInit {
  
  pokemons: Pokemon[] = [
    {id: 1, type:'feu', name: 'Salamèche',taille: '0.6m',evolution: 'Reptincel, Dracaufeu ', faiblesses: 'Eau, Sol, Roche', attaques: 'Nitrocharge, Rebondifeu, Lance-Flammes'},
    {id: 2, type:'feu', name: 'Limagma',taille: '0.7m',evolution: 'Volcaropode ', faiblesses: 'Eau, Sol, Roche', attaques: 'Nitrocharge, Eboulement'},
    {id: 3, type:'feu', name: 'Malosse',taille: '0.5m',evolution: 'Demolosse ', faiblesses: 'Eau, Sol, Roche', attaques: 'Feinte, Flammeche, Vibrobscur'},
    {id: 4, type:'foudre', name: 'Raikou',taille: '0.8m',evolution: 'Super Raiku ', faiblesses: ', Sol, Roche', attaques: 'Change eclair, Rayon Chargé, Elecanon'},
    {id: 5, type:'foudre', name: 'Electable',taille: '0.6m',evolution: 'Mega Electable ', faiblesses: ' Sol, Roche', attaques: 'Eclair, Tonnerre, coup de jus'},
    {id: 6, type:'foudre', name: 'Electhor',taille: '0.3m',evolution: 'Suprême Electhor', faiblesses: ' Sol, Roche', attaques: 'Etincelle, Rayon Chargé'},
    {id: 7,type:'plante', name: 'Torterra',taille: '0.7m',evolution: 'Torterra Senior ', faiblesses: ' Feu, Glace', attaques: 'Tranch-Herbe, Lame-Feuille , Lance-Soleil'},
    {id: 8,type:'plante', name: 'Roserade',taille: '0.6m',evolution: 'Hyper Roserade ', faiblesses: ' Feu, Glace', attaques: 'Mégafouet, Nœud Herbe, Lame-Feuille'},
    {id: 9,type:'plante', name: 'Florizarre',taille: '0.9m',evolution: 'Giga Florizarre ', faiblesses: ' Feu, Glace', attaques: 'Canon Graine, Éco-Sphère, Phytomixeur'},
  ];

  selectedPokemon : Pokemon;

constructor() { }

selectPokemon(pokemon: Pokemon){
  this.selectedPokemon = pokemon;
}


ngOnInit() {
}
}
