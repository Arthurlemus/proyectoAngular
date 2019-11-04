import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar?: boolean ): any {
    // let texto = value.length;
    // let cadena = '';
    // if (activar) {
    //     for (let i = 0; i < texto; i++) {
    //        cadena += '*';
    //     }
    //   } else {
    //     cadena = value;
    //   }
    // return cadena;
    return (activar) ? '*'.repeat(value.length) : value;
  }

}
