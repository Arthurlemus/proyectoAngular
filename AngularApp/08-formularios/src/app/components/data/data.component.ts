import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: object = {
    nombrecompleto: {
      nombre: 'Irving',
      apellido: 'Lemus'
    },
    correo: 'arthurlemus@tecnola.com.mx',
    pasatiempos: ['Comer']
  };

  constructor() {

    // console.log(this.usuario);

    // this.forma = new FormGroup({
    //   nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   apellido: new FormControl('', Validators.required),
    //   correo: new FormControl('', [
    //                                   Validators.required,
    //                                   Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //                               ])
    // });

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, this.noPermitido])
      }),
      correo: new FormControl('', [
                                    Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      username: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });

    this.forma.get('password2').setValidators([Validators.required, this.noIgual.bind(this.forma)]);
    // this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  
  noIgual(control: FormControl): any {
    console.log(control);
    if (control.value !== this.get('password1').value) {
        return {noiguales: true };
    }
    return null;
  }

  existeUsuario(control: FormControl) {
    // PAra verificar que el usuario existe
  }


  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset();
    this.forma.reset(this.usuario);
  }

  noPermitido(control: FormControl) {
    if (control.value === 'lemus') {
      return {noPermitido: true};
    }
    return null;
  }

  agregarPasatiempo() {
     ( this.forma.get('pasatiempos') as FormArray).push(new FormControl('Dormir', Validators.required));
}

}
