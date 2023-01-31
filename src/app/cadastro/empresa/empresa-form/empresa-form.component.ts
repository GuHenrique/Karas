import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EmpresaService } from './../service/empresa.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css'],
})
export class EmpresaFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmpresaService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      razaoSocial: [null],
      nomeFantasia: [null],
      cnpj: [null],
    });
  }
  ngOnInit() {}
  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }
  private onSuccess() {
    this._snackBar.open('Empresa cadastrada com sucesso.', '', {
      duration: 3000,
    });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao cadastrar empresa.', '', { duration: 3000 });
  }
}
