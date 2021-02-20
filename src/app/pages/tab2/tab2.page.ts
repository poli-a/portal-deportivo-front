import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Categoria, Noticia } from '../../interfaces/interfaces';
import { IonSegment } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  @ViewChild( IonSegment ) segment: IonSegment;

  noticias: Noticia[] = [];
  page: number = 1;
  url: string = '/tabs/tab1'
  idCat: string = '';

  constructor( private noticiasService: NoticiasService, private router: Router, private activeRoute: ActivatedRoute ) {}

  ngOnInit() {
      this.noticiasPorCategorias();
  }

  noticiasPorCategorias(event?) {
    this.noticias = [];

      this.activeRoute.paramMap.subscribe(params => {
        if (params.has('id')) {
          this.noticiasService.getNoticiasPorCategorias(Number(params.get('id')), this.page)
            .subscribe( resp => {
              this.noticias.push(...resp.results);
              this.idCat = params.get('id');

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
      });    
  }

  loadData(event) {
    if (this.page > 1) {
      this.noticiasPorCategorias( event );
    } else {
      if ( event ) {
        event.target.disabled = true;
        event.target.complete();
        return;
      } 
    }
  }

  // Metodo p/ ver noticia seleccionada //
  verNoticia(event) {
    this.router.navigate(["/tabs/noticia", event.id], { queryParams: { url: 'tab2' + '/' + this.idCat }});
  }

}
