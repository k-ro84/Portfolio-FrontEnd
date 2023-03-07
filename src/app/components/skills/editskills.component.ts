import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skills } from 'src/app/models/skills';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {

  Skills :Skills =null;

  constructor(private  skillsS: HysService,
    private activatedRouter: ActivatedRoute,
    private router:Router,
    private toastr: ToastrService) { }

  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(
     data => {
       this.Skills = data;
     },err =>{
       //alert("error al modificar esta habilidad");
       this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
       this.router.navigate(['']);
     }
    )

 }

 onUpdate():void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.skillsS.update(id,this.Skills).subscribe(
data => {
 // alert("habilidad modificada correctamente!!!!");
 this.toastr.success('Producto Actualizado', 'OK', {
  timeOut: 3000, positionClass: 'toast-top-center'
});
  this.router.navigate(['']);
},err => {
 // alert("Error al modificar la habilidad indicada !!");
 // alert("Error al modificar el proyecto indicado !!");

  this.router.navigate(['']);
}
)
}

}
