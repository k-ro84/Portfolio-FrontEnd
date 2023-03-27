import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //URL='http://localhost:8080/proyects/';
    URL = environment.URL + 'proyects/';
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }
  // comillas hacia la izquierda en todos los servicios con id, por que se le pasa un valor por el path variable
  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }
  
  public save(proyectos:Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL +'create', proyectos);
  }
  
  public update(id:number, proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,proyectos);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  
}
