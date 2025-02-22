import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { transacaoService } from '../../../../core/services/transacao.service';

@Component({
  standalone: true,
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transacaoServcie: transacaoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      documentoPagador: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      documentoRecebedor: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      valorTransferencia: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let pagador = this.form.value.documentoPagador;
      let recebedor = this.form.value.documentoRecebedor;
      let valor = this.form.value.valorTransferencia;

      this.transacaoServcie.addTransacao(pagador, recebedor, valor).subscribe({
        next: (response) => {
          console.log(response);
          alert('Transacao foi efetuada! Status: ' + response.status == "1" ? "Pendente" : response.status == "2" ? "Aprovada" : "Rejeitada");
          this.router.navigate(['/transacao']);
        },
        error: (error) => {
          alert(error.error.detail);
          console.error(error);
        }
      });
    } else {
      alert('Form is invalid');
    }
  }

  goBack(): void {
    this.router.navigate(['/transacao']);
  }
}
