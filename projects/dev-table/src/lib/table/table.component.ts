import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaColumn } from './metacolumn.interface';

@Component({
  selector: 'dev-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  listFields: any[] = [];
  @Input() dataSource: any[] = [];
  @Input() metaColumns: MetaColumn[] = [];
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaColumns']) {
      this.listFields = this.metaColumns.map((el) => el.field);
    }
  }

  ngOnInit(): void {}

  selectRow(row: any) {
    row['marked'] = !row['marked'];
  }

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }

    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }
}
