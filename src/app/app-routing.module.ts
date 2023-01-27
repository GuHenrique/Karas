import { EmpresaComponent } from './cadastro/empresa/empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoComponent } from './cadastro/cargo/cargo.component';
import { ColaboradorComponent } from './cadastro/colaborador/colaborador.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pagamento' },
  { path: 'empresas', component: EmpresaComponent },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./cadastro/empresa/empresa.module').then((m) => m.EmpresaModule),
  },
  { path: 'cargos', component: CargoComponent },
  {
    path: 'cargos',
    loadChildren: () =>
      import('./cadastro/cargo/cargo.module').then((m) => m.CargoModule),
  },
  { path: 'colaboradores', component: ColaboradorComponent },
  {
    path: 'colaboradores',
    loadChildren: () =>
      import('./cadastro/colaborador/colaborador.module').then(
        (m) => m.ColaboradorModule
      ),
  },
  { path: 'pagamento', component: PagamentoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
