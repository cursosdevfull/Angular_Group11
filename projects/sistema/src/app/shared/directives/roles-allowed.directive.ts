import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthApplication } from '../../core/application/auth.application';
import { StorageApplication } from '../../core/application/storage.application';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input('rolesAllowed') roles: string = '';
  rolesAllowed: string[] = [];

  constructor(
    private readonly storage: StorageApplication,
    private readonly auth: AuthApplication,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.rolesAllowed = this.roles.split(',');
    this.execute();
  }

  execute() {
    const isUserLogged = this.auth.isUserLogged;
    const rolesUser = this.storage.getFieldInToken('roles') as string[];
    const isUserAuthorized = rolesUser.some((role) =>
      this.rolesAllowed.includes(role)
    );

    if (isUserLogged && isUserAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
