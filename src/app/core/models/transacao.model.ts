import { LimiteClienteModel } from "./limite-cliente.model";

export class TransacaoModel {
  constructor(
    public id: string,
    public status: string,
    public limiteClientePagador: LimiteClienteModel,
    public limiteClienteRecebedor: LimiteClienteModel,
    public valor: number,
    public dataTransacao: Date
  ) { }
}
