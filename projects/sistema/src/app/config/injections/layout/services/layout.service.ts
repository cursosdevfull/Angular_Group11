import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  configSubject: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private config: ILayout) {
    this.configSubject = new BehaviorSubject<ILayout>(config);
  }

  set configuration(config: any) {
    this.configSubject.next(config);
  }

  get configuration(): Observable<ILayout> {
    return this.configSubject.asObservable();
  }
}
