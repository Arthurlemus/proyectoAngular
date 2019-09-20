import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService, private router: Router) { }
  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    if (termino === '') {
      this.router.navigate(['/heroes']);

    } else {

      this.router.navigate(['/filtro', termino]);
    }
  }

}
