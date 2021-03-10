import { Route } from '@angular/compiler/src/core';

import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
    registerForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  newUser(){
    if(!this.registerForm.valid){
      console.log('not valid');
      return
    } else {
      this.userService.register(JSON.stringify(this.registerForm.value))
        .subscribe(data => {
          console.log('data send successfully'), 
          this.router.navigate(['/login']);
        });
      console.log(JSON.stringify(this.registerForm.value));
    }
  }


  constructor(private userService: UserService, private router: Router) { }
  
    ngOnInit(): void {
  }
}
