export interface Noticia {
    id: number;
    username: string;
    nombreCategoria: string;
    titulo: string;
    slug: string;
    nota: string;
    media_url: string;
    fecha_publicacion: string;
    status: string;
    usuario: number;
    categoria: number;
}

export interface Categoria {
    id: number;
    nombre: string;
    slug: string;
    created: string;
    updated: string;
    usuario: number;
  }