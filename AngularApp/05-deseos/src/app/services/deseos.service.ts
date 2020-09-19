import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  public listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a desaparecer');
    const lista3 = new Lista('Lista Personal');
    this.listas.push(lista1, lista2, lista3);
  }
}
