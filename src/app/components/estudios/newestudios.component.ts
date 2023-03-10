import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-newestudios',
  templateUrl: './newestudios.component.html',
  styleUrls: ['./newestudios.component.css']
})
export class NewestudiosComponent implements OnInit {

  institucion:string= '';
  periodo:string ='';
  detalles:string ='';
  estado:string ='';
  tituloEduc:string ='';
  imagEstud:string ='';
  
title: string = 'nueva estudio/carrera';
subtitle: string = 'rellene el siguiente formulario';


  constructor(private estudioS:EstudiosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const estudios =new Estudios(this.institucion, this.periodo, this.detalles,this.estado,this.tituloEduc, this.imagEstud);
    this.estudioS.save(estudios).subscribe(
    data => {
      alert("estudio/carrera añadido/a correctamente!!!!");
     
      this.router.navigate(['']);
    },err => {
      alert("Error al cargar estudio/carrera añadido/a");
  
     this.router.navigate(['']);
    }
    )
  }



}
