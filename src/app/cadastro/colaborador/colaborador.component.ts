import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private colaboradorService: ColaboradorService) {
    this.colaboradores$ = colaboradorService.list();
  }
}
