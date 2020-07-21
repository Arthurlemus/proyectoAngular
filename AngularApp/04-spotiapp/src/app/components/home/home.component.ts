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

  constructor(private spotify: SpotifyService) {
    spotify.getNewRelease().subscribe((datos: any) => {
      this.nuevasCanciones = datos.albums.items;
      console.log(this.nuevasCanciones);
    });
   }

  ngOnInit(): void {
  }

}
