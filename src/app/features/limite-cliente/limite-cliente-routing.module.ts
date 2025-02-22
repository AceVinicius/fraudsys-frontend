import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: RouteUrlEnum.LIMITE_CLIENTE,
    component: IndexComponent,
    title: `Fraudsys - ${RouteNameEnum.LIMITE_CLIENTE}`,
  },
  {
    path: RouteUrlEnum.LIMITE_CLIENTE_CREATE,
    component: CreateComponent,
    title: `Fraudsys - ${RouteNameEnum.LIMITE_CLIENTE_CREATE}`,
  },
  {
    path: RouteUrlEnum.LIMITE_CLIENTE_EDIT,
    component: EditComponent,
    title: `Fraudsys - ${RouteNameEnum.LIMITE_CLIENTE_EDIT}`,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimiteClienteRoutingModule { }
