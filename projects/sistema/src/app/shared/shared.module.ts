import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TitleComponent, MatIconModule, MatButtonModule],
})
export class SharedModule {}
