export interface infoPagina {
    titulo?:      string;
    abrebiatura?: string;
    email?:       string;
    github?:      string;
    facebook?:    string;
    twitter?:     string;
}

export interface proyectos {
    nombre:      string;
    tipo:        string;
    descripcion: string;
    repositorio: string;
    url:         string;
    front:       string;
    back:        string;
    db:          string;
    img:         string;
    img2:        string;
    img3:        string;
}

export interface person {
    cel:         string;
    descripcion: string;
    edad:        string;
    email:       string;
    job:         string;
    nombre:      string;
    ubicacion:   string;
    img:         string;
}

export interface plan {
    nombre:      String;
    descripcion: String;
    contenido:   string[];
    costomes:    number;
    costoanio:   number;
}
