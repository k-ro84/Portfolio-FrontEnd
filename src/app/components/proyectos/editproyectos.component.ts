import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {

  Proyects :Proyectos=null;

  constructor(private proyectoS: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
     data => {
       this.Proyects = data;
     },err =>{
       alert("error al modificar este proyecto");
       this.router.navigate(['']);
     }
    )
  }

  
 onUpdate():void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoS.update(id,this.Proyects).subscribe(
data => {
 alert("proyecto modificado correctamente!!!!");
  this.router.navigate(['']);
},err => {
 alert("Error al modificar el proyecto indicado !!");
  this.router.navigate(['']);
}
)
}


}
