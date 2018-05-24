import { Component} from '@angular/core';
import { FormGroup, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { ValidateCode, ValidateEmail } from '../validators/allvalidator';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-infor',
  templateUrl: './forminfo.component.html',
  styleUrls: ['./forminfo.component.css']
})
export class FormInforComponent {
  FormModel: any;
  CertificateDiv: any;

  constructor(private fb: FormBuilder) {
    this.FormModel = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      team: ['', Validators.required],
      email: ['', [Validators.required, ValidateEmail]],
      code: ['', [Validators.required, ValidateCode]],
      skill: ['', Validators.required],
      citizen: ['', Validators.required],
      certificate: [''],
    })
  }

  showCertificate(event: string) {
    this.CertificateDiv = (event === 'VN' ? true : false);
    if (this.CertificateDiv) {
      this.FormModel.controls.certificate.setValidators([Validators.required]);
      this.FormModel.controls.certificate.updateValueAndValidity();
      document.getElementById('form-certificate').style.display = "block";
    } else {
      this.FormModel.controls.certificate.clearValidators()
      this.FormModel.controls.certificate.updateValueAndValidity();
      document.getElementById('form-certificate').style.display = "none";
    }
  }

  onSubmit() {
    if(this.FormModel) {
      if(this.FormModel.valid) {
        alert('Login successfully');
      }
    }
  }

  get name() {
    return this.FormModel.get('name');
  }
  get gender() {
    return this.FormModel.get('gender');
  }
  get team() {
    return this.FormModel.get('team');
  }
  get email() {
    return this.FormModel.get('email');
  }
  get code() {
    return this.FormModel.get('code');
  }
  get skill() {
    return this.FormModel.get('skill');
  }
  get citizen() {
    return this.FormModel.get('citizen');
  }
  get certificate() {
    return this.FormModel.get('certificate');
  }
}
