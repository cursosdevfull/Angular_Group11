import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
})
export class JugadorComponent implements OnInit {
  @Input() nombre = '';
  @Output() onSelectedPlayer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectedPlayer() {
    this.onSelectedPlayer.emit(this.nombre);
  }
}
