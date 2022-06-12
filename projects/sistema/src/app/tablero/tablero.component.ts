import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  jugadores = ['Sergio', 'Pedro', 'Carmela', 'Juan', 'Pablo'];
  textoBoton = 'Ocultar';
  mostrarListado = true;
  selectPlayer = '';

  constructor() {}

  ngOnInit(): void {}

  mostrarOcultarListado() {
    this.mostrarListado = !this.mostrarListado;
    this.textoBoton = this.mostrarListado ? 'Ocultar' : 'Mostrar';
    /* if (this.mostrarListado) {
      this.textoBoton = 'Ocultar';
    } else {
      this.textoBoton = 'Mostrar';
    } */
  }

  selectedPlayer(player: string) {
    this.selectPlayer = player;
  }
}
