import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  toptracks: any = [];
  loading: boolean;

  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.activatedRouter.params.subscribe(parametros => {
       this.getArtista(parametros.id);
       this.getTopTracks(parametros.id);
    });
   }

   getArtista(id: string) {
     this.spotify.getArtista(id).subscribe(data => {
        this.artista = data;
        this.loading = false;
     });
   }

   getTopTracks(id: string) {
     this.spotify.getTopTrakcs(id).subscribe((datos: any) => {
        this.toptracks = datos;
        console.log(this.toptracks);
     });
   }


}
