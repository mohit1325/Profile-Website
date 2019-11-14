import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  technologies:Array<String>=[];
  progressValues:Array<String>=[];
  imageValues:Array<String>=[];
  constructor() { }

  ngOnInit() {
    this.technologies=['Spring','Hibernate','Java','Javascript','Html','CSS','Bootstrap','MySql','Oracle 11g'];
    this.progressValues = ['75%', '75%', '80%', '85%', '90%', '90%', '90%', '70%', '55%'];
    this.imageValues=['spring.png','hibernate.png','java.jpg','javascript.png','html.png','css.png','bootstrap.jpg','mysql.png','oracle.png']
  }
  goTo(value:string){
    if(value==='inspirobot'){
      location.href='https://github.com/nagabhushanamn/nex-wissen';
    }
    else if(value==='BIRT'){
      location.href ="https://github.com/mohit1325"
    }
  }


}
