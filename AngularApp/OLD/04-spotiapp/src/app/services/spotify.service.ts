import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}


 // ────────────────────────────────────────────────────────────────────────────
  getUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCvQKglcvsjjt7jVi-vb7Q5T_nOeARZzjO3tPaEm9tLmdQSDYvfXELI8kl5Wa33Yq-amBaJj6YsukduiXw'
    });

    return this.http.get(url, { headers });

  }
 // ────────────────────────────────────────────────────────────────────────────

  getNewReleases() {
    return this.getUrl('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string) {
     return this.getUrl(`search?q=${termino}&type=artist&limit=20`).pipe(map((datos: any) => datos.artists.items));
  }

  getArtista(id: string) {
    return this.getUrl(`artists/${id}`);
  }

  getTopTrakcs(id: string) {
    return this.getUrl(`artists/${ id }/top-tracks?country=es`).pipe(map((datos: any) => datos.tracks));
  }
}
