import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(1), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    subject: new FormControl('', [Validators.maxLength(200), Validators.minLength(10), Validators.required]),
    message: new FormControl('', [Validators.minLength(10), Validators.required])
  });
  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this._http.post("https://formspree.io/xwkkawbo", this.contactForm.value).subscribe(() => {
      window.alert('Message sent Successfully');
    }, () => {
      window.alert('Please retry after sometime');
    });
  }
}
