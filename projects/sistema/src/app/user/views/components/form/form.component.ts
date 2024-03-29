import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleApplication } from 'projects/sistema/src/app/role/application/role.application';
import { Observable, Subscription } from 'rxjs';
import { RoleProperties } from '../../../../role/domain/role';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  group: FormGroup;
  title: string;
  roles: Observable<RoleProperties[]>;
  //subscription: Subscription;

  constructor(
    private readonly reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly roleApplication: RoleApplication
  ) {
    this.title = this.data ? 'Edit' : 'Add';

    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, [Validators.required]),
      correo: new FormControl(this.data?.correo, [
        Validators.required,
        Validators.email,
      ]),
      roles: new FormControl(this.data?.roles.map((role) => role.id)),
    });

    if (this.data) {
      this.group.addControl('password', new FormControl(''));
    } else {
      this.group.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    }
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    /*    this.subscription = this.roleApplication.list().subscribe((data) => {
      this.roles = data;
    }); */
    this.roles = this.roleApplication.list();
  }

  save() {
    const values = this.group.value;
    const userId = values.id;
    delete values.id;

    if (!values.password) {
      delete values.password;
    }

    this.reference.close({ id: userId, record: values });
  }
  /* 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } */
}
