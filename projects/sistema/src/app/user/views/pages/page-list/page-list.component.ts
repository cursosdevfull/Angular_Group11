import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/services/utils.service';
import { FormComponent } from '../../components/form/form.component';
import { UserApplication } from '../../../application/user.application';
import { BaseComponent } from 'projects/sistema/src/app/shared/components/base/base-component';
import { User } from '../../../domain/user';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<
  User,
  UserApplication,
  FormComponent
> {
  listFields: string[] = ['id', 'name', 'lastname', 'cmp'];
  metaColumns: MetaColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];

  constructor(
    protected override readonly utilsService: UtilsService,
    protected readonly userApplication: UserApplication
  ) {
    super(userApplication, utilsService, FormComponent);
    this.filename = 'Users';
    this.sheetName = 'List';
  }
}
