import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

title: string = 'new proyect';
subtitle: string = 'rellene el siguiente formulario';

tituloProyecto:string = '';
descripcion:string = '';
url:string = '';

  constructor(private proyectosS:ProyectosService,private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {

    const proyectos =new Proyectos(this.tituloProyecto,this.descripcion,this.url);
    this.proyectosS.save(proyectos).subscribe(
    data => {
      alert("proyecto añadido correctamente!!!!");
      this.router.navigate(['']);
    },err => {
      alert("Error al cargar el proyecto");
      this.router.navigate(['']);
    }
    )
  }


}
