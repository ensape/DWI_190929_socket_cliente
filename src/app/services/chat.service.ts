import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }


  sendMessage(mensaje: String){
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje,
      color: 'navy'
    };


    this.wsService.emit('mensaje', payload);
  }

  getMessage(){
    return this.wsService.listen('mensaje-nuevo');
  }

  getMessagesPrivate(){
    return this.wsService.listen('mensaje-privado');
  }
}
