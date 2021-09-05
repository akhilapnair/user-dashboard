import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private route: Router
  ) {}
  loginForm: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.submitted = true;
    let userList = JSON.parse(localStorage.getItem('userList'));
    this.loginForm.valid
      ? userList !== undefined || userList !== null
        ? this.checkValidUser(userList)
        : this.triggerValidation()
      : '';
  }
  get f() {
    return this.loginForm.controls;
  }
  checkValidUser(users) {
    let formValues = this.loginForm.getRawValue();
    users.map((e) => {
      if (e.email == formValues.username && e.password == formValues.password) {
        this.route.navigateByUrl('/home');
      } else {
      }
    });
  }
  triggerValidation() {}
}
