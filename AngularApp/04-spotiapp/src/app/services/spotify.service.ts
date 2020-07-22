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
      Authorization: 'Bearer BQCi2DAfY3Kia49UWGkKsXKj3ysJ7s-NFZqANidIaroWAfBjuuMsOtO-PIAAwKxI7pb4tIxL8DjSf85_4kE'
    });

    return this.http.get(url, {headers});
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data.albums.items;
    }));
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map((data: any) => data.artists.items ));
  }


}

