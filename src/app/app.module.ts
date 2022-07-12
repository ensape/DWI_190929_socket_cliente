import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig =
{
  url:environment.wsUrl, options:{}
};

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './component/footer/footer.component';
import { ChatComponent } from './component/chat/chat.component';
import { UsuariosComponent } from './component/lista/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    UsuariosComponent,
    LoginComponent,
    MensajesComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
