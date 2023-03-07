import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { PortafolioService } from 'src/app/service/portafolio.service';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/service/token-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:Estudios[]=[];
  
  form: FormGroup;
  isLogged = environment.isLogged;
  public estudio: Estudios;
  roles:string[];
  authority:string;
  isAdmin = false;

  constructor( private estudioS:EstudiosService, private tokenService:TokenService, private toastr: ToastrService) { 
     this.form= new FormGroup({
     imagEstud: new FormControl(['', [Validators.required]]),
     institucion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     periodo: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
    detalles: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     estado: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
    tituloEduc: new FormControl(['', [Validators.required, Validators.minLength(2)]])
    })

  }
  
  ngOnInit(): void {
    this.cargarEstudio();
/**  colocar en el const el token service
  if(this.tokenService.getToken()){
   this.isLogged =true;
  }else{
    this.isLogged =false;  }
  }
*/
this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  
cargarEstudio():void {
  this.estudioS.lista().subscribe(
    data=> {
      this.estudios=data;
    }, err => {
      console.log(err);
    }

  );
}
//ya probe sin void y no dio rsultado
delete(id?:number) :void{
  if (id != undefined) {
  this.estudioS.delete(id).subscribe(
    data=> {
      this.cargarEstudio();
    },err => {
      alert("no es posible eliminar este estudio!!");
    }
  )
 }
}

private mostrarEducacion(){
  this.estudioS.lista().subscribe(
  (data)=>{
    this.estudios = data;
  },
  (err)=>{
    console.log(err);
  }
  )
}

}
