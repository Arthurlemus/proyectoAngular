import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    spotify.getNewRelease().subscribe((datos: any) => {
      this.nuevasCanciones = datos;
      this.loading = false;

    }, errorService => {
      this.mensajeError = errorService.error.error.message;
      this.error = true;
      this.loading = false;
    });
   }

  ngOnInit(): void {
  }

}
