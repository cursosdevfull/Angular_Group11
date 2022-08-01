import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApplication } from '../../../application/auth.application';
import { AuthFactory } from '../../../domain/auth.factory';
import { StorageApplication } from '../../../application/storage.application';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  group: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authApplication: AuthApplication,
    private readonly storageApplication: StorageApplication
  ) {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login() {
    const values = this.group.value;
    const auth = AuthFactory.create(values.correo, values.password);

    this.authApplication.login(auth);
  }
}
