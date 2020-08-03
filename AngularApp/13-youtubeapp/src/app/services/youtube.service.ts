import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item, YoutubeResponse } from '../models/youtube.models';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private key = 'AIzaSyCjM_MYzO5NHagCxsHmu4mVd47JNp9Y1SI';
  private playListId = 'UUlOIdS-7kp0ugdfMYfWMpXQ';
  private part = 'snippet';
  private youtubeURL = 'https://www.googleapis.com/youtube/v3/';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

 private getQuery<T>(query: string) {
  const params = new HttpParams()
          .set('key', this.key)
          .set('part', this.part)
          .set('playlistId', this.playListId)
          .set('maxResults', '200');

  return this.http.get<T>(`${this.youtubeURL}${query}`, {params});
  }

  getVideos(){
    return this.getQuery<YoutubeResponse>('playlistItems').pipe(
      map(resp => {
        this.nextPageToken = resp.nextPageToken;
        return resp.items.map(video => video.snippet); // repasa todo el arreglo y genera uno nuevo con el map
      })
    );
  }
}
