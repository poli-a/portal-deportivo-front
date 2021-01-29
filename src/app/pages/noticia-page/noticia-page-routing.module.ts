import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaPagePage } from './noticia-page.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaPagePageRoutingModule {}
