import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket) {}

      checkStatus(){
        this.socket.on('connect', () =>{
          console.log('Connectado al servidor');
          this.socketStatus=true;
        });
        this.socket.on('disconnect', ()=>{
          console.log('Desconnectado al servidor');
          this.socketStatus=false;
        });
      }
}
