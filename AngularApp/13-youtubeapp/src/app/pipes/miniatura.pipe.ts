import { Pipe, PipeTransform } from '@angular/core';
import { Default, Thumbnails } from '../models/youtube.models';

@Pipe({
  name: 'miniatura'
})
export class MiniaturaPipe implements PipeTransform {
  url: string;
  
  transform(miniatura: any): string {

    if(miniatura.standard) {
          this.url = miniatura.standard.url;
      }else {
        this.url = './assets/img/sinimagen.png';
      }
    return this.url;
  }

}
