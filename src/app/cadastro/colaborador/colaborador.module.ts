import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';

@NgModule({
  declarations: [ColaboradorFormComponent],
  imports: [CommonModule, ColaboradorRoutingModule],
})
export class ColaboradorModule {}
