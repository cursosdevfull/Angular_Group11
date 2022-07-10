import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestComponent } from './test/test.component';
import { IconService } from './shared/services/icon.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/services/paginator.service';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: MatPaginatorIntl, useClass: Paginator }],
})
export class AppModule {
  constructor(private readonly iconService: IconService) {}
}
