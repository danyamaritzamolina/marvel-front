import { Imagen, List, Url } from './sub-model';
/**
 * Modelo para los datos de Character
 */
export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Imagen;
    comics: List;
    stories: List;
    events: List;
    series: List;
}

