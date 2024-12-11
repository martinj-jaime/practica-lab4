import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  login: LoginForm = new LoginForm()
  loginForm!: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.login.email = 'tduck0@fema.gov'
    this.login.password = '7ZQX5Vno'
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.login.email, [Validators.required]),
      password: new FormControl(this.login.password, [Validators.required])
    })
  }

  onSuccess() {
    console.log("onSuccess en screen")
    // alert("Login exitoso")
    // this.router.navigate(['add'])
  }

  onError(error: Error) {
    alert(error.message)
  }

  onSubmit() {
    const payload = {
      ...this.loginForm.value
    }
    this.authService.apiLoginUser(payload).then((response) => {
      if(response instanceof  Error) {
        this.onError(response)
      } else {
        this.onSuccess()
      }
    }).catch(err => {
      this.onError(err)
    })
  }

}
