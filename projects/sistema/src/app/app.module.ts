import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { TableroComponent } from './tablero/tablero.component';
import { ListadoComponent } from './listado/listado.component';
import { JugadorComponent } from './jugador/jugador.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, TableroComponent, ListadoComponent, JugadorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
