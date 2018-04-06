import { Component, OnInit } from '@angular/core';
import { UploadComponent } from './upload/upload.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
         title="Angular 2";
         x1:string="Guhan";
         x2:string="Anbu";
         x3:string="Raja";
 /*
 The constructor method is not actually an Angular 2 method. 
 It is a predefined method in a TypeScript class which is called when the class is instantiated.
 The constructor's purpose is to help prepare the creation of a new instance of the class. 
 In the context of Angular 2 it can be used to properly initialize fields */

 

        constructor()
        {
          console.log("anbu");
        }
         ngOnInit()
         {
           console.log("Guhan"); 
         }
}