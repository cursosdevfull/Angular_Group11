import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/services/utils.service';
import { MedicApplication } from '../../../application/medic.application';
import { Medic } from '../../../domain/medic';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<
  Medic,
  MedicApplication,
  FormComponent
> {
  listFields: string[] = ['id', 'nombre', 'apellido', 'cmp'];
  metaColumns: MetaColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'cmp', title: 'CMP' },
  ];

  constructor(
    protected medicApplication: MedicApplication,
    protected override readonly utilsService: UtilsService
  ) {
    super(medicApplication, utilsService, FormComponent);
  }
}
