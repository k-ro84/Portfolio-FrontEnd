import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './components/e404/e404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EstudiosComponent} from './components/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GuardGuard } from './service/guard.guard';
import { NewacercaComponent } from './components/acercaDe/newacerca.component';
import { EditacercaComponent } from './components/acercaDe/editacerca.component';
import { AcercaDeComponent } from './components/acercaDe/acercaDe.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditestudiosComponent } from './components/estudios/editestudios.component';
import { NewhistorialComponent } from './components/historial/newhistorial.component';
import { EdithistorialComponent } from './components/historial/edithistorial.component';
import { NewskillsComponent } from './components/skills/newskills.component';
import { EditskillsComponent } from './components/skills/editskills.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'acercaDe', component:AcercaDeComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'historial',component:HistorialComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'skills', component:SkillsComponent},
  
  {path:'newacerca',component:NewacercaComponent},
  {path:'editacerca/:id',component:EditacercaComponent},
  {path:'newestudios', component:NewestudiosComponent},
  {path:'editestudios/:id',component:EditestudiosComponent},
  {path:'newhistorial',component:NewhistorialComponent},
  {path:'edithistorial/:id',component:EdithistorialComponent},
  {path:'newskills',component:NewskillsComponent},
  {path:'editskills/:id',component:EditskillsComponent},
  {path:'newproyecto',component:NewproyectoComponent},
  {path:'editproyectos/:id',component:EditproyectosComponent},

  /*{path:'',redirectTo:'home',pathMatch:'full'},*/
  
  {path:'**',component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
