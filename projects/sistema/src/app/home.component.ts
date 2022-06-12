import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  title = 'Ambulance';
  showTable = false;

  @Input() appName = '';
  @Output() onSelectedApp = new EventEmitter();

  mostrarMensaje() {
    const mensaje = this.appName;
    alert(mensaje);
  }

  mostrarTabla() {
    this.showTable = true;
  }

  seleccionarApp() {
    this.onSelectedApp.emit(this.appName);
  }
}
