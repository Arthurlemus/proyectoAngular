import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'uri'
})
export class UriPipe implements PipeTransform {
  
  constructor(private domSanitize: DomSanitizer){}

  transform(uri: string, url: string): SafeResourceUrl {
    let track = uri.split(':');
    let urlfull = url + track[2];
    return  this.domSanitize.bypassSecurityTrustResourceUrl(urlfull);
  }

}
