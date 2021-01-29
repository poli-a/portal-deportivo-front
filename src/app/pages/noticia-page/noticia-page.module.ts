import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaPagePageRoutingModule } from './noticia-page-routing.module';

import { NoticiaPagePage } from './noticia-page.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaPagePageRoutingModule
  ],
  declarations: [NoticiaPagePage]
})
export class NoticiaPagePageModule {}
