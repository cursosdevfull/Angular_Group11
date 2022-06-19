import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(private http: HttpClient) {}

  getFotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}
