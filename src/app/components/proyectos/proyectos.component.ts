import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proyectos } from 'src/app/models/proyectos';
import { PortafolioService } from 'src/app/service/portafolio.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 
  proyectos: Proyectos[]=[];
  isLogged=environment.isLogged;
 
  form: FormGroup;
  roles:string[];
  isAdmin=false;

  constructor(private proyectosS:ProyectosService, 
    private tokenService:TokenService) { 
    this.form= new FormGroup ({
      descripcion: new FormControl([ '', [Validators.required, Validators.minLength(2)]]),
      tituloProyecto:  new FormControl(['', [Validators.required, Validators.minLength(2)]]),
      url: new FormControl(['', [Validators.required, Validators.minLength(10)]]),
     })

  }

  ngOnInit(): void {
    this.cargarProyecto();
 //colocar en el const el token service
 /**  if(this.tokenService.getToken()){
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


  cargarProyecto():void {
    this.proyectosS.lista().subscribe(
      data=> {this.proyectos=data;},
      err => {
        console.log(err);
      } 
      );
  }
  
  delete(id?:number):void{
    if (id != undefined) {
    this.proyectosS.delete(id).subscribe(
      data=> {
        
        this.cargarProyecto();
      },err => {
       
        alert("no es posible eliminar este proyecto!!");
      }
    )
   }
  }
  
  private mostrarproyectos(){
    this.proyectosS.lista().subscribe(
    (data)=>{
      this.proyectos = data;
    },
    (err)=>{
      console.log(err);
    }
    )
  }


}
