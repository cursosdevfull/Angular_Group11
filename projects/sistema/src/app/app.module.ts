import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { TableroComponent } from './tablero/tablero.component';
import { ListadoComponent } from './listado/listado.component';
import { JugadorComponent } from './jugador/jugador.component';
import { MenuComponent } from './menu/menu.component';
import { DatoComponent } from './dato/dato.component';
import { AppRoutingModule } from './app-routing.module';
import { LogService } from './log.service';
import { FotosComponent } from './fotos/fotos.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableroComponent,
    ListadoComponent,
    JugadorComponent,
    MenuComponent,
    DatoComponent,
    FotosComponent,
    CovidComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    /*PersonsService,*/
    LogService /* { provide: LogService, useClass: LogService } */,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
