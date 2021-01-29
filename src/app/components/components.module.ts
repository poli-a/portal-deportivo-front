import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from './back-button/back-button.component';



@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    BackButtonComponent
  ],
  exports: [
    NoticiasComponent,
    NoticiaComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
