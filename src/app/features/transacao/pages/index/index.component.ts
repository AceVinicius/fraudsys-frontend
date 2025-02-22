import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TransacaoModel } from '../../../../core/models/transacao.model';
import { transacaoService } from '../../../../core/services/transacao.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  rows: TransacaoModel[] = [];

  constructor(
    private transacaoService: transacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transacaoService.getTransacoes().subscribe(
      (data: TransacaoModel[]) => {
        this.rows = data;
      },
      (error) => {
        alert(error.error.detail);
        console.error(error);
      }
    );
  }

  onEfetuarTransferencia(): void {
    this.router.navigate(['/transacao/efetuar']);
  }

  onVisualizarLimiteCliente(): void {
    this.router.navigate(['/limite-cliente']);
  }
}
