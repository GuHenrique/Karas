import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoFormComponent } from './cargo-form/cargo-form.component';


@NgModule({
  declarations: [
    CargoFormComponent
  ],
  imports: [
    CommonModule,
    CargoRoutingModule
  ]
})
export class CargoModule { }
