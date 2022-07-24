import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';
import { UtilsService } from 'projects/sistema/src/app/shared/services/utils.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  listFields: string[] = ['id', 'name', 'lastname', 'cmp'];
  metaColumns: MetaColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
    { field: 'cmp', title: 'CMP' },
  ];
  dataOriginal = [
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 3, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 4, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 5, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 6, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 7, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 8, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 9, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 10, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 11, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 12, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 13, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 14, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 15, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 16, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 17, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 18, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 19, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 20, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 21, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 22, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 23, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 24, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 25, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 26, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 27, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 28, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 29, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 30, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 31, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 32, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
  ];
  quantityRecords: number = this.dataOriginal.length;
  dataSource: any = [];
  pageSize = 15;
  currentPage = 0;

  constructor(private readonly utilsService: UtilsService) {
    this.getRecordsByPage(0);
  }

  ngOnInit(): void {}

  getRecordsByPage(page: number) {
    this.currentPage = page;
    this.dataSource = [
      ...this.dataOriginal.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }

  showModalWindow(row: any = null) {
    const reference: MatDialogRef<FormComponent> =
      this.utilsService.showModalWindow(FormComponent, {
        disableClose: true,
        panelClass: 'form-modal',
        data: row,
      });

    reference.afterClosed().subscribe((response: any) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const record: any = this.dataOriginal.find(
          (data) => data.id === response.id
        );
        record.name = response.name;
        record.lastname = response.lastname;
      } else {
        response.id = this.dataOriginal.length + 1;
        this.dataOriginal.push(response);
      }
      this.getRecordsByPage(this.currentPage);
    });
  }

  delete(row: any) {
    this.utilsService
      .showConfirm('Really? Do you want to delete it?')
      .subscribe((response) => {
        if (response) {
          const index = this.dataOriginal.findIndex((r) => r.id === row.id);
          this.dataOriginal.splice(index, 1);
          this.getRecordsByPage(this.currentPage);
        }
      });
  }
}
