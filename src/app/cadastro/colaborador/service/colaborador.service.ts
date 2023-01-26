import { delay } from 'rxjs';
import { Colaborador } from './../model/colaborador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  private readonly API = 'api/colaboradores';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Colaborador[]>(this.API);
  }
}
