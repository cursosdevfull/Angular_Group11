import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() onShowList = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  showList(option: number) {
    this.onShowList.emit(option);
  }
}
