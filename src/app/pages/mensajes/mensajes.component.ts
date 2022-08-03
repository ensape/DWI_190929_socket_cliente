import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(
    public wsService : WebsocketService,
    //private Usuario : Usuario
  ) { }

  ngOnInit(): void {
  }

  salir(){
    this.wsService.logoutWS();
  }

}
