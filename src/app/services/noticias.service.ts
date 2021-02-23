import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Noticias, Categoria, Noticia } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.prod';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // Variables p/ paginacion desde el back //
  noticiasPage = 0;
  noticiasXcatPage = 0;
  categoriaSeleccionada = 0;

  constructor( private http: HttpClient ) { }

  // Obtiene todas las noticias //
  getNoticias(page) {
    this.noticiasPage++;
    return this.http.get<Noticias>(`${ apiUrl }/noticias/?page=${ page }`);
  }

  // Obtiene todas las categorias //
  getCategorias() {
    return this.http.get<Categoria[]>(`${ apiUrl }/categorias`)
  }

  // Obtiene noticias por id de categoria //
  getNoticiasPorCategorias(categoria_id: number, page: number) {
    
    return this.http.get<Noticias>(`${ apiUrl }/noticias/?categoria=${ categoria_id }&page=${ page }`);
  }

  // Obtiene noticia x id //
  getNoticia(id: number) {
    return this.http.get<Noticia>(`${ apiUrl }/noticias/${ id }`);
  }
}
