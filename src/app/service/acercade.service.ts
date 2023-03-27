import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../models/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

//URL='http://localhost:8080/acercaDe/';
URL= environment.URL + 'acercaDe/';
  constructor(private httpClient:HttpClient) { }
  
//este acercade lo trae el models.en base a lo elaborado en el back(en este caso lo realizado en netbeans)
public lista(): Observable<AcercaDe[]>{
  return this.httpClient.get<AcercaDe[]>(this.URL + 'lista');
}

public detail(id:number): Observable<AcercaDe>{
  return this.httpClient.get<AcercaDe>(this.URL + `detail/${id}`);
}

public save(acercaDe:AcercaDe): Observable<any>{
  return this.httpClient.post<any>(this.URL +'create', acercaDe);
}

public update(id:number, acercaDe:AcercaDe): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, acercaDe);
}

public delete(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}

}
