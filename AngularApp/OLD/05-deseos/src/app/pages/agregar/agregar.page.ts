import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
lista: Lista;
nombreItem = '';

  constructor(private deseosService: DeseosService, activedRoute: ActivatedRoute) {

    const listaId = activedRoute.snapshot.paramMap.get('listaId');
    this.lista = deseosService.obtenerLista(listaId);

  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.item.push(nuevoItem);
    this.deseosService.guardarStorage();
    this.nombreItem = '';

  }

  cambioCheck(tarea: ListaItem) {
    const pendientes = this.lista.item.filter(itemData => !itemData.completado).length; // Lo cuenta cuando el completado esta en false

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;

    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;

    }

    this.deseosService.guardarStorage();
  }

  borrarItem(indice: number) {
    this.lista.item.splice(indice, 1); // desde donde quieres borrar y cuantos datos
    this.deseosService.guardarStorage();
  }

}
