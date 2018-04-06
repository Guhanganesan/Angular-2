import { Component, OnInit } from '@angular/core';
import{HttpClientModule, HttpClient}from'@angular/common/http'; 
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

selectedFile=null;
onFileSelected(event)
{
  
  this.selectedFile=event.target.files[0];

}

//https://www.youtube.com/watch?v=LVrF-aQ6NxQ ( FireBase)

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
