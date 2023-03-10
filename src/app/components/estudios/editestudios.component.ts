import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/models/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-editestudios',
  templateUrl: './editestudios.component.html',
  styleUrls: ['./editestudios.component.css']
})
export class EditestudiosComponent implements OnInit {

Education :Estudios=null;

  constructor(private estudioS:EstudiosService,
     private activatedRouter: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioS.detail(id).subscribe(
     data => {
       this.Education= data;
     },err =>{
  
       alert("error al modificar estudio/nivel educativo");
       this.router.navigate(['']);
     }
    );

  }


  
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioS.update(id,this.Education).subscribe(
  data => {
   alert("estudio modificado correctamente!!!!");

    this.router.navigate(['']);
  },err => {
  alert("Error al modificar el estudio/nivel educativo indicado !!");
  this.router.navigate(['']);
  }
  )
}

}
