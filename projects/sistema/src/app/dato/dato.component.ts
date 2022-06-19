import { Component, Input, OnInit, Output } from '@angular/core';
import { Person } from '../shared/interfaces/person.interface';

@Component({
  selector: 'amb-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.css'],
})
export class DatoComponent implements OnInit {
  @Input() staff!: Partial<Person>;

  constructor() {}

  ngOnInit(): void {}

  changeName() {
    this.staff.name = 'Marcela';
    console.log('nombre cambiado', this.staff.name);
  }
}
