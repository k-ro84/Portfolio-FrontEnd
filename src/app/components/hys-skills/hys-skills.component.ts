import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HysSkillsComponent implements OnInit {
  edicion:string='';
  borrar:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
