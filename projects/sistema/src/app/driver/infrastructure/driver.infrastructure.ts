import { HttpClient } from '@angular/common/http';
import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/driver.repository';
import { BaseInfrastructure } from '../../shared/infrastructure/base-infrastructure';
import { Injectable } from '@angular/core';

@Injectable()
export class DriverInfrastructure
  extends BaseInfrastructure<Driver>
  implements DriverRepository
{
  constructor(http: HttpClient) {
    super(http, 'drivers');
    this.httpClient = http;
  }
}
