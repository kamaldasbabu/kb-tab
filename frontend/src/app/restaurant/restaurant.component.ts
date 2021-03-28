import { Subscription } from 'rxjs';
import { Restaurant } from './../model/restaurant.model';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(  
    private restaurantService: RestaurantService,
    private activerouter: ActivatedRoute,
    private location: Location) { }
  // resDtls: Restaurant[] = [];
  rd: [];
  name: [];
  id: any;
  resDtls:any;
  rs: Subscription = new Subscription();
  goBack(){
    this.location.back();
  }

  getOneRes(): void{
    const resid=+this.activerouter.snapshot.paramMap.get('resid');
    this.restaurantService.getOneRestaurant(resid)
      .subscribe(data=> {
        this.resDtls= data ;
        console.log(this.resDtls);
        this.name = this.resDtls[0].name;
        this.id = this.resDtls[0].resid;
        console.log(this.name, this.id);
        console.log(this.rd);
        console.log(this.resDtls[0].name);
        
      })
  }
  ngOnInit(): void {
   this.getOneRes();
      
  }

}
