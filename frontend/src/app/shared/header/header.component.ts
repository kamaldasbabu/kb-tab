import { CommonService } from './../../services/common.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = ''
  isAuth: boolean = false; 

  constructor(
    private userService: UserService,
    private router: Router,
    
    ) { }

  
  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    // this.commonService.setValue(true);
  }


  
  ngOnInit() {
    this.userService.getUserName().subscribe(
      data=> {
        this.name = data;
      }
    )
    this.userService.isAuthValid().subscribe(data=> {
      this.isAuth = data;
    })
      
  }
}
