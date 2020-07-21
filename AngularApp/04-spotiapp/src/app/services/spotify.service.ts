import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getNewRelease() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAN5DDvX8AL9cN6xcgYcHtF1JeHxv_OUF70TkSre0bT2YIL6UjQtRKoE1vGLlq-sSezQ9bCHvKkgKifcf4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
