import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Irving';
  nombre2 = 'irving arturo leMUs alEMan';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegaron los Datos'), 3500);
  });

  fecha = new Date();

  video = '4KrJV7UwWJU';

  activar = true;

  pass = 'password';

}
