import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Noticia;

  constructor() { }

  ngOnInit() {}

  

}
