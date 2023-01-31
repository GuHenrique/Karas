import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CargoService } from './../../cargo/service/cargo.service';
import { EmpresaService } from './../../empresa/service/empresa.service';
import { ColaboradorService } from './../service/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css'],
})
export class ColaboradorFormComponent {
  form: FormGroup;
  empresas: any;
  cargos: any;

  constructor(
    private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private cargoService: CargoService,
    private location: Location,
    private colaboradorService: ColaboradorService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cargo: [null],
      empresa: [null],
      salario: [null],
    });

    this.empresaService.list().subscribe((data: any) => {
      this.empresas = data;
    });

    this.cargoService.list().subscribe((data: any) => {
      this.cargos = data;
    });
  }
  onSubmit() {
    this.colaboradorService.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (error) => this.onerror()
    );
  }

  onSuccess() {
    this._snackBar.open('Colaborador cadastrado com sucesso'),
      '',
      { duration: '5000' };
    this.onCancel();
  }

  onerror() {
    this._snackBar.open('Erro ao cadastrar colaborador.'),
      '',
      { duration: '5000' };
  }

  onCancel() {
    this.location.back();
  }
}
