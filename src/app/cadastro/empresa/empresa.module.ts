import { EmpresaRoutingModule } from './empresa-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    EmpresaRoutingModule,
  ],
  exports: [EmpresaRoutingModule],
})
export class EmpresaModule {}
