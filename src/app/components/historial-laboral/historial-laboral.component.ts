import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-laboral',
  templateUrl: './historial-laboral.component.html',
  styleUrls: ['./historial-laboral.component.css']
})
export class HistorialLaboralComponent implements OnInit {
  edicion:string='';
  borrar:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
