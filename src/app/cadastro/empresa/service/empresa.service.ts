import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs';

import { Empresa } from './../model/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private readonly API = 'api/empresas';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Empresa[]>(this.API).pipe(first());
  }
}
