import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcercaDeComponent } from './components/acercaDe/acercaDe.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './components/home/home.component';
import { PortafolioService } from './service/portafolio.service';
import {HttpClientModule} from '@angular/common/http';

import { NewacercaComponent } from'./components/acercaDe/newacerca.component';
import { EditacercaComponent } from './components/acercaDe/editacerca.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditestudiosComponent } from './components/estudios/editestudios.component';
import { NewhistorialComponent } from './components/historial/newhistorial.component';
import { EdithistorialComponent } from './components/historial/edithistorial.component';
import { NewskillsComponent } from './components/skills/newskills.component';
import { EditskillsComponent } from './components/skills/editskills.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';


import { E404Component } from './components/e404/e404.component';



const appRoutes:Routes = [
  
]


@NgModule({
  declarations: [
    AppComponent,
   
    AcercaDeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EstudiosComponent,
    ProyectosComponent,
    HistorialComponent,
    SkillsComponent,
    HomeComponent,
   
    NewacercaComponent,
    EditacercaComponent,
    NewestudiosComponent,
    EditestudiosComponent,
    NewhistorialComponent,
    EdithistorialComponent,
    NewskillsComponent,
    EditskillsComponent,
    NewproyectoComponent,
    EditproyectosComponent,

    E404Component,
 
      
  ],


  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
