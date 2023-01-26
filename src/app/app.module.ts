import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargoComponent } from './cadastro/cargo/cargo.component';
import { ColaboradorComponent } from './cadastro/colaborador/colaborador.component';
import { EmpresaComponent } from './cadastro/empresa/empresa.component';
import { EmpresaModule } from './cadastro/empresa/empresa.module';
import { MenuModule } from './menu/menu.module';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CpfCnpjPipe } from './shared/pipes/cpfcnpj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    ColaboradorComponent,
    PagamentoComponent,
    CpfCnpjPipe,
    EmpresaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    EmpresaModule,
  ],
  exports: [AppMaterialModule],
})
export class AppModule {}
