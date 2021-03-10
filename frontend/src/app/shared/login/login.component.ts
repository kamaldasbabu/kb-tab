import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService, 
     private router: Router) { }
    hide: boolean = true;
    
    loginForm : FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  
  login(){
    if(!this.loginForm.valid){
      console.log("invalid");
      return ;
    } else {
      this.userService.login(JSON.stringify(this.loginForm.value));
      this.router.navigate(['/dashboard']);
      console.log(JSON.stringify(this.loginForm.value));
    }
  }


  ngOnInit(): void {
    
  }

}
