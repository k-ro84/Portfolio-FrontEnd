import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router) { }

  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(
     data => {
       this.Skills = data;
     },err =>{
       alert("error al modificar esta habilidad");
       this.router.navigate(['']);
     }
    )

 }

 onUpdate():void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.skillsS.update(id,this.Skills).subscribe(
data => {
 alert("habilidad modificada correctamente!!!!");
  this.router.navigate(['']);
},err => {
  alert("Error al modificar la habilidad indicada !!");

  this.router.navigate(['']);
}
)
}

}
