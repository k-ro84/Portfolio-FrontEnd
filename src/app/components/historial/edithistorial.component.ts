import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Historial } from 'src/app/models/historial';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-edithistorial',
  templateUrl: './edithistorial.component.html',
  styleUrls: ['./edithistorial.component.css']
})
export class EdithistorialComponent implements OnInit {

Experience: Historial=null;

  constructor( private historiales:HistorialService,
    private activatedRouter: ActivatedRoute,
    private router:Router,
    private toastr: ToastrService ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.historiales.detail(id).subscribe(
     data => {
       this.Experience = data;
     },err =>{
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
     //  alert("error al modificar su historial laboral");
       this.router.navigate(['']);
     }
    )
  }


  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.historiales.update(id,this.Experience).subscribe(
  data => {
    //alert("trabajo modificado correctamente!!!!");
    this.toastr.success('Producto Actualizado', 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });
    this.router.navigate(['']);
  },err => {
   // alert("Error al modificar el trabajo/ocupacion indicado !!");
   this.toastr.error(err.error.mensaje, 'Fail', {
    timeOut: 3000,  positionClass: 'toast-top-center',
  });
    this.router.navigate(['']);
  }
  )
}


}
