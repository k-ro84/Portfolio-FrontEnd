import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token-service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent implements OnInit {
  title :string= 'Registro de usuario';
  @Input()text: string="Inicio de sesión";

  @Input() collapsed: boolean = false;
  email!:string;
  nombreUsuario!: string;
  password!: string;
  isLogged = environment.isLogged;
  isLoginFail = false;
  loginUsuario!: Login;
  roles: string[] = [];
  errMsj!: string;
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private tokenService: TokenService,
    private formBuilder: FormBuilder, private authService:AuthService, private routes:Router,private toastr: ToastrService){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group(
      {
     email:['', [Validators.required, Validators.email,Validators.minLength(5),Validators.maxLength(20)]],
     password:['',[Validators.required, Validators.minLength(8)]],     
     }
    )
  }

  
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.checkTokenLocal();
    }

  }
  
  checkTokenLocal(){
    if(localStorage.getItem('token')){
      this.routes.navigate(['/home'])
    }
  }


  onEnviar(event: Event):void{
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
    this.loginUsuario = new Login(this.email, this.password); 
    this.authService.login(this.loginUsuario).subscribe({next: data => {
      this.isLogged = true;
      this.tokenService.setToken(data.token);
      this.tokenService.setEmail(data.email);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.toastr.success('Bienvenido ' +data.email, 'Has Iniciado Sesion', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
      this.routes.navigate(['/'])
    }, 
    error: err => {
      this.isLogged = false;
      this.errMsj = err.error.mensaje;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-center',
      })
      // console.log(this.errMsj);
    }})
   // if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
    // alert("Todo salio bien ¡Enviar formulario!")
      this.routes.navigate(['/home']);
   // }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    //  this.form.markAllAsTouched(); 
  //  }
 
  }

  volver(){
    this.routes.navigate(['/home'])
  }




}
