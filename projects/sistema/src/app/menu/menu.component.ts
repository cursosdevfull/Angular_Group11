import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() onShowList = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showList(option: number) {
    //this.onShowList.emit(option);
    if (option === 1) {
      this.router.navigate(['/listado', 1]);
    } else {
      this.router.navigate(['/listado', 2]);
    }
  }

  showLogin() {
    this.router.navigate(['/']);
  }

  showPhotos() {
    this.router.navigate(['/fotos']);
  }
}
