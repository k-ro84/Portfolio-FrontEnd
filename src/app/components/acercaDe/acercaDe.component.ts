
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AcercaDe } from 'src/app/models/acercaDe';
import { AcercadeService } from 'src/app/service/acercade.service';
import { PortafolioService } from 'src/app/service/portafolio.service';
import { TokenService } from 'src/app/service/token-service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-acercaDe',
  templateUrl: './acercaDe.component.html',
  styleUrls: ['./acercaDe.component.css']
})
export class AcercaDeComponent implements OnInit {
  title:string='   Me presento :  ' ;
  texto :string='';
  
  acercaDe: AcercaDe[]=[];

  isLogged = environment.isLogged;

 form: FormGroup;
 roles:string[];
 isAdmin=false;
  constructor(private acercaDes:AcercadeService, 
    private tokenService:TokenService) { 
     this.form= new FormGroup({
       nombre: new FormControl([ '', [Validators.required, Validators.minLength(2)]]),
       apellido: new FormControl([ '', [Validators.required, Validators.minLength(2)]]),
       direccion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
       descripcion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
       imgUser: new FormControl(['', [Validators.required,Validators.max(250)]]),
    })
  }
  
ngOnInit(): void {
  this.cargarPersona();
  //colocar en el const el token service
  /**if(this.tokenService.getToken()){
  this.isLogged =true;
    }else{
     this.isLogged =false;
  }
   */
  this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
}

cargarPersona():void {
  this.acercaDes.lista().subscribe(
    data=> {this.acercaDe=data;},
    err => {
      console.log(err);
    } 
    );
  
}

delete(id?:number):void {
  if (id != undefined) {
  this.acercaDes.delete(id).subscribe(
    data=> {
     
      this.cargarPersona();
    },err => {
      
      alert("no es posible eliminar esta persona!!");
    }
  )
 }
}

private mostrarAcercaD(){
  this.acercaDes.lista().subscribe(
  (data)=>{
    this.acercaDe = data;
  },
  (err)=>{
    console.log(err);
  }
  )
}

}
