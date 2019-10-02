import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
@Input() terminada = true;

  constructor(public deseosService: DeseosService, private router: Router) { }

  ngOnInit() {}

  listaSeleccionada(id: string | number) {
    if( this.terminada){
      this.router.navigate([`/tabs/tab2/agregar/${id}`]);
    } else {

      this.router.navigate([`/tabs/tab1/agregar/${id}`]);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }


}
