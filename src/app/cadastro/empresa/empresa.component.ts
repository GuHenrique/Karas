import { ErrorDialogsComponent } from './../../shared/components/error-dialogs/error-dialogs.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Empresa } from './model/empresa';
import { EmpresaService } from './service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent {
  empresas$: Observable<Empresa[]>;
  displayedColumns = ['razaoSocial', 'nomeFantasia', 'cnpj', 'acoes'];

  // empresaService: EmpresaService

  constructor(
    private empresaService: EmpresaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
