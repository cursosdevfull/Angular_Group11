import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @ViewChild('searchBox') searchBox!: ElementRef;

  listFields: string[] = ['name', 'lastname', 'cmp'];
  dataOriginal = [
    { id: 1, name: 'Carlos', lastname: 'Ojeda', cmp: 25456, marked: false },
    { id: 2, name: 'Pedro', lastname: 'Martin', cmp: 45678, marked: true },
  ];
  dataSource: any = [];

  constructor() {
    this.dataSource = [...this.dataOriginal];
  }

  ngAfterViewInit() {
    fromEvent(this.searchBox.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe((data: any) => this.search(data.target.value));
  }

  ngOnInit(): void {}

  toggle(column: string) {
    //const exists = this.listFields.findIndex((field) => field === column);

    const existsColumn = this.listFields.indexOf('name');

    if (existsColumn >= 0) {
      this.listFields.splice(existsColumn, 1); // ["lastname", "cmp"]
    } else {
      this.listFields.push('name'); // ["lastname", "cmp", "name"]
    }
  }

  search(valueToSearch: string) {
    this.dataSource = [
      ...this.dataOriginal.filter((el) =>
        el.name.toLowerCase().includes(valueToSearch)
      ),
    ];
  }

  /* search(event: any) {
    const value = event.target.value.toLowerCase();

    this.dataSource = [
      ...this.dataOriginal.filter((el) =>
        el.name.toLowerCase().includes(value)
      ),
    ];
  } */
}
