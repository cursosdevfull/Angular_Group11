import { Driver, DriverProperties } from './driver';
export class DriverFactory {
  create(nombre: string) {
    const DriverProperties: DriverProperties = {
      nombre,
    };

    if (nombre.trim() === '') {
      throw new Error('Nombre no puede ser vacío');
    }

    return new Driver(DriverProperties);
  }
}
