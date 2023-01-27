import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'new', component: ColaboradorFormComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradorRoutingModule {}
