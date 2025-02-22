import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimiteClienteService } from '../../../../core/services/limite-cliente.service';
import { LimiteClienteModel } from '../../../../core/models/limite-cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  rows: LimiteClienteModel[] = [];

  constructor(
    private limiteClienteService: LimiteClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.limiteClienteService.getLimitesCliente().subscribe(
      (data: LimiteClienteModel[]) => {
        this.rows = data;
      },
      (error) => {
        alert(error.error.detail);
        console.error(error);
      }
    );
  }

  onCriarNovoLimite(): void {
    this.router.navigate(['/limite-cliente/create']);
  }

  onVisualizarTransacoes(): void {
    this.router.navigate(['/transacao']);
  }

  onUpdate(index: number): void {
    const documento = this.rows[index].documento;
    this.router.navigate(['/limite-cliente/edit', documento]);
  }

  onDelete(index: number): void {
    const documento = this.rows[index].documento;
    this.limiteClienteService.deleteLimiteCliente(documento).subscribe(
      (response) => {
        this.rows.splice(index, 1);
        alert('Limite deleted successfully!');
      },
      (error) => {
        alert(error.error.detail);
        console.error(error);
      }
    );
  }
}
