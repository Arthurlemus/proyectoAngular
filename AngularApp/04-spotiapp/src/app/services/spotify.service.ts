import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD0nOrQmJ6YE122K9SVCW4_Vf-G5DLe0HkJYWeuXe9LzVMkhPdPhp1fjpRkbUYmyfLxdbKX-phHHZKu45Y'
    });

    return this.http.get(url, {headers});
  }

// ─────────────────────────────────────────────────────────────────────────────
  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data.albums.items;
    }));
  }

// ─────────────────────────────────────────────────────────────────────────────
  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map((data: any) => data.artists.items ));
  }

// ─────────────────────────────────────────────────────────────────────────────
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=es`).pipe(map((data: any) => data.tracks));
  }
}

