import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/limite-cliente',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./features/limite-cliente/limite-cliente.module').then(m => m.LimiteClienteModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/transacao/transacao.module').then(m => m.TransacaoModule)
  },
  {
    path: '**',
    redirectTo: '/limite-cliente',
    pathMatch: 'full'
  }
];
