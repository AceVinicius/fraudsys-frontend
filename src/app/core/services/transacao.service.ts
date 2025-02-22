import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransacaoModel } from '../models/transacao.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class transacaoService {
  apiUrl = 'http://localhost:5214/api/transacao';

  constructor(private http: HttpClient) { }

  getTransacoes(): Observable<TransacaoModel[]> {
    return this.http.get<{ data: TransacaoModel[] }>(`${this.apiUrl}`).pipe(map(res => res.data));
  }

  getTransacaoById(id: string): Observable<TransacaoModel> {
    return this.http.get<TransacaoModel>(`${this.apiUrl}/${id}`);
  }

  addTransacao(documentoPagador: string, documentoRecebedor: string, valorTransacao: number): Observable<TransacaoModel> {
    return this.http.post<TransacaoModel>(`${this.apiUrl}`, { documentoPagador, documentoRecebedor, valorTransacao });
  }
}
