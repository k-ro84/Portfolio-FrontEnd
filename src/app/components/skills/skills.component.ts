import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CircleProgressComponent, NgCircleProgressModule } from 'ng-circle-progress';
import { ToastrService } from 'ngx-toastr';
import { Skills } from 'src/app/models/skills';
import { HysService } from 'src/app/service/hys.service';
import { PortafolioService } from 'src/app/service/portafolio.service';
import { TokenService } from 'src/app/service/token-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[]=[];
  isLogged=environment.isLogged;

  form: FormGroup ;
  roles:string[];
  isAdmin=false;


  constructor(private skillsS: HysService, 
    private formBuilder:FormBuilder,
    private tokenService:TokenService,
    private toastr: ToastrService) {  
    
     this.form= this.formBuilder.group  ({
      imagen:(['', [Validators.required, Validators.minLength(1)]]),
      tecnologia:(['', [Validators.required, Validators.minLength(1)]]),
      porcentaje: (['', [Validators.required, Validators.min(0),Validators.max(100)]]),
     })

    }

  ngOnInit(): void {
    this.cargarSkills();
     //colocar en el const el token service
  /**if(this.tokenService.getToken()){
    this.isLogged =true;
  }else{
     this.isLogged =false;
   }
*/
this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  } 
  
 
  cargarSkills():void {
    this.skillsS.lista().subscribe(
      data=> {
        this.skills=data;},
        err => {
          console.log(err);
        } 
        );
      
  }
  
  delete(id?:number):void {
    if (id != undefined) {
    this.skillsS.delete(id).subscribe(
      data=> {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarSkills();
      },err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        alert("no es posible eliminar esta habilidad/skills!!");
      }
    )
   }
  }
  
  private mostrarskill(){
    this.skillsS.lista().subscribe(
    (data)=>{
      this.skills = data;
    },
    (err)=>{
      console.log(err);
    }
    )
  }  
     
}
