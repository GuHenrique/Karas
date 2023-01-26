import { ErrorDialogsComponent } from './../../shared/components/error-dialogs/error-dialogs.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Colaborador } from './model/colaborador';
import { ColaboradorService } from './service/colaborador.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {
  colaboradores$: Observable<Colaborador[]>;
  displayedColumns = ['nome', 'cargo', 'empresa', 'salario'];

  constructor(
    private colaboradorService: ColaboradorService,
    public dialog: MatDialog
  ) {
    this.colaboradores$ = colaboradorService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar colaboradores.');
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
