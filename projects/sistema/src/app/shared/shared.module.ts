import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [TitleComponent, ContainerComponent, TableComponent],
  imports: [CommonModule, MatIconModule, MatCardModule, MatTableModule],
  exports: [
    TitleComponent,
    MatIconModule,
    MatButtonModule,
    ContainerComponent,
    TableComponent,
    MatSidenavModule,
  ],
})
export class SharedModule {}
