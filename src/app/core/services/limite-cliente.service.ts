import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LimiteClienteModel } from '../models/limite-cliente.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LimiteClienteService {
  apiUrl = 'http://localhost:5214/api/limiteCliente';

  constructor(private http: HttpClient) { }

  getLimitesCliente(): Observable<LimiteClienteModel[]> {
    return this.http.get<{ data: LimiteClienteModel[] }>(`${this.apiUrl}`).pipe(map(res => res.data));
  }

  getLimiteClienteById(id: string): Observable<LimiteClienteModel> {
    return this.http.get<LimiteClienteModel>(`${this.apiUrl}/${id}`);
  }

  addLimiteCliente(limiteCliente: LimiteClienteModel): Observable<LimiteClienteModel> {
    return this.http.post<LimiteClienteModel>(`${this.apiUrl}`, limiteCliente);
  }

  updateLimiteCliente(id: string, novoLimite: number): Observable<LimiteClienteModel> {
    return this.http.patch<LimiteClienteModel>(`${this.apiUrl}/${id}`, { novoLimite });
  }

  deleteLimiteCliente(id: string): Observable<LimiteClienteModel> {
    return this.http.delete<LimiteClienteModel>(`${this.apiUrl}/${id}`);
  }
}
