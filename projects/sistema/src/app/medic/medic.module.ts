import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableDevModule } from 'dev-table';

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [
    CommonModule,
    MedicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TableDevModule,
  ],
})
export class MedicModule {}
