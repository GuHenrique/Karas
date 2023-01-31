import { CargoService } from './../service/cargo.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmpresaService } from '../../empresa/service/empresa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css'],
})
export class CargoFormComponent {
  form: FormGroup;
  empresas: any;

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private location: Location,
    private cargoService: CargoService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      descricao: [null],
      empresa: [null],
      salario: [null],
    });

    this.empresaService.list().subscribe((data: any) => {
      this.empresas = data;
    });
  }

  onSubmit() {
    this.cargoService.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (data) => this.onError()
    );
  }
  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this._snackBar.open('Cargo cadastrado com sucesso.', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  onError() {
    this._snackBar.open('Erro ao cadastrar cargo.', '', { duration: 5000 });
  }
}
