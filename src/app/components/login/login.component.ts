import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title :string= 'Registro de usuario';

  
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(15)]],
      email:['', [Validators.required, Validators.email]],
   })
  }
  

 
  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
   
    event.preventDefault; 
 
    if (this.form.valid){
     
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      
      this.form.markAllAsTouched(); 
    }
   }

}
