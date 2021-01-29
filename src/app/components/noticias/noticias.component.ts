import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Noticia[] = [];
  @Output() noticiaSeleccionada = new EventEmitter<Noticia>();
  actionSheet: boolean = false;

  constructor() { }

  ngOnInit() { }

  onClick(noticia: Noticia) {
    this.noticiaSeleccionada.emit(noticia);
  }
}
