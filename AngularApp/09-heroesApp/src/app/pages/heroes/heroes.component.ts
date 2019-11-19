import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  constructor(private heroeService: HeroesService) { }

  ngOnInit() {
    this.heroeService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    });
  }
  
  borrarHeroe(heroe: HeroeModel, i: number) {
    this.heroes.splice(i,1); // Para borrar los registros 
    this.heroeService.borrarHeroe(heroe.id).subscribe();
  }

}
