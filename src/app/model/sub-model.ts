/**
 * Interface para definir modelo de imagen
 */
export interface Imagen {
  path: string;
  extension: string;
}
/**
 * Interface para definir el modelo de las listas recibidas de la api
 */
export interface List {
  available:number;
  returned:number;
  collectionURI: string;
  items: Summary[];
}
/**
 * Interface para definir el modelo de resumen recibidas de la api
 */
export interface Summary {
  resourceURI:string;
  name:string;
  type?: string;
}
/**
 * Interface para definir el modelo de las listas de url recibidas de la api
 */
export interface Url {
  type: string;
  url: string;
}
