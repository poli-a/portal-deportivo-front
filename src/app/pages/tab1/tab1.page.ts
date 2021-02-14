import { Component, OnInit, OnChanges} from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Noticia[] = [];
  
  constructor( private noticiasService: NoticiasService, private router: Router ) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  // Metodo para cargar noticias c/ infinitscroll //
  loadData( event ) {
    this.cargarNoticias( event );
  }

  
  cargarNoticias( event? ) {

    // Obteniendo noticias desde back//
    this.noticiasService.getNoticias()
      .subscribe( resp => {
        console.log(resp);
        
        this.noticias.push( ...resp.results );

        // Detiene infinit scroll cuando ya no hay elementos q mostrar //
        if ( resp.next === null ) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

      });
  }

  // Metodo p/ ver noticia seleccionada //
  verNoticia(event) {
    this.router.navigate(["/tabs/noticia", event.id], { queryParams: { url: 'tab1' }});
  }

}
