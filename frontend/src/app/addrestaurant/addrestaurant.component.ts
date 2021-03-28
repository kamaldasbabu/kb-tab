import { RestaurantService } from './../services/restaurant.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  addResForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    resid: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    desc: new FormControl(null)
  })
  newRestaurant(){
    if(!this.addResForm.valid){
      console.log('not valid');
      return
    } else {
      this.restaurantService.register(JSON.stringify(this.addResForm.value))
        .subscribe(data => {
          console.log('data send successfully')
        });
      console.log(JSON.stringify(this.addResForm.value));
      this.router.navigate(['/allrestaurant']);
    }
  }
  // editResForm:FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   password: new FormControl(null, [Validators.required]),
  //   desc: new FormControl(null)
  // })
  // editRestaurant(){

  // }

  ngOnInit(): void {
  }

}
