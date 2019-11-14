import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  toggle() {
    this.collapse = !this.collapse;
  }
  resume(){
    console.log('Hello');
    // let link=document.createElement('a');
    // link.setAttribute('type','hidden');
    // link.href="home/assets/bootstrap.jpg";
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
    this.router.navigate(['']);  
  }

}
