import { Component } from '@angular/core';
import { Person, Persons } from './shared/interfaces/person.interface';

type TPerson = {
  name: string;
  lastname: string;
};

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoginVisible = true;
  isMenuVisible = false;
  isListVisible = false;

  today = new Date();

  listMedics: Persons = [
    { name: 'Javier', lastname: 'Pérez', age: 30 },
    { name: 'Juan', lastname: 'Puerta' },
    { name: 'José', lastname: 'Ramirez', age: 50 },
  ];

  listDrivers: Array<Partial<Person>> = [
    { name: 'Luis', lastname: 'Chang' },
    { name: 'Alfredo', lastname: 'Aramburu', age: 34 },
  ];

  listStaff: Persons = [];

  userLogged() {
    this.isLoginVisible = false;
    this.isMenuVisible = true;
  }

  showList(option: number) {
    this.isListVisible = true;

    if (option === 1) {
      //this.listStaff = Object.assign([], this.listMedics);
      this.listStaff = [...this.listMedics];
      console.log('staff', this.listStaff);
      console.log('medics', this.listMedics);
    } else {
      this.listStaff = this.listDrivers;
    }
  }
}
