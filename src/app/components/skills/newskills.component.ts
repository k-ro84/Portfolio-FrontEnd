import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {

  tecnologia:string='';
  porcentaje:number;


  title: string = 'nueva habilidad/skill';
  subtitle: string = 'rellene el siguiente formulario';
  
  constructor(private skillsS:HysService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {

    const skills =new Skills(this.tecnologia,this.porcentaje);
    this.skillsS.save(skills).subscribe(
    data => {
      alert("habilidad añadida correctamente!!!!");
      this.router.navigate(['']);
    },err => {
      alert("Error al cargar habilidad añadida");
      this.router.navigate(['']);
    }
    )
  }


}
