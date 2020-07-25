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
      Authorization: 'Bearer BQBjBR2DG4jop1K-QkneKqFr84Zo9WkkJTLb2fTzjYtDZQX0qp4PIa8J9kSRa8VAk4suz2lBz7E-FjN9YI8'
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


}

