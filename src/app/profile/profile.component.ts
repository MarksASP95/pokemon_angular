import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pokemon;
  nextPokeImg;
  @Input() imgSrc;

  constructor() { }

  ngOnInit() {
    this.pokemon = JSON.parse(localStorage.getItem('pokeInfo'));
    this.nextPokeImg = JSON.parse(localStorage.getItem('nextPokeInfo')).art_url;
  }

  hasSeveralTypes(typesArray: any[]){
    if(typesArray.length == 1){
      return false;
    }
    return true;
  }

  hasEvolution(evoArray:any){
    if(evoArray.length == 0){
      return false;
    }
    return true;
  }

  hasEvoImg(evoPokeName: string){
    if(evoPokeName == JSON.parse(localStorage.getItem('nextPokeInfo')).name){
      return true;
    }
    else{
      return false;
    }
  }

  hasLevel(evoArray:any){
    if(evoArray.level === undefined){
      return false;
    }
    return true;
  }

}
