export interface Imagen {
  path: string;
  extension: string;
}

export interface List {
  available:number;
  returned:number;
  collectionURI: string;
  items: Summary[];
}

export interface Summary {
  resourceURI:string;
  name:string;
  type?: string;
}

export interface Url {
  type: string;
  url: string;
}
