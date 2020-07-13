import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, heroesService: HeroesService) {
      activatedRoute.params.subscribe(parametro => this.heroe = heroesService.getHeroe(parametro.id));
   }

  ngOnInit(): void {
    console.log(this.heroe);
  }

}
