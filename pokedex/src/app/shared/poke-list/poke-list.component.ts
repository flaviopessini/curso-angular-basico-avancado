import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  pokemons: any;
  private setPokemons: any;

  constructor(private api: PokeApiService) {}

  ngOnInit(): void {
    this.api.all.subscribe(
      (res) => {
        this.setPokemons = res.results;
        this.pokemons = this.setPokemons;
      },
      (err) => err
    );
  }

  search(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter;
  }
}
