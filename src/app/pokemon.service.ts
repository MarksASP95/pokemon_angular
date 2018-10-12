import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly URL = "../assets/pokemon.json";

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(this.URL);
  }
}
