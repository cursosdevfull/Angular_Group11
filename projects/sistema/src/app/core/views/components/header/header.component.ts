import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthApplication } from '../../../application/auth.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter();
  username = 'Sergio Hidalgo';

  constructor(private readonly auth: AuthApplication) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.onToggleMenu.emit();
  }

  logout() {
    this.auth.logout();
  }
}
