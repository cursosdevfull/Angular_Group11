import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../shared/interfaces/person.interface';

@Component({
  selector: 'amb-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  @Input() listStaff: Partial<Person>[] = [];

  constructor() {}

  ngOnInit(): void {}

  clone(staff: Partial<Person>): Partial<Person> {
    return { ...staff };
  }
}
