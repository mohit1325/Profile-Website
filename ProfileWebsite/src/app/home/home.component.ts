import { Component, OnInit } from '@angular/core';
// import { ProfessionService } from '../profession.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profession=['Developer!','{Coder}','Problem Solver;','Programmer#'];
  display: string = "";
  ngOnInit() {
    this.typingCallback(this,0);
}
  typingCallback(that,i) {
    let total_length = that.profession[i].length;
    let current_length = that.display.length;
    if (current_length < total_length) {
      that.display += that.profession[i][current_length];
    } else {
      that.display = "";
      i=(i+1)%3;
    }
    setTimeout(that.typingCallback, 200, that,i);
  }

}
