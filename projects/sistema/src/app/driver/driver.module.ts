import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DriverModule {}
