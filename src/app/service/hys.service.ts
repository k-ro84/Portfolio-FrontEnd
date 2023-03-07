import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  URL='http://localhost:8080/skills/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL+ 'lista');
  }

  public detail(id:number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
  }
  
  public save(skills:Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL +'create', skills);
  }
  
  public update(id:number, skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  
}
