import { Component, Inject } from '@angular/core';
import { FormGroup, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { ValidateCode, ValidateEmail } from '../validators/regexvalidator';

@Component({
  selector: 'app-form-infor',
  templateUrl: './forminfo.component.html',
  styleUrls: ['./forminfo.component.css']
})
export class FormInforComponent  {
  FormModel: any;
  CertificateDiv: any;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.FormModel = fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      team: ['', Validators.required],
      email: ['', [Validators.required, ValidateCode]],
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
  get certificate() {
    return this.FormModel.get('certificate');
  }
}
