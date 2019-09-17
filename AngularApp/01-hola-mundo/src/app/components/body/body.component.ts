import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;
  frase: any = {
    autor: 'Ben Parker',
    mensaje: 'Un grande Poder llega una gran Responsabilidad'
  };

  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}
