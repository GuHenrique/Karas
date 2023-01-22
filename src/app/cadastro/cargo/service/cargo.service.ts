import { delay } from 'rxjs';
import { Cargo } from './../model/cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  private readonly API = '/assets/cargos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cargo[]>(this.API);
  }
}
