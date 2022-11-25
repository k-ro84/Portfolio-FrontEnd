import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './components/e404/e404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import{EstudiosComponent} from './components/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'**',component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
