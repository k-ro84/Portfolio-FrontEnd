import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDe } from 'src/app/models/acercaDe';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-newacerca',
  templateUrl: './newacerca.component.html',
  styleUrls: ['./newacerca.component.css']
})
export class NewacercaComponent implements OnInit {

nombre: string ='';
apellido: string ='';
direccion: string ='';
descripcion: string ='';
imgUser:string ='';

title: string = 'Nueva persona';
subtitle: string = 'Rellene el siguiente formulario';


  constructor(private acercaDes:AcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  
  onCreate(): void {

    const acercaDe = new AcercaDe(this.nombre, this.apellido, this.direccion,this.descripcion,this.imgUser);
    this.acercaDes.save(acercaDe).subscribe(
    data => {
      alert("persona añadida correctamente!!!!");
      this.router.navigate(['']);
    },err => {
      alert("Error al cargar persona añadida");
      this.router.navigate(['']);
    }
    )
  }

}
