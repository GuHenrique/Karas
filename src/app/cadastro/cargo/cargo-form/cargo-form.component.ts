import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EmpresaService } from '../../empresa/service/empresa.service';

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
    private router: Router
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

  onSubmit() {}
  onCancel() {
    this.router.navigate(['cargos']);
  }
}
