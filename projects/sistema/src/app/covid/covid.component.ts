import { Component, OnInit } from '@angular/core';
import { map, Subject, Subscription, takeUntil, interval, tap } from 'rxjs';
import { BaseComponent } from '../base-component';
import { CovidService } from '../covid.service';
import { ItemCovid, ListCovid } from '../shared/interfaces/covid.interface';

interface Item {
  countryRegion: string;
  confirmed: number;
}

type ListItem = Item[];

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent extends BaseComponent implements OnInit {
  messageToUnsubscribe = 'Desubscription from Covid Component';
  listItem: ListItem = [];

  constructor(private covidService: CovidService) {
    super();
  }

  alert(message: string): void {
    console.log(message);
  }

  getFirstRecords(quantity: number) {
    return (results: ListCovid) => {
      return results.slice(0, quantity);
    };
  }

  getOnlyPropertiesNeededAndSorted(results: ListCovid) {
    return results
      .map((item: ItemCovid) => ({
        countryRegion: item.countryRegion,
        confirmed: item.confirmed,
      }))
      .sort((a, b) => (a.countryRegion > b.countryRegion ? 1 : -1));
  }

  override setNotification(message: string) {
    this.messageToSMS = message.toLowerCase();
  }

  ngOnInit(): void {
    this.covidService
      .getStatus()
      .pipe(
        tap(() => this.alert('Starting process')),
        takeUntil(this.subject),
        map(this.getFirstRecords(30)),
        map(this.getOnlyPropertiesNeededAndSorted),
        tap(() => this.setNotification('Ending process')),
        tap(() => this.sendNotification())
      )
      .subscribe((result: ListItem) => (this.listItem = result));

    interval(500).pipe(takeUntil(this.subject)).subscribe(console.log);
  }
}
