import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  @Input() listaJugadores: string[] = [];
  @Output() onSelectedPlayer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectPlayer(player: string) {
    this.onSelectedPlayer.emit(player);
  }
}
