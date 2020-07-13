import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {
   filtroHeroe: Heroe[] = [];
    termino: string;
   constructor(private activatedRouter: ActivatedRoute, private heroeServices: HeroesService) {
    activatedRouter.params.subscribe(parametro => {
        this.termino = parametro.termino;
        this.filtroHeroe = heroeServices.buscarHeroes(parametro.termino);
    });
   }

  ngOnInit() {
  }

}
