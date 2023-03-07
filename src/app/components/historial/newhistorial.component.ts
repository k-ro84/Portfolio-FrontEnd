import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-newhistorial',
  templateUrl: './newhistorial.component.html',
  styleUrls: ['./newhistorial.component.css']
})
export class NewhistorialComponent implements OnInit {

  empresa:string='';
  puesto:string='';
  periodo:string='';
  actividades:string='';

  
title: string = 'nuevo historial de trabajo/referencia';
subtitle: string = 'rellene el siguiente formulario';


  constructor(private historiales:HistorialService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const historial =new Historial(this.empresa,this.puesto,this.periodo,this.actividades);
    this.historiales.save(historial).subscribe(
    data => {
      alert("historial añadido correctamente!!!!");
      this.router.navigate(['']);
    },err => {
      alert("Error al cargar el nuevo historial");
      this.router.navigate(['']);
    }
    )
  }

}
