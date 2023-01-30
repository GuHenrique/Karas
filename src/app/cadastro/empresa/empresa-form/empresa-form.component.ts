import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css'],
})
export class EmpresaFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      razaoSocial: [null],
      nomeFantasia: [null],
      cnpj: [null],
    });
  }

  onSubmit() {}

  onCancel() {
    this.router.navigate(['empresas']);
  }

  ngOnInit() {}
}
