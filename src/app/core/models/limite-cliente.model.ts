export class LimiteClienteModel {
  constructor(
    public documento: string,
    public numeroAgencia: string,
    public numeroConta: string,
    public limiteTransacao: number
  ) { }
}
