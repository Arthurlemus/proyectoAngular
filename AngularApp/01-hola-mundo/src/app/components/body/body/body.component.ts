import { Component, OnInit } from '@angular/core';

interface frases {
  autor: string;
  mensaje: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: frases = {
    autor: 'Ben Parker',
    mensaje: 'Un Gran poder conlleva una gran responsabilidad'
  };

  mostrar = true;
  personajes: string[] = ['SpiderMan', 'Venom', 'Dr. Octopus'];
  constructor() { }

  ngOnInit(): void {
  }

}
