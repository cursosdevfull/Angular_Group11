import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  @Output() onUserLogged = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  login(): void {
    this.onUserLogged.emit();
  }
}
