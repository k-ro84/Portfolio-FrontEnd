import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent implements OnInit {
  title :string= 'Registro de usuario';
  @Input()text: string="Inicio de sesión";
  form: FormGroup;
  @Input() collapsed: boolean = false;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private routes:Router){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group(
      {
      email:['', [Validators.required, Validators.email,Validators.minLength(5),Validators.maxLength(20)]],
      password:['',[Validators.required, Validators.minLength(8)]],


      }
    )
  }
  

  get Email(){
    return this.form.get("email");
   }
 
  get Password(){
    return this.form.get("password");
  }
 

  get EmailValid() {
    return false
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
      this.routes.navigate(['/home']);
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

  logout() {
    this.routes.navigate(['/home']);
    this.authService.logout();
  }


   ngOnInit(): void {
  }


}
