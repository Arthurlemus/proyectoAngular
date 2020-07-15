import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'widget'
})

export class WidgetPipe implements PipeTransform {
    constructor(private  urlsegura: DomSanitizer) {}

  transform(uri: string): any {
    const url = 'https://open.spotify.com/embed/';
    uri = uri.substring(8).replace(':', '/');
    return this.urlsegura.bypassSecurityTrustResourceUrl(url + uri);
  }

}
