import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  name:string ="Guhan";
  salary:number=20000;
  age:number = 27;

  constructor() { }
  ngOnInit() {
  }

}
