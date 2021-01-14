import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Noticia } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getNoticias() {
    return this.http.get<Noticia[]>(`http://localhost:8000/noticias`);
  }
}
