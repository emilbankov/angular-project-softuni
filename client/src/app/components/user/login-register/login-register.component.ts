import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { loginRegisterToggle } from 'src/assets/scripts/login-register';
import { emailValidator } from '../../utils/email-validator';
import { matchPasswordsValidator } from '../../utils/match-passwords';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements AfterViewInit {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    })
  })

  constructor(private renderer: Renderer2, private fb: FormBuilder) {}

  register() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);

  }

  ngAfterViewInit(): void {
    loginRegisterToggle(this.renderer);
  }

  get email() { return this.form.get('email'); }
  get isEmailRequired() { return this.form.get('email')?.errors?.['required']; }
  get isEmailValid() { return this.form.get('email')?.errors?.['emailValidator']; }
  get password() { return this.form.get('passGroup')?.get('password'); }
  get isPasswordRequired() { return this.form.get('passGroup')?.get('password')?.errors?.['required']; }
  get rePassword() { return this.form.get('passGroup')?.get('rePassword'); }
  get isrePasswordRequired() { return this.form.get('passGroup')?.get('password')?.errors?.['required']; }
  get areMatching() { return this.form.get('passGroup')?.errors?.['matchPasswordsValidator']; }
}
