import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Irving Lemus';
  nombre3 = 'Arthur';
  arreglo: string[] = ['1', '2', '3', '4', '5', '6' , '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  PI: number = Math.PI;
  porcentaje: number = 0.256;
  moneda = 1234.5;
  fechaActual: Date = new Date();
  idioma: string = 'es-MX';
  nombre2: string = 'iRVIng aRTuro lEmuS aLEman';
  videoURL: string = 'https://www.youtube.com/embed/cB8VmZ4LQAw';
  activar: boolean = true;

  heroe = {
    nombre: 'Logan',
    apodo: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Conocida por el mundo',
      cp: 4200,
      ciudad: 'Desconocida'
    }
  };

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data Recibida');
    }, 3500);
  });

}
