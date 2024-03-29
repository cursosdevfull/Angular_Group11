import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApplication } from '../../core/application/auth.application';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(private readonly auth: AuthApplication) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.validUserLogged();
  }

  canLoad(): boolean {
    return this.validUserLogged();
  }

  private validUserLogged(): boolean {
    const isLogged = this.auth.isUserLogged;
    if (!isLogged) {
      this.auth.logout();
    }

    return isLogged;
  }
}
