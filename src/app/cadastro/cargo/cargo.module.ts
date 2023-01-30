import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoFormComponent } from './cargo-form/cargo-form.component';

@NgModule({
  declarations: [CargoFormComponent],
  imports: [
    CommonModule,
    CargoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class CargoModule {}
