import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    // Solucion Propia
    /*
    let num = value.length;
    let caracter = '*';

    if (activar) {
        value = caracter.repeat(num);
    }

    return value;
    */
    
    // Solucion Resumida
    return (activar) ? '*'.repeat(value.length) : value;
  }

}
