import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  email: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit (myForm: NgForm) {
    alert(`ban da dang nhap thanh cong voi email: ${this.email}`);
  }

}
