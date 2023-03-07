import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/models/acercaDe';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-editacerca',
  templateUrl: './editacerca.component.html',
  styleUrls: ['./editacerca.component.css']
})
export class EditacercaComponent implements OnInit {

  acercaDe: AcercaDe= null;

  constructor(private acercaDes:AcercadeService,private activatedRouter: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.acercaDes.detail(id).subscribe(
      data => {
        this.acercaDe = data;
      },err =>{
        alert("error al modificar a la persona");
        this.router.navigate(['']);
      }
     )

  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaDes.update(id,this.acercaDe).subscribe(
  data => {
    alert("persona modificada correctamente!!!!");
    this.router.navigate(['']);
  },err => {
    alert("Error al modificar a la persona indicada !!");
    this.router.navigate(['']);
  }
  )
}
}
