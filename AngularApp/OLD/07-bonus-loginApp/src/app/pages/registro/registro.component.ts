import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
   }

   onSubmit(form: NgForm) {
     if (form.invalid) { return; } // si el formulario es invalido aqui se detiene

     console.log('Formulario Enviado');

     Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Registrando.....',
    });

     this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
       console.log(resp);

       if ( this.recordarme) {
         localStorage.setItem('email',this.usuario.email);
       }

       Swal.fire(' ', 'Registro Completo', 'info').then(() => {
          this.router.navigateByUrl('/login');
       });

     }, err => {
       console.log(err.error.error.message);
       Swal.fire(' ', err.error.error.message, 'error');
     });
   }

}
