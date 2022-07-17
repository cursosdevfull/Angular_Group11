import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private configSubject: Subject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private config: ILayout) {
    this.configSubject = new Subject<ILayout>();
  }

  setConfiguration(config: ILayout) {}

  getConfiguration() {}
}
