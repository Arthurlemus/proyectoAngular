import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) { }
  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this.heroes = this.heroesService.buscarHeroes(termino);
    console.log(this.heroes);
    console.log(termino);
  }

}
