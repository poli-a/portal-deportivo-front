export interface Noticias {
    count: number;
    next?: any;
    previous: string;
    results: Noticia[];
}

export interface Noticia {
    id: number;
    username: string;
    nombreCategoria: string;
    titulo: string;
    slug: string;
    descripcion: string;
    nota: string;
    media_url: string;
    fecha_publicacion: string;
    status: string;
    usuario: number;
    categoria: number;
    img: string;
}

export interface Categoria {
    id: number;
    nombre: string;
    slug: string;
    created: string;
    updated: string;
    usuario: number;
}