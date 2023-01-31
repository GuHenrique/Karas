import { Router } from '@angular/router';
import { CargoService } from './../../cargo/service/cargo.service';
import { EmpresaService } from './../../empresa/service/empresa.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

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
    private location: Location
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
  onSubmit() {}

  onCancel() {
    this.location.back();
  }
}
