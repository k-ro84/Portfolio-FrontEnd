
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  title:string=' Acerca de mi:';
  
  edicion:string='';
  borrar:string='';
  text:string="";

dato= new FormControl('');
 



  constructor() { 
    
  }
  
 

ngOnInit(): void {
    
}



}

