import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Categoria } from '../../interfaces/interfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild( IonSegment ) segment: IonSegment;

  categorias: Categoria[] = [];

  constructor( private noticiasService: NoticiasService ) {}

  ngOnInit() {

    // Obteniendo categorias del back //
    this.noticiasService.getCategorias()
      .subscribe( resp => {
        console.log('Categorias', resp);
        this.categorias.push( ...resp );

        // Estableciendo categoria p/ mostrar //
        const r = this.categorias.find(categoria => categoria.nombre === 'Futbol');
        this.segment.value = r.nombre;
        this.noticiasPorCategorias(r.id);
      });

  }

  noticiasPorCategorias(categoria_id) {
    this.noticiasService.getNoticiasPorCategorias(categoria_id)
      .subscribe( resp => {
        console.log(resp);
      })
  }
}
