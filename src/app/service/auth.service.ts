import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import{ BehaviorSubject,Observable} from 'rxjs';
import { map } from 'rxjs/operators' ;
import { Router } from '@angular/router';
import { JwtDto } from '../models/jwt-dto';
import { Login } from '../models/login';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  api = 'http://localhost:4200/';
  url='http://localhost:4200/api/auth/';
  //currentUserSubject:BehaviorSubject<any>;
  

  constructor(private httpClient: HttpClient,private router:Router) { }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.url}nuevo`, nuevoUsuario);
  }

  public login(login: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${this.url}login`, login)
  }

  public isLogged(): boolean {
    return sessionStorage.getItem('user') !== null;
  }


   


}
