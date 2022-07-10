import { Component, OnInit } from '@angular/core';
import { MetaColumn } from 'projects/sistema/src/app/shared/interfaces/metacolumn.interface';

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
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
  ];
  quantityRecords: number = this.dataOriginal.length;
  dataSource: any = [];
  pageSize = 15;

  constructor() {
    this.getRecordsByPage(0);
  }

  ngOnInit(): void {}

  getRecordsByPage(page: number) {
    this.dataSource = [
      ...this.dataOriginal.slice(
        page * this.pageSize,
        page * this.pageSize + this.pageSize
      ),
    ];
  }
}
