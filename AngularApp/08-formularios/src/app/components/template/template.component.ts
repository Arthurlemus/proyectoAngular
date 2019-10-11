import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 2px solid red;
    }
  `]
})

export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rita'
  },
  {
    codigo: 'ESP',
    nombre: 'España'
  },
  {
    codigo: 'MX',
    nombre: 'Mexico'
  },
  {
    codigo: 'PZDI',
    nombre: 'Pozo de Ibarra'
  }]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('Formulario posteado');
    console.log(forma);
  }

}
