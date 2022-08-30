import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title :string= 'Registro de usuario';
  @Input()text: string="Inicio de sesión";



  // Inyectar en el constructor el formBuilder
  constructor(){ 
   
  }
  
  ngOnInit(): void {
  }

 
}
