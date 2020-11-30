import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  isCollapsed = true;
  constructor() { }

  download(params) {
    var element = document.createElement('a');
    element.href = "assets/resume.pdf";
    element.setAttribute('download', 'resume.pdf');
    document.body.appendChild(element);
    //onClick property 
    element.click();
    document.body.removeChild(element);
  }
}
