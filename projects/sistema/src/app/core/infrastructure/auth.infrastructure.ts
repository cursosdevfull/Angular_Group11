import { Observable } from 'rxjs';
import { Auth } from '../domain/auth';
import { AuthRepository } from '../domain/auth.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITokens } from '../domain/tokens.interface';
import { environment } from 'projects/sistema/src/environments/environment';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  constructor(private readonly http: HttpClient) {}

  login(auth: Auth): Observable<ITokens> {
    return this.http.post<ITokens>(`${environment.apiUrl}/users/login`, auth);
  }
  getNewAccessToken(refreshToken: string): Observable<ITokens> {
    return this.http.get<ITokens>(
      `${environment.apiUrl}/users/refresh/${refreshToken}`
    );
  }
}
