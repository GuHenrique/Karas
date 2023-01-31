import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { SharedModule } from './../../shared/shared.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaRoutingModule } from './empresa-routing.module';

@NgModule({
  declarations: [EmpresaFormComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    EmpresaRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class EmpresaModule {}
