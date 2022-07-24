import { User, UserProperties } from './user';

export class UserFactory {
  create(nombre: string, correo: string, password: string, roles: any[]): User {
    const userProperties: UserProperties = {
      nombre,
      correo,
      password,
      roles,
      id: new Date().getTime(),
    };

    if (nombre.trim() === '') {
      throw new Error('Nombre no puede ser vacío');
    }

    if (correo.trim() === '') {
      throw new Error('Correo no puede ser vacío');
    }

    if (roles.length === 0) {
      throw new Error('Debe seleccionar al menos un rol');
    }

    return new User(userProperties);
  }
}
