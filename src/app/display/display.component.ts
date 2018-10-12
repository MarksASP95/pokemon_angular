import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  pokemons: object;

  async getPokemons(){
    await this.pokemonService.getPokemons()
      .subscribe(data => this.pokemons = data);
  }

}
