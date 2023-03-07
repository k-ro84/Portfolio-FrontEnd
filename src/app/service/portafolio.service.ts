import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  url:string="http://localhost:4200/api/";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("obtener datos del portafolio")
    return this.http.get<any>('json');
    //return this.http.get<any>(this.url+"persona");
  }
}
