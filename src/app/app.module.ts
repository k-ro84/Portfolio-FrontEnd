import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    HysSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
