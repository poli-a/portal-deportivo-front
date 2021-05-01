import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { ActionSheetMoreComponent } from './action-sheet-more/action-sheet-more.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    ActionSheetMoreComponent
  ],
  exports: [
    NoticiasComponent,
    NoticiaComponent,
    ActionSheetMoreComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
