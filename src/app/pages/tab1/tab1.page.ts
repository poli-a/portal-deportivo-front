import { Component, OnInit, OnChanges} from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia, Categoria } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Noticia[] = [];
  categorias: Categoria[] = [];
  page: number = 1;
  
  constructor( private noticiasService: NoticiasService, private router: Router, private menu: MenuController ) {}

  ngOnInit() {
    this.cargarNoticias();
    this.obtenerCategorias();
  }

  // Metodo para cargar noticias c/ infinitscroll //
  loadData( event ) {
    if (this.page > 1) {
      this.cargarNoticias( event );
    } else {
      event.target.disabled = true;
      event.target.complete();
      return;
    }
  }

  
  cargarNoticias( event? ) {

    // Obteniendo noticias desde back//
    this.noticiasService.getNoticias(this.page)
      .subscribe( resp => {
        console.log(resp);
        
        this.noticias.push( ...resp.results );

        // Detiene infinit scroll cuando ya no hay elementos q mostrar //
        if ( resp.next === null ) {
          if ( event ) {
            event.target.disabled = true;
            event.target.complete();
            return;
          } 
        } else {
          this.page++;
          if ( event ) {
            event.target.complete();
          }          
        }

      });
  }

  obtenerCategorias() {
    this.noticiasService.getCategorias()
      .subscribe( resp => {
        this.categorias.push( ...resp );
      });
  }

  // Metodo p/ ver noticia seleccionada //
  verNoticia(event) {
    this.router.navigate(["/tabs/noticia", event.id], { queryParams: { url: 'tab1' }});
  }

  // Funcionalidad menu 'categorias'//
  openMenu() {
    this.menu.enable(true, 'cat');
    this.menu.open('cat');
  }

  aTab2(idCat: Number) {
    this.router.navigate(["/tabs/tab2", idCat]);
    this.menu.close('cat');
  }

}
