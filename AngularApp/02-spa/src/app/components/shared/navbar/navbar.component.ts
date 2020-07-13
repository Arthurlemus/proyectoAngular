import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(filtro: string) {
    if (filtro.length > 0){
      this.router.navigate(['/filtro', filtro]);
      return;
    }
    this.router.navigate(['/heroes']);
  }

}
