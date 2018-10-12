import { Component, OnInit, Input } from '@angular/core';
//import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() pkdx_id: number;
  @Input() art_url: string;
  @Input() pokemon: any;
  @Input() nextPokemon: any;

  constructor() { }

  ngOnInit() {
  }

  saveLocalStorage(pokeInfo: string, nextPokeInfo){
    localStorage.setItem("pokeInfo", JSON.stringify(pokeInfo));
    localStorage.setItem("nextPokeInfo", JSON.stringify(nextPokeInfo));
  }

}
