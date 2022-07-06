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
      de: 'Enrique S.P',
      cuerpo: mensaje,
      color: 'navy' 
    };


    this.wsService.emit('mensaje', payload);
  }

  getMessage(){
    return this.wsService.listen('mensaje-nuevo');
  }
}
