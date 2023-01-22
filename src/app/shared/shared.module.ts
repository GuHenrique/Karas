import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogsComponent } from './components/error-dialogs/error-dialogs.component';

@NgModule({
  declarations: [ErrorDialogsComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogsComponent],
})
export class SharedModule {}
