import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Noticia } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favoritos : Noticia[] = [];

  constructor(private storage: Storage) {
    // Obteniendo favoritos //
    this.cargarFavoritos();
  }

  guardarFavorito(noticia: Noticia) {
    let existe;    
    // Validacion noticia ya existente en favoritos //
    existe = this.favoritos.find( n => n.id === noticia.id);

    if(!existe) {
      // Guarda noticia en 1er posicion de arreglo favoritos //
      this.favoritos.unshift(noticia);
      // Guardando en storage  //
      this.storage.set('Favoritos', this.favoritos);
    }
  }

  async cargarFavoritos() {
    const fav = await this.storage.get('Favoritos');
    // Validando si existen noticias guardadas en favoritos //
    if ( fav ) {
      this.favoritos = fav;
    }
  }

  borrarFavorito(noticia: Noticia) {
    this.favoritos = this.favoritos.filter( n => n.id !== noticia.id);
    this.storage.set('Favoritos', this.favoritos);
  }
}
