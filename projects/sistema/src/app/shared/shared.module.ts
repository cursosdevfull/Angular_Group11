import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [TitleComponent, ContainerComponent],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [TitleComponent, MatIconModule, MatButtonModule, ContainerComponent],
})
export class SharedModule {}
