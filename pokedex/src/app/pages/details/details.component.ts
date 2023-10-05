import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  isloading: boolean = true;
  isError: boolean = false;
  private url = 'https://pokeapi.co/api/v2/pokemon';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species';

  pokemon: any;

  constructor(
    private aRoute: ActivatedRoute,
    private pokeService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    const id = this.aRoute.snapshot.params['id'];
    const pokemon = this.pokeService.apiGetPokemons(`${this.url}/${id}`);
    const name = this.pokeService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.isloading = false;
      },
      (error) => {
        this.isError = true;
      }
    );
  }
}
