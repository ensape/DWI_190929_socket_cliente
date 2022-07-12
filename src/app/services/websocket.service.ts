import { Injectable } from '@angular/core';
import { Socket} from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  public socketStatus=false;
  public usuario?: Usuario; //el signo de ? = puede ser null 

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }


  emit( evento: string, payload: any , callback?: Function){
    console.log('emitiendo mensaje');
    this.socket.emit(evento, payload, callback);
  }

  listen( evento: string){
    return this.socket.fromEvent( evento );
  }

  loginWS(nombre: String){
    console.log('configurado:', nombre)
    this.socket.emit('configurar-usuario', {nombre}, (resp: Response) =>{
      console.log(resp);
    });
  }

}

