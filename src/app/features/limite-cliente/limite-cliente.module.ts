import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LimiteClienteRoutingModule } from './limite-cliente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LimiteClienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class LimiteClienteModule { }
