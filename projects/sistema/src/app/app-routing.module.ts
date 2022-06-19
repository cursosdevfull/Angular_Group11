import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FotosComponent } from './fotos/fotos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  /* { path: 'menu', component: MenuComponent }, */
  { path: 'listado/:tipo', component: ListadoComponent },
  { path: 'fotos', component: FotosComponent },
  // { path: 'listado', component: ListadoComponent },
  /*   { path: 'medicos', component: ListadoComponent },
  { path: 'pilotos', component: ListadoComponent }, */
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
