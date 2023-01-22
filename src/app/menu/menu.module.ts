import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterLink, AppMaterialModule],

  exports: [MenuComponent],
})
export class MenuModule {}
