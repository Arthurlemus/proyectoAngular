import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
lista: any = [];
  constructor(private deseosService: DeseosService, activedRoute: ActivatedRoute) { 
    // activeRoute.params.subscribe(parametro => {
    //   this.lista = deseosService.obtenerLista(parametro.listaId);
    //   console.log(this.lista);
    // });
    const listaId = activedRoute.snapshot.paramMap.get('listaId');
    this.lista = deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  

}
