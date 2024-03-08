import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCharactersComponentComponent } from './lista-characters-component/lista-characters-component.component';
import { ModalCharacterComponentComponent } from './modal-character-component/modal-character-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalBitacoraComponent } from './modal-bitacora/modal-bitacora.component';
import { LoginUsuariosComponent } from './login-usuarios/login-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCharactersComponentComponent,
    ModalCharacterComponentComponent,
    ModalBitacoraComponent,
    LoginUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
