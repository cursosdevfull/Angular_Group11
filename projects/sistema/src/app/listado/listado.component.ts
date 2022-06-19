import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { PersonsService } from '../persons.service';
import { Person, Persons } from '../shared/interfaces/person.interface';

@Component({
  selector: 'amb-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listStaff: Partial<Person>[] = [];
  subscription!: Subscription;

  /*  listMedics: Persons = [
    { name: 'Javier', lastname: 'Pérez', age: 30 },
    { name: 'Juan', lastname: 'Puerta' },
    { name: 'José', lastname: 'Ramirez', age: 50 },
  ];

  listDrivers: Array<Partial<Person>> = [
    { name: 'Luis', lastname: 'Chang' },
    { name: 'Alfredo', lastname: 'Aramburu', age: 34 },
  ]; */

  constructor(
    private activatedRoute: ActivatedRoute,
    private personsService: PersonsService
  ) {
    //const tipo = +activatedRoute.snapshot.params['tipo'];
    //this.listStaff = this.personsService.getFullNames(tipo);

    this.subscription = activatedRoute.params.subscribe((params: Params) => {
      const tipo = +params['tipo'];
      this.listStaff = this.personsService.getFullNames(tipo);
    });

    /* interval(500).subscribe(console.log); */

    /*  if (tipo === 1) {
      //this.listStaff = [...this.listMedics];
      this.listStaff = this.personsService.getFullNames(1);
    } else if (tipo === 2) {
      //this.listStaff = [...this.listDrivers];
      this.listStaff = this.personsService.getFullNames(2);
    } */
  }

  ngOnInit(): void {}

  clone(staff: Partial<Person>): Partial<Person> {
    return { ...staff };
  }

  ngOnDestroy(): void {
    console.log('Desuscripción');
    this.subscription.unsubscribe();
  }
}
