import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogsComponent } from './../../shared/components/error-dialogs/error-dialogs.component';
import { MatDialog } from '@angular/material/dialog';
import { CargoService } from './service/cargo.service';
import { Cargo } from './model/cargo';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
})
export class CargoComponent {
  cargos$: Observable<Cargo[]>;

  displayedColumns = ['descricao', 'empresa', 'salario', 'acoes'];

  constructor(
    cargoService: CargoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cargos$ = cargoService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cargos.');
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
