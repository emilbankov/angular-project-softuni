import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { loginRegisterToggle } from 'src/assets/scripts/login-register';
import { matchPasswordsValidator } from '../../utils/match-passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements AfterViewInit {
  registerErrorMessage: string = '';
  loginErrorMessage: string = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+@(gmail|abv|mail)\\.(bg|com)')]],
    password: ['', [Validators.required]]
  })

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+@(gmail|abv|mail)\\.(bg|com)')]],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    })
  })

  constructor(private renderer: Renderer2, private userService: UserService, private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.userService.login(email!, password!).subscribe({
      next: (result) => {
        localStorage.setItem("accessToken", result.accessToken)
        this.router.navigate(['/']);
        console.log(result);

      },
      error: (error) => {
        this.loginErrorMessage = error.error.message;
      },
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const { email, passGroup: { password } = {} } = this.registerForm.value;
    this.userService.register(email!, password!).subscribe({
      next: (result) => {
        localStorage.setItem("accessToken", result.accessToken)
        this.router.navigate(['/']);
        console.log(result);

      },
      error: (error) => {
        this.registerErrorMessage = error.error.message;
      },
    });
  }

  ngAfterViewInit(): void {
    loginRegisterToggle(this.renderer);
  }
}
