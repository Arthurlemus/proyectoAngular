import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styles: [
  ]
})
export class FiltroComponent implements OnInit {
  heroes: Heroe[] = [];
  filtro: string;

  constructor(private heroesService: HeroesService, private activateRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametro => {
      this.filtro = parametro.heroe;
      this.heroes = this.heroesService.buscarHeroes(parametro.heroe);
    });
  }
/*
  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
}
*/

}
