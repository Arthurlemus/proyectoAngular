import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artistaID: any = '';
  id: string = '';
  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => {
      this.id = params.id;
    });
   }

  ngOnInit(): void {
  }

}
