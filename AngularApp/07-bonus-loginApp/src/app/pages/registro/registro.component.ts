import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
     this.usuario = new UsuarioModel();
   }

   onSubmit(form: NgForm) {
     console.log(form);
     if (form.invalid) { return; } // si el formulario es invalido aqui se detiene

     console.log('Formulario Enviado');
     console.log(this.usuario);
     console.log(form);
   }

}
