import { FormControl } from '@angular/forms';

export function ValidateEmail(control: FormControl) {
  const patterm = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  if (patterm.test(control.value)) {
    return null;
  } else {
    return {
      emailInvalid: true
    };
  }
}

export function ValidateCode(control: FormControl) {
  const patterm = new RegExp('(AT)([0-9]{4})$');
  if (patterm.test(control.value)) {
    return null;
  } else {
    return {
      codeInvalid: true
    };
  }
}
