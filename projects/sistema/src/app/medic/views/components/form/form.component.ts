import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  title: string;
  group: FormGroup;
  photoToShow: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormComponent>
  ) {
    this.title = data ? 'EDIT' : 'ADD';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      segundo_nombre: new FormControl(
        this.data?.segundo_nombre,
        Validators.required
      ),
      apellido: new FormControl(this.data?.apellido, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      correo: new FormControl(this.data?.correo, [
        Validators.required,
        Validators.email,
      ]),
    });

    if (this.data) {
      this.group.addControl('foto', new FormControl());
      this.photoToShow = this.data.foto ? this.data.foto : '';
    } else {
      this.group.addControl('foto', new FormControl(null, Validators.required));
    }
  }

  save() {
    const values = this.group.value;
    const medicId = values.id;
    delete values.id;

    const fd = new FormData();

    for (const key of Object.keys(values)) {
      if (key === 'foto' && values[key]) {
        fd.append(key, values[key]);
      } else if (key !== 'foto') {
        fd.append(key, values[key]);
      }
    }

    this.reference.close({ id: medicId, record: fd });
  }
}
