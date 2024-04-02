import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { loginRegisterToggle } from 'src/assets/scripts/login-register';
import { matchPasswordsValidator } from '../../utils/match-passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements AfterViewInit {
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

  constructor(private renderer: Renderer2, private userService: UserService, private fb: FormBuilder, private router: Router) { }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, passGroup: { password, rePassword } = {} } = this.registerForm.value;
    console.log(email, password);

  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    if (email && password) {
      console.log(email);
      console.log(password);

      this.userService.login(email, password).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
    // console.log(this.loginForm.value.email);
    // console.log(email);
    // console.log(password);

    // this.userService.login(email, password)
  }

  ngAfterViewInit(): void {
    loginRegisterToggle(this.renderer);
  }
}
