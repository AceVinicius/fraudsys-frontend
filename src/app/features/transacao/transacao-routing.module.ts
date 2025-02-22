import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  {
    path: RouteUrlEnum.TRANSACAO,
    component: IndexComponent,
    title: `Fraudsys - ${RouteNameEnum.TRANSACAO}`,
  },
  {
    path: RouteUrlEnum.TRANSACAO_EFETUAR,
    component: CreateComponent,
    title: `Fraudsys - ${RouteNameEnum.TRANSACAO_EFETUAR}`,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransacaoRoutingModule { }
