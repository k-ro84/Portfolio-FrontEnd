import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HistorialLaboralComponent } from './components/historial-laboral/historial-laboral.component';
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './components/home/home.component';
import { PortfolioService } from './service/portfolio.service';
import {HttpClientModule} from '@angular/common/http';
import { E404Component } from './components/e404/e404.component';

const appRoutes:Routes = [
  
 
]


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EstudiosComponent,
    ProyectosComponent,
    HistorialLaboralComponent,
    HysSkillsComponent,
    HomeComponent,
    E404Component,
   
  
    
  ],


  imports: [
    BrowserModule,
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
