import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string ='portfolio web' ;
  edicion:string='';
  
  constructor(private router:Router) { }
  login(){
    this.router.navigate(['/login'])
  }
  
  ngOnInit(): void {
  }


}
