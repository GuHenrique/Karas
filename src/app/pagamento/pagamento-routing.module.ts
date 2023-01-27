import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagamentoComponent } from './pagamento.component';

const routes: Routes = [{ path: '', component: PagamentoComponent }];

@NgModule({
  declarations: [],
  imports: [],
  exports: [RouterModule],
})
export class PagamentoRoutingModule {}
