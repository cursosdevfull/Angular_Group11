import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthApplication } from '../../../application/auth.application';
import { StorageApplication } from '../../../application/storage.application';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleMenu: EventEmitter<void> = new EventEmitter();
  username: string;

  constructor(
    private readonly auth: AuthApplication,
    readonly storage: StorageApplication
  ) {
    this.username = storage.getFieldInToken('name') as string;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.onToggleMenu.emit();
  }

  logout() {
    this.auth.logout();
  }
}
