import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
/**
 * Servicio para definir los metodos de peticiones hacia el backend
 */

export class GetCharacteres {

    constructor(
        private http:HttpClient
    ){


    }
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ZGFueWE6MTIzNA=='
    });
    /***
     * Metodo para consumir petición y obtener todos los registros
     */
    getAll(ts: number): Observable<any> {

        return this.http.get('/restapi/getAll/'+ts, { headers: this.headers });
    }
    /**
     * Metodo para consumir character por id
     * @param param id
     * @returns
     */
    getById(param: number, ts: number): Observable<any> {
        return this.http.get('/restapi/getById/'+param+"/"+ts, { headers: this.headers });
    }

    /**
     * Metodo para obtener todos los registros de la bitacora
     * @returns
     */
    getBitacora(): Observable<any> {
      return this.http.get('/restapi/tabla', { headers: this.headers });
    }

    /**
     * Metodo para obtener todos los registros de la bitacora
     * @returns
     */
    postBitacora(ts: number): Observable<any> {

      return this.http.post('/restapi/tabla',  "{\"hora\":\""+ts+"\"}", { headers: this.headers });
    }
}
