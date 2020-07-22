import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    if ( termino.length > 0) {
       this.spotify.getArtista(termino).subscribe((datos: any) => this.artistas = datos);
    }else {
      this.artistas = [];
    }
  }

}
