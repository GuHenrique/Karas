import { CargoService } from './service/cargo.service';
import { Cargo } from './model/cargo';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
})
export class CargoComponent {
  cargos$: Observable<Cargo[]>;

  displayedColumns = ['descricao', 'empresa', 'salario'];

  constructor(cargoService: CargoService) {
    this.cargos$ = cargoService.list();
  }
}
