import { Restaurant } from './../model/restaurant.model';
import { RestaurantService } from './../services/restaurant.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-allrestaurants',
  templateUrl: './allrestaurants.component.html',
  styleUrls: ['./allrestaurants.component.css']
})
export class AllrestaurantsComponent implements OnInit {

  restaurant: Restaurant [] = []
  constructor(private restaurantService: RestaurantService, private router: Router) { }


  private resSub: Subscription;

  onDelete(resId: string) {
    this.restaurantService.deleteRest(resId);
    this.allRestaurantList();
    console.log("deleted Resturant");
  }

  onEdit(resid: string) {
    
  }

  allRestaurantList(){
    this.restaurantService.getRestaurants();
    this.resSub = this.restaurantService.getResUpdateListener()
      .subscribe((res: Restaurant[])=> {
        this.restaurant = res;
        console.log(res);
      })
  }
  onResDetails(resid: number){
    this.restaurantService.getOneRestaurant(resid);
      this.router.navigate(['/restaurant']);

  }

  ngOnInit(): void {
    this.allRestaurantList();
  }
  
}
