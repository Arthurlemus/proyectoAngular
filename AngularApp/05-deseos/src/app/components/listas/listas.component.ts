import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
@Input() terminada = true;
@ViewChild(IonList, {static: false}) ionlista: IonList; // PAra Cerrar el boton de la izquieda

// lista: Lista;
  constructor(public deseosService: DeseosService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(id: string | number) {
    if (this.terminada) {
      this.router.navigate([`/tabs/tab2/agregar/${id}`]);
    } else {

      this.router.navigate([`/tabs/tab1/agregar/${id}`]);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista) {
      const alert = await this.alertController.create({
        header: 'Editar Lista',
        inputs: [
          {
            name: 'nuevonombre',
            type: 'text',
            value: lista.titulo,
            placeholder: 'Nuevo Nombre'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => {
              this.ionlista.closeSlidingItems();
            }
          },
          {
            text: 'Actualizar',
            handler: (dato) => {
              if (dato.nuevonombre.lenght === 0) {
                return;
              }
              lista.titulo = dato.nuevonombre;
              this.deseosService.guardarStorage();
              this.ionlista.closeSlidingItems();
              // this.deseosService.cargarStorage();
            }
          }
        ]
      });
      alert.present();
  }


}
