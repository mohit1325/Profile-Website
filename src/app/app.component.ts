import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProfileWebsite';
  loaded:boolean;


  ngOnInit(){
    this.loaded=false;
    setTimeout(()=>{
      this.loaded=true;
    },3000);
  }
}
