import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { ColaboradorRoutingModule } from './colaborador-routing.module';

@NgModule({
  declarations: [ColaboradorFormComponent],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class ColaboradorModule {}
