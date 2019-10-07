import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.parent.params.subscribe(parametros => {
      console.log('Ruta HIJA');
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
