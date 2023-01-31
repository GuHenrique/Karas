import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

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

  save(data: Empresa) {
    return this.httpClient.post<Empresa>(this.API, data);
  }
}
