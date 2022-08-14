import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseInfrastructure } from '../../shared/infrastructure/base-infrastructure';
import { Role } from '../domain/role';

@Injectable()
export class RoleInfrastructure
  extends BaseInfrastructure<Role>
  implements RoleInfrastructure
{
  constructor(http: HttpClient) {
    super(http, 'roles');
    this.httpClient = http;
  }
}
