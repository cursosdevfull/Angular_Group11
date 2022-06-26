import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FotosComponent } from './fotos/fotos.component';
import { CovidComponent } from './covid/covid.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listado/:tipo', component: ListadoComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'covid', component: CovidComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
