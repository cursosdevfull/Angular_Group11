import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../domain/auth';
import { AuthRepository } from '../domain/auth.repository';
import { ITokens } from '../domain/tokens.interface';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { StorageApplication } from './storage.application';

@Injectable()
export class AuthApplication {
  private userLogged = false;

  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    private readonly storageApplication: StorageApplication,
    private readonly router: Router
  ) {}

  login(auth: Auth) {
    return this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: console.log,
    });
  }

  private userAuthenticated(response: ITokens) {
    this.storageApplication.setField('accessToken', response.accessToken);
    this.storageApplication.setField('refreshToken', response.refreshToken);

    this.userLogged = true;

    this.router.navigate(['/driver']);
  }

  get isUserLogged(): boolean {
    const accessToken = this.storageApplication.getField('accessToken');
    const refreshToken = this.storageApplication.getField('refreshToken');

    return (!!accessToken && !!refreshToken) || this.userLogged ? true : false;
  }

  logout() {
    this.userLogged = false;
    this.storageApplication.clear();
    this.router.navigate(['/']);
  }
}
