import { delay } from 'rxjs';
import { Cargo } from './../model/cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  private readonly API = '/api/cargos';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cargo[]>(this.API);
  }
  save(data: Cargo) {
    return this.httpClient.post<Cargo>(this.API, data);
  }
}
