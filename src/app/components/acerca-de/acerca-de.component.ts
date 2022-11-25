
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/service/portfolio.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  title:string='   Me presento :  ' ;

  texto :string='';

dato= new FormControl('');

  constructor(private datosPortfolio:PortfolioService) { 
    
  }
  
ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
}



}

