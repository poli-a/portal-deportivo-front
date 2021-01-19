import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Categoria, Noticia } from '../../interfaces/interfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  @ViewChild( IonSegment ) segment: IonSegment;

  categorias: Categoria[] = [];
  noticias: Noticia[] = [];
  page: number = 1;

  constructor( private noticiasService: NoticiasService ) {}

  ngOnInit() {

    // Obteniendo categorias del back //
    this.noticiasService.getCategorias()
      .subscribe( resp => {
        this.categorias.push( ...resp );

        // Estableciendo categoria p/ mostrar //
        this.segment.value = 'Futbol';
        this.noticiasPorCategorias('Futbol');
      });

  }

  noticiasPorCategorias(cat, event?) {
    this.noticias = [];

    // Obteniendo id de categoria seleccionada //
    const r = this.categorias.find(categoria => categoria.nombre === cat);

    // Obteniendo noticias de categoria seleccionada //
    this.noticiasService.getNoticiasPorCategorias(r.id, this.page)
      .subscribe( resp => {
        this.noticias.push(...resp.results);

        // Detiene infinit scroll cuando ya no hay elementos q mostrar //
        if ( resp.next === null ) {
          this.page = 1;
          if ( event ) {
            event.target.disabled = true;
            event.target.complete();
            return;
          }          
        } else {
          this.page++;
        }
      });
  }

  loadData(event) {
    this.noticiasPorCategorias( this.segment.value, event );
  }

}
