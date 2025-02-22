import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LimiteClienteService } from '../../../../core/services/limite-cliente.service';
import { LimiteClienteModel } from '../../../../core/models/limite-cliente.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-limite-cliente-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  clienteId!: string;
  clienteData!: LimiteClienteModel;

  constructor(
    private fb: FormBuilder, private limiteClienteService: LimiteClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      documento: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]+$')]],
      numeroAgencia: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]+$')]],
      numeroConta: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]{4}-[0-9]{1}$')]],
      limiteTransacao: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]] // This field is editable
    });

    this.route.paramMap.subscribe(params => {
      this.clienteId = params.get('id')!;
      this.loadClienteData();
    });
  }

  loadClienteData(): void {
    this.limiteClienteService.getLimiteClienteById(this.clienteId).subscribe((data: LimiteClienteModel) => {
      this.clienteData = data;
      this.form.patchValue({
        documento: this.clienteData.documento,
        numeroAgencia: this.clienteData.numeroAgencia,
        numeroConta: this.clienteData.numeroConta,
        limiteTransacao: this.clienteData.limiteTransacao
      });
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedData = this.form.value;
      this.limiteClienteService.updateLimiteCliente(this.clienteId, updatedData.limiteTransacao).subscribe(
        (response) => {
          alert('Limite Cliente updated successfully!');
          this.router.navigate(['/limite-cliente']);
        },
        (error) => {
          alert(error.error.detail);
          console.error(error);
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/limite-cliente']);
  }
}
