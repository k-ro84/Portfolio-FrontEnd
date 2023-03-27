import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/service/historial.service';
import { PortafolioService } from 'src/app/service/portafolio.service';
import { TokenService } from 'src/app/service/token-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
 
  historial: Historial[]=[];
  isLogged = environment.isLogged;
  public historials:Historial;
  form: FormGroup;
  roles:string[];
  isAdmin=false;
  authority:string;

  constructor( private historiales: HistorialService,
    private tokenService:TokenService) { 
    this.form= new FormGroup({
     imagen: new FormControl(['', [Validators.required, Validators.minLength(1)]]),
    empresa: new FormControl([ '', [Validators.required, Validators.minLength(2)]]),
      puesto:  new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     periodo:  new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      actividades:  new FormControl(['', [Validators.required, Validators.minLength(2)]]),
   } )

  }

  ngOnInit(): void {
    this.cargarExperiencia();
   /**if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    */ 
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarExperiencia(): void {
    this.historiales.lista().subscribe(
      data => 
      { this.historial = data; },
      err => {
        console.log(err);
      } 
      );
  }

  delete(id?: number){
    if(id != undefined){
      this.historiales.delete(id).subscribe(
        data => {
         
          this.cargarExperiencia();
        }, err => {
         
         alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


  private mostrarExperiencia(){
    this.historiales.lista().subscribe(
    (data)=>{
      this.historial = data;
    },
    (err)=>{
      console.log(err);
    }
    )
  }


}