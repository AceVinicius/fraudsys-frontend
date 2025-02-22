import { Component, OnInit } from '@angular/core';
import { LimiteClienteService } from '../../../../core/services/limite-cliente.service';
import { LimiteClienteModel } from '../../../../core/models/limite-cliente.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
    private limiteClienteService: LimiteClienteService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Initialize the form with validation
    this.form = this.fb.group({
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      numeroAgencia: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      numeroConta: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{1}$')]],
      limiteTransacao: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const limiteCliente = new LimiteClienteModel(
        this.form.value.documento,
        this.form.value.numeroAgencia,
        this.form.value.numeroConta,
        parseFloat(this.form.value.limiteTransacao)
      );

      this.limiteClienteService.addLimiteCliente(limiteCliente).subscribe({
        next: (response) => {
          alert('Limite created successfully!');
          this.router.navigate(['/limite-cliente']);
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
    this.router.navigate(['/limite-cliente']);
  }
}
