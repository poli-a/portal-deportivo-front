import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Noticia[] = [];

  constructor( private noticiasService: NoticiasService ) {}

  ngOnInit() {
    this.noticiasService.getNoticias()
      .subscribe( resp => {
        console.log('Noticias', resp);
        this.noticias.push( ...resp )      
      });
  }

}
