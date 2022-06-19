import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  @Output() onUserLogged = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.router.navigate(['/listado', 1]);
    /*  this.router.navigate(["/listado/1"])
    this.router.navigate(["/listado/" + 1]) */
    //this.onUserLogged.emit();
  }
}
