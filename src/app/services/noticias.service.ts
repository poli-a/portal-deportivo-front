import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Noticias, Categoria } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Variables p/ paginacion desde el back //
  noticiasPage = 0;
  noticiasXcatPage = 0;

  constructor( private http: HttpClient ) { }

  // Obtiene todas las noticias //
  getNoticias() {
    this.noticiasPage++;
    return this.http.get<Noticias>(`${ apiUrl }/noticias/?page=${ this.noticiasPage }`);
  }

  // Obtiene todas las categorias //
  getCategorias() {
    return this.http.get<Categoria[]>(`${ apiUrl }/categorias`)
  }

  // Obtiene noticias por id de categoria //
  getNoticiasPorCategorias(categoria_id: number) {
    this.noticiasXcatPage++;
    return this.http.get<Noticias>(`${ apiUrl }/noticias/?categoria=${ categoria_id }&page=${ this.noticiasXcatPage }`);
  }
}
