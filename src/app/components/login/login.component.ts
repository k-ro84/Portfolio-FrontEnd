import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = '';
  password: string = '';
  

  cambiaCorreo(string:any) {
    // Podes consultar el valor por consola
    console.log(string);
    this.correo = string;
  }

  cambiaPassword(string:any) {
    // Podes consultar el valor por consola
    console.log(string);
    this.password = string;
  }

  onClick() {
    alert('Hiciste click!!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
