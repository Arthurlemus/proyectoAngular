import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px] ="tamanio">
      Hola Mundo..... esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamanio = tamanio + 2">
      <i class="fa fa-plus"></i>
    </button>

    &nbsp;&nbsp;&nbsp;

    <button class="btn btn-primary" (click)="tamanio = tamanio -2">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio = 20;

  constructor() { }

  ngOnInit() {
  }

}
