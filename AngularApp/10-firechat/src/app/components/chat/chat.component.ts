import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string;
  elemento: any; // PAra el scroll

  constructor( public chatService: ChatService) {

    this.chatService.cargarMensajes().subscribe(() => {
         setTimeout(() => {
           this.elemento.scrollTop = this.elemento.scrollHeight; // Mantiene el scroll abajo
         }, 20);
    });

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes'); // Toma el dato del Elemento con ese ID
  }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje).then(() => this.mensaje = '')
                                      .catch((err) => console.error('Error al guardar: ', err));
  }

}
