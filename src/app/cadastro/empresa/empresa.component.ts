import { ErrorDialogsComponent } from './../../shared/components/error-dialogs/error-dialogs.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Empresa } from './model/empresa';
import { EmpresaService } from './service/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent {
  empresas$: Observable<Empresa[]>;
  displayedColumns = ['razaoSocial', 'nomeFantasia', 'cnpj'];

  // empresaService: EmpresaService

  constructor(
    private empresaService: EmpresaService,
    public dialog: MatDialog
  ) {
    // this.empresaService = new EmpresaService();
    this.empresas$ = this.empresaService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar empresas.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogsComponent, {
      data: errorMsg,
    });
  }
}
