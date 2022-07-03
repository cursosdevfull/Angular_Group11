import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() listFields = ['id', 'name', 'lastname'];
  @Input() dataSource = [
    { id: 1, name: 'sergio', lastname: 'hidalgo' },
    { id: 2, name: 'claudia', lastname: 'cáceres' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectRow(row: any) {
    row['marked'] = !row['marked'];
    // console.log(event);
    //alert('row selected: ' + row.id);
  }
}
