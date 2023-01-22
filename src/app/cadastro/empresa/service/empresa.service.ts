import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Empresa } from './../model/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private readonly API = '/aassets/empresas.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Empresa[]>(this.API).pipe(
      first(),
      tap((empresas) => console.log(empresas))
    );
  }
}
