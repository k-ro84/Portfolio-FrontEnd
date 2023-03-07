import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  URL='http://localhost:8080/experience/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Historial[]>{
    return this.httpClient.get<Historial[]>(this.URL + 'lista');
  }
  
  public detail(id:number): Observable<Historial>{
    return this.httpClient.get<Historial>(this.URL + `detail/${id}`);
  }
  
  public save(historial:Historial): Observable<any>{
    return this.httpClient.post<any>(this.URL +'create', historial);
  }
  
  public update(id:number, historial:Historial): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`,historial);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  
}
