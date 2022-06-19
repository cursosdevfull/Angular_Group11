import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Person, Persons } from './shared/interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  listMedics: Persons = [
    { name: 'Javier', lastname: 'Pérez', age: 30 },
    { name: 'Juan', lastname: 'Puerta' },
    { name: 'José', lastname: 'Ramirez', age: 50 },
  ];

  listDrivers: Array<Partial<Person>> = [
    { name: 'Luis', lastname: 'Chang' },
    { name: 'Alfredo', lastname: 'Aramburu', age: 34 },
  ];

  constructor(private logService: LogService) {}

  getFullNames(type: number) {
    this.logService.log('getFullNames');
    return type === 1 ? [...this.listMedics] : [...this.listDrivers];
    /*     if(type===1) {
        return [...this.listMedics]
    } else {
        return [...this.listDrivers]
    } */
  }
}
