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
        apellido: new FormControl('', Validators.required)
      }),
      correo: new FormControl('', [
                                    Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
        // new FormControl('Dormir', Validators.required),
        // new FormControl('Correr', Validators.required)
      ])

    });

    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset();
    this.forma.reset(this.usuario);
  }

  agregarPasatiempo() {
     ( this.forma.get('pasatiempos') as FormArray).push(new FormControl('Dormir', Validators.required));
}

}
