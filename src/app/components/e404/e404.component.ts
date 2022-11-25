import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.css']
})
export class E404Component implements OnInit {

  te404:string=' Si llegaste acá , significa que metiste la pata !!!';

  constructor() { }

  ngOnInit(): void {
  }

}
