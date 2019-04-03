import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from '../../shared/user.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  constructor(private userService: UserService,private router : Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  form: FormGroup;
  submitted = false;
  
  model ={
    username:'',
    password:''
  };
  //emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/pages/dashboard');

    this.form = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }




  onSubmit(){
    this.submitted = true;
    //console.log(this.form);
    if (this.form.invalid) {
      console.log("form invalid !");
      return;
    }else{
      this.userService.login(this.form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('/pages/dashboard');
          this.toastr.success('Vous étes connecté!', 'Connexion');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          console.log(this.serverErrorMessages);
        }
      );
    }
  }

}
