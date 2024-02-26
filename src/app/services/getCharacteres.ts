import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class GetCharacteres {

    constructor(
        private http:HttpClient
    ){

    }
    /***
     * Metodo para consumir petición y obtener todos los registros
     */
    getAll(ts: number): Observable<any> {
        return this.http.get('/restapi/getAll/'+ts);
    }
    /**
     * Metodo para consumir character por id
     * @param param id
     * @returns
     */
    getById(param: number, ts: number): Observable<any> {
        return this.http.get('/restapi/getById/'+param+"/"+ts);
    }

    /**
     * Metodo para obtener todos los registros de la bitacora
     * @returns
     */
    getBitacora(): Observable<any> {
      return this.http.get('/restapi/tabla');
    }

    /**
     * Metodo para obtener todos los registros de la bitacora
     * @returns
     */
    postBitacora(ts: number): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.http.post('/restapi/tabla',  "{\"hora\":\""+ts+"\"}", { headers: headers });
    }
}
