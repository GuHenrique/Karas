import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterLink],
})
export class MenuRoutingRoutingModule {}
