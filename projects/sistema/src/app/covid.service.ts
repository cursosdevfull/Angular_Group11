import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ItemCovid, ListCovid } from './shared/interfaces/covid.interface';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly httpClient: HttpClient) {}

  getStatus(): Observable<ListCovid> {
    return this.httpClient
      .get<ListCovid>('https://covid19.mathdro.id/api/confirmed')
      .pipe(tap(() => console.log('Llegaron los datos')));
  }
}
