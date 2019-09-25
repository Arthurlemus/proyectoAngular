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
      Authorization: 'Bearer BQDKN8D4Rw-rzKll23aIWC7dZxZR3xWq9kKSGXCQXEscMQXdSgYdy8bbPUOVjlUxPjX_6Cxo9Qo8YR56niY'
    });

    return this.http.get(url, { headers });

  }
 // ────────────────────────────────────────────────────────────────────────────

  getNewReleases() {
    return this.getUrl('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string) {
     return this.getUrl(`search?q=${termino}&type=artist&limit=20`).pipe(map((datos: any) => datos.artists.items));
  }
}
