import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form-infor',
  templateUrl: './forminfo.component.html',
  styleUrls: ['./forminfo.component.css']
})

export class FormInforComponent  {
  FormModel: any;
  submittedForm: any;
  CertificateDiv: boolean;

  constructor() {
    this.FormModel = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern("^(AT)[0-9]{4}$")
      ]),
      skill: new FormControl('', Validators.required),
      citizen: new FormControl('', Validators.required),
      certificate: new FormControl('', Validators.required),
    })
  }
}
