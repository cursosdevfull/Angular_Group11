import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestComponent } from './test/test.component';
import { IconService } from './shared/services/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/services/paginator.service';
import { LayoutModule } from './config/injections/layout/modules/layout.module';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';
import { ReactiveFormsModule } from '@angular/forms';
import { UserApplication } from './user/application/user.application';
import { UserInfrastructure } from './user/infrastructure/user.infrastructure';
import { AuthApplication } from './core/application/auth.application';
import { AuthInfrastructure } from './core/infrastructure/auth.infrastructure';
import { StorageApplication } from './core/application/storage.application';
import { StorageInfrastructure } from './core/infrastructure/storage.infrastructure';
import { MedicApplication } from './medic/application/medic.application';
import { MedicInfrastructure } from './medic/infrastructure/medic.infrastructure';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';

const components = [AppComponent, TestComponent];
const imports = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  CoreModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatIconModule,
  LayoutModule.forRoot(layoutConstant),
  ReactiveFormsModule,
  HttpClientModule,
];
const material = [{ provide: MatPaginatorIntl, useClass: Paginator }];
const applications = [
  UserApplication,
  AuthApplication,
  StorageApplication,
  MedicApplication,
];
const infrastructures = [
  UserInfrastructure,
  AuthInfrastructure,
  StorageInfrastructure,
  MedicInfrastructure,
];

const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];
@NgModule({
  declarations: [...components],
  imports: [...imports],
  bootstrap: [AppComponent],
  providers: [
    ...material,
    ...applications,
    ...infrastructures,
    ...interceptors,
  ],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}
