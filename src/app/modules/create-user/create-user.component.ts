import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  date = new Date();
  users = [];
  submitted = false;
  detailProduct: any;
  currentState$: any;
  editData: any;
  btnValue = 'Register';
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private route: Router,
    private aRoute: ActivatedRoute
  ) {
    this.getNavigationData();
  }

  ngOnInit(): void {
    this.createForm();
    this.users = this.service.initialLoad();
    this.patchEditItem();
  }
  getNavigationData() {
    this.route.getCurrentNavigation().extras.state
      ? (this.editData = this.route.getCurrentNavigation().extras.state.details)
      : null;
  }

  patchEditItem() {
    if (this.editData) {
      this.createUserForm.patchValue({
        name: this.editData ? this.editData.name : null,
        dob: new Date(this.editData.dob),
        date: new Date(this.editData.date),
        password: this.editData.password,
        phone: this.editData.phone,
        gender: this.editData.gender,
        role: this.editData.role,
        email:this.editData.email,
        address:this.editData.address
      });
      this.btnValue = 'Update';
    }
  }

  // form creation
  createForm() {
    this.createUserForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(500)]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f() {
    return this.createUserForm.controls;
  }

  //saving the enterered values in form
  registerUser(formValue) {
    this.submitted = true;
    if (this.createUserForm.valid) {
      if(this.btnValue=='Update'){
        this.users.map((e,i)=>{
          if(e.name == formValue.name){
           this.users[i]=formValue;
          }
        })
        this.service.addUser(formValue,'Update');

      }else{
      this.users.push(formValue);
      this.service.addUser(formValue);
      }
      this.route.navigateByUrl('/login');

    }
  }
}
