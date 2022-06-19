import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { FotosService } from '../fotos.service';
import { Photo } from '../shared/interfaces/photo.interface';

@Component({
  selector: 'amb-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
})
export class FotosComponent implements OnInit {
  subscription = new Subscription();

  constructor(private fotosService: FotosService) {}

  ngOnInit(): void {
    this.subscription = this.fotosService
      .getFotos()
      .pipe(
        map((data: Photo[]) =>
          data
            .map((el: Photo) => ({
              title: el.title,
              thumbnailUrl: el.thumbnailUrl,
            }))
            .slice(0, 20)
        )
      )
      .subscribe((fotos) => {
        console.log(fotos);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
