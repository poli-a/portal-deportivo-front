import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticia-page',
  templateUrl: './noticia-page.page.html',
  styleUrls: ['./noticia-page.page.scss'],
})

export class NoticiaPagePage implements OnInit {
  
  noticia: Noticia;
  enFav: boolean;
  // url p/ back button //
  url: string;

  constructor(
    private noticiaService: NoticiasService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.noticiaService.getNoticia(Number(params.get('id')))
          .subscribe( resp => {
            this.noticia = resp;
          });
      }
    });

    if (this.activeRoute.queryParams) {
      this.activeRoute.queryParams.subscribe(params => {
        if (params.url == 'tab3') {
          this.enFav = true;
        } else {
          this.enFav = false;
        }
        this.url = '/tabs/' + params.url
      });
    }
    
  }  

}
