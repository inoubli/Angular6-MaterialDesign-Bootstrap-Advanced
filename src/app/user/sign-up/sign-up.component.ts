import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService) { }
   ngOnInit() {
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;


 

  onSubmit(form: NgForm) {
    console.log("hello")
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);

      },
      err => {
        if (err) {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          //if it's Symfony API Asserts validations errors
          if (err.error.violations) {
            console.log(err.error.violations);
            let asserts = err.error.violations.reverse();
            for (let assert of asserts) {
              this.serverErrorMessages = assert.propertyPath+' : '+assert.message;
            }
          }
          else{
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
            console.log("Something went wrong. ",err.error.message);
          }  
        }
     
          
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      username: '',
      name: '',
      email: '', 
      password: '',
      retypedPassword: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
