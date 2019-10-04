import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
    `
    button {
      margin-right: 3px;
    }
    `
  ]
})
export class ClasesComponent implements OnInit {
 alerta = 'alert-danger';
 loading: boolean = false;

 propiedades: object = {
    danger: false,
    info: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
