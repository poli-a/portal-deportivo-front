import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Noticia, Categoria } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  // Obtiene todas las noticias //
  getNoticias() {
    return this.http.get<Noticia[]>(`${ apiUrl }/noticias`);
  }

  // Obtiene todas las categorias //
  getCategorias() {
    return this.http.get<Categoria[]>(`${ apiUrl }/categorias`)
  }

  // Obtiene noticias por id de categoria //
  getNoticiasPorCategorias(categoria_id: number) {
    return this.http.get<Noticia[]>(`${ apiUrl }/noticias/?categoria=${ categoria_id }`);
  }
}
