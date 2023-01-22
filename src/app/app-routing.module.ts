import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoComponent } from './cadastro/cargo/cargo.component';
import { ColaboradorComponent } from './cadastro/colaborador/colaborador.component';
import { EmpresaComponent } from './cadastro/empresa/empresa.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: 'empresas', component: EmpresaComponent },
  { path: 'cargos', component: CargoComponent },
  { path: 'colaboradores', component: ColaboradorComponent },
  { path: 'pagamento', component: PagamentoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
