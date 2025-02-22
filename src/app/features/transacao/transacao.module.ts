import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TransacaoRoutingModule } from './transacao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransacaoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransacaoModule { }
