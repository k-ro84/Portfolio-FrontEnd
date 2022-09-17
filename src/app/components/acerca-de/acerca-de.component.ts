
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  title:string=' Hola! me presento:';
  
  edicion:string='';
  borrar:string='';
  texto :string='';

dato= new FormControl('');
 



  constructor() { 
    
  }
  
 

ngOnInit(): void {
    
}



}

